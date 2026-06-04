"use strict";

/*
Path: 13-this-keyword/global-this/snippets.js
Topic: Global This

How to study:
1. Read one example.
2. Predict output.
3. Run this file.
4. Change one line and run again.

Run:
node 13-this-keyword/global-this/snippets.js
*/

function section(label) {
  console.log("\n--- " + label + " ---");
}

section("Topic");
console.log("globalThis gives access to the global object.");

section("Example 1: Basic idea");
{
  const topic = "Global This";
  console.log("Learning:", topic);
}

/////////////////////////////

section("Example 2: Practical use");
{
  function show(value) {
    return "Value: " + value;
  }
  console.log(show("Global This"));
}

/////////////////////////////

section("Example 3: Mini check");
{
  const steps = ["read", "run", "revise"];
  console.log(steps.join(" -> "));
}

/////////////////////////////
