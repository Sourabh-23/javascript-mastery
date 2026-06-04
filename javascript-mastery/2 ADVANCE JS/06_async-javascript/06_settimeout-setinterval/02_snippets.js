"use strict";

/*
Path: 15-async-javascript/settimeout-setinterval/snippets.js
Topic: Settimeout Setinterval

How to study:
1. Read one example.
2. Predict output.
3. Run this file.
4. Change one line and run again.

Run:
node 15-async-javascript/settimeout-setinterval/snippets.js
*/

function section(label) {
  console.log("\n--- " + label + " ---");
}

section("Topic");
console.log("setTimeout delays once, setInterval repeats.");

section("Example 1: Basic idea");
{
  const topic = "Settimeout Setinterval";
  console.log("Learning:", topic);
}

/////////////////////////////

section("Example 2: Practical use");
{
  function show(value) {
    return "Value: " + value;
  }
  console.log(show("Settimeout Setinterval"));
}

/////////////////////////////

section("Example 3: Mini check");
{
  const steps = ["read", "run", "revise"];
  console.log(steps.join(" -> "));
}

/////////////////////////////
