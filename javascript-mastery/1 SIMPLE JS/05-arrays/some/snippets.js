"use strict";

/*
Path: 05-arrays/some/snippets.js
Topic: Some

How to study:
1. Read one example.
2. Predict output.
3. Run this file.
4. Change one line and run again.

Run:
node 05-arrays/some/snippets.js
*/

function section(label) {
  console.log("\n--- " + label + " ---");
}

section("Topic");
console.log("some checks if at least one item matches.");

section("Example 1: Array input");
{
  const items = [1, 2, 3];
  console.log(items);
}

section("Example 2: Use ${topic}");
{
  console.log("Practice Some with one small array.");
}

section("Example 3: Interview habit");
{
  console.log("Check mutation, return value, and edge cases.");
}
