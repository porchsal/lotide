const letterPositions = require("../letterPositions")
const assertArraysEqual = require("../assertArraysEqual")

console.log(letterPositions("hello world"));
assertArraysEqual(letterPositions("hello").o, [4]);
