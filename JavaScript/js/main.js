// Dave Gray's JavaScript tutorial at https://courses.davegray.codes/.
// Uncomment code to execute it.

// Chapter 2 Link JavaScript to HTML (7:44)

// console.log("Hello World!");
// console.log(typeof "Dave");
// console.log(typeof 42);
// console.log(typeof true);

// Chapter 3 Strings (15:17)

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

// Chapter 4 Numbers (22:14)

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

// Chapter 5 Math Methods (27:55)

// console.log(Math.PI);                           // 3.141592653589793
// console.log(Math.trunc(Math.PI));               // 3
// console.log(Math.round(3.5));                   // 4
// console.log(Math.ceil(Math.PI))                 // 4
// console.log(Math.floor(Math.PI))                // 3
// console.log(Math.pow(2, 4))                     // 16
// console.log(Math.min(2, 5, 9))                  // 2
// console.log(Math.max(2, 5, 9))                  // 9
// console.log(Math.random())                      // [0, 1)
// console.log(Math.floor(Math.random() * 10) + 1) //  A random number from 1 .. 10

// Chapter 6 Code Challenge (32:59)

// // Write code that returns a random letter from a name.
// const name = "Dave"
// console.log(name.charAt(Math.floor(Math.random() * name.length)))

// Chapter 7 If Statements (40:07)

// // This code creates a template literal using backticks.
// let customerIsBanned = false;
// let soup = "chicken noodle soup";
// let crackers = true;
// let reply;
// if (customerIsBanned) {
//     reply = "No soup for you!";
// }
// else if (soup && crackers) {
//     reply = `Here's your order of ${soup} and crackers.`;
// }
// else if (soup) {
//     reply = `Here's your order of ${soup}.`;
// } else {
//     reply = "Sorry, we're out of soup.";
// }
// console.log(reply);

// let testScore = 59;
// let collegeStudent = true;
// let grade;
// if (testScore >= 90) {
//     grade = "A";
// }
// else if (testScore >= 80) {
//     grade = "B";
// }
// else if (testScore >= 70) {
//     grade = "C";
// }
// else if (testScore >= 60) {
//     grade = "D";
// } else {
//     if (collegeStudent) {
//         grade = "U";
//     }
//     else {
//         grade = "F";
//     }
// }
// console.log(grade);

// // This is an incomplete rock-paper-scissors decision tree.
// let playerOne = "rock"
// let computer = "paper"
// if (playerOne === computer) {
//     // tie game
// } else if (playerOne === "rock") {
//     if (computer === "paper") {
//         // computer wins
//     } else {
//         // playerOne wins because rock beats scissors
//     }
// } else if (playerOne === "paper") {
//     if (computer === "scissors") {
//         // computer wins
//     } else {
//         // playerOne wins because paper beats rock
//     }
// } else {
//     // By elimination, playerOne === "scissors"
//     if (computer === "rock") {
//         // computer wins because player is scissors
//     }
//     else {
//         // playerOne wins because scissors beats paper
//     }
// }

// Chapter 8 Switch Statements (46:11)

// // A simple switch statement.
// // Type mismatches (e.g., "2" with 2) cause the default clause to be executed.
// switch (2) {
//     case 1:
//         console.log(1);
//         break;
//     case 2:
//         console.log(2);
//         break;
//     case 3:
//         console.log(3);
//         break;
//     default:
//         console.log("No match");
// }

// // Generate random numbers from 1 to 5 and match against
// // 1, 2, or 3.
// switch (Math.floor(Math.random() * 5) + 1) {
//     case 1:
//         console.log(1);
//         break;
//     case 2:
//         console.log(2);
//         break;
//     case 3:
//         console.log(3);
//         break;
//     default:
//         console.log("No match");
// }

