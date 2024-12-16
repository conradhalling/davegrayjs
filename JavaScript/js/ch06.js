"use strict";
// Dave Gray's JavaScript tutorial at https://courses.davegray.codes/.
// Chapter 6 Code Challenge (32:59)

// Write code that returns a random letter from a name.
const name = "Dave";
console.log(name.charAt(Math.floor(Math.random() * name.length)));
