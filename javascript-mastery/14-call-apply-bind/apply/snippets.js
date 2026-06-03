"use strict";

/*
Path: 14-call-apply-bind/apply/snippets.js
Topic: Apply

How to study:
1. Read one example.
2. Predict output.
3. Run this file.
4. Change one line and run again.

Run:
node 14-call-apply-bind/apply/snippets.js
*/

function section(label) {
  console.log("\n--- " + label + " ---");
}

section("Topic");
console.log("apply invokes a function immediately with custom this and array arguments.");

section("Example 1: Basic idea");
{
  const topic = "Apply";
  console.log("Learning:", topic);
}

section("Example 2: Practical use");
{
  function show(value) {
    return "Value: " + value;
  }
  console.log(show("Apply"));
}

section("Example 3: Mini check");
{
  const steps = ["read", "run", "revise"];
  console.log(steps.join(" -> "));
}
