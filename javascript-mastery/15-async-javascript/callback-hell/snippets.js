"use strict";

/*
Path: 15-async-javascript/callback-hell/snippets.js
Topic: Callback Hell

How to study:
1. Read one example.
2. Predict output.
3. Run this file.
4. Change one line and run again.

Run:
node 15-async-javascript/callback-hell/snippets.js
*/

function section(label) {
  console.log("\n--- " + label + " ---");
}

section("Topic");
console.log("Callback hell is deeply nested callback code.");

section("Example 1: Basic idea");
{
  const topic = "Callback Hell";
  console.log("Learning:", topic);
}

section("Example 2: Practical use");
{
  function show(value) {
    return "Value: " + value;
  }
  console.log(show("Callback Hell"));
}

section("Example 3: Mini check");
{
  const steps = ["read", "run", "revise"];
  console.log(steps.join(" -> "));
}
