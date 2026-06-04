"use strict";

/*
Path: 10-execution-context/global-execution-context/snippets.js
Topic: Global Execution Context

How to study:
1. Read one example.
2. Predict output.
3. Run this file.
4. Change one line and run again.

Run:
node 10-execution-context/global-execution-context/snippets.js
*/

function section(label) {
  console.log("\n--- " + label + " ---");
}

section("Topic");
console.log("Global execution context runs top-level code.");

section("Example 1: Global code");
{
  var a = 10;
  function show() {
    console.log(a);
  }
  show();
}

section("Example 2: Top-level variables");
{
  const app = "API";
  console.log(app);
}

section("Example 3: Creation idea");
{
  console.log("GEC creates memory before execution.");
}
