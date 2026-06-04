"use strict";

/*
Path: 17-error-handling/node-errors/snippets.js
Topic: Node Errors

How to study:
1. Read one example.
2. Predict output.
3. Run this file.
4. Change one line and run again.

Run:
node 17-error-handling/node-errors/snippets.js
*/

function section(label) {
  console.log("\n--- " + label + " ---");
}

section("Topic");
console.log("Node errors often include code fields like ENOENT.");

section("Example 1: Basic idea");
{
  const topic = "Node Errors";
  console.log("Learning:", topic);
}

section("Example 2: Practical use");
{
  function show(value) {
    return "Value: " + value;
  }
  console.log(show("Node Errors"));
}

section("Example 3: Mini check");
{
  const steps = ["read", "run", "revise"];
  console.log(steps.join(" -> "));
}
