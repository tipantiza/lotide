const eqArrays = function(arrayA, arrayB) {
  if (arrayA.length !== arrayB.length) {
    return false;
  }
  for (let i = 0; i < arrayA.length; i++) {
    if (arrayA[i] !== arrayB[i]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = function(arrayA, arrayB) {
  if (eqArrays(arrayA, arrayB)) {
    console.log(`✅✅✅Assertion Passed: [${arrayA}] ===  [${arrayB}]`);
  } else {
    console.log(`❌❌❌Assertion Failed: [${arrayA}] !== [${arrayB}]`);
  }
};

const takeUntil = (array, callBack) => {
  const result = [];
  for (const value of array) {
    if (callBack(value)) {
      return result;
    }
    result.push(value);
  }
  return result;
};

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
assertArraysEqual(results1, [ 1, 2, 5, 7, 2]);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
assertArraysEqual(results2, [ 'I\'ve', 'been', 'to', 'Hollywood' ]);

module.exports = takeUntil;