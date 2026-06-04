"use strict";

/*
Path: 1 SIMPLE JS\09_ES6\01_ES6-let-const\02_ES6-snippets.js
Topic: Let Const snippets

How to study:
1. Read one snippet.
2. Predict output.
3. Run this file.
4. Change one value and run again.

Run:
node "1 SIMPLE JS/09_ES6/01_ES6-let-const/02_ES6-snippets.js"
*/

function section(label) {
  console.log("\n--- " + label + " ---");
}

section("1. let is block scoped");
{
  function run() {
    let result = "outer";
    if (true) {
      let result = "inner";
    }
    return result;
  }
  console.log(run());
}

/////////////////////////////

section("2. let can update");
{
  function run() {
    let count = 1;
    count = 2;
    return count;
  }
  console.log(run());
}

/////////////////////////////

section("3. let loop scope");
{
  function run() {
    let total = 0;
    for (let i = 1; i <= 3; i++) total += i;
    return total;
  }
  console.log(run());
}

/////////////////////////////

section("4. let no redeclare in same scope");
{
  function run() {
    let name = "Amit";
    name = "Neha";
    return name;
  }
  console.log(run());
}

/////////////////////////////

section("5. let inside if");
{
  function run(active) {
    if (active) {
      let status = "yes";
      return status;
    }
    return "no";
  }
  console.log(run(true));
}

/////////////////////////////

section("6. const needs value");
{
  function run() {
    const role = "admin";
    return role;
  }
  console.log(run());
}

/////////////////////////////
