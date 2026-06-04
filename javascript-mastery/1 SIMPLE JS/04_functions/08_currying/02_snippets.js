"use strict";

/*
Path: 04-functions/currying/snippets.js
Topic: Currying

How to study:
1. Read one example.
2. Predict output.
3. Run this file.
4. Change one line and run again.

Run:
node 04-functions/currying/snippets.js
*/

function section(label) {
  console.log("\n--- " + label + " ---");
}

section("Topic");
console.log("Currying splits arguments across nested functions.");

section("Example 1: Curried add");
{
  const add = (a) => (b) => a + b;
  console.log(add(2)(3));
}

/////////////////////////////

section("Example 2: Reusable multiplier");
{
  const multiply = (factor) => (num) => num * factor;
  const double = multiply(2);
  console.log(double(5));
}

/////////////////////////////

section("Example 3: Backend filter");
{
  const hasRole = (role) => (user) => user.role === role;
  console.log(hasRole("admin")({ role: "admin" }));
}

/////////////////////////////
