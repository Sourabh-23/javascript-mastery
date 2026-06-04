"use strict";

/*
Path: 05-arrays/splice/snippets.js
Topic: Splice

How to study:
1. Read one example.
2. Predict output.
3. Run this file.
4. Change one line and run again.

Run:
node 05-arrays/splice/snippets.js
*/

function section(label) {
  console.log("\n--- " + label + " ---");
}

section("Topic");
console.log("splice mutates an array by removing or adding items.");

section("Example 1: Remove items");
{
  const nums = [1, 2, 3, 4];
  nums.splice(1, 2);
  console.log(nums);
}

/////////////////////////////

section("Example 2: Insert item");
{
  const nums = [1, 4];
  nums.splice(1, 0, 2, 3);
  console.log(nums);
}

/////////////////////////////

section("Example 3: Removed result");
{
  const nums = [1, 2, 3];
  const removed = nums.splice(1, 1);
  console.log(removed);
  console.log(nums);
}

/////////////////////////////
