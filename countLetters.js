const assertEqual = require('./assertEqual');

const countLetters = function(string) {
  let result = {};
  let spaceless = string.replace(/\s/g,'');
  for (let letter of spaceless) {
    if (result[letter]) {
      result[letter]++;
    } else {
      result[letter] = 1;
    }
  }
  return result;
};

module.exports = countLetters;