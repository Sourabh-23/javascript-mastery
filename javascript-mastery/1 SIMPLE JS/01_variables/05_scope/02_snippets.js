"use strict";

/*
Path: 01-variables/scope/snippets.js
Topic: Scope

How to study:
1. Read one example.
2. Predict output.
3. Run this file.
4. Change one line and run again.

Run:
node 01-variables/scope/snippets.js
*/

function section(label) {
  console.log("\n--- " + label + " ---");
}

section("Topic");
console.log("Scope decides where a variable can be accessed.");

section("Example 1: Global scope");
{
  const appName = "Order API";
  function printAppName() {
    console.log(appName);
  }
  printAppName();
}

/////////////////////////////

section("Example 2: Function scope");
{
  function demo() {
    const localValue = "inside function";
    console.log(localValue);
  }
  demo();
}

/////////////////////////////

section("Example 3: Lexical scope");
{
  function outer() {
    const service = "UserService";
    function inner() {
      console.log(service);
    }
    inner();
  }
  outer();
}

/////////////////////////////
