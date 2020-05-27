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

const letterPositions = function(sentance) {
  let results = {};
  for (let i = 0; i < sentance.length; i++) {
    if (sentance[i] !== " ") {
      if (results[sentance[i]]) {
        results[sentance[i]].push(i);
      } else {
        results[sentance[i]] = [i];
      }
    }
  }
  return results;
};

assertArraysEqual(letterPositions("lighthouse in the house").l, [0]);
// console.log(letterPositions("lighthouse in the house"));
// console.log({
//   l: [0],
//   i: [1, 11],
//   g: [2],
//   h: [3, 5, 15, 18],
//   t: [4, 14],
//   o: [6, 19],
//   u: [7, 20],
//   s: [8, 21],
//   e: [9, 16, 22],
//   n: [12]
// });