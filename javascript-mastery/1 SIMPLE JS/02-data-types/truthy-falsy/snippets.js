"use strict";

/*
Path: 02-data-types/truthy-falsy/snippets.js
Topic: Truthy Falsy

How to study:
1. Read one example.
2. Predict output.
3. Run this file.
4. Change one line and run again.

Run:
node 02-data-types/truthy-falsy/snippets.js
*/

function section(label) {
  console.log("\n--- " + label + " ---");
}

section("Topic");
console.log("Truthy and falsy values decide condition behavior.");

section("Example 1: Falsy values");
{
  console.log(Boolean(""));
  console.log(Boolean(0));
  console.log(Boolean(null));
}

section("Example 2: Truthy values");
{
  console.log(Boolean("false"));
  console.log(Boolean([]));
  console.log(Boolean({}));
}

section("Example 3: Condition use");
{
  const token = "";
  console.log(token ? "allow" : "deny");
}
