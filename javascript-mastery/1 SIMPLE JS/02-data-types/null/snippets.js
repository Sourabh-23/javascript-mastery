"use strict";

/*
Path: 02-data-types/null/snippets.js
Topic: Null

How to study:
1. Read one example.
2. Predict output.
3. Run this file.
4. Change one line and run again.

Run:
node 02-data-types/null/snippets.js
*/

function section(label) {
  console.log("\n--- " + label + " ---");
}

section("Topic");
console.log("null means intentionally empty value.");

section("Example 1: Intentional empty");
{
  const selectedUser = null;
  console.log(selectedUser);
}

section("Example 2: typeof null");
{
  console.log(typeof null);
}

section("Example 3: Nullish fallback");
{
  const value = null;
  console.log(value ?? "default");
}
