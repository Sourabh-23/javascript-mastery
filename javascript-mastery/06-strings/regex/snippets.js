"use strict";

/*
Path: 06-strings/regex/snippets.js
Topic: Regex

How to study:
1. Read one example.
2. Predict output.
3. Run this file.
4. Change one line and run again.

Run:
node 06-strings/regex/snippets.js
*/

function section(label) {
  console.log("\n--- " + label + " ---");
}

section("Topic");
console.log("Regex matches string patterns.");

section("Example 1: Basic idea");
{
  const topic = "Regex";
  console.log("Learning:", topic);
}

section("Example 2: Practical use");
{
  function show(value) {
    return "Value: " + value;
  }
  console.log(show("Regex"));
}

section("Example 3: Mini check");
{
  const steps = ["read", "run", "revise"];
  console.log(steps.join(" -> "));
}
