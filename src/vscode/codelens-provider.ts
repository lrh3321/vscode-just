import { CancellationToken, CodeLens, ProviderResult, Disposable, workspace, CodeLensProvider, EventEmitter, Event, TextDocument, Position } from 'vscode';
import { parseRecipe } from '../just/parse-recipe-line';

/**
 * CodelensProvider
 */
export class JustCodeLensProvider implements CodeLensProvider, Disposable {
    private regex: RegExp;
    private disposable: Disposable | undefined;
    private _onDidChangeCodeLenses: EventEmitter<void>;
    public readonly onDidChangeCodeLenses: Event<void>;

    constructor() {
        this.regex = /^@?([a-zA-Z_][a-zA-Z\d_-]*)\s*(\s+[+|*]?[a-zA-Z_][a-zA-Z\d_-]*(=.*)?)*\s*:(\s*[a-zA-Z_][a-zA-Z\d_-]*)*$/g;

        this._onDidChangeCodeLenses = new EventEmitter<void>();
        this.onDidChangeCodeLenses = this._onDidChangeCodeLenses.event;
        this.disposable = workspace.onDidChangeConfiguration((_) => {
            this._onDidChangeCodeLenses.fire();
        });
    }

    dispose() {
        this._onDidChangeCodeLenses.dispose();

        if (this.disposable) {
            this.disposable.dispose();
            this.disposable = undefined;
        }
    }

    public provideCodeLenses(document: TextDocument, token: CancellationToken): ProviderResult<CodeLens[]> {
        if (workspace.getConfiguration("just").get("enableCodeLens", true)) {
            const codeLenses: CodeLens[] = [];
            const regex = new RegExp(this.regex,);

            let matches: RegExpExecArray | null;
            for (let lineNo = 0; lineNo < document.lineCount; lineNo++) {
                const line = document.lineAt(lineNo);
                while ((matches = regex.exec(line.text)) !== null) {
                    const position = new Position(lineNo, 0);
                    const range = document.getWordRangeAtPosition(position, new RegExp(this.regex));
                    if (range) {
                        const recipe = parseRecipe(matches[0]);
                        recipe.justfile = document.fileName;
                        codeLenses.push(
                            new CodeLens(range, {
                                title: "Run Recipe",
                                tooltip: "Run Recipe with default default parameters",
                                command: "just.codelensAction",
                                arguments: [recipe]
                            }),
                        );
                    }
                }
            }
            return codeLenses;
        }
        return [];
    }

    public resolveCodeLens(codeLens: CodeLens, token: CancellationToken): ProviderResult<CodeLens> {
        if (workspace.getConfiguration("just").get("enableCodeLens", true)) {
            if (!codeLens.command) {
                codeLens.command = {
                    title: "Run Recipe",
                    tooltip: "Run Recipe with default default parameters",
                    command: "just.codelensAction",
                    arguments: ["Argument 1", false]
                };
            }
            return codeLens;
        }
        return null;
    }
}
