"use strict";
// Dave Gray's JavaScript tutorial at https://courses.davegray.codes/.
// Chapter 15 Arrays (2:05:29)

const myArray = [];
myArray[0] = "Dave";
myArray[1] = 1001;
myArray[2] = false;

console.log(myArray);
console.log(myArray.length);
console.log(myArray[myArray.length - 1]);
console.log(myArray[1]);

let newLength = myArray.push("school");
console.log(newLength);
console.log(myArray);

let lastItem = myArray.pop();
console.log(lastItem);
console.log(myArray);

newLength = myArray.unshift(42);
console.log(newLength);
console.log(myArray);

let firstItem = myArray.shift();
console.log(firstItem);
console.log(myArray);

// Remove an item from the middle of an array.
// This is not recommended.
delete myArray[1];
// ['Dave', empty, false];
console.log(myArray);
console.log(myArray[1]);

// This is extra.
// See https://www.geeksforgeeks.org/remove-empty-elements-from-an-array-in-javascript/.
const myArray2 = [10, , null, 20, undefined, "", 30, 40, 50];
// [10, empty, null, 20, undefined, '', 30, 40, 50]
console.log(myArray2);
// empty is converted to undefined when accessed.
for (let i = 0; i < myArray2.length; i++)
  console.log(`${i}: ${myArray2[i]}`);

// Remove an item from the middle of an array.
myArray[0] = "Dave";
myArray[1] = 1001;
myArray[2] = false;
let removedItems = myArray.splice(1, 1);
console.log(myArray);
console.log(removedItems);

// Insert an item into an array using splice.
myArray.splice(1, 0, 42);
console.log(myArray);

// Extract a subarray.
let myArray3 = ["A", "B", "C", "D", "E", "F"];
console.log(myArray3.slice(2));
console.log(myArray3.slice(2, 5));

// Reverse the array.
myArray3.reverse();
console.log(myArray3);

// Join the elements of an array into a string.
// Split them into an array again.
let myArray3String = myArray3.join();
console.log(myArray3String);
myArray3String = myArray3.join("|");
console.log(myArray3String);
const myArray4 = myArray3String.split("|");
console.log(myArray4);

// Concatenate arrays.
// + does not do what you hope.
const myArrayA = ["G", "H", "I"];
const myArrayB = ["J", "K", "L"];
let newArray3 = myArrayB.concat(myArrayA);
console.log(newArray3);

// Using the spread (...) operator.
myArray3 = [...myArrayB, ...myArrayA];
console.log(myArray3);

// Create a 2-D array,
myArray3 = [myArrayB, myArrayA];
console.log(myArray3);

// Access values from arrays and multi-dimensional arrays.
const equipShelfA = ["baseball", "football", "volleyball"];
const equipShelfB = ["basketball", "golf balls", "tennis balls"];

const clothesShelfA = ["tank tops", "t-shirts", "jerseys"];
const clothesShelfB = ["sweat tops", "sweat pans", "hoodies"];

console.log(equipShelfA[1]);
console.log(clothesShelfB[0]);

const equipDept = [equipShelfA, equipShelfB];
const clothesDept = [clothesShelfA, clothesShelfB];
console.log(equipDept[0][1]);
console.log(clothesDept[1][0]);

const store = [equipDept, clothesDept];
console.log(store);
console.log(store[0][0][1]);
console.log(store[1][1][0]);
