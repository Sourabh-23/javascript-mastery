"use strict";

/*
Path: 11-call-stack/recursion-stack/snippets.js
Topic: Recursion Stack

How to study:
1. Read one example.
2. Predict output.
3. Run this file.
4. Change one line and run again.

Run:
node 11-call-stack/recursion-stack/snippets.js
*/

function section(label) {
  console.log("\n--- " + label + " ---");
}

section("Topic");
console.log("Recursion adds repeated function frames to the stack.");

section("Example 1: Basic idea");
{
  const topic = "Recursion Stack";
  console.log("Learning:", topic);
}

section("Example 2: Practical use");
{
  function show(value) {
    return "Value: " + value;
  }
  console.log(show("Recursion Stack"));
}

section("Example 3: Mini check");
{
  const steps = ["read", "run", "revise"];
  console.log(steps.join(" -> "));
}
