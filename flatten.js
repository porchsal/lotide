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
  
console.log(flatten([1, 2, 3, [4 , 5], 6, [7, 8]]));