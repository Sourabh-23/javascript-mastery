"use strict";

/*
Path: 18-oop/abstraction/snippets.js
Topic: Abstraction

How to study:
1. Read one example.
2. Predict output.
3. Run this file.
4. Change one line and run again.

Run:
node 18-oop/abstraction/snippets.js
*/

function section(label) {
  console.log("\n--- " + label + " ---");
}

section("Topic");
console.log("Abstraction exposes simple APIs over complex logic.");

section("Example 1: Basic idea");
{
  const topic = "Abstraction";
  console.log("Learning:", topic);
}

/////////////////////////////

section("Example 2: Practical use");
{
  function show(value) {
    return "Value: " + value;
  }
  console.log(show("Abstraction"));
}

/////////////////////////////

section("Example 3: Mini check");
{
  const steps = ["read", "run", "revise"];
  console.log(steps.join(" -> "));
}

/////////////////////////////