// // Create a decision tree for rock-paper-scissors.
// // My variation for the default clause checks for an
// // error in the algorithm where a combination is
// // not checked correctly.
// let playerOne = "scissors";
// let computer = "rock";
// switch (playerOne) {
//     case computer:
//         console.log("Tie game!");
//         break;
//     case "rock":
//         if (computer === "paper") {
//             console.log("computer wins!");
//         } else {
//             console.log("playerOne wins!");
//         }
//         break;
//     case "paper":
//         if (computer === "scissors") {
//             console.log("computer wins!");
//         }
//         else {
//             console.log("playerOne wins!");
//         }
//         break;
//     case "scissors":
//         if (computer == "rock") {
//             console.log("computer wins!");
//         } else {
//             console.log("playerOne wins!");
//         }
//         break;
//     default:
//         console.log("Algorithm error!");
// }

// Chapter 9 Ternary Operator (49:40)

// let soup = "Chicken Noodle Soup";
// let response = soup ? `Yes, we have ${soup}.` : "Sorry, no soup today.";
// console.log(response);
// let isCustomerBanned = true;
// let soupAccess = isCustomerBanned
//   ? "Sorry, no soup for you!"
//   : soup
//     ? `Yes, we have ${soup} today.`
//     : "Sorry, no soup today.";
// console.log(soupAccess);

// let testScore = 79;
// let myGrade = testScore > 89 ? "A"
//   : testScore > 79 ? "B"
//     : testScore > 69 ? "C"
//       : testScore > 59 ? "D"
//         : "F";
// console.log(`My test grade is a ${myGrade}.`);

// let playerOne = "rock";
// let computer = "paper";
// let result =
//   playerOne === computer ? "Tie game!"
//     : playerOne === "rock" && computer === "paper"
//       ? "Computer wins!"
//       : playerOne === "paper" && computer === "scissors"
//         ? "Computer wins!"
//         : playerOne === "scissors" && computer === "rock"
//           ? "Computer wins!" : "PlayerOne wins!";
// console.log(result);

// Chapter 10 User Input (54:39)

// // alert()
// alert("Hello World!");

// // confirm()
// result = confirm("OK === true\nCancel === false");
// console.log(result);

// // prompt()
// // If the user clicks Cancel, prompt returns null.
// // ?? is the nullish coalescing operator.
// let name = prompt("Please enter your name.");
// console.log(name ?? "You didn't enter your name.");

// // If the user clicks OK without entering any data,
// // prompt returns "", the empty string.
// // Both null and "" are falsy.
// // Another try at checking whether a name was entered.
// let name2 = prompt("Please enter your name.");
// trimmedName = name2.trim();
// if (trimmedName) {
//   console.log(trimmedName);
// } else {
//   console.log("You didn't enter your name.");
// }

// Chapter 11 Your First Game (1:04:38)

// // A simple interactive game of rock, paper, or scissors.
// // Dave does a good job of showing how the game is developed
// // from scratch, including design errors. The design is limited
// // without knowing how to write functions.
// // In my experience, computer is rarely "scissors".
// // It is difficult to validate the code on all branches
// // without a test suite.
// // A linter would have helped me find some bugs.
// let playGame = confirm("Shall we play rock, paper, or scissors?");
// if (playGame === false) {
//   alert("OK, maybe next time.");
// } else {
//   let playerChoice = prompt("Please enter rock, paper, or scissors.");
//   if (playerChoice === null || playerChoice === "") {
//     alert("I guess you changed your mind. Maybe next time.");
//   } else {
//     let playerOne = playerChoice.trim().toLowerCase();
//     if (playerOne !== "rock" && playerOne !== "paper" && playerOne !== "scissors") {
//       alert(`You made an invalid choice of "${playerChoice}".`);
//     }
//     else {
//       // playerOne is a valid choice.
//       // Get the computer's choice.
//       let computerChoice = Math.floor(Math.random() * 3);
//       // console.log(`computerChoice is ${computerChoice}.`);
//       let computer = computerChoice === 0 ? "rock"
//         : computerChoice === 1 ? "paper"
//           : "scissors";
//       // console.log(`computer is ${computer}.`);

