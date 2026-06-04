"use strict";

/*
Path: 07-objects/spread-rest/snippets.js
Topic: Spread Rest

How to study:
1. Read one example.
2. Predict output.
3. Run this file.
4. Change one line and run again.

Run:
node 07-objects/spread-rest/snippets.js
*/

function section(label) {
  console.log("\n--- " + label + " ---");
}

section("Topic");
console.log("Spread copies/expands and rest collects remaining values.");

section("Example 1: Basic idea");
{
  const topic = "Spread Rest";
  console.log("Learning:", topic);
}

/////////////////////////////

section("Example 2: Practical use");
{
  function show(value) {
    return "Value: " + value;
  }
  console.log(show("Spread Rest"));
}

/////////////////////////////

section("Example 3: Mini check");
{
  const steps = ["read", "run", "revise"];
  console.log(steps.join(" -> "));
}

/////////////////////////////
