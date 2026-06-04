"use strict";

/*
Path: 10-execution-context/execution-questions/snippets.js
Topic: Execution Questions

How to study:
1. Read one example.
2. Predict output.
3. Run this file.
4. Change one line and run again.

Run:
node 10-execution-context/execution-questions/snippets.js
*/

function section(label) {
  console.log("\n--- " + label + " ---");
}

section("Topic");
console.log("Execution questions test creation and execution tracing.");

section("Example 1: Basic idea");
{
  const topic = "Execution Questions";
  console.log("Learning:", topic);
}

/////////////////////////////

section("Example 2: Practical use");
{
  function show(value) {
    return "Value: " + value;
  }
  console.log(show("Execution Questions"));
}

/////////////////////////////

section("Example 3: Mini check");
{
  const steps = ["read", "run", "revise"];
  console.log(steps.join(" -> "));
}

/////////////////////////////
