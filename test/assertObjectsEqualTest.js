const assertObjectsEqual = require("../assertObjectsEqual");

const a = { a: '1', b: 1 };
const b = { b: 2, a: '1' };
console.log(assertObjectsEqual(a,b));
