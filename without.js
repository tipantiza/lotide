const eqArrays = function (arrayA, arrayB) {
  if (arrayA.length !== arrayB.length){
    return false
  }
  for (var i = 0; i < arrayA.length; i++) {
    if (arrayA[i] !== arrayB[i]) {
      return false;
    } 
  }
  return true;
}

const assertArraysEqual = function (arrayA, arrayB) {
  if (eqArrays(arrayA, arrayB)){
    console.log(`🔵🔵🔵Assertion Passed: ${arrayA} ===  ${arrayB}`);
  } else {
    console.log(`🔴🔴🔴Assertion Failed: ${arrayA} !== ${arrayB}`);
  }
}

const without = function (sourceArr , itemsToRemove) {
  let newArray = [...sourceArr];
  for (var i = 0; i < itemsToRemove.length; i++){
    for (var j = 0; j < sourceArr.length; j++){
      if (itemsToRemove[i] === sourceArr[j]){
        newArray.splice(j, 1)
      }
    }
  }
  return newArray;
}

console.log(without([1, 2, 3], [1])) // => [2, 3]
console.log(without(["1", "2", "3"], [1, 2, "3"])) // => ["1", "2"]

const words = ["hello", "world", "lighthouse"];
console.log(without(words, ["lighthouse"])); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);