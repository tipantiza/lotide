const eqArrays = require('./eqArrays');

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
    } else {
      return false;
    }
  }
  return true;
};


module.exports = eqObjects;