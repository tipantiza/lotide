const eqObjects = require('../eqObjects');
const assert = require('chai').assert;


describe('#eqObjects', () => {
  it('returns true for eqObjects({ a: "1", b: "2" }, { b: "2", a: "1" })', () => {
    const results = eqObjects({ a: "1", b: "2" }, { b: "2", a: "1" });

    assert.strictEqual(results, true);
  });

  it('returns false for eqObjects({ a: "1", b: "2" }, { a: "1", b: "2", c: "3" })', () =>{
    const results = eqObjects({ a: "1", b: "2" }, { a: "1", b: "2", c: "3" });
    assert.strictEqual(results, false);
    
  } )
  it('returns true for eqObjects({ d: ["2", 3], c: "1" },{ d: ["2", 3], c: "1" }) ', () =>{
    const results = eqObjects({ d: ["2", 3], c: "1" },{ d: ["2", 3], c: "1" });
    assert.strictEqual(results, true);
    
  } )
  it('returns false for eqObjects({ d: ["2", 3], c: "1" },{ c: "1", d: ["2", 3, 4] }) ', () =>{
    const results = eqObjects({ d: ["2", 3], c: "1" },{ c: "1", d: ["2", 3, 4] });
    assert.strictEqual(results, false);
    
  } )
});