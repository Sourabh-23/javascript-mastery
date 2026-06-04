"use strict";

/*
Path: 13-this-keyword/strict-mode/snippets.js
Topic: Strict Mode

How to study:
1. Read one example.
2. Predict output.
3. Run this file.
4. Change one line and run again.

Run:
node 13-this-keyword/strict-mode/snippets.js
*/

function section(label) {
  console.log("\n--- " + label + " ---");
}

section("Topic");
console.log("strict mode makes JavaScript safer and changes some this behavior.");

section("Example 1: Basic idea");
{
  const topic = "Strict Mode";
  console.log("Learning:", topic);
}

/////////////////////////////

section("Example 2: Practical use");
{
  function show(value) {
    return "Value: " + value;
  }
  console.log(show("Strict Mode"));
}

/////////////////////////////

section("Example 3: Mini check");
{
  const steps = ["read", "run", "revise"];
  console.log(steps.join(" -> "));
}

/////////////////////////////
