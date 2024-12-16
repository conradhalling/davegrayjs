"use strict";
// Dave Gray's JavaScript tutorial at https://courses.davegray.codes/.
// Chapter 3 Strings (15:17)

const myVariable = "Mathematics";
console.log(myVariable.length);                       // 11
console.log("Every good boy does fine".length);       // 24
console.log(myVariable.charAt(0));                    // M
console.log(myVariable.indexOf("mat"));               // 5
console.log(myVariable.lastIndexOf("at"));            // 6
console.log(myVariable.charCodeAt(0));                // 77
console.log(myVariable.slice(5, 8));                  // mat
console.log(myVariable.slice(5));                     // matics
console.log(myVariable.toUpperCase());                // MATHEMATICS
console.log(myVariable.includes("div"));              // false
console.log(myVariable.split("e"));                   // Array(2)
console.log(myVariable.split(""));                    // Array(11)
console.log("Every good boy does fine".split(" "));   // Array(5)
