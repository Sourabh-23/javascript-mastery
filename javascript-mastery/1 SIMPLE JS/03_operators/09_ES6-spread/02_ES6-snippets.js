"use strict";

/*
Path: 03-operators/spread/snippets.js
Topic: Spread

How to study:
1. Read one example.
2. Predict output.
3. Run this file.
4. Change one line and run again.

Run:
node 03-operators/spread/snippets.js
*/

function section(label) {
  console.log("\n--- " + label + " ---");
}

section("Topic");
console.log("Spread expands arrays or objects.");

section("Example 1: Basic idea");
{
  const topic = "Spread";
  console.log("Learning:", topic);
}

/////////////////////////////

section("Example 2: Practical use");
{
  function show(value) {
    return "Value: " + value;
  }
  console.log(show("Spread"));
}

/////////////////////////////

section("Example 3: Mini check");
{
  const steps = ["read", "run", "revise"];
  console.log(steps.join(" -> "));
}

/////////////////////////////
