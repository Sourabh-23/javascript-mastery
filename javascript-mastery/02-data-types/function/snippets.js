"use strict";

/*
Path: 02-data-types/function/snippets.js
Topic: Function

How to study:
1. Read one example.
2. Predict output.
3. Run this file.
4. Change one line and run again.

Run:
node 02-data-types/function/snippets.js
*/

function section(label) {
  console.log("\n--- " + label + " ---");
}

section("Topic");
console.log("Function is reusable code and also a first-class value.");

section("Example 1: Declaration");
{
  function add(a, b) {
    return a + b;
  }
  console.log(add(2, 3));
}

section("Example 2: Function as value");
{
  const multiply = function (a, b) {
    return a * b;
  };
  console.log(multiply(2, 3));
}

section("Example 3: Function as argument");
{
  function run(fn) {
    return fn("Aman");
  }
  console.log(run((name) => name.toUpperCase()));
}
