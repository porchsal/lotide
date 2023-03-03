const assertEqual = function(actual, expected) {
  if (JSON.stringify(actual) === JSON.stringify(expected)) {
    console.log(`✅✅✅Assertion Passed: [${actual}] === [${expected}]`);
  } else {
    console.log(`🛑🛑🛑Assertion Failed: [${actual}] !== [${expected}]`);
  }
};

const findKeyByValue = function(parameter, value) {
  for (const attribute in parameter) {
    if (parameter[attribute] === value) {
      return attribute;
    }
  }
  return undefined;
};



const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};
  
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
console.log(findKeyByValue(bestTVShowsByGenre, "The Expanse"));
