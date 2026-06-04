"use strict";

/*
Path: 01-variables/hoisting/output-questions.js
Topic: Hoisting
Predict first, then read expected output.
*/

const questions = [
  {
    code: "console.log('A'); console.log('B');",
    expected: "A, then B",
    why: "Synchronous code runs line by line.",
  },
  {
    code: "const value = 10; console.log(value);",
    expected: "10",
    why: "The value is initialized before it is logged.",
  },
  {
    code: "console.log(typeof missingValue);",
    expected: "undefined",
    why: "typeof on an undeclared variable returns undefined.",
  },
];

for (const [index, question] of questions.entries()) {
  console.log("\nQ" + (index + 1) + " - Hoisting");
  console.log(question.code);
  console.log("Expected:", question.expected);
  console.log("Why:", question.why);
}

module.exports = questions;

//q.. Create one small example for Hoisting.
// answer:
console.log(greeting);
var greeting = "Hello, World!";

// In this example, the variable 'greeting' is hoisted to the top of its scope, but only the declaration is hoisted, not the initialization. 
// Therefore, when we try to log 'greeting' before it is assigned a value, it outputs 'undefined'. 
// After the line where 'greeting' is assigned "Hello, World!", if we were to log 'greeting' again, it would output "Hello, World!".


