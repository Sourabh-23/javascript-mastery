"use strict";

/*
Path: 10-execution-context/execution-phase/snippets.js
Topic: Execution Phase

How to study:
1. Read one example.
2. Predict output.
3. Run this file.
4. Change one line and run again.

Run:
node 10-execution-context/execution-phase/snippets.js
*/

function section(label) {
  console.log("\n--- " + label + " ---");
}

section("Topic");
console.log("Execution phase runs code line by line.");

section("Example 1: Line by line");
{
  let a = 10;
  a = a + 5;
  console.log(a);
}

/////////////////////////////

section("Example 2: Function execution");
{
  function run() {
    console.log("inside");
  }
  console.log("before");
  run();
  console.log("after");
}

/////////////////////////////

section("Example 3: Assignment order");
{
  let status = "new";
  console.log(status);
  status = "paid";
  console.log(status);
}

/////////////////////////////
