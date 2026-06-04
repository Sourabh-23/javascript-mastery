"use strict";

/*
Path: 10-execution-context/function-execution-context/output-questions.js
Topic: Function Execution Context
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
  console.log("\nQ" + (index + 1) + " - Function Execution Context");
  console.log(question.code);
  console.log("Expected:", question.expected);
  console.log("Why:", question.why);
}

module.exports = questions;
