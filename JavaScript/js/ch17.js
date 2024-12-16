"use strict";
// Dave Gray's JavaScript tutorial at https://courses.davegray.codes/.
// Chapter 17 Objects (2:51:53)
// See also https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_objects.
// Objects are the equivalent of Python dictionaries.

// Create objects.
const myObj = { name: "Dave" };
console.log(myObj);
console.log(myObj.name);

const anotherObj = {
  alive: true,
  answer: 42,
  hobbies: ["Eat", "Sleep", "Code"],
  beverage: {
    morning: "coffee",
    afternoon: "iced tea",
  },
  action: function () {
    return "Hello world!";
  },
  action2: function () {
    return `Time for ${this.beverage.morning}.`;
  }
};
console.log(anotherObj.hobbies);
console.log(anotherObj["hobbies"]);
console.log(anotherObj.hobbies[0]);
console.log(anotherObj["beverage"]["morning"]);
// Return the method.
console.log(anotherObj.action);
// Return the output of the method.
console.log(anotherObj.action());
console.log(anotherObj.action2());

// Use inheritance.
const vehicle = {
  wheels: 4,
  engine: function () {
    return "Vrroooom!";
  }
};
const truck = Object.create(vehicle);
truck.doors = 2; // New property on truck only.
console.log(truck);
console.log(truck.wheels);
console.log(truck.engine());
const car = Object.create(vehicle);
car.doors = 4;
car.engine = function () { return "Whooosh!"; };
console.log(car.engine());
console.log(car.wheels); // value inherited from vehicle object
const tesla = Object.create(car);
console.log(tesla.wheels);
console.log(tesla.engine());
tesla.engine = function () { return "Shhhhh..."; };
console.log(tesla.engine());

// Access keys and values of an object.
const band = {
  vocals: "Robert Plant",
  guitar: "Jimmy Page",
  base: "John Paul Jones",
  drums: "John Bonham"
};
console.log(Object.keys(band));
console.log(Object.values(band));

// Iterate through keys (properties):
// This is the most idomatic way to loop through the properties.
for (const job in band) {
  console.log(`On ${job}, it's ${band[job]}!`);
}
// Loop through the properties using a for .. in loop, which is awkward.
const properties = Object.keys(band);
for (const index in properties) {
  console.log(`On ${properties[index]}, it's ${band[properties[index]]}!`);
}
// Loop through the properties using a for .. of loop.
for (const job of Object.keys(band)) {
  console.log(`On ${job}, it's ${band[job]}!`);
}

// Delete a property.
delete band.drums;
console.log(band.hasOwnProperty("drums"));

// Destructure an object.
// See also https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment.
const { guitar: myGuitar, base: myBass } = band;
console.log(myGuitar);
console.log(myBass);
// Use the key names to name the variables.
const { vocals, guitar, base } = band;
console.log(vocals);

// Experiment with destructuring an array.
const trees = ["elm", "oak", "maple", "fir"];
console.log(trees);
const [elm, oak, maple, fir] = trees;
console.log(elm, oak, maple, fir);

// This is tricky! Destructure an object in a function.
function sings({ vocals }) { return `${vocals} sings!`; }
console.log(sings(band));
