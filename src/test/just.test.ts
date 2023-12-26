
import * as assert from 'assert';
import { describe, it } from "mocha";
import { parseRecipe } from '../just/parse-recipe-line';
import { execJust } from '../just';


suite('just lib', () => {
    test('test execJust',async ()=>{
        await execJust(['-f',"a"]);
    });

    test('test parseRecipe no args', () => {
        assert.equal(parseRecipe("default:").name, 'default');

        assert.equal(parseRecipe("@default:").name, 'default');

        assert.equal(parseRecipe("@default: a").name, 'default');

        assert.equal(parseRecipe("@default: a b").name, 'default');
    });

    test('test parseRecipe with args', () => {
        assert.equal(parseRecipe("default target:").name, 'default');

        assert.equal(parseRecipe("@default:").name, 'default');

        assert.equal(parseRecipe("@default: a").name, 'default');

        assert.equal(parseRecipe("@default: a b").name, 'default');
    });
});
