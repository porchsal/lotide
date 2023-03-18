const tail = function(array) {
  let newarray = [];
  if (array.length < 1) {
    return [];
  } else {
    for (let i = 1; i < array.length; i++) {
      newarray[i - 1] = array[i];
    }
  }
  return newarray;
};
module.exports = tail;
