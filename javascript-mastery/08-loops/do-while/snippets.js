"use strict";

/*
Path: 08-loops/do-while/snippets.js
Topic: Do While

How to study:
1. Read one example.
2. Predict output.
3. Run this file.
4. Change one line and run again.

Run:
node 08-loops/do-while/snippets.js
*/

function section(label) {
  console.log("\n--- " + label + " ---");
}

section("Topic");
console.log("do-while runs once before checking condition.");

section("Example 1: Basic idea");
{
  const topic = "Do While";
  console.log("Learning:", topic);
}

section("Example 2: Practical use");
{
  function show(value) {
    return "Value: " + value;
  }
  console.log(show("Do While"));
}

section("Example 3: Mini check");
{
  const steps = ["read", "run", "revise"];
  console.log(steps.join(" -> "));
}
