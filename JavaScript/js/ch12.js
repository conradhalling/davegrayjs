"use strict";
// Dave Gray's JavaScript tutorial at https://courses.davegray.codes/.
// Chapter 12 Loops (1:20:26)

// while loops

let myNumber = 0;
// Outputs 0 ... 48.
// while (myNumber < 50) {
//   console.log(myNumber);
//   myNumber += 2;
// }

myNumber = 0;
// Outputs 2 ... 50.
do {
  myNumber += 2;
  console.log(myNumber);
} while (myNumber < 50);

// for loops

// Outputs 0 ... 10.
for (let i = 0; i <= 10; i++) {
  console.log(i);
}

// Outputs the individual letters in the name variable.
let name2 = "Dave";
for (let i = 0; i < name2.length; i++) {
  console.log(name2.charAt(i));
}

// Outputs "D", "a", "v".
let name3 = "Dave";
let counter3 = 0;
let myLetter3;
while (true) {
  myLetter3 = name3[counter3];
  console.log(myLetter3);
  if (myLetter3 === "v") {
    break;
  }
  counter3++;
}

// Demonstrate using continue.
// Outputs "D", "a", "e".
let myName4 = "Dave";
let counter4 = 0;
let myLetter4;
while (counter4 <= 3) {
  myLetter4 = myName4[counter4];
  console.log(myLetter4);
  if (counter4 === 1) {
    counter4 += 2;
    continue;
  }
  counter4 += 1;
}
