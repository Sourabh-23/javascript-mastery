"use strict";

/*
Path: 12-closures/data-hiding/snippets.js
Topic: Data Hiding

How to study:
1. Read one example.
2. Predict output.
3. Run this file.
4. Change one line and run again.

Run:
node 12-closures/data-hiding/snippets.js
*/

function section(label) {
  console.log("\n--- " + label + " ---");
}

section("Topic");
console.log("Data hiding protects values from direct outside access.");

section("Example 1: Hidden secret");
{
  function createSecret() {
    const secret = "hidden";
    return () => secret;
  }
  console.log(createSecret()());
}

section("Example 2: No direct access");
{
  function box() {
    let value = 10;
    return { get: () => value };
  }
  console.log(box().get());
}

section("Example 3: Controlled update");
{
  function counter() {
    let count = 0;
    return { inc: () => ++count };
  }
  console.log(counter().inc());
}
