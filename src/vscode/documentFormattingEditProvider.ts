import { CancellationToken, DocumentFormattingEditProvider, FormattingOptions, ProviderResult, Range, TextDocument, TextEdit } from "vscode";
import { execJust } from "../just";

export class JustDocumentFormattingEditProvider implements DocumentFormattingEditProvider {
    provideDocumentFormattingEdits(document: TextDocument, options: FormattingOptions, token: CancellationToken): ProviderResult<TextEdit[]> {

        return this.dumpJustfile(document);
    }

    async dumpJustfile(document: TextDocument): Promise<TextEdit[]> {
        const result = await execJust(['--justfile', document.fileName, '--dump', '--dump-format', 'just']);
        if (result.exitCode === 0) {
            const wholeRange = new Range(
                document.positionAt(0),
                document.lineAt(document.lineCount - 1).range.end,
            );

            return [TextEdit.replace(wholeRange, result.stdout || '')];
        }

        return [];
    }
}