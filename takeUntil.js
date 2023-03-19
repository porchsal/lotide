const takeUntil = function(array, callback) {
  let result = [];
  
  for (let items of array) {
    if (callback(items)) {
      return result;
    } else {
      result.push(items);
    }
  }
  return array;
};

module.exports = takeUntil;