const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: [${actual}] === [${expected}]`);
  } else {
    console.log(`🛑🛑🛑Assertion Failed: [${actual}] !== [${expected}]`);
  }
  
};

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
console.log(tail(["Hello", "Lighthouse", "Labs"]));
const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result, ["Lighthouse", "Labs"]); // => will always fail!
// Test Case: Check the original array
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!
const empty = [];
console.log(tail(empty));
