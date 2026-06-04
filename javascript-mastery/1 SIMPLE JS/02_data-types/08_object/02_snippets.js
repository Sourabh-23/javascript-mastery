"use strict";

/*
Path: 02-data-types/object/snippets.js
Topic: Object

How to study:
1. Read one example.
2. Predict output.
3. Run this file.
4. Change one line and run again.

Run:
node 02-data-types/object/snippets.js
*/

function section(label) {
  console.log("\n--- " + label + " ---");
}

section("Topic");
console.log("Object stores key-value pairs.");

section("Example 1: Key-value data");
{
  const user = { id: 1, name: "Aman" };
  console.log(user.name);
}

/////////////////////////////

section("Example 2: Add property");
{
  const user = { name: "Aman" };
  user.role = "dev";
  console.log(user);
}

/////////////////////////////

section("Example 3: Object methods");
{
  const user = { id: 1, name: "Aman" };
  console.log(Object.keys(user));
  console.log(Object.values(user));
}

/////////////////////////////
