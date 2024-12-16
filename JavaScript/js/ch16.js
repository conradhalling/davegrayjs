"use strict";
// Dave Gray's JavaScript tutorial at https://courses.davegray.codes/.
// Chapter 16 Refactor the Game (2:33:48)
// A simple interactive game of rock, paper, or scissors.

playGame();

/**
 * Play a game of rock, paper, or scissors.
 */
function playGame() {
  let playGame = askToPlay();
  while (playGame === true) {
    let validPlayerChoice;
    let playerChoice;
    [playGame, validPlayerChoice, playerChoice] = getPlayerChoice();
    if (validPlayerChoice) {
      const computerChoice = getComputerChoice();
      const wonLostOrTiedStatus = getWonLostOrTiedStatus(
        playerChoice,
        computerChoice
      );
      const wonLostOrTiedString = getWonLostOrTiedString(wonLostOrTiedStatus);
      reportGameResult(playerChoice, computerChoice, wonLostOrTiedString);
      playGame = askToPlayAgain();
    }
  } // while playGame === true
  return;
}

/**
 * Ask whether the user wants to play.
 * @returns {boolean} true if user wants to play
 * @example playGame = askToPlay();
 */
function askToPlay() {
  const playGame = confirm("Shall we play rock, paper, or scissors?");
  if (!playGame) {
    alert("OK, maybe next time.");
  }
  return playGame;
}

/**
 * Ask whether the user wants to play again.
 * @returns {boolean} true if user wants to play again
 * @example playGame = askToPlayAgain();
 */
function askToPlayAgain() {
  const playGame = confirm("Play again?");
  if (!playGame) {
    alert("OK, thanks for playing!");
  }
  return playGame;
}

/**
 * Show an alert reporting the result of the game.
 * @param {string} playerChoice Player's choice of "rock", "paper", or "scissors"
 * @param {string} computerChoice Computer's choice of "rock", "paper", or "scissors"
 * @param {string} wonLostOrTiedString Whether the player won, lost, or tied
 */
function reportGameResult(playerChoice, computerChoice, wonLostOrTiedString) {
  alert(
    `You chose ${playerChoice}.\n` +
    `The computer chose ${computerChoice}.\n` +
    `${wonLostOrTiedString}`
  );
  return;
}

/**
 * Given a won, tied, or lost status, return a string describing whether the
 * player won, lost, or tied.
 * @param   {string} wonLostOrTiedStatus One of "win", "lose", or "tie".
 * @returns {string}
 */
function getWonLostOrTiedString(wonLostOrTiedStatus) {
  let wonLostOrTiedString;
  switch (wonLostOrTiedStatus) {
    case "win":
      wonLostOrTiedString = "You won!";
      break;
    case "lose":
      wonLostOrTiedString = "You lost!";
      break;
    case "tie":
      wonLostOrTiedString = "You tied!";
      break;
    default:
      wonLostOrTiedString = "";
  }
  return wonLostOrTiedString;
}

/**
 * Given the choices of the player and the computer, determine whether the
 * player won, lost, or tied.
 * @param {string} player One of "rock", "scissors", or "paper"
 * @param {string} computer One of "rock", "scissors", or "paper"
 * @returns {string} One of "win", "lose", or "tie"
 */
function getWonLostOrTiedStatus(playerChoice, computerChoice) {
  let wonLostOrTiedStatus;
  switch (playerChoice) {
    case "rock":
      switch (computerChoice) {
        case "scissors":
          wonLostOrTiedStatus = "win";
          break;
        case "paper":
          wonLostOrTiedStatus = "lose";
          break;
        case "rock":
          wonLostOrTiedStatus = "tie";
          break;
        default:
          wonLostOrTiedStatus = "computer choice not found";
      }
      break;

    case "paper":
      switch (computerChoice) {
        case "scissors":
          wonLostOrTiedStatus = "lose";
          break;
        case "paper":
          wonLostOrTiedStatus = "tie";
          break;
        case "rock":
          wonLostOrTiedStatus = "win";
          break;
        default:
          wonLostOrTiedStatus = "computer choice not found";
      }
      break;

    case "scissors":
      switch (computerChoice) {
        case "scissors":
          wonLostOrTiedStatus = "tie";
          break;
        case "paper":
          wonLostOrTiedStatus = "win";
          break;
        case "rock":
          wonLostOrTiedStatus = "lose";
          break;
        default:
          wonLostOrTiedStatus = "computer choice not found";
      }
      break;

    default:
      wonLostOrTiedStatus = "player choice not found";
  }
  return wonLostOrTiedStatus;
}

/**
 * Get the player's choice of "rock", "paper", "scissors".
 * Return an array containing values for playGame, validChoice, and
 * playerChoice.
 * @returns {array} [0] playGame boolean, [1] validChoice boolean,
 * [2] playerChoice string "rock", "paper", or "scissors"; or undefined
 * @example [playGame, validChoice, playerChoice] = getPlayerChoice();
 */
function getPlayerChoice() {
  const returnValues = [false, false, undefined];
  const rawPlayerChoice = prompt("Please enter rock, paper, or scissors.");
  if (rawPlayerChoice === null) {
    alert("I guess you changed your mind. Maybe next time.");
  } else {
    returnValues[0] = true; // playGame
    const playerChoice = rawPlayerChoice.trim().toLowerCase();
    if (
      playerChoice !== "rock" &&
      playerChoice !== "paper" &&
      playerChoice !== "scissors"
    ) {
      alert(`Your choice "${rawPlayerChoice}" is not valid.`);
    } else {
      returnValues[1] = true; // validChoice
      returnValues[2] = playerChoice; // playerChoice
    }
  }
  return returnValues;
}

/**
 * Return a random choice of "rock", "paper", or "scissors".
 * @returns {string}
 */
function getComputerChoice() {
  let choices = ["rock", "paper", "scissors"];
  let index = Math.floor(Math.random() * 3);
  let computerChoice = choices[index];
  return computerChoice;
}
