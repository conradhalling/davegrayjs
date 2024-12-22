"use strict";
// Dave Gray's JavaScript tutorial at https://courses.davegray.codes/.
// Chapter 20 Handling Errors (3:52:20)

// Demonstrations of errors
// variable = "Dave";       // ReferenceError

// Object..create();        // SyntaxError; can't catch and fix

// const name = "Dave";
// name = "Joe";            // TypeError

// You can learn the class of an object using the object.constructor.name
// attribute.

// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/try...catch
// for examples of filtering through error types, converting an error to
// an Error object, and rethrowing an error that your code can't handle.
// try {
//     myRoutine(); // may throw three types of exceptions
// } catch (e) {
//     if (e instanceof TypeError) {
//         // statements to handle TypeError exceptions
//     } else if (e instanceof RangeError) {
//         // statements to handle RangeError exceptions
//     } else if (e instanceof EvalError) {
//         // statements to handle EvalError exceptions
//     } else {
//         // statements to handle any unspecified exceptions
//         logMyErrors(e); // pass exception object to error handler
//         throw e; // re-throw the error unchanged
//     }
// }


// Logging errors.
const makeError1 = () => {
    try {
        // Attempt to assign a value to a const variable.
        const name = "Dave";
        name = "Joe";
    }
    catch (err) {
        console.warn(err);
        console.log(err);
        console.error(err);
        console.error(err.name);                // TypeError
        console.error(err.message);
        console.error(err.stack);
        console.table(err);
        console.log(err.constructor.name);      // TypeError
        // Can use a logging function to log the error to an error log.
    }
};
makeError1();


// Throw a custom error.
const makeError2 = () => {
    try {
        throw new CustomError2("This is a custom error!");
    } catch (err) {
        console.error(err.stack);
        console.log(err.name);               // CustomError2
        console.log(err.constructor.name);   // CustomError2  
    }
};

// Create a custom error function.
// This is a pre-ES2015 (ES6) way of creating an object without using
// a class. The function must be called using "new".
// Note the recommended Quick Fix:
// "This constructor function may be converted to a class declaration."
// "Convert function to an ES2015 class"
function CustomError2(message) {
    this.message = message;
    this.name = "CustomError2";
    this.stack = `${this.name}: ${this.message}`;
}

makeError2();

// Extra.
// Use a true class.
// This code is a copy of makeError2 and CustomError2, converted by VS Code
// into a class.

// Throw a custom error.
const makeError3 = () => {
    try {
        throw new CustomError3("This is a custom error!");
    } catch (err) {
        console.error(err.name);                // CustomError3
        console.error(err.message);
        console.error(err.stack);
        console.log(err.constructor.name);      // CustomError3
    }
};

// A class for creating a new error object.
class CustomError3 {
    constructor(message) {
        this.message = message;
        this.name = "CustomError3";
        this.stack = `${this.name}: ${this.message}`;
    }
}

makeError3();


// Yet Another Way to create a custom error using the Error constructor.
const makeError4 = () => {
    try {
        throw new Error("This is a custom Error!");
    } catch (err) {
        console.error(err);
        console.error(err.name);                // Error
        console.log(err.constructor.name);      // Error
    }
};

makeError4();


// Use a finally block.
const makeError5 = () => {
    try {
        throw new Error("This is an error!");
    } catch (err) {
        console.error(err);
    } finally {
        console.log("...finally");
    }
};

makeError5();


// A working example.
const makeError6 = () => {
    let i = 1;
    while (i <= 5) {
        try {
            if (i % 2 !== 0) {
                throw new Error("Odd number!");
            }
            console.log("Even number!");
        }
        catch (err) {
            console.error(err.stack);
        }
        finally {
            console.log("...finally");
            i++;
        }
    }
};

makeError6();


// Communicate that the script completed successfully.
console.log("Script completed successfully.");
