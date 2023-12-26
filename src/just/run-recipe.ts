import { Recipe, RunRecipeResult } from '../types';
import { JustExecError, execJust } from './exec';
import path = require('path')

export interface runRecipeOptions {
  args?: string[]
}

/**
 * Gets a list of commands you can run from a justfile.
 */
export async function runRecipe(recipe: Recipe, workingDirectory?: string, options?: runRecipeOptions): Promise<RunRecipeResult> {
  try {
    const args: string[] = [];
    const options = {};
    if (recipe.justfile) {
      const dirname = path.dirname(recipe.justfile);
      if (workingDirectory) {
        args.push('--working-directory', workingDirectory);
      } else {
        args.push('--working-directory', dirname);
      }
      args.push('--justfile', recipe.justfile);
      options['cwd'] = dirname;
    }
    args.push(recipe.name);

    // make the call to just
    const execaResult = await execJust(args, options);

    // successful call to the executable?
    if (execaResult.exitCode === 0) {
      // split up the result
      return {
        kind: 'ok',
        stdout: execaResult.stdout && execaResult.stdout.trim(),
      };
    } else {
      return {
        kind: 'error',
        stdout: execaResult.stdout,
        stderr: execaResult.stderr,
      };
    }
  } catch (e) {
    // runtime check for an execa error
    if (e instanceof JustExecError) {
      return {
        kind: 'error',
        // stderr: error.stderr && error.stderr.trim(),
        stderr: e.message,
      };
    } else {
      return { kind: 'unknown' };
    }
  }
}
