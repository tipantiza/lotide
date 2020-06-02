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


module.exports = letterPositions;