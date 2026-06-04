"use strict";

/*
Path: 02-data-types/type-coercion/snippets.js
Topic: Type Coercion

How to study:
1. Read one example.
2. Predict output.
3. Run this file.
4. Change one line and run again.

Run:
node 02-data-types/type-coercion/snippets.js
*/

function section(label) {
  console.log("\n--- " + label + " ---");
}

section("Topic");
console.log("Type coercion means JavaScript converts values automatically.");

section("Example 1: Plus with string");
{
  console.log("5" + 2);
}

/////////////////////////////

section("Example 2: Minus with string");
{
  console.log("5" - 2);
}

/////////////////////////////

section("Example 3: Boolean coercion");
{
  console.log(true + 1);
  console.log(false + 1);
}

/////////////////////////////
