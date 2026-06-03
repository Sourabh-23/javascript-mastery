"use strict";

/*
Path: 01-variables/let/snippets.js
Topic: Let

How to study:
1. Read one example.
2. Predict output.
3. Run this file.
4. Change one line and run again.

Run:
node 01-variables/let/snippets.js
*/

function section(label) {
  console.log("\n--- " + label + " ---");
}

section("Topic");
console.log("let is block scoped and can be reassigned after declaration.");

section("Example 1: Reassignment");
{
  let count = 1;
  count = 2;
  console.log(count);
}

section("Example 2: Block scope");
{
  if (true) {
    let role = "admin";
    console.log(role);
  }
  try {
    console.log(role);
  } catch (error) {
    console.log(error.name);// ReferenceError
  }
}

section("Example 3: No redeclaration in same scope");
{
  let score = 10;
  score += 5;
  console.log(score);
}
