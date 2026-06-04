"use strict";

/*
Path: 05-arrays/includes/snippets.js
Topic: Includes

How to study:
1. Read one example.
2. Predict output.
3. Run this file.
4. Change one line and run again.

Run:
node 05-arrays/includes/snippets.js
*/

function section(label) {
  console.log("\n--- " + label + " ---");
}

section("Topic");
console.log("includes checks whether a value exists.");

section("Example 1: Array input");
{
  const items = [1, 2, 3];
  console.log(items);
}

section("Example 2: Use ${topic}");
{
  console.log("Practice Includes with one small array.");
}

section("Example 3: Interview habit");
{
  console.log("Check mutation, return value, and edge cases.");
}
