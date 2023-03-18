const findKey = function(object,callback) {
  for (let attribute in object) {
    if (callback(object[attribute])) {
      return attribute;
    }
       
  } return undefined;
};

module.exports = findKey;