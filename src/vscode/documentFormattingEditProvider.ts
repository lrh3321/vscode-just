import { CancellationToken, DocumentFormattingEditProvider, FormattingOptions, OutputChannel, ProviderResult, Range, TextDocument, TextEdit } from "vscode";
import { execJust } from "../just";
import { unlink, writeFile } from "fs/promises";
import path = require("path");

export class JustDocumentFormattingEditProvider implements DocumentFormattingEditProvider {

    constructor(private outputChannel: OutputChannel) {
    }

    provideDocumentFormattingEdits(document: TextDocument, options: FormattingOptions, token: CancellationToken): ProviderResult<TextEdit[]> {
        const swapFileName = path.join(path.dirname(document.fileName), "._" + path.basename(document.fileName) + ".swap");
        return this.dumpJustfile(document, swapFileName);
    }

    async dumpJustfile(document: TextDocument, swapFileName: string): Promise<TextEdit[]> {
        // try {
        //     document.save();
        //     const result = await execJust(['--justfile', document.fileName, '--fmt', '--check', '--unstable']);
        //     if (result.exitCode === 0) {
        //         // it is formatted correctly
        //         return [];
        //     }
        // } catch (err) {
        //     if (err instanceof JustExecError) {
        //         if (err.kind == 'unformatted') {
        //         }
        //     }
        //     this.outputChannel.appendLine("Failed to check file fmt: " + `, Error: ${err}`);
        // }
        try {
            await writeFile(swapFileName, document.getText(), { flag: 'w+' });
        } catch (err) {
            this.outputChannel.appendLine("Failed to write to file: " + swapFileName + `, Error: ${err}`);
            return [];
        }

        try {
            const result = await execJust(['--justfile', swapFileName, '--dump', '--dump-format', 'just']);
            if (result.exitCode === 0) {
                const wholeRange = new Range(
                    document.positionAt(0),
                    document.lineAt(document.lineCount - 1).range.end,
                );

                return [TextEdit.replace(wholeRange, result.stdout || '')];
            }
        } catch (err) {
            this.outputChannel.appendLine("Failed to format: " + document.fileName + `, Error: ${err}`);
        }

        await unlink(swapFileName);
        return [];
    }
}