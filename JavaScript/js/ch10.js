"use strict";
// Dave Gray's JavaScript tutorial at https://courses.davegray.codes/.
// Chapter 10 User Input (54:39)

// alert()
alert("Hello World!");

// confirm()
const result = confirm("OK === true\nCancel === false");
alert(result);

// prompt()
// If the user clicks Cancel, prompt returns null.
// ?? is the nullish coalescing operator.
let enteredName = prompt("Please enter your name.");
alert(`"${enteredName}"` ?? "You didn't enter your name.");

// If the user clicks OK without entering any data,
// prompt returns "", the empty string.
// Both null and "" are falsy.
// Another try at checking whether a name was entered.
const name2 = prompt("Please enter your name.");
if (name2) {
  const trimmedName = name2.trim();
  if (trimmedName) {
    alert(`Trimmed name is "${trimmedName}"`);
  } else {
    alert("After trimming, the name was empty.");
  }
} else {
  alert("You didn't enter a name.");
}
