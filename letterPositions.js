
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

module.exports = letterPositions;