const without = function(source, itemsToRemove) {
  let newArray = [];
  if (!itemsToRemove.length) {
    return source;
  }
  //return itemsToRemove;
  for (let i = 0; i < itemsToRemove.length; i++) {
    for (let j = 0; j < source.length; j++) {
      if (itemsToRemove[i] !== source[j]) {
        newArray.push(source[j]);
      }
    }
  }
  return newArray;
};

module.exports = without;