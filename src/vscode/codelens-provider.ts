import * as vscode from 'vscode';
import { CancellationToken, CodeLens, ProviderResult } from 'vscode';
import { Recipe } from "../types";
import { parseRecipe } from '../just/parse-recipe-line';
import { CharStream, CommonToken, CommonTokenStream, ParseTreeWalker } from 'antlr4';
/**
 * CodelensProvider
 */
export class CodelensProvider implements vscode.CodeLensProvider {

    private codeLenses: CodeLens[] = [];
    private regex: RegExp;
    private _onDidChangeCodeLenses: vscode.EventEmitter<void> = new vscode.EventEmitter<void>();
    public readonly onDidChangeCodeLenses: vscode.Event<void> = this._onDidChangeCodeLenses.event;

    constructor() {
        this.regex = /@?([\w\d_]+)\s?.*:+.*/g;

        vscode.workspace.onDidChangeConfiguration((_) => {
            this._onDidChangeCodeLenses.fire();
        });
    }

    public provideCodeLenses(document: vscode.TextDocument, token: CancellationToken): ProviderResult<CodeLens[]> {

        if (vscode.workspace.getConfiguration("just").get("enableCodeLens", true)) {
            this.codeLenses = [];
            const regex = new RegExp(this.regex);
            const text = document.getText();



            let matches: RegExpExecArray | null;
            while ((matches = regex.exec(text)) !== null) {
                if (matches[1] === 'set') {
                    continue;
                }
                const line = document.lineAt(document.positionAt(matches.index).line);
                if (!line.text.startsWith(matches[0])) {
                    continue;
                }

                const indexOf = line.text.indexOf(matches[0]);
                if (matches[0].lastIndexOf(":=") >= matches[0].lastIndexOf(":")) {
                    continue;
                }
                const position = new vscode.Position(line.lineNumber, indexOf);
                const range = document.getWordRangeAtPosition(position, new RegExp(this.regex));
                if (range) {
                    const recipe = parseRecipe(matches[0]);
                    recipe.justfile = document.fileName;
                    this.codeLenses.push(new CodeLens(range, {
                        title: "Run Recipe",
                        tooltip: "Run Recipe with default default parameters",
                        command: "just.codelensAction",
                        arguments: [recipe]
                    }));
                }
            }


            return this.codeLenses;
        }
        return [];
    }

    public resolveCodeLens(codeLens: CodeLens, token: vscode.CancellationToken): ProviderResult<CodeLens> {
        if (vscode.workspace.getConfiguration("just").get("enableCodeLens", true)) {
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
