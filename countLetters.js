const assertEqual = function(actual, expected) {
    if (JSON.stringify(actual) === JSON.stringify(expected)) {
      console.log(`✅✅✅Assertion Passed: [${actual}] === [${expected}]`);
    } else {
      console.log(`🛑🛑🛑Assertion Failed: [${actual}] !== [${expected}]`);
    }
  };

const countLetters = function (string){
  let result = {};
  let spaceless = string.replace(/\s/g,'');
  for (letter of spaceless){
      if (result[letter]){
        result[letter]++;
      }else{
        result[letter] = 1;
      }
  }
  return result;
}
let compare1 = "exiting news in town";
let compare2 = "exiting news";
console.log(countLetters(compare1));
console.log(countLetters(compare2));
console.log(assertEqual(countLetters(compare1), countLetters(compare2)));