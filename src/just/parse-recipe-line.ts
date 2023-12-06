import { PositionalArgs, Recipe } from '../types'
import { parse } from 'csv-parse/sync';

/**
 * Parse one of the lines when running `just --list` into a JustRecipe.
 *
 * @param value A line of raw just output.
 */
export function parseRecipeLine(value: string): Recipe {
  // sanity check
  if (!value || typeof value !== 'string') {
    throw new Error('invalid value')
  }

  // clean up
  const clean = value.trim()

  // another sanity check
  if (clean.length === 0) {
    throw new Error('value have content')
  }

  // slice & clean
  const parts = clean.split('#').map(x => (x || '').trim())

  // assign the parts
  const name = parts[0].trim()
  const description = clean
    .replace(name, '')
    .replace(/\#/, '')
    .trim()

  // return the goods
  return { name, description }
}

export function parseRecipe(value: string): Recipe {
  if (value.startsWith("@")) {
    value = value.substring(1)
  }

  const results = parse(value, { skip_empty_lines: true, autoParse: false, delimiter: ' ' }) as string[][]
  if (results && results.length === 1) {
    const result = results[0]
    if (result.length > 0) {
      let name = result.shift()
      if (name.endsWith(':')) {
        name = name.substring(0, name.length - 1)
      }

      let positionalArgs: Array<PositionalArgs>
      let kwargs: Map<string, string>

      while (result.length > 0) {
        let s = result.shift()
        if (s === ':') {
          break
        }

        if (s.includes('=')) {

        } else {
          if (!positionalArgs) {
            positionalArgs = []
          }
          positionalArgs.push({ name: s })
        }
      }

      return { name: name, positionalArgs: positionalArgs, kwargs: kwargs }
    }
  }
  return { name: "", }
}