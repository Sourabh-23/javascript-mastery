"use strict";

/*
Path: 12-closures/lexical-environment/snippets.js
Topic: Lexical Environment

How to study:
1. Read one example.
2. Predict output.
3. Run this file.
4. Change one line and run again.

Run:
node 12-closures/lexical-environment/snippets.js
*/

function section(label) {
  console.log("\n--- " + label + " ---");
}

section("Topic");
console.log("Lexical environment stores variables plus outer scope reference.");

section("Example 1: Outer variable");
{
  function outer() {
    const name = "Aman";
    function inner() {
      console.log(name);
    }
    inner();
  }
  outer();
}

section("Example 2: Returned function");
{
  function outer() {
    const count = 1;
    return () => count;
  }
  console.log(outer()());
}

section("Example 3: Scope chain");
{
  const globalValue = "global";
  function demo() {
    console.log(globalValue);
  }
  demo();
}
