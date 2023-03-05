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

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  const actualArray = Object.keys(actual);
  const expectedArray = Object.keys(expected);
  if (actualArray.length !== expectedArray.length) {
    console.log(`🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  } else {
    for (const key of actualArray) {
      const value1 = actual[key];
      const value2 = expected[key];
      if (Array.isArray(value1) || Array.isArray(value2)) {
        if (!eqArrays(value1,value2)) {
          return console.log(`🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
        }
      } else if (value1 !== value2) {
        return console.log(`🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
      }
    
    }
    return console.log(`✅✅✅Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  }

}
  ;
const a = { a: '1', b: 2 };
const b = { b: 1, a: '1' };
console.log(assertObjectsEqual(a,b));