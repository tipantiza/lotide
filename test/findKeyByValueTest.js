const findKeyByValue = require('../findKeyByValue');
const assert = require('chai').assert;


const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

describe('#findKeyByValue', () => {
   it('returns "drama for findKeyByValue(bestTVShowsByGenre, "The Wire")', () => {
     const result = findKeyByValue(bestTVShowsByGenre, "The Wire");
     assert.strictEqual(result, "drama");
   });

   it('returns "undefined" for findKeyByValue(bestTVShowsByGenre, "That \'70s Show")', () => {
     const result = findKeyByValue(bestTVShowsByGenre, "That '70s Show");
     assert.strictEqual(result, undefined);
   });
});