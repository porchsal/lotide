//TEST CODE
const assertEqual = require(`../assertEqual`)
const head = require(`../head`);

assertEqual(head([4,6,7,8]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");