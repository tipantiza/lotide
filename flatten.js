const flatten = (array) => {
  const finalArr = [];
 for (const values of array){
    if (Array.isArray(values)){
      for(const value of values){
        finalArr.push(value);
      }
    } else {
      finalArr.push(values);
    } 
  }  
  return finalArr;
}

module.exports = flatten;