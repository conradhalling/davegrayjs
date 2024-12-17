"use strict";
// Dave Gray's JavaScript tutorial at https://courses.davegray.codes/.
// Chapter 19 JSON (3:45:35)

// JSON is used to send and receive data.
// JSON is a text format that is completely language-independent, being
// used to send and receive data in many programming languages.

const myObj = {
  name: "Dave",
  hobbies: ["eat", "sleep", "code"],
  hello: function () {
    console.log("Hello!");
  }
};
console.log(myObj);
console.log(myObj.name);
myObj.hello();
console.log(typeof myObj);

// stringify omits object methods.
const sendJSON = JSON.stringify(myObj);
console.log(sendJSON);
console.log(typeof sendJSON);

const receiveJSON = JSON.parse(sendJSON);
console.log(receiveJSON);
console.log(typeof receiveJSON);
