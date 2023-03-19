const without = function(source, itemsToRemove) {
  let newArray = [];
  if (!itemsToRemove.length) {
    return source;
  }
  for (let elements of source) {
    if (!itemsToRemove.includes(elements)) {
      newArray.push(elements);
    }
  }
  return newArray;
};

module.exports = without;