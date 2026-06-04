"use strict";

/*
Path: 02-data-types/type-conversion/snippets.js
Topic: Type Conversion

How to study:
1. Read one example.
2. Predict output.
3. Run this file.
4. Change one line and run again.

Run:
node 02-data-types/type-conversion/snippets.js
*/

function section(label) {
  console.log("\n--- " + label + " ---");
}

section("Topic");
console.log("Type conversion means manually converting values.");

section("Example 1: Manual conversion");
{
  console.log(Number("25"));
  console.log(String(100));
  console.log(Boolean(1));
}

/////////////////////////////

section("Example 2: Backend query parse");
{
  function parsePage(query) {
    return Number(query.page ?? 1);
  }
  console.log(parsePage({ page: "2" }));
}

/////////////////////////////

section("Example 3: Invalid conversion");
{
  const value = Number("abc");
  console.log(value);
  console.log(Number.isNaN(value));
}

/////////////////////////////
