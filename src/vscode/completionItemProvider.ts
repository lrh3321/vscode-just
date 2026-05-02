import {
    CancellationToken,
    CompletionContext,
    CompletionItem,
    CompletionItemKind,
    CompletionItemProvider,
    CompletionList,
    CompletionTriggerKind,
    Position,
    ProviderResult,
    SnippetString,
    TextDocument,
} from "vscode";

import { attributes, booleanSettingNames, booleanSettings, constants, functions, stringArraySettings, stringSettings } from "../completion";

export class JustCompletionItemProvider implements CompletionItemProvider {
    provideCompletionItems(document: TextDocument, position: Position, token: CancellationToken, context: CompletionContext): ProviderResult<CompletionList<CompletionItem> | CompletionItem[]> {
        switch (context.triggerKind) {
            case CompletionTriggerKind.Invoke:
                return this._provideCompletionItems(document, position);
            case CompletionTriggerKind.TriggerForIncompleteCompletions:
                if (position.character === 0) {
                    return JustCompletionItemProvider.keywords();
                }
                return this._provideCompletionItems(document, position);
            case CompletionTriggerKind.TriggerCharacter:
                switch (context.triggerCharacter) {
                    case "[":
                        if (position.character == 1) {
                            return JustCompletionItemProvider.attributes();
                        }
                        break;
                    case "+":
                        return JustCompletionItemProvider.values();
                    default:
                        break;
                }
                break;

            default:
                break;
        }
        return [];
    }

    // resolveCompletionItem?(item: CompletionItem, token: CancellationToken): ProviderResult<CompletionItem> {
    //     throw new Error("Method not implemented.");
    // }

    private _provideCompletionItems(document: TextDocument, position: Position): ProviderResult<CompletionList<CompletionItem> | CompletionItem[]> {
        const line = document.lineAt(position.line);

        if (line.text.startsWith("set ")) {
            const result = new CompletionList<CompletionItem>(this._provideSettingCompletionItems(document, position),);

            return result;
        }

        // if (line.text.startsWith("alias ")) {
        //     if (line.text.includes(":=")) {

        //     }
        // }

        return JustCompletionItemProvider.values();
    }


    private _provideSettingCompletionItems(document: TextDocument, position: Position): CompletionItem[] {
        const line = document.lineAt(position.line);

        if (line.text.startsWith("set ")) {
            const result: CompletionItem[] = [];

            if (line.text.includes(":=")) {
                const [_, _0, setting,] = line.text.split(/( |:)/, 3);

                if (booleanSettingNames.includes(setting)) {

                    result.push(
                        new CompletionItem("false", CompletionItemKind.Value),
                        new CompletionItem("true", CompletionItemKind.Value),
                    );
                }

                return result;
            }

            booleanSettings.forEach((setting) => {
                const item = new CompletionItem(setting.name, CompletionItemKind.Constant);
                item.detail = setting.detail;
                item.insertText = new SnippetString(`${setting.name} := \${1|false,true|}`);
                result.push(item);
            });

            stringSettings.forEach((setting) => {
                const item = new CompletionItem(setting.name, CompletionItemKind.Constant);
                item.detail = setting.detail;
                item.insertText = new SnippetString(`${setting.name} := '\${1}'`);
                result.push(item);
            });

            stringArraySettings.forEach((setting) => {
                const item = new CompletionItem(setting.name, CompletionItemKind.Constant);
                item.detail = setting.detail;
                item.insertText = new SnippetString(`${setting.name} := ['\${1}']`);
                result.push(item);
            });

            return result;
        }
        return [];
    }

    static triggerCharacters(): string[] {
        return [
            "(",
            "[",
            "{",
            ",",
            "+",
        ];
    }

    static _keywords: CompletionItem[];
    static _attributes: CompletionItem[];
    static _constants: CompletionItem[];
    static _functions: CompletionItem[];

    static keywords(): CompletionItem[] {
        if (!this._keywords) {
            this._keywords = keywords.map((keyword) => {
                const item = new CompletionItem(keyword, CompletionItemKind.Keyword);
                // item.insertText = keyword;
                // item.documentation = "";
                return item;
            });
        }

        return this._keywords;
    }

    static attributes(): CompletionItem[] {
        if (!this._attributes) {
            this._attributes = attributes.map((attribute) => {
                const item = new CompletionItem(attribute.name, CompletionItemKind.TypeParameter);
                item.detail = attribute.detail;
                if (attribute.insertText) {
                    item.insertText = new SnippetString(attribute.insertText);
                }
                return item;
            });
        }

        return this._attributes;
    }

    static constants(): CompletionItem[] {
        if (!this._constants) {
            this._constants = constants.map((constant) => {
                const item = new CompletionItem(constant.name, CompletionItemKind.Constant);
                item.detail = constant.value;
                if (constant.valueOnWindows) {
                    item.detail = `\`${constant.value}\`, Value on Windows: \`${constant.valueOnWindows}\``;
                }

                item.insertText = new SnippetString(constant.name);
                return item;
            });
        }

        return this._constants;
    }

    static functions(): CompletionItem[] {
        if (!this._functions) {
            this._functions = functions.map((func) => {
                const item = new CompletionItem(func.name, CompletionItemKind.Function);
                item.detail = func.detail;
                item.documentation = func.documentation;
                if (!func.minArgc) {
                    item.insertText = func.name + "()";
                } else {
                    let s = func.name + "($1";
                    for (let i = 2; i <= func.minArgc; i++) {
                        s += ", $" + i.toString();
                    }
                    s += ")";
                    item.insertText = new SnippetString(s);
                }
                return item;
            });
        }

        return this._functions;
    }

    static values(): CompletionItem[] {
        return [
            ...this.constants(),
            ...this.functions(),
        ];
    }
}

const keywords = [
    'set',
    'alias',
    'import',
    'export',
    'mod',
];
