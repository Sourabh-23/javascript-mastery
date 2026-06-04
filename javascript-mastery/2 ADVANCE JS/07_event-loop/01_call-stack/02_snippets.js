"use strict";

/*
Path: 16-event-loop/call-stack/snippets.js
Topic: Call Stack

How to study:
1. Read one example.
2. Predict output.
3. Run this file.
4. Change one line and run again.

Run:
node 16-event-loop/call-stack/snippets.js
*/

function section(label) {
  console.log("\n--- " + label + " ---");
}

section("Topic");
console.log("Call stack tracks active function execution.");

section("Example 1: Function order");
{
  function first() {
    second();
  }
  function second() {
    console.log("second");
  }
  first();
}

/////////////////////////////

section("Example 2: Nested calls");
{
  function a() {
    console.log("a start");
    b();
    console.log("a end");
  }
  function b() {
    console.log("b");
  }
  a();
}

/////////////////////////////

section("Example 3: Stack clears");
{
  console.log("global start");
  console.log("global end");
}

/////////////////////////////
