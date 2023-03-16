const assertArraysEqual = require("./assertArraysEqual");
const eqArrays = require("./eqArrays");

const middle = function(array) {
  let middle = [];
  let mid = 0;
  if (array.length <= 2) {
    return middle;
  } else if (array.length > 2 && array.length % 2 === 0) {
    mid = array.length / 2;
    middle.push(array[mid - 1]);
    middle.push(array[mid]);
    return middle;
  } else if (array.length > 2 && array.length % 2 === 1) {
    mid = Math.trunc(array.length / 2);
    middle.push(array[mid]);
    return middle;
  }
};

module.exports = middle;
