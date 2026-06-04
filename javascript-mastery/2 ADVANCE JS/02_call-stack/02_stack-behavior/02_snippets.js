"use strict";

/*
Path: 2 ADVANCE JS\02_call-stack\02_stack-behavior\02_snippets.js
Topic: Stack Behavior snippets

How to study:
1. Read one snippet.
2. Predict output.
3. Run this file.
4. Change one value and run again.

Run:
node "2 ADVANCE JS/02_call-stack/02_stack-behavior/02_snippets.js"
*/

function section(label) {
  console.log("\n--- " + label + " ---");
}

section("1. call order");
{
  function first() {
    return second();
  }
  function second() {
    return "done";
  }
  console.log(first());
}

/////////////////////////////

section("2. memory then execution");
{
  function run() {
    var value = 10;
    return value;
  }
  console.log(run());
}

/////////////////////////////

section("3. recursion stack");
{
  function count(n) {
    if (n === 0) return 0;
    return 1 + count(n - 1);
  }
  console.log(count(3));
}

/////////////////////////////
