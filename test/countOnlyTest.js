const countOnly = require('../countOnly');
const assert = require('chai').assert;

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe",
  "jason"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true });

describe('#countOnly', () => {
  it("returns {Jason: 1, Fang: 2} for ['Karl', 'Salima', 'Agouhanna', 'Fang', 'Kavith', 'Jason', 'Salima', 'Fang', 'Joe', 'jason']", () => {
    const results = countOnly([
      "Karl",
      "Salima",
      "Agouhanna",
      "Fang",
      "Kavith",
      "Jason",
      "Salima",
      "Fang",
      "Joe",
      "jason"
    ], { "Jason": true, "Karima": true, "Fang": true });

    assert.deepEqual(results, {Jason: 1, Fang: 2})
  });
});