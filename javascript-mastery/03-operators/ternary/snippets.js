"use strict";

/*
Path: 03-operators/ternary/snippets.js
Topic: Ternary

How to study:
1. Read one example.
2. Predict output.
3. Run this file.
4. Change one line and run again.

Run:
node 03-operators/ternary/snippets.js
*/

function section(label) {
  console.log("\n--- " + label + " ---");
}

section("Topic");
console.log("Ternary is a compact if/else expression.");

section("Example 1: Basic idea");
{
  const topic = "Ternary";
  console.log("Learning:", topic);
}

section("Example 2: Practical use");
{
  function show(value) {
    return "Value: " + value;
  }
  console.log(show("Ternary"));
}

section("Example 3: Mini check");
{
  const steps = ["read", "run", "revise"];
  console.log(steps.join(" -> "));
}
