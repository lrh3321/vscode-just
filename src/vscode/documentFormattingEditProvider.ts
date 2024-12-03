import { CancellationToken, DocumentFormattingEditProvider, FormattingOptions, OutputChannel, ProviderResult, Range, TextDocument, TextEdit } from "vscode";
import { execJust } from "../just";
import { unlink, writeFile } from "fs/promises";
import * as path from 'path';

export class JustDocumentFormattingEditProvider implements DocumentFormattingEditProvider {

    constructor(private outputChannel: OutputChannel) {
    }

    provideDocumentFormattingEdits(document: TextDocument, options: FormattingOptions, token: CancellationToken): ProviderResult<TextEdit[]> {
        return this._writeAndFormatSwapJustfile(document,);
    }

    private async _writeAndFormatSwapJustfile(document: TextDocument): Promise<TextEdit[]> {
        const swapFileName = path.join(path.dirname(document.fileName), "._" + path.basename(document.fileName) + ".swap");
        try {
            await writeFile(swapFileName, document.getText(), { flag: 'w+' });

            const result = await this.dumpJustfile(document, swapFileName);

            await unlink(swapFileName);
            if (result && result.length > 0) {
                const wholeRange = new Range(
                    document.positionAt(0),
                    document.lineAt(document.lineCount - 1).range.end,
                );

                return [TextEdit.replace(wholeRange, result)];

            }

        } catch (err) {
            this.outputChannel.appendLine("Failed to write to file: " + swapFileName + `, Error: ${err}`);
        }
        await unlink(swapFileName);
        return [];
    }

    async dumpJustfile(document: TextDocument, swapFileName: string): Promise<string> {
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
            const result = await execJust(['--justfile', swapFileName, '--dump', '--dump-format', 'just']);
            if (result.exitCode === 0) {
                return result.stdout || '';
            }
        } catch (err) {
            this.outputChannel.appendLine("Failed to format: " + document.fileName + `, Error: ${err}`);
        }

        return '';
    }
}