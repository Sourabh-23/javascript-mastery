"use strict";

/*
Path: 02-data-types/symbol/snippets.js
Topic: Symbol

How to study:
1. Read one example.
2. Predict output.
3. Run this file.
4. Change one line and run again.

Run:
node 02-data-types/symbol/snippets.js
*/

function section(label) {
  console.log("\n--- " + label + " ---");
}

section("Topic");
console.log("Symbol creates unique identifiers.");

section("Example 1: Unique values");
{
  const id1 = Symbol("id");
  const id2 = Symbol("id");
  console.log(id1 === id2);
}

section("Example 2: Symbol key");
{
  const id = Symbol("id");
  const user = { [id]: 101, name: "Aman" };
  console.log(user[id]);
}

section("Example 3: Description");
{
  const token = Symbol("token");
  console.log(token.description);
}
