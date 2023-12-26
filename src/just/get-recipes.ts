import { EOL } from 'os';
import { Recipe, GetRecipesResult, JustDump, RecipeDump, } from '../types';
import { parseRecipeLine } from './parse-recipe-line';
import path = require('path')
import { JustExecError, execJust, execOptions } from './exec';

let jsonDumpSupported: boolean | undefined = undefined;


/**
 * Gets a list of recipes you can run from a justfile.
 */
export async function getRecipes(justfile?: string, cwd?: string): Promise<GetRecipesResult> {
  // make the call to just
  const args: string[] = [];
  const options = {};

  if (justfile) {
    const dirname = path.dirname(justfile);
    args.push('--working-directory', dirname, '--justfile', justfile);
    options['cwd'] = dirname;
  }

  if (cwd) {
    options['cwd'] = cwd;
  }

  try {
    let recipes: Recipe[];
    if (typeof jsonDumpSupported === 'undefined' || jsonDumpSupported) {
      recipes = await getRecipesWithJSONDump(args, options);
    } else {
      recipes = await getRecipesWithListDump(args, options);
    }
    recipes.forEach((r) => r.justfile = justfile);
    return { kind: 'ok', recipes };
  } catch (e) {
    if (e.kind) {
      return { kind: e.kind, recipes: [] };
    }
    console.error(e);
  }
  return { kind: 'unknown' };
}

export function parseJSONDumpRecipes(json: string): Recipe[] {
  const dump = JSON.parse(json) as JustDump;

  const recipes = Object.entries<RecipeDump>(dump.recipes).map(v => {
    const rd = v[1];
    return {
      name: rd.name,
      description: rd.doc,
    } as Recipe;
  });

  return recipes;
}

export function parseDumpRecipes(lines: string[]): Recipe[] {
  // 1 line means there are no recipes
  if (lines.length === 1) {
    lines = lines[0].split('\n');
  }

  // 1 line means there are no recipes
  if (lines.length === 1) {
    return [];
  }

  // more than 1 line?
  if (lines.length > 1) {
    const tail = lines.splice(1, lines.length - 1);
    return tail.map(parseRecipeLine);
  }

  return [];
}

export async function getRecipesWithJSONDump(args: string[], options?: execOptions): Promise<Recipe[]> {
  args = Array.from(args);
  args.push('--dump', '--dump-format', 'json');

  try {
    const execaResult = await execJust(args, options);

    // successful call to the executable?
    if (execaResult.exitCode === 0) {
      // split up the result
      const lines = (execaResult.stdout || '');

      // nothing should never happen
      if (lines.length === 0) {
        return [];
      }

      const recipes = parseJSONDumpRecipes(lines);

      if (typeof jsonDumpSupported === 'undefined') {
        jsonDumpSupported = true;
      }
      return recipes;
    }
  } catch (e) {
    if (e instanceof JustExecError) {
      handleDumpExecaError(e);
    }

    throw { kind: 'unknown' };
  }

  throw { kind: 'unknown' };
}

export async function getRecipesWithListDump(args: string[], options?: execOptions): Promise<Recipe[]> {
  args = Array.from(args);
  args.push('--list');

  try {
    const execaResult = await execJust(args, options);

    // successful call to the executable?
    if (execaResult.exitCode === 0) {
      // split up the result// split up the result
      const lines = (execaResult.stdout || '').split(EOL);

      // nothing should never happen
      if (lines.length === 0) {
        return [];
      }

      // nothing should never happen
      if (lines.length === 0) {
        throw { kind: 'unknown' };
      }

      // more than 1 line?
      if (lines.length > 1) {
        const recipes = parseDumpRecipes(lines);
        return recipes;
      }
    }
  } catch (e) {
    // runtime check for an execa error
    if (e instanceof JustExecError) {
      handleDumpExecaError(e);
    }

    throw { kind: 'unknown' };
  }
  throw { kind: 'unknown' };
}

/**
 * runtime check for an execa error
 * @param error
 */
function handleDumpExecaError(error: JustExecError): never {
  if (error instanceof JustExecError) {
    throw { kind: error.kind || 'unknown', stderr: error.message };
  }

  const { exitCode, stderr = '', stdout } = error;

  // different types of errors we know of
  const noJustFile = exitCode === 1 && stderr.trim().includes('No justfile found');
  const multipleCandidateError = exitCode === 1 && stderr.trim().startsWith('error: Multiple candidate justfiles');
  const parseError = exitCode === 1 && stderr.trim().startsWith('error: ');

  if (noJustFile) {
    throw { kind: 'no-just-file' };
  } else if (multipleCandidateError) {
    throw { kind: 'multiple-candidate', stderr: stderr, stdout: stdout };
  } else if (parseError) {
    throw { kind: 'just-parse-error', stderr: stderr, stdout: stdout };
  } else {
    throw { kind: 'unknown', stderr: stderr, stdout: stdout };
  }
}  