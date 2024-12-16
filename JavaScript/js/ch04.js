"use strict";
// Dave Gray's JavaScript tutorial at https://courses.davegray.codes/.
// Chapter 4 Numbers (22:14)

const myNumber = 42;
console.log(myNumber);
const myFloat = 42.0;
const myFloat2 = 42.01;
console.log(myFloat);
const myString = "42";
console.log(myString);
console.log(myNumber === myFloat);          // true
console.log(myNumber === myString);         // false
console.log(myString + 3);                  // "423"
console.log(Number(myString) + 3);          // 45
console.log(Number(myString) === myNumber); // true
console.log(Number("Dave"));                // NaN
console.log(Number(undefined));             // NaN
console.log(Number(true));                  // 1
console.log(Number(false));                 // 0
console.log(Number.isInteger(myNumber));    // true
console.log(Number.isInteger(myFloat));     // true
console.log(Number.isInteger(myFloat2));    // false
// There is no Number.isFloat method.
console.log(Number.parseFloat(myString));   // 42
console.log(Number("42.123abc"));           // NaN
console.log(Number.parseFloat("42.123abc")); // 42.123
console.log(42.0151.toFixed(2));            // 42.02
console.log(Number.parseInt("42.123abc"));  // 42
console.log(myFloat2.toString());           // 42.01
// chaining
console.log(Number.parseFloat("42.123abc").toFixed(2).toString());  // 42.12
// NaN
// Number.isNaN and (global) isNaN have different behaviors.
console.log(Number.isNaN(Number("Dave")));  // true
console.log(Number.isNaN("Dave"));          // false
console.log(isNaN("Dave"));                 // true
