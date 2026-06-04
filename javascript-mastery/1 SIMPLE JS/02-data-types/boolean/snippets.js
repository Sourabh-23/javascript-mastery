"use strict";

/*
Path: 02-data-types/boolean/snippets.js
Topic: Boolean

How to study:
1. Read one example.
2. Predict output.
3. Run this file.
4. Change one line and run again.

Run:
node 02-data-types/boolean/snippets.js
*/

function section(label) {
  console.log("\n--- " + label + " ---");
}

section("Topic");
console.log("Boolean stores true or false and controls conditions.");

section("Example 1: Boolean values");
{
  const isLoggedIn = true;
  console.log(isLoggedIn);
  console.log(!isLoggedIn);
}

section("Example 2: Condition");
{
  const hasToken = true;
  if (hasToken) {
    console.log("allow request");
  }
}

section("Example 3: Boolean conversion");
{
  console.log(Boolean(""));
  console.log(Boolean("hello"));
  console.log(Boolean(0));
}
