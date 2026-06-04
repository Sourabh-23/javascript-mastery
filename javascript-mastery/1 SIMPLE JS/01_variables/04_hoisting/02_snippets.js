"use strict";

/*
Path: 01-variables/hoisting/snippets.js
Topic: Hoisting

How to study:
1. Read one example.
2. Predict output.
3. Run this file.
4. Change one line and run again.

Run:
node 01-variables/hoisting/snippets.js
*/

function section(label) {
  console.log("\n--- " + label + " ---");
}

section("Topic");
console.log("Hoisting is JavaScript's creation phase behavior before execution starts.");

section("Example 1: var hoisting");
{
  console.log(a);
  var a = 10;
  console.log(a);
}

/////////////////////////////

section("Example 2: Function declaration hoisting");
{
  console.log(add(2, 3));
  function add(a, b) {
    return a + b;
  }
}

/////////////////////////////

section("Example 3: Function expression with var");
{
  console.log(typeof getName);
  var getName = function () {
    return "Aman";
  };
  console.log(getName());
}

/////////////////////////////
