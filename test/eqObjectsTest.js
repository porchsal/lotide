const eqObjects = require("../eqObjects");


const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject = { size: "medium", color: "red" };
console.log(eqObjects(shirtObject , anotherShirtObject)); // => true

const longSleeveShirtObject = { size: "medium", color: "red", sleeveLength: "long" };
console.log(eqObjects(shirtObject , longSleeveShirtObject)); // => false

console.log(eqObjects({a:1, b:2}, {b:1, a:1})); // false
console.log(eqObjects({a:1, b:2}, {b:2, a:2})); // false
console.log(eqObjects({a:1, b:[2,3]}, {a:1, b:[2,4]})); // false
console.log(eqObjects({a:[1,2], b:2}, {a:[2,2], b:2})); // false
console.log(eqObjects({a:1, b:[2,3]}, {a:2, b:[2,3]})); // false
console.log(eqObjects({a:[1,2], b:2}, {a:[1,2], b:3})); // false