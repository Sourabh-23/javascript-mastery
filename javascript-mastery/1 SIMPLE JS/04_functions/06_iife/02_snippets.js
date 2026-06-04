"use strict";

/*
Path: 04-functions/iife/snippets.js
Topic: Iife

How to study:
1. Read one example.
2. Predict output.
3. Run this file.
4. Change one line and run again.

Run:
node 04-functions/iife/snippets.js
*/

function section(label) {
  console.log("\n--- " + label + " ---");
}

section("Topic");
console.log("IIFE runs immediately after creation.");

section("Example 1: Runs immediately");
{
  (function () {
    console.log("IIFE ran");
  })();
}

/////////////////////////////

section("Example 2: Private variable");
{
  const result = (function () {
    const secret = 10;
    return secret * 2;
  })();
  console.log(result);
}

/////////////////////////////

section("Example 3: Arrow IIFE");
{
  (() => {
    console.log("arrow IIFE");
  })();
}

/////////////////////////////
