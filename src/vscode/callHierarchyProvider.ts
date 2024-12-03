import {
    CallHierarchyIncomingCall,
    CallHierarchyItem,
    CallHierarchyOutgoingCall,
    CallHierarchyProvider,
    CancellationToken,
    Position,
    ProviderResult,
    Range,
    SymbolKind,
    TextDocument,
    Uri,
} from "vscode";
import { getRecipeName, parseJustfile } from "../grammar";
import { rangeFromRuleContext } from "./misc";

export class JustCallHierarchyProvider implements CallHierarchyProvider {

    tokenGraphMaps: Map<Uri, TokenGraph> = new Map<Uri, TokenGraph>();

    constructor() { }

    prepareCallHierarchy(document: TextDocument, position: Position, token: CancellationToken): ProviderResult<CallHierarchyItem | CallHierarchyItem[]> {
        let graph = this.tokenGraphMaps.get(document.uri);
        if (!graph) {
            graph = new TokenGraph();
            this.tokenGraphMaps.set(document.uri, graph);
        }

        graph.prepare(document);

        return graph.callHierarchyAtPosition(position);
    }

    provideCallHierarchyIncomingCalls(item: CallHierarchyItem, token: CancellationToken): ProviderResult<CallHierarchyIncomingCall[]> {
        const graph = this.tokenGraphMaps.get(item.uri);
        if (graph) {
            return graph.incomings(item);
        }
        return [];
    }

    provideCallHierarchyOutgoingCalls(item: CallHierarchyItem, token: CancellationToken): ProviderResult<CallHierarchyOutgoingCall[]> {
        const graph = this.tokenGraphMaps.get(item.uri);
        if (graph) {
            return graph.outgoings(item);
        }
        return [];
    }
}

interface TokenSymbol {
    name: string
    parent?: string
    line: number
    column: number
}

class TokenGraph {
    version: number = 0;
    hierarchies: Map<string, CallHierarchyItem> = new Map<string, CallHierarchyItem>();
    symbols: Map<number, TokenSymbol[]> = new Map<number, TokenSymbol[]>();
    aliasMap: Map<string, CallHierarchyItem | string> = new Map<string, CallHierarchyItem | string>();
    incomingVector: Map<string, TokenSymbol[]> = new Map<string, TokenSymbol[]>();
    outgoingVector: Map<string, TokenSymbol[]> = new Map<string, TokenSymbol[]>();

    prepare(doc: TextDocument) {
        if (doc.version === this.version) {
            return;
        }

        this._reset();
        const ctx = parseJustfile(doc.getText());

        ctx.item_list().forEach((item) => {
            const alias = item.aliasStatement();
            if (alias) {
                const recipeName = alias.recipeName().NAME().getText();
                const originRecipeName = alias.originRecipeName().NAME().getText();
                this.aliasMap[recipeName] = originRecipeName;
                return;
            }

            const recipe = item.recipe();
            if (recipe) {
                const recipeName = getRecipeName(recipe);

                const range = rangeFromRuleContext(recipe.recipeName());
                const chi = new CallHierarchyItem(
                    SymbolKind.Method,
                    recipeName,
                    "",
                    doc.uri,
                    range,
                    range,
                );
                const docComments = recipe.itemDocumentation()?.COMMENT_list().map(it => it.getText());
                if (docComments) {
                    chi.detail = docComments.join("\n");
                }

                this.hierarchies.set(recipeName, chi);

                const symbol = {
                    name: recipeName,
                    line: range.start.line,
                    column: range.start.character,
                };
                this._addSymbol(symbol, range.start.line);

                recipe.dependency_list().forEach(
                    (dependency) => {
                        const dependencyName = getRecipeName(dependency);
                        const node = dependency.recipeName().NAME();
                        const depSymbol = {
                            name: dependencyName,
                            parent: recipeName,
                            line: node.symbol.line - 1,
                            column: node.symbol.column,
                        };
                        this._addSymbol(depSymbol, node.symbol.line - 1);

                        this._addEdge(symbol, depSymbol);
                        // this._addEdge(depSymbol, symbol);
                    });

            }
        });
        this.version = doc.version;
    }

    callHierarchyAtPosition(position: Position): CallHierarchyItem | undefined {
        const symbol = this._symbolAtPosition(position);
        if (!symbol) {
            return undefined;
        }

        return this._symbolRealItem(symbol.name);
    }

    private _symbolRealItem(name: string): CallHierarchyItem | undefined {
        const alias = this.aliasMap.get(name);
        if (alias) {
            if (typeof alias === "string") {
                const it = this._symbolRealItem(alias);

                if (it) {
                    this.aliasMap.set(name, it);
                }
                return it;
            }
            return alias;
        }
        return this.hierarchies.get(name);
    }

    private _reset() {
        this.hierarchies.clear();
        this.symbols.clear();
        this.aliasMap.clear();
        this.incomingVector.clear();
        this.outgoingVector.clear();
    }

    private _addSymbol(symbol: TokenSymbol, line: number) {
        if (this.symbols.has(line)) {
            this.symbols.get(line)?.push(symbol);
        } else {
            this.symbols.set(line, [symbol]);
        }
    }

    private _symbolAtPosition(position: Position): TokenSymbol | undefined {
        const symbols = this.symbols.get(position.line);
        if (!symbols) {
            return undefined;
        }

        const symbol = symbols.find((s) => {
            return s.column <= position.character && (s.column + s.name.length) > position.character;
        });

        return symbol;
    }

    private _addEdge(form: TokenSymbol, to: TokenSymbol) {
        if (this.incomingVector.has(form.name)) {
            this.incomingVector.get(form.name)?.push(to);
        } else {
            this.incomingVector.set(form.name, [to]);
        }

        if (this.outgoingVector.has(to.name)) {
            this.outgoingVector.get(to.name)?.push(form);
        } else {
            this.outgoingVector.set(to.name, [form]);
        }
    }

    incomings(item: CallHierarchyItem): CallHierarchyIncomingCall[] {
        const results = this.incomingVector.get(item.name);
        if (!results) {
            return [];
        }

        return results.flatMap((sym) => {
            const it = this._symbolRealItem(sym.name);
            if (!it) {
                return [];
            }
            return new CallHierarchyIncomingCall(it, [it.range, new Range(sym.line, sym.column, sym.line, sym.column + sym.name.length)]);
        });
    }

    outgoings(item: CallHierarchyItem): CallHierarchyOutgoingCall[] {
        const results = this.outgoingVector.get(item.name);
        if (!results) {
            return [];
        }

        return results.flatMap((sym) => {
            const it = this._symbolRealItem(sym.name);
            if (!it) {
                return [];
            }
            return new CallHierarchyOutgoingCall(it, [new Range(sym.line, sym.column, sym.line, sym.column + sym.name.length)]);
        });
    }
}