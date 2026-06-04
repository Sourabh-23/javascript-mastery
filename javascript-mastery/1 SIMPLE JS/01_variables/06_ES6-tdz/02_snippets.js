"use strict";

/*
Path: 01-variables/tdz/snippets.js
Topic: Tdz

How to study:
1. Read one example.
2. Predict output.
3. Run this file.
4. Change one line and run again.

Run:
node 01-variables/tdz/snippets.js
*/

function section(label) {
  console.log("\n--- " + label + " ---");
}

section("Topic");
console.log("TDZ is the period where let/const exist but cannot be accessed before initialization.");

section("Example 1: let TDZ");
{
  try {
    console.log(total);
  } catch (error) {
    console.log(error.name);
  }
  let total = 10;
  console.log(total);
}

/////////////////////////////

section("Example 2: const TDZ");
{
  try {
    console.log(apiVersion);
  } catch (error) {
    console.log(error.name);
  }
  const apiVersion = "v1";
  console.log(apiVersion);
}

/////////////////////////////

section("Example 3: Block shadow TDZ");
{
  const plan = "free";
  if (true) {
    try {
      console.log(plan);
    } catch (error) {
      console.log(error.name);
    }
    const plan = "pro";
    console.log(plan);
  }
}

/////////////////////////////
