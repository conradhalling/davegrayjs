"use strict";
// Dave Gray's JavaScript tutorial at https://courses.davegray.codes/.
// Chapter 18 Classes (3:14:43)
// Classes were added to JavaScript in 2015 with ES6.

// Because of limitations in the early versions of JavaScript, there is now a
// bewildering number of ways to create and use objects with various levels
// of encapsulation. It is necessary to be familiar with all of the approaches
// when reading code written by someone else. I personally am not worried
// about private attributes
// 
// My approach for new code will be to create a class with a constructor
// and underscore attributes.
//
// Note: Use the object.constructor.name attribute to get the class of an
// object. This reports "Object" if the object was created without using new.


// Declare a class with properties and a method.
// This create a new type.
// Note that methods don't need a function prefix to them.
class Pizza1 {
  constructor(type, size) {
    this.type = type;
    this.size = size;
    this.crust = "original";
  }
  bake() {
    console.log(`Baking a ${this.size} ${this.type} ${this.crust} crust pizza.`);
  }
}

// Create an instance of class Pizza and use it.
const myPizza1 = new Pizza1("pepperoni", "small");
myPizza1.bake();
console.log(myPizza1);
console.log(typeof myPizza1); // object

// Modify the instance directly using dot notation.
myPizza1.type = "supreme";
myPizza1.bake();


// A class with get and set methods.
// The arguments can be validated using this approach.
// Use a leading underscore to indicate that the property
// is private.
// I think I prefer this way.
class Pizza2 {
  constructor(type, size) {
    this.type = type;
    this.size = size;
    this._crust = "original";
  }
  get crust() {
    return this._crust;
  }
  set crust(crust) {
    // Validate the input crust value here.
    this._crust = crust;
  }
  bake() {
    console.log(`Baking a ${this.size} ${this.type} ${this.crust} crust pizza.`);
  }
}

const myPizza2 = new Pizza2("Hawaiian", "medium");
myPizza2.bake();
myPizza2.crust = "thin"; // uses the setter method
myPizza2.bake();
console.log(myPizza2.crust);


// A class with specific methods for getting and setting.
// The arguments can be validated using this appropach.
class Pizza3 {
  constructor(type, size) {
    this.type = type;
    this.size = size;
    this.crust = "original";
  }
  getCrust() {
    return this.crust;
  }
  setCrust(crust) {
    // Validate the input crust value here.
    this.crust = crust;
  }
  bake() {
    console.log(`Baking a ${this.size} ${this.type} ${this.crust} crust pizza.`);
  }
}

const myPizza3 = new Pizza3("sausage", "large");
myPizza3.bake();
myPizza3.setCrust("thick");
myPizza3.bake();
console.log(myPizza3.getCrust());


// Using a factory function.
// This approach was used before ES6 to encapsulate
// private attributes. Here, there is no access to the crust and
// size attributes from the returned object.
// This returns an object containing a closure.
// See https://www.theodinproject.com/lessons/node-path-javascript-factory-functions-and-the-module-pattern.
function pizzaFactory(pizzaSize) {
  const crust = "original";
  const size = pizzaSize;
  // Return an object that contains a fat arrow function.
  return {
    bake: () => console.log(`Baking a ${size} ${crust} crust pizza.`)
  };
}
const myPizza4 = pizzaFactory("small");
myPizza4.bake();
console.log(typeof myPizza4);           // object
console.log(myPizza4.constructor.name); // Object


// A class with truly private properties.
// This is a recent addition to the language (ECMAScript 2022).
// Once the object is created, the properties can't be changed or
// accessed directly (e.g., with dot notation).
// This was my work before reaching the part in the tutorial that
// explained this.
class Pizza5 {
  #type;
  #size;
  #crust;

  constructor(type, size, crust) {
    // This constructor uses the set method for each property.
    // Each property should be validated before it is set.
    this.#type = type;
    this.#size = size;
    this.#crust = crust;
  }
  get crust() {
    return this.#crust;
  }
  get size() {
    return this.#size;
  }
  get type() {
    return this.#type;
  }
  bake() {
    // This method uses the get method for each property.
    console.log(`Baking a ${this.size} ${this.type} ${this.crust} crust pizza.`);
  }
}

const myPizza5 = new Pizza5("spinach", "giant", "rosemary");
myPizza5.bake();
console.log(myPizza5.crust);
// myPizza4.crust = "thin"; // TypeError under "use strict";
// myPizza4.size = "small"; // TypeError under "use strict";
myPizza5.bake();


// Dave Gray's example of using a class with private attributes.
class Pizza6 {
  crust = "original";
  #sauce = "traditional";
  #size;
  constructor(pizzaSize) {
    this.#size = pizzaSize;
  }
  getCrust() {
    return this.crust;
  }
  setCrust(pizzaCrust) {
    this.crust = pizzaCrust;
  }
  hereYouGo() {
    console.log(`Here's your ${this.crust} crust ${this.#sauce} sauce ${this.#size} pizza.`);
  }
}

const myPizza6 = new Pizza6("large");
myPizza6.hereYouGo();
console.log(myPizza6.crust);
console.log(myPizza6.size); // returns undefined
// console.log(myPizza6.#size): // SyntaxError

// Extra.
// This is a pre-ES2015 (ES6) way of creating an object without using a class.
// This example is a modification of code from js20.js, where a function is
// used to create a class object.
// VS Code will offer to use a Quick Fix to convert the function to a class.
// Note the recommended Quick Fix:
// "This constructor function may be converted to a class declaration."
// "Convert function to an ES2015 class"
// The function does not work if you don't call it using new.
function Pizza7(pizzaSize) {
  this.crust = "original";
  this.size = pizzaSize;
  this.bake = `Baking a ${this.size} ${this.crust} crust pizza.`;
}
const myPizza7 = new Pizza7("small");
console.log(myPizza7.bake);
// Report the class of the object.
console.log(typeof myPizza7);             // object
console.log(myPizza7.constructor.name);   // Pizza7

try {
  // Attempt to call the function without using new.
  // This causes a TypeError.
  const myPizza7a = Pizza7("medium");
  console.log(myPizza7a.bake);
} catch (err) {
  console.error("Caught an error!\n", err);
}

// VS Code's Quick Fix for the above uses the class keyword
// and converts the function to a constructor.
class Pizza8 {
  constructor(pizzaSize) {
    this.crust = "original";
    this.size = pizzaSize;
    this.bake = `Baking a ${this.size} ${this.crust} crust pizza.`;
  }
}
const myPizza8 = new Pizza8("small");
console.log(myPizza8.bake);
// Report the class of the object.
console.log(typeof myPizza8);             // object
console.log(myPizza8.constructor.name);   // Pizza8
