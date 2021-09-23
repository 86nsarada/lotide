const assert = require('chai').assert;
const head   = require('../headRefractor');

describe("#head", () => {

  it("Function should return 1 for the array passed as  [1, 2, 3]", () => {
    assert.strictEqual(head([1, 2, 3]), 1);
  });

  it("returns '5' for ['5']", () => {
    assert.strictEqual(head(['5']), '5'); 
  });
});