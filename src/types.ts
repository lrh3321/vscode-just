import { JustDump, RecipeDump } from "./types-json";

/**
 * A runnable just recipe.
 */
export interface Recipe {
  /**
   * The name of the recipe.
   */
  name: string
  /**
   * A description of what the recipe does.
   */
  description?: string

  justfile?: string

  positionalArgs?: Array<PositionalArgs>
  kwargs?: Map<string, string>
}

export interface PositionalArgs {
  name: string
  value?: string
}

export interface GetRecipesError {
  kind: 'no-recipes' | 'no-just-file' | 'no-just' | 'multiple-candidate' | 'just-parse-error' | 'unknown'
  stdout?: string
  stderr?: string
}

export interface GetRecipesOK {
  kind: 'ok'
  recipes: Recipe[]
}

/**
 * The types of results you can get frmo running a recipe.
 */
export type RunRecipeResult =
  | { kind: 'ok'; stdout?: string }
  | { kind: 'error'; stdout?: string; stderr?: string }
  | { kind: 'unknown' }

/**
 * The types of results you can get from calling getCommands.
 */
export type GetRecipesResult = GetRecipesOK
  | GetRecipesError

export { JustDump, RecipeDump };
