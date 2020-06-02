# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @tipantiza/lotide`

**Require it:**

`const _ = require('@tipantiza/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `head(array)`: returns new array with the first (head) element of given array. 

* `tail(array)`: returns new array with everything except the first (head) element of given array.

* `middle(array)`: arrays that have an even number returns new array with the 2 middle numbers, if array is odd returns array with the middle number.

* `countLetters(string)`: returns object with letters and how many times they show up in given string.

* `countOnly(allItems, itemsToCount)`: takes in an array and an object. It will return an new object containing counts of everything that the input object listed.

* `findKey(object, callBack)`: Takes in an object and a callback. It scans the object and return the first key for which the callback returns a truthy value. If no key is found, then it returns undefined.

* `findKeyByValue(object, value)`: takes in an object and a value. It scans the object and returns the first key which contains the given value. If no key with that given value is found, then it returns undefined.

* `letterPositions(sentance)`: takes in a string. Will return, in a new object, all the indices (zero-based positions) in the string where each character is found.

* `map(array, callback)`: takes in an array to map, and a callback function. The map function will return a new array based on the results of the callback function.

* `takeUntil(array, callBack)`: takes in an array to work with, and a callback function. The function will return a new array with elements up until the callback returns a truthy value.

* `without(source, itemsToRemove)`: This function takes in a source array and an itemsToRemove array. It returns a new array with only those elements from source that are not present in the itemsToRemove array.

* `flatten(array)`: takes in an array containing elements including nested arrays of elements, and return a "flattened" version of the array. but only one level of nesting.

* `eqObjects(objectA, objectB)`: compares two given object if they are identical it returns true if not false.