"use strict";

/*
Path: 16-event-loop/macrotask-queue/snippets.js
Topic: Macrotask Queue

How to study:
1. Read one example.
2. Predict output.
3. Run this file.
4. Change one line and run again.

Run:
node 16-event-loop/macrotask-queue/snippets.js
*/

function section(label) {
  console.log("\n--- " + label + " ---");
}

section("Topic");
console.log("Macrotask queue stores timers and similar tasks.");

section("Example 1: Basic idea");
{
  const topic = "Macrotask Queue";
  console.log("Learning:", topic);
}

section("Example 2: Practical use");
{
  function show(value) {
    return "Value: " + value;
  }
  console.log(show("Macrotask Queue"));
}

section("Example 3: Mini check");
{
  const steps = ["read", "run", "revise"];
  console.log(steps.join(" -> "));
}
