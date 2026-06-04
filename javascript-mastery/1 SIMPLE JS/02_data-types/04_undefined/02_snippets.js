"use strict";

/*
Path: 02-data-types/undefined/snippets.js
Topic: Undefined

How to study:
1. Read one example.
2. Predict output.
3. Run this file.
4. Change one line and run again.

Run:
node 02-data-types/undefined/snippets.js
*/

function section(label) {
  console.log("\n--- " + label + " ---");
}

section("Topic");
console.log("undefined means a variable exists but has no assigned value.");

section("Example 1: Declared without value");
{
  let value;
  console.log(value);
}

/////////////////////////////

section("Example 2: Missing property");
{
  const user = {};
  console.log(user.name);
}

/////////////////////////////

section("Example 3: Default fallback");
{
  function greet(name) {
    return name ?? "Guest";
  }
  console.log(greet());
  console.log(greet("Aman"));
}

/////////////////////////////
