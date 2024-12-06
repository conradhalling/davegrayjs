// Chapter 2 Link JavaScript to HTML

// console.log("Hello World!");
// console.log(typeof "Dave");
// console.log(typeof 42);
// console.log(typeof true);

// Chapter 3 Strings

// const myVariable = "Mathematics";
// console.log(myVariable.length);
// console.log("Every good boy does fine".length);
// console.log(myVariable.charAt(0));
// console.log(myVariable.indexOf("mat"));
// console.log(myVariable.lastIndexOf("at"));
// console.log(myVariable.charCodeAt(0));
// console.log(myVariable.slice(5, 8));     // "mat"
// console.log(myVariable.slice(5));
// console.log(myVariable.toUpperCase());
// console.log(myVariable.includes("div"));
// console.log(myVariable.split("e"));
// console.log(myVariable.split(""));
// console.log("Every good boy does fine".split(" "));

// Chapter 4 Numbers

// const myNumber = 42;
// console.log(myNumber);
// const myFloat = 42.0;
// const myFloat2 = 42.01;
// console.log(myFloat);
// const myString = "42";
// console.log(myString);
// console.log(myNumber === myFloat);          // true
// console.log(myNumber === myString);         // false
// console.log(myString + 3);                  // "423"
// console.log(Number(myString) + 3);          // 45
// console.log(Number(myString) === myNumber); // true
// console.log(Number("Dave"));                // NaN
// console.log(Number(undefined));             // NaN
// console.log(Number(true));                  // 1
// console.log(Number(false));                 // 0
// console.log(Number.isInteger(myNumber));    // true
// console.log(Number.isInteger(myFloat));     // true
// console.log(Number.isInteger(myFloat2));    // false
// // There is no Number.isFloat method.
// console.log(Number.parseFloat(myString));   // 42
// console.log(Number("42.123abc"));           // NaN
// console.log(Number.parseFloat("42.123abc")) // 42.123
// console.log(42.0151.toFixed(2));            // "42.02"
// console.log(Number.parseInt("42.123abc"));  // 42
// console.log(myFloat2.toString());           // "42.01"
// // chaining
// console.log(Number.parseFloat("42.123abc").toFixed(2).toString());
// // NaN
// // Number.isNaN and (global) isNaN have different behaviors. 
// console.log(Number.isNaN(Number("Dave")));  // true
// console.log(Number.isNaN("Dave"));          // false
// console.log(isNaN("Dave"));                 // true

// Chapter 5 Math Methods

console.log(Math.PI);                           // 3.141592653589793
console.log(Math.trunc(Math.PI));               // 3
console.log(Math.round(3.5));                   // 4
console.log(Math.ceil(Math.PI))                 // 4
console.log(Math.floor(Math.PI))                // 3
console.log(Math.pow(2, 4))                     // 16
console.log(Math.min(2, 5, 9))                  // 2
console.log(Math.max(2, 5, 9))                  // 9
console.log(Math.random())                      // [0, 1)
console.log(Math.floor(Math.random() * 10) + 1) //  A random number from 1 .. 10
