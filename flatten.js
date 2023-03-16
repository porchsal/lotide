const flatten = function(array) {
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    if (Array.isArray(array[i]) !== true) {
      newArray.push(array[i]);
    } else {
      for (let j = 0; j < array[i].length; j++) {
        newArray.push(array[i][j]);
      }
    }
  }
  return newArray;
};

module.exports = flatten;