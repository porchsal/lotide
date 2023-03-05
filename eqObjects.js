const assertEqual = function(actual, expected) {
  if (actual === expected) {
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
  
const eqObjects = function(object1, object2) {
  const object1Array = Object.values(object1);
  const object2Array = Object.values(object2);
  if (object1Array.length !== object2Array.length) {
    return false;
  } else {
    for (const attribute in object1Array) {
      const value1 = object1[attribute];
      const value2 = object2[attribute];
      if (Array.isArray(value1) || Array.isArray(value2)) {
        if (!eqArrays(value1,value2)) {
          return false;
        }
      }
      
    }
    return true;
  }
  
  
};
  
const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject = { size: "medium", color: "red" };
console.log(eqObjects(shirtObject , anotherShirtObject)); // => true
  
const longSleeveShirtObject = { size: "medium", color: "red", sleeveLength: "long" };
console.log(eqObjects(shirtObject , longSleeveShirtObject)); // => false
  
//assertEqual(eqObjects(shirtObject , longSleeveShirtObject), false);cts(shirtObject , longSleeveShirtObject), false);