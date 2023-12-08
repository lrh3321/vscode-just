import { ExtensionContext, window, OutputChannel, commands, languages, Disposable, workspace, Task, tasks } from 'vscode';
import { executeRunCommand } from './vscode/execute-run-command';
import { CodelensProvider } from './vscode/codelens-provider';
import { Recipe } from './types';
import { executeRecipe } from './vscode/execute-recipe';
import { JustTaskProvider } from './vscode/justTask';
import { setJustExecutable } from './just';

let disposables: Disposable[] = [];

/**
 * The channel we'll be writing our output to.
 */
const OUTPUT_CHANNEL_NAME = 'just';

/**
 * The command key for running a just recipe.
 * 
 * This needs to match up in two places in our `package.json`.
 */
const RUN_RECIPE_COMMAND_KEY = 'just.run';

/**
 * Fires the first time our extension loads.
 *
 * @param context The vscode context.
 */
export function activate(context: ExtensionContext) {
  // the output channel we'll be writing to when we run tasks
  const outputChannel = window.createOutputChannel(OUTPUT_CHANNEL_NAME);

  const justExe = workspace.getConfiguration("just").get('justExecutable', 'just');
  setJustExecutable(justExe);

  const codelensProvider = new CodelensProvider();

  // register a command which will allow us to run a recipe
  context.subscriptions.push(

    languages.registerCodeLensProvider("just", codelensProvider),
    workspace.onDidChangeConfiguration((e) => {
      if (e.affectsConfiguration('just')) {
        const justExe = workspace.getConfiguration("just").get('justExecutable', 'just');
        setJustExecutable(justExe);
      }
    }),

    tasks.registerTaskProvider("just", new JustTaskProvider(workspace.workspaceFolders[0].uri.fsPath)),

    commands.registerCommand(RUN_RECIPE_COMMAND_KEY, async () => {
      await executeRunCommand(outputChannel, window.activeTextEditor.document.fileName);
    }),

    commands.registerCommand("just.enableCodeLens", () => {
      workspace.getConfiguration("just").update("enableCodeLens", true, true);
    }),

    commands.registerCommand("just.disableCodeLens", () => {
      workspace.getConfiguration("just").update("enableCodeLens", false, true);
    }),

    commands.registerCommand("just.codelensAction", async (recipe?: Recipe) => {
      if (recipe) {
        outputChannel.appendLine(`CodeLens action clicked with justfile=${recipe.justfile} recipe=${recipe.name}`);
        await executeRecipe(recipe, outputChannel);
      }
    }),
  );

}

/**
 * Fires when our extension dies.
 */
export function deactivate() {
  if (disposables) {
    disposables.forEach(item => item.dispose());
  }
  disposables = [];
}
