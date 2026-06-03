"use strict";

/*
Path: 14-call-apply-bind/bind/snippets.js
Topic: Bind

How to study:
1. Read one example.
2. Predict output.
3. Run this file.
4. Change one line and run again.

Run:
node 14-call-apply-bind/bind/snippets.js
*/

function section(label) {
  console.log("\n--- " + label + " ---");
}

section("Topic");
console.log("bind returns a new function with fixed this.");

section("Example 1: Basic idea");
{
  const topic = "Bind";
  console.log("Learning:", topic);
}

section("Example 2: Practical use");
{
  function show(value) {
    return "Value: " + value;
  }
  console.log(show("Bind"));
}

section("Example 3: Mini check");
{
  const steps = ["read", "run", "revise"];
  console.log(steps.join(" -> "));
}
