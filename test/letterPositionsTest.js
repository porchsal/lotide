const letterPositions = require("../letterPositions")
const assertArraysEqual = require("../assertArraysEqual")

console.log(letterPositions("constitutional party"));
assertArraysEqual(letterPositions("hello").o, [4]);
