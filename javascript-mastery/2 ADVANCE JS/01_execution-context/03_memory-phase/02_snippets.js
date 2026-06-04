"use strict";

/*
Path: 10-execution-context/memory-phase/snippets.js
Topic: Memory Phase

How to study:
1. Read one example.
2. Predict output.
3. Run this file.
4. Change one line and run again.

Run:
node 10-execution-context/memory-phase/snippets.js
*/

function section(label) {
  console.log("\n--- " + label + " ---");
}

section("Topic");
console.log("Memory phase allocates declarations before execution.");

section("Example 1: var memory");
{
  console.log(a);
  var a = 10;
}

/////////////////////////////

section("Example 2: function memory");
{
  console.log(add(2, 3));
  function add(a, b) {
    return a + b;
  }
}

/////////////////////////////

section("Example 3: let TDZ");
{
  try {
    console.log(value);
  } catch (error) {
    console.log(error.name);
  }
  let value = 10;
}

/////////////////////////////
