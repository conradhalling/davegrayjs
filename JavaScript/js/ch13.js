"use strict";
// Dave Gray's JavaScript tutorial at https://courses.davegray.codes/.
// Chapter 13 Functions (1:36:20)

// Create and call a simple function.
function sum(num1, num2) {
  return num1 + num2;
}
console.log(sum(2, 6));

// Extract a user name from an email address.
function getUserNameFromEmail(email) {
  return email.slice(0, email.indexOf("@"));
}
console.log(getUserNameFromEmail("user@github.com"));

// Assign an anonymous function to a variable.
const getUserNameFromEmail2 = function (email) {
  return email.slice(0, email.indexOf("@"));
};
console.log(getUserNameFromEmail2("dave@davesdomain.com"));

// Create a function using fat arrow notation.
const getUserNameFromEmail3 = (email) => {
  return email.slice(0, email.indexOf("@"));
};
console.log(getUserNameFromEmail3("dave@davesdomain.com"));

// Create a toProperCase function.
const toProperCase = (name) => {
  return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
};
console.log(toProperCase("dAvE"));
console.log(toProperCase("september"));
