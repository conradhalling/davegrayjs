// Dave Gray's JavaScript tutorial at https://courses.davegray.codes/.

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
