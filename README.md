# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @porchsal/lotide`

**Require it:**

`const _ = require('@porchsal/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertArraysEqual(array1, array2)`: Compares if two arrays are equal 
* `assertEqual(actual, expected)`: Compares if two data are equal
* `assertObjectsEqual(actual, expected)`: Compares if two objects are equal
* `countLetters(string)`: Count letters from a string
* `countOnly(allItems, itemsToCount) `: Counts required items from an array
* `eqArrays(array1, array2)`: Compares if two arrays are equal
* `eqObjects(object1, object2)`: Compares if two objects are equal
* `findKey(object,callback)`: Retrives an attribute from an object
* `findKeyByValue(parameter, value)`: Retrives an especific attibute from an object
* `flatten(array)`: Creates a new array from an original array of arrays
* `head(array)`:  Returns the fist element in an array
* `tail(array)`:  Returns a new array without the firs element of the original array
* `letterPositions(sentence)`: Returns a new array with the position of the letters in a string
* `map(array, callback)`: Returns a new array from the callback
* `middle(array)`: Returns the middle element from an array
* `reverse(str)`: Returns a reversed string
* `takeUntil(array, callback)`:  Returns a new array with the elements according with the callback
* `without(source, itemsToRemove)`: Returns a new array without items provided