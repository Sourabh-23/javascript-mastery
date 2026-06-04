"use strict";

/*
Path: 1 SIMPLE JS\09_ES6\04_ES6-spread-rest\02_ES6-snippets.js
Topic: Spread Rest snippets

How to study:
1. Read one snippet.
2. Predict output.
3. Run this file.
4. Change one value and run again.

Run:
node "1 SIMPLE JS/09_ES6/04_ES6-spread-rest/02_ES6-snippets.js"
*/

function section(label) {
  console.log("\n--- " + label + " ---");
}

section("1. spread array");
{
  function run(arr) {
    return [...arr, 3];
  }
  console.log(run([1, 2]));
}

/////////////////////////////

section("2. spread object");
{
  function run(user) {
    return { ...user, active: true };
  }
  console.log(run({ name: "Amit" }));
}

/////////////////////////////

section("3. rest params");
{
  function count(...items) {
    return items.length;
  }
  console.log(count(1, 2, 3));
}

/////////////////////////////
