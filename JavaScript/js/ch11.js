"use strict";
// Dave Gray's JavaScript tutorial at https://courses.davegray.codes/.
// Chapter 11 Your First Game (1:04:38)

// A simple interactive game of rock, paper, or scissors.
// Dave does a good job of showing how the game is developed
// from scratch, including design errors. The design is limited
// without knowing how to write functions.
// In my experience, computer is rarely "scissors".
// It is difficult to validate the code on all branches
// without a test suite.
// A linter would have helped me find some bugs.
let playGame = confirm("Shall we play rock, paper, or scissors?");
if (playGame === false) {
  alert("OK, maybe next time.");
} else {
  let playerChoice = prompt("Please enter rock, paper, or scissors.");
  if (playerChoice === null || playerChoice === "") {
    alert("I guess you changed your mind. Maybe next time.");
  } else {
    let playerOne = playerChoice.trim().toLowerCase();
    if (playerOne !== "rock" && playerOne !== "paper" && playerOne !== "scissors") {
      alert(`You made an invalid choice of "${playerChoice}".`);
    }
    else {
      // playerOne is a valid choice.
      // Get the computer's choice.
      let computerChoice = Math.floor(Math.random() * 3);
      // console.log(`computerChoice is ${computerChoice}.`);
      let computer = computerChoice === 0 ? "rock"
        : computerChoice === 1 ? "paper"
          : "scissors";
      // console.log(`computer is ${computer}.`);

      // Decision tree.
      if (computer === playerOne) {
        alert(`You chose ${playerOne}.\nThe computer chose ${computer}.\nThe result is a tie!`);
      }
      else {
        if (computer === "rock") {
          if (playerOne === "paper") {
            alert(`You chose ${playerOne}.\nThe computer chose ${computer}.\nYou won!`);
          } else {
            alert(`You chose ${playerOne}.\nThe computer chose ${computer}.\nThe lost!`);
          }
        }
        else if (computer === "paper") {
          if (playerOne === "scissors") {
            alert(`You chose ${playerOne}.\nThe computer chose ${computer}.\nYou won!`);
          }
          else {
            alert(`You chose ${playerOne}.\nThe computer chose ${computer}.\nYou lost!`);
          }
        }
        else { // computer === "scissors"
          if (playerOne === "rock") {
            alert(`You chose ${playerOne}.\nThe computer chose ${computer}.\nYou won!`);
          } else {
            alert(`You chose ${playerOne}.\nThe computer chose ${computer}.\nYou lost!`);
          }
        }
      }

      // Play again?
      let playAgain = confirm("Play again?");
      if (playAgain) {
        location.reload();
      } else {
        alert("OK, thanks for playing!");
      }
    }
  }
}
