"use strict";

/*
Path: 07-objects/computed-properties/snippets.js
Topic: Computed Properties

How to study:
1. Read one example.
2. Predict output.
3. Run this file.
4. Change one line and run again.

Run:
node 07-objects/computed-properties/snippets.js
*/

function section(label) {
  console.log("\n--- " + label + " ---");
}

section("Topic");
console.log("Computed properties use expressions as object keys.");

section("Example 1: Basic idea");
{
  const topic = "Computed Properties";
  console.log("Learning:", topic);
}

section("Example 2: Practical use");
{
  function show(value) {
    return "Value: " + value;
  }
  console.log(show("Computed Properties"));
}

section("Example 3: Mini check");
{
  const steps = ["read", "run", "revise"];
  console.log(steps.join(" -> "));
}
