const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }

  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2) === true) {
    console.log(`Assertion Passed: [${array1}] === [${array2}]`);
  } else {
    console.log(`Assertion Failed: [${array1}] !== [${array2}]`);
  }
};

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
console.log(without([1, 2, 3, 4, 3],[2]));
console.log(without(["a", "b", "c", "d", "e"],["b"]));