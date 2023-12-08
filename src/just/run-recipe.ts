// import { execa } from 'execa'
import * as execa from 'execa';
import { ExecaError } from 'execa';
import { Recipe, RunRecipeResult } from '../types';
import { getJustExecutable } from './exec';

/**
 * Gets a list of commands you can run from a justfile.
 */
export async function runRecipe(recipe: Recipe): Promise<RunRecipeResult> {
  try {
    const args = [];
    if (recipe.justfile) {
      args.push('--justfile', recipe.justfile);
    }
    args.push(recipe.name);

    // make the call to just
    const justExe = getJustExecutable();
    const execaResult = await execa(justExe, args);

    // successful call to the executable?
    if (execaResult.exitCode === 0) {
      // split up the result
      return {
        kind: 'ok',
        stdout: execaResult.stdout && execaResult.stdout.trim(),
      };
    }
  } catch (e) {
    // runtime check for an execa error
    if (e.command) {
      const error = e as ExecaError;

      return {
        kind: 'error',
        stderr: error.stderr && error.stderr.trim(),
        stdout: error.stdout && error.stdout.trim(),
      };
    } else {
      return { kind: 'unknown' };
    }
  }
}
