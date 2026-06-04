"use strict";

/*
Path: 07-objects/destructuring/snippets.js
Topic: Destructuring

How to study:
1. Read one example.
2. Predict output.
3. Run this file.
4. Change one line and run again.

Run:
node 07-objects/destructuring/snippets.js
*/

function section(label) {
  console.log("\n--- " + label + " ---");
}

section("Topic");
console.log("Destructuring extracts values from objects or arrays.");

section("Example 1: Object destructuring");
{
  const user = { id: 1, name: "Aman" };
  const { id, name } = user;
  console.log(id, name);
}

/////////////////////////////

section("Example 2: Rename variable");
{
  const user = { name: "Aman" };
  const { name: userName } = user;
  console.log(userName);
}

/////////////////////////////

section("Example 3: Default value");
{
  const user = { name: "Aman" };
  const { role = "user" } = user;
  console.log(role);
}

/////////////////////////////
