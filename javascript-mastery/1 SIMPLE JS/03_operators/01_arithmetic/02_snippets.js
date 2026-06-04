"use strict";

/*
Path: 1 SIMPLE JS\03_operators\01_arithmetic\02_snippets.js
Topic: Arithmetic snippets

How to study:
1. Read one snippet.
2. Predict output.
3. Run this file.
4. Change one value and run again.

Run:
node "1 SIMPLE JS/03_operators/01_arithmetic/02_snippets.js"
*/

function section(label) {
  console.log("\n--- " + label + " ---");
}

section("1. arithmetic");
{
  function run(a, b) {
    return a + b * 2;
  }
  console.log(run(3, 4));
}

/////////////////////////////

section("2. comparison");
{
  function run(age) {
    return age >= 18;
  }
  console.log(run(20));
}

/////////////////////////////

section("3. equality");
{
  function run(a, b) {
    return a === b;
  }
  console.log(run(5, "5"));
}

/////////////////////////////

section("4. logical");
{
  function run(user) {
    return user && user.active;
  }
  console.log(run({ active: true }));
}

/////////////////////////////

section("5. nullish");
{
  function run(value) {
    return value ?? "default";
  }
  console.log(run(null));
}

/////////////////////////////