//       // Decision tree.
//       if (computer === playerOne) {
//         alert(`You chose ${playerOne}.\nThe computer chose ${computer}.\nThe result is a tie!`);
//       }
//       else {
//         if (computer === "rock") {
//           if (playerOne === "paper") {
//             alert(`You chose ${playerOne}.\nThe computer chose ${computer}.\nYou won!`);
//           } else {
//             alert(`You chose ${playerOne}.\nThe computer chose ${computer}.\nThe lost!`);
//           }
//         }
//         else if (computer === "paper") {
//           if (playerOne === "scissors") {
//             alert(`You chose ${playerOne}.\nThe computer chose ${computer}.\nYou won!`);
//           }
//           else {
//             alert(`You chose ${playerOne}.\nThe computer chose ${computer}.\nYou lost!`);
//           }
//         }
//         else { // computer === "scissors"
//           if (playerOne === "rock") {
//             alert(`You chose ${playerOne}.\nThe computer chose ${computer}.\nYou won!`);
//           } else {
//             alert(`You chose ${playerOne}.\nThe computer chose ${computer}.\nYou lost!`);
//           }
//         }
//       }

//       // Play again?
//       let playAgain = confirm("Play again?");
//       if (playAgain) {
//         location.reload();
//       } else {
//         alert("OK, thanks for playing!");
//       }
//     }
//   }
// }

// Chapter 12 Loops (1:20:26)

// // while loops

// let myNumber = 0;
// // Outputs 0 ... 48.
// // while (myNumber < 50) {
// //   console.log(myNumber);
// //   myNumber += 2;
// // }

// myNumber = 0;
// // Outputs 2 ... 50.
// do {
//   myNumber += 2;
//   console.log(myNumber);
// } while (myNumber < 50);

// for loops

// // Outputs 0 ... 10.
// for (let i = 0; i <= 10; i++) {
//   console.log(i);
// }

// // Outputs the individual letters in the name variable.
// let name = "Dave";
// for (let i = 0; i < name.length; i++) {
//   console.log(name.charAt(i));
// }

// // Outputs "D", "a", "v".
// let name = "Dave";
// let counter = 0;
// let myLetter;
// while (true) {
//   myLetter = name[counter];
//   console.log(myLetter);
//   if (myLetter === "v") {
//     break;
//   }
//   counter++;
// }

// // Demonstrate using continue.
// // Outputs "D", "a", "e".
// let myName = "Dave";
// let counter = 0;
// let myLetter;
// while (counter <= 3) {
//   myLetter = myName[counter];
//   console.log(myLetter);
//   if (counter === 1) {
//     counter += 2;
//     continue;
//   }
//   counter += 1;
// }

// Chapter 13 Functions (1:36:20)

// // Create and call a simple function.
// function sum(num1, num2) {
//   return num1 + num2;
// }
// console.log(sum(2, 6));

// // Extract a user name from an email address.
// function getUserNameFromEmail(email) {
//   return email.slice(0, email.indexOf("@"));
// }
// console.log(getUserNameFromEmail("user@github.com"));

// // Assign an anonymous function to a variable.
// const getUserNameFromEmail = function (email) {
//   return email.slice(0, email.indexOf("@"));
// };
// console.log(getUserNameFromEmail("dave@davesdomain.com"));

// // Create a function using fat arrow notation.
// const getUserNameFromEmail = (email) => {
//   return email.slice(0, email.inddexOf("@"));
// };
// console.log(getUserNameFromEmail("dave@davesdomain.com"));

// // Create a toProperCase function.
// const toProperCase = (name) => {
//   return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
// };
// console.log(toProperCase("dAvE"));
// console.log(toProperCase("september"));

// Chapter 14 Scope (1:48:10)

// var x = 1;
// let y = 2;
// const z = 3;

// console.log(`global: ${x}`);
// console.log(`global: ${y}`);
// console.log(`global: ${z}`);

// function myFunc() {
//   var x = 10;
//   const z = 5;
//   {
//     var x = 11;  // var gives function scope; overrides var x = 10
//     const z = 6; // block scope
//     console.log(`block: ${x}`);
//     console.log(`block: ${y}`);
//     console.log(`block: ${z}`);
//   }
//   console.log(`function: ${x}`);
//   console.log(`function: ${y}`);
//   console.log(`function: ${z}`);
// }
// myFunc();

