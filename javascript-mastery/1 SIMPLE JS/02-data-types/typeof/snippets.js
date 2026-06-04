"use strict";

/*
Path: 02-data-types/typeof/snippets.js
Topic: Typeof

How to study:
1. Read one example.
2. Predict output.
3. Run this file.
4. Change one line and run again.

Run:
node 02-data-types/typeof/snippets.js
*/

function section(label) {
  console.log("\n--- " + label + " ---");
}

section("Topic");
console.log("typeof returns a string describing the value type.");

section("Example 1: Primitive checks");
{
  console.log(typeof "hello");
  console.log(typeof 10);
  console.log(typeof true);
}

section("Example 2: Known edge cases");
{
  console.log(typeof null);
  console.log(typeof []);
  console.log(Array.isArray([]));
}

section("Example 3: Function check");
{
  function add() {}
  console.log(typeof add);
}
