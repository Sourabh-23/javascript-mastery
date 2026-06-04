"use strict";

/*
Path: 04-functions/higher-order-function/snippets.js
Topic: Higher Order Function

How to study:
1. Read one example.
2. Predict output.
3. Run this file.
4. Change one line and run again.

Run:
node 04-functions/higher-order-function/snippets.js
*/

function section(label) {
  console.log("\n--- " + label + " ---");
}

section("Topic");
console.log("Higher-order functions receive or return functions.");

section("Example 1: Function returns function");
{
  function multiplier(factor) {
    return (num) => num * factor;
  }
  console.log(multiplier(2)(5));
}

/////////////////////////////

section("Example 2: Function takes function");
{
  function runTwice(fn) {
    fn();
    fn();
  }
  runTwice(() => console.log("run"));
}

/////////////////////////////

section("Example 3: Backend guard");
{
  function requireRole(role) {
    return (user) => user.role === role;
  }
  console.log(requireRole("admin")({ role: "admin" }));
}

/////////////////////////////
