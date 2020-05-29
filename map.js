//code for testing 
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
///
const words = ["eat", "breath", "computer"];
const numbers = [1, 2, 3, 4];
const multiple = [1, "", "l", 3];
const map = function(array, callback){
  const results = []
  for(const item of array){
    results.push(callback(item))
  }
  return results;
}
const result1 = map(words, word => word[0])

const result2 = map(numbers, num => num * 2);

const result3 = map(multiple, value => value + " hi" )


//tests
assertArraysEqual(result1, ["e", "b", "c"]);
assertArraysEqual(result2, [2, 4, 6, 8]);
assertArraysEqual(result3, ["1 hi", " hi", "l hi", "3 hi"]);