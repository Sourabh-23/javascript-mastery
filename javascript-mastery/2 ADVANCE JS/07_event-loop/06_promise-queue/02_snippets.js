"use strict";

/*
Path: 16-event-loop/promise-queue/snippets.js
Topic: Promise Queue

How to study:
1. Read one example.
2. Predict output.
3. Run this file.
4. Change one line and run again.

Run:
node 16-event-loop/promise-queue/snippets.js
*/

function section(label) {
  console.log("\n--- " + label + " ---");
}

section("Topic");
console.log("Promise queue is the microtask queue for promise reactions.");

section("Example 1: Basic idea");
{
  const topic = "Promise Queue";
  console.log("Learning:", topic);
}

/////////////////////////////

section("Example 2: Practical use");
{
  function show(value) {
    return "Value: " + value;
  }
  console.log(show("Promise Queue"));
}

/////////////////////////////

section("Example 3: Mini check");
{
  const steps = ["read", "run", "revise"];
  console.log(steps.join(" -> "));
}

/////////////////////////////
