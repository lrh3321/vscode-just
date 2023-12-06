import * as assert from 'assert';

const LAZY = true;

suite('just extension', () => {
  test('should i write tests?', () => {
    assert.equal(LAZY, true);
  });
});
