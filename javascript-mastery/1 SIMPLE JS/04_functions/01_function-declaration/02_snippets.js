"use strict";

/*
Path: 04-functions/function-declaration/snippets.js
Topic: Function Declaration

How to study:
1. Read one example.
2. Predict output.
3. Run this file.
4. Change one line and run again.

Run:
node 04-functions/function-declaration/snippets.js
*/

function section(label) {
  console.log("\n--- " + label + " ---");
}

section("Topic");
console.log("Function declarations are named and hoisted.");

section("Example 1: Hoisted call");
{
  console.log(add(2, 3));
  function add(a, b) {
    return a + b;
  }
}

/////////////////////////////

section("Example 2: Reusable helper");
{
  function isAdult(age) {
    return age >= 18;
  }
  console.log(isAdult(20));
}

/////////////////////////////

section("Example 3: Backend style");
{
  function buildResponse(data) {
    return { success: true, data };
  }
  console.log(buildResponse({ id: 1 }));
}

/////////////////////////////
