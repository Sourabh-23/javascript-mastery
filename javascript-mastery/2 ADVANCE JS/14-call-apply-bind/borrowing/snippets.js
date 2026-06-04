"use strict";

/*
Path: 14-call-apply-bind/borrowing/snippets.js
Topic: Borrowing

How to study:
1. Read one example.
2. Predict output.
3. Run this file.
4. Change one line and run again.

Run:
node 14-call-apply-bind/borrowing/snippets.js
*/

function section(label) {
  console.log("\n--- " + label + " ---");
}

section("Topic");
console.log("Borrowing uses one object's method for another object.");

section("Example 1: Basic idea");
{
  const topic = "Borrowing";
  console.log("Learning:", topic);
}

section("Example 2: Practical use");
{
  function show(value) {
    return "Value: " + value;
  }
  console.log(show("Borrowing"));
}

section("Example 3: Mini check");
{
  const steps = ["read", "run", "revise"];
  console.log(steps.join(" -> "));
}
