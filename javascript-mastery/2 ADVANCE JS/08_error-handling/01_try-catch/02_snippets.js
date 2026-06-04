"use strict";

/*
Path: 17-error-handling/try-catch/snippets.js
Topic: Try Catch

How to study:
1. Read one example.
2. Predict output.
3. Run this file.
4. Change one line and run again.

Run:
node 17-error-handling/try-catch/snippets.js
*/

function section(label) {
  console.log("\n--- " + label + " ---");
}

section("Topic");
console.log("try-catch handles runtime errors.");

section("Example 1: Catch JSON error");
{
  try {
    JSON.parse("{bad");
  } catch (error) {
    console.log(error.name);
  }
}

/////////////////////////////

section("Example 2: Continue after catch");
{
  try {
    throw new Error("failed");
  } catch (error) {
    console.log(error.message);
  }
  console.log("still running");
}

/////////////////////////////

section("Example 3: Safe parse");
{
  function safeParse(input) {
    try {
      return JSON.parse(input);
    } catch {
      return null;
    }
  }
  console.log(safeParse("{bad"));
}

/////////////////////////////
