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

module.exports = middle;
