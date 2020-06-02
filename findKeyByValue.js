
const findKeyByValue = function(object, value) {
  let finalKey;
  for (let key in object) {
    if (object[key] === value) {
      finalKey = key;
    }
  }
  return finalKey;
};

module.exports = findKeyByValue;