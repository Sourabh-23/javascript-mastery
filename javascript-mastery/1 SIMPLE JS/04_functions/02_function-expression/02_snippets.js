"use strict";

/*
Path: 04-functions/function-expression/snippets.js
Topic: Function Expression

How to study:
1. Read one example.
2. Predict output.
3. Run this file.
4. Change one line and run again.

Run:
node 04-functions/function-expression/snippets.js
*/

function section(label) {
  console.log("\n--- " + label + " ---");
}

section("Topic");
console.log("Function expressions store functions in variables.");

section("Example 1: Stored in const");
{
  const add = function (a, b) {
    return a + b;
  };
  console.log(add(2, 3));
}

/////////////////////////////

section("Example 2: Not callable before assignment");
{
  const multiply = function (a, b) {
    return a * b;
  };
  console.log(multiply(2, 3));
}

/////////////////////////////

section("Example 3: Pass as callback");
{
  const format = function (name) {
    return name.toUpperCase();
  };
  console.log(format("aman"));
}

/////////////////////////////
