const findKeyByValue = function(parameter, value) {
  for (const attribute in parameter) {
    if (parameter[attribute] === value) {
      return attribute;
    }
  }
  return undefined;
};

module.exports = findKeyByValue;

