"use strict";

/*
Path: 01-variables/var/snippets.js
Topic: Var

How to study:
1. Read one example.
2. Predict output.
3. Run this file.
4. Change one line and run again.

Run:
node 01-variables/var/snippets.js
*/

function section(label) {
  console.log("\n--- " + label + " ---");
}

section("Topic");
console.log("var is function scoped, can be redeclared, and is hoisted with undefined.");

section("Example 1: Redeclaration");
{
  var city = "Pune";
  var city = "Mumbai";
  console.log(city);
}

/////////////////////////////

section("Example 2: Function scope");
{
  function demo() {
    if (true) {
      var status = "inside";
    }
    console.log(status);
  }
  demo();
}

/////////////////////////////

section("Example 3: Hoisted as undefined");
{
  console.log(orderStatus);
  var orderStatus = "paid";
  console.log(orderStatus);
}

/////////////////////////////
