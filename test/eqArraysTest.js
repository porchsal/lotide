const assertEqual = require("../assertEqual");
const eqArrays = require("../eqArrays");

console.log(eqArrays([1, 2, 23, 5], [1, 2, 23, 5]));
console.log(assertEqual(eqArrays([1, 2, 23, 5], [1, 2, 23, 5]), true));
