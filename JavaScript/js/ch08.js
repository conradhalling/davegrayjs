"use strict";
// Dave Gray's JavaScript tutorial at https://courses.davegray.codes/.
// Chapter 8 Switch Statements (46:11)

// A simple switch statement.
// Type mismatches (e.g., "2" with 2) cause the default clause to be executed.
switch (2) {
  case 1:
    console.log(1);
    break;
  case 2:
    console.log(2);
    break;
  case 3:
    console.log(3);
    break;
  default:
    console.log("No match");
}

// Generate random numbers from 1 to 5 and match against
// 1, 2, or 3.
switch (Math.floor(Math.random() * 5) + 1) {
  case 1:
    console.log(1);
    break;
  case 2:
    console.log(2);
    break;
  case 3:
    console.log(3);
    break;
  default:
    console.log("No match");
}

// Create a decision tree for rock-paper-scissors.
// My variation for the default clause checks for an
// error in the algorithm where a combination is
// not checked correctly.
let playerOne = "scissors";
let computer = "rock";
switch (playerOne) {
  case computer:
    console.log("Tie game!");
    break;
  case "rock":
    if (computer === "paper") {
      console.log("computer wins!");
    } else {
      console.log("playerOne wins!");
    }
    break;
  case "paper":
    if (computer === "scissors") {
      console.log("computer wins!");
    }
    else {
      console.log("playerOne wins!");
    }
    break;
  case "scissors":
    if (computer == "rock") {
      console.log("computer wins!");
    } else {
      console.log("playerOne wins!");
    }
    break;
  default:
    console.log("Algorithm error!");
}