// console.log(`global: ${x}`);
// console.log(`global: ${y}`);
// console.log(`global: ${z}`);

// Chapter 15 Arrays (2:05:29)

// const myArray = [];
// myArray[0] = "Dave";
// myArray[1] = 1001;
// myArray[2] = false;

// console.log(myArray);
// console.log(myArray.length);
// console.log(myArray[myArray.length - 1]);
// console.log(myArray[1]);

// let newLength = myArray.push("school");
// console.log(newLength);
// console.log(myArray);

// let lastItem = myArray.pop();
// console.log(lastItem);
// console.log(myArray);

// newLength = myArray.unshift(42);
// console.log(newLength);
// console.log(myArray);

// let firstItem = myArray.shift();
// console.log(firstItem);
// console.log(myArray);

// // Remove an item from the middle of an array.
// // This is not recommended.
// delete myArray[1];
// // ['Dave', empty, false];
// console.log(myArray);
// console.log(myArray[1]);

// // This is extra.
// // See https://www.geeksforgeeks.org/remove-empty-elements-from-an-array-in-javascript/.
// const myArray2 = [10, , null, 20, undefined, "", 30, 40, 50];
// // [10, empty, null, 20, undefined, '', 30, 40, 50]
// console.log(myArray2);
// // empty is converted to undefined when accessed.
// for (let i = 0; i < myArray2.length; i++)
//   console.log(`${i}: ${myArray2[i]}`);

// // Remove an item from the middle of an array.
// myArray[0] = "Dave";
// myArray[1] = 1001;
// myArray[2] = false;
// let removedItems = myArray.splice(1, 1);
// console.log(myArray);
// console.log(removedItems);

// // Insert an item into an array using splice.
// myArray.splice(1, 0, 42);
// console.log(myArray);

// // Extract a subarray.
// let myArray3 = ["A", "B", "C", "D", "E", "F"];
// console.log(myArray3.slice(2));
// console.log(myArray3.slice(2, 5));

// // Reverse the array.
// myArray3.reverse();
// console.log(myArray3);

// // Join the elements of an array into a string.
// // Split them into an array again.
// let myArray3String = myArray3.join();
// console.log(myArray3String);
// myArray3String = myArray3.join("|");
// console.log(myArray3String);
// const myArray4 = myArray3String.split("|");
// console.log(myArray4);

// // Concatenate arrays.
// // + does not do what you hope.
// const myArrayA = ["G", "H", "I"];
// const myArrayB = ["J", "K", "L"];
// let newArray3 = myArrayB.concat(myArrayA);
// console.log(newArray3);

// // Using the spread (...) operator.
// myArray3 = [...myArrayB, ...myArrayA];
// console.log(myArray3);

// // Create a 2-D array,
// myArray3 = [myArrayB, myArrayA];
// console.log(myArray3);

// // Access values from arrays and multi-dimensional arrays.
// const equipShelfA = ["baseball", "football", "volleyball"];
// const equipShelfB = ["basketball", "golf balls", "tennis balls"];

// const clothesShelfA = ["tank tops", "t-shirts", "jerseys"];
// const clothesShelfB = ["sweat tops", "sweat pans", "hoodies"];

// console.log(equipShelfA[1]);
// console.log(clothesShelfB[0]);

// const equipDept = [equipShelfA, equipShelfB];
// const clothesDept = [clothesShelfA, clothesShelfB];
// console.log(equipDept[0][1]);
// console.log(clothesDept[1][0]);

// const store = [equipDept, clothesDept];
// console.log(store);
// console.log(store[0][0][1]);
// console.log(store[1][1][0]);

// Chapter 16 Refactor the Game (2:33:48)
// Use loops, functions, and arrays to refactor the rock-paper-scissors game.
// See rps1.html and rps1.js.


// Chapter 17 Objects (2:51:53)
