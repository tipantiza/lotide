const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} ===  ${expected}`);
  } else {
    console.log(`❌❌❌Assertion Failed: ${actual} !== ${expected}`);
  }
};

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
// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
  const object1Length = Object.keys(object1).length;
  const object2Length = Object.keys(object2).length;

  if (object1Length !== object2Length) {
    return false;
  }

  for (let key in object1) {
    if (object2[key]) {
      if (Array.isArray(object2[key]) || Array.isArray(object1[key])) {
        if (!(eqArrays(object1[key], object2[key]))) {
          return false;
        }
      } else {
        if (object2[key] !== object1[key]) {
          return false;
        }
      }
    }
  }
  return true;
};
//test with primative types
console.log("test with primatives");
console.log("----------");
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertEqual(eqObjects(ab, ba), true);

const abc = { a: "1", b: "2", c: "3" };
assertEqual(eqObjects(ab, abc), false);

//test with arrays #moreComplex
console.log("test with arrays");
console.log("----------");
const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertEqual(eqObjects(cd, dc), true);

const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, cd2), false);