"use strict";
// Dave Gray's JavaScript tutorial at https://courses.davegray.codes/.
// Chapter 7 If Statements (40:07)

// This code creates a template literal using backticks.
let customerIsBanned = false;
let soup = "chicken noodle soup";
let crackers = true;
let reply;
if (customerIsBanned) {
  reply = "No soup for you!";
}
else if (soup && crackers) {
  reply = `Here's your order of ${soup} and crackers.`;
}
else if (soup) {
  reply = `Here's your order of ${soup}.`;
} else {
  reply = "Sorry, we're out of soup.";
}
console.log(reply);

let testScore = 59;
let collegeStudent = true;
let grade;
if (testScore >= 90) {
  grade = "A";
}
else if (testScore >= 80) {
  grade = "B";
}
else if (testScore >= 70) {
  grade = "C";
}
else if (testScore >= 60) {
  grade = "D";
} else {
  if (collegeStudent) {
    grade = "U";
  }
  else {
    grade = "F";
  }
}
console.log(grade);

// This is an incomplete rock-paper-scissors decision tree.
let playerOne = "rock";
let computer = "paper";
if (playerOne === computer) {
  // tie game
} else if (playerOne === "rock") {
  if (computer === "paper") {
    // computer wins
  } else {
    // playerOne wins because rock beats scissors
  }
} else if (playerOne === "paper") {
  if (computer === "scissors") {
    // computer wins
  } else {
    // playerOne wins because paper beats rock
  }
} else {
  // By elimination, playerOne === "scissors"
  if (computer === "rock") {
    // computer wins because player is scissors
  }
  else {
    // playerOne wins because scissors beats paper
  }
}
