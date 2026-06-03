"use strict";

/*
Path: 15-async-javascript/callbacks/snippets.js
Topic: Callbacks

How to study:
1. Read one example.
2. Predict output.
3. Run this file.
4. Change one line and run again.

Run:
node 15-async-javascript/callbacks/snippets.js
*/

function section(label) {
  console.log("\n--- " + label + " ---");
}

section("Topic");
console.log("Callbacks are functions executed later.");

section("Example 1: Basic idea");
{
  const topic = "Callbacks";
  console.log("Learning:", topic);
}

section("Example 2: Practical use");
{
  function show(value) {
    return "Value: " + value;
  }
  console.log(show("Callbacks"));
}

section("Example 3: Mini check");
{
  const steps = ["read", "run", "revise"];
  console.log(steps.join(" -> "));
}
