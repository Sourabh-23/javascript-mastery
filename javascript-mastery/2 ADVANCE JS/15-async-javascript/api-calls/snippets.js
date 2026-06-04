"use strict";

/*
Path: 15-async-javascript/api-calls/snippets.js
Topic: Api Calls

How to study:
1. Read one example.
2. Predict output.
3. Run this file.
4. Change one line and run again.

Run:
node 15-async-javascript/api-calls/snippets.js
*/

function section(label) {
  console.log("\n--- " + label + " ---");
}

section("Topic");
console.log("API calls are async operations that fetch data.");

section("Example 1: Basic idea");
{
  const topic = "Api Calls";
  console.log("Learning:", topic);
}

section("Example 2: Practical use");
{
  function show(value) {
    return "Value: " + value;
  }
  console.log(show("Api Calls"));
}

section("Example 3: Mini check");
{
  const steps = ["read", "run", "revise"];
  console.log(steps.join(" -> "));
}
