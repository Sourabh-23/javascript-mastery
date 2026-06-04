"use strict";

/*
Path: 13-this-keyword/arrow-this/snippets.js
Topic: Arrow This

How to study:
1. Read one example.
2. Predict output.
3. Run this file.
4. Change one line and run again.

Run:
node 13-this-keyword/arrow-this/snippets.js
*/

function section(label) {
  console.log("\n--- " + label + " ---");
}

section("Topic");
console.log("arrow functions inherit this from outer scope.");

section("Example 1: Basic idea");
{
  const topic = "Arrow This";
  console.log("Learning:", topic);
}

/////////////////////////////

section("Example 2: Practical use");
{
  function show(value) {
    return "Value: " + value;
  }
  console.log(show("Arrow This"));
}

/////////////////////////////

section("Example 3: Mini check");
{
  const steps = ["read", "run", "revise"];
  console.log(steps.join(" -> "));
}

/////////////////////////////
