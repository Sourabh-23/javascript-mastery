"use strict";

/*
Path: 1 SIMPLE JS\09_ES6\05_ES6-default-parameters\02_snippets.js
Topic: Default Parameters snippets

How to study:
1. Read one snippet.
2. Predict output.
3. Run this file.
4. Change one value and run again.

Run:
node "1 SIMPLE JS/09_ES6/05_ES6-default-parameters/02_snippets.js"
*/

function section(label) {
  console.log("\n--- " + label + " ---");
}

section("1. default used");
{
  function greet(name = "User") {
    return "Hi " + name;
  }
  console.log(greet());
}

/////////////////////////////

section("2. default skipped");
{
  function greet(name = "User") {
    return "Hi " + name;
  }
  console.log(greet("Amit"));
}

/////////////////////////////
