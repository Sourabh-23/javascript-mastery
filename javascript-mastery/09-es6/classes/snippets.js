"use strict";

/*
Path: 09-es6/classes/snippets.js
Topic: Classes

How to study:
1. Read one example.
2. Predict output.
3. Run this file.
4. Change one line and run again.

Run:
node 09-es6/classes/snippets.js
*/

function section(label) {
  console.log("\n--- " + label + " ---");
}

section("Topic");
console.log("Classes are syntax for constructor/prototype patterns.");

section("Example 1: Basic idea");
{
  const topic = "Classes";
  console.log("Learning:", topic);
}

section("Example 2: Practical use");
{
  function show(value) {
    return "Value: " + value;
  }
  console.log(show("Classes"));
}

section("Example 3: Mini check");
{
  const steps = ["read", "run", "revise"];
  console.log(steps.join(" -> "));
}
