// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: [${actual}] === [${expected}]`);
  } else {
    console.log(`🛑🛑🛑Assertion Failed: [${actual}] !== [${expected}]`);
  }

};

// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 2);
assertEqual("Julian", "Julian");
assertEqual("Julian", "Julia");
assertEqual(45, 45);

