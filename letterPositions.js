const assertEqual = function(actual, expected) {
  if (JSON.stringify(actual) === JSON.stringify(expected)) {
    console.log(`✅✅✅Assertion Passed: [${actual}] === [${expected}]`);
  } else {
    console.log(`🛑🛑🛑Assertion Failed: [${actual}] !== [${expected}]`);
  }
};
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

const letterPositions = function(sentence) {
  const result = {};
  let spaceless = sentence.replace(/\s/g,'');
  for (let i = 0; i < spaceless.length; i++) {
    const letter = spaceless[i];
    if (result[spaceless[i]]) {
      result[letter].push(i);
    } else {
      result[letter] = [i];
    }
  }
  return result;
};

console.log(letterPositions("constitutional party"));
assertArraysEqual(letterPositions("hello").o, [4]);