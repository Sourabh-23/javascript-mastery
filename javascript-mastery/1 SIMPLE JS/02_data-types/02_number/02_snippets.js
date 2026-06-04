"use strict";

/*
Path: 02-data-types/number/snippets.js
Topic: Number

How to study:
1. Read one example.
2. Predict output.
3. Run this file.
4. Change one line and run again.

Run:
node 02-data-types/number/snippets.js
*/

function section(label) {
  console.log("\n--- " + label + " ---");
}

section("Topic");
console.log("Number stores numeric values and can produce NaN for invalid numeric operations.");

section("Example 1: Number math");
{
  const price = 99.5;
  console.log(price + 10);
  console.log(price * 2);
}

/////////////////////////////

section("Example 2: Parsing number");
{
  const page = "2";
  console.log(Number(page));
  console.log(Number("abc"));
}

/////////////////////////////

section("Example 3: NaN check");
{
  const value = Number("abc");
  console.log(Number.isNaN(value));
  console.log(value === NaN);
}

/////////////////////////////
