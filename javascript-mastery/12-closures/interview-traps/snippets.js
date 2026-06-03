"use strict";

/*
Path: 12-closures/interview-traps/snippets.js
Topic: Interview Traps

How to study:
1. Read one example.
2. Predict output.
3. Run this file.
4. Change one line and run again.

Run:
node 12-closures/interview-traps/snippets.js
*/

function section(label) {
  console.log("\n--- " + label + " ---");
}

section("Topic");
console.log("Interview traps test tricky output behavior.");

section("Example 1: Basic idea");
{
  const topic = "Interview Traps";
  console.log("Learning:", topic);
}

section("Example 2: Practical use");
{
  function show(value) {
    return "Value: " + value;
  }
  console.log(show("Interview Traps"));
}

section("Example 3: Mini check");
{
  const steps = ["read", "run", "revise"];
  console.log(steps.join(" -> "));
}
