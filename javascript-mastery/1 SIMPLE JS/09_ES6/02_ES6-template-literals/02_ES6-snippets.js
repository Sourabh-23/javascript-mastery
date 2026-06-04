"use strict";

/*
Path: 1 SIMPLE JS\09_ES6\02_ES6-template-literals\02_ES6-snippets.js
Topic: Template Literals snippets

How to study:
1. Read one snippet.
2. Predict output.
3. Run this file.
4. Change one value and run again.

Run:
node "1 SIMPLE JS/09_ES6/02_ES6-template-literals/02_ES6-snippets.js"
*/

function section(label) {
  console.log("\n--- " + label + " ---");
}

section("1. template variable");
{
  function greet(name) {
    return `Hello ${name}`;
  }
  console.log(greet("Amit"));
}

/////////////////////////////

section("2. template expression");
{
  function total(price, qty) {
    return `Total: ${price * qty}`;
  }
  console.log(total(10, 3));
}

/////////////////////////////

section("3. multi line string");
{
  function run() {
    return `line1
  line2`;
  }
  console.log(run());
}

/////////////////////////////
