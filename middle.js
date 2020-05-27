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

const middle = function(array) {
  let newArray = [];
  if (array.length < 3) {
    return newArray;
  } else if (array.length % 2 === 0) {
    let i = (array.length) / 2 - 1;
    newArray.push(array[i]);
    newArray.push(array[i + 1]);
    return newArray;
  } else {
    let i = (array.length - 1) / 2;
    newArray.push(array[i]);
    return newArray;
  }
};
assertArraysEqual(middle([1]), []);
assertArraysEqual(middle([1, 2]), []);
assertArraysEqual(middle([1, 2, 3]), [2]);
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);
assertArraysEqual(middle([1, 2, 3, 4, ]), [2, 3]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6 ]), [3,4]);

