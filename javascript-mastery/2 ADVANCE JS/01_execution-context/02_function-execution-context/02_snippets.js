"use strict";

/*
Path: 10-execution-context/function-execution-context/snippets.js
Topic: Function Execution Context

How to study:
1. Read one example.
2. Predict output.
3. Run this file.
4. Change one line and run again.

Run:
node 10-execution-context/function-execution-context/snippets.js
*/

function section(label) {
  console.log("\n--- " + label + " ---");
}

section("Topic");
console.log("Function execution context is created per function call.");

section("Example 1: Function call");
{
  function add(a, b) {
    const total = a + b;
    return total;
  }
  console.log(add(2, 3));
}

/////////////////////////////

section("Example 2: New context per call");
{
  function greet(name) {
    return "Hi " + name;
  }
  console.log(greet("Aman"));
  console.log(greet("Neha"));
}

/////////////////////////////

section("Example 3: Local memory");
{
  function demo() {
    const local = "inside";
    console.log(local);
  }
  demo();
}

/////////////////////////////
