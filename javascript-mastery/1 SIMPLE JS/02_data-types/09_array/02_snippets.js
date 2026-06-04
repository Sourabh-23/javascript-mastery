"use strict";

/*
Path: 02-data-types/array/snippets.js
Topic: Array

How to study:
1. Read one example.
2. Predict output.
3. Run this file.
4. Change one line and run again.

Run:
node 02-data-types/array/snippets.js
*/

function section(label) {
  console.log("\n--- " + label + " ---");
}

section("Topic");
console.log("Array stores ordered values.");

section("Example 1: Index and length");
{
  const nums = [10, 20, 30];
  console.log(nums[0]);
  console.log(nums.length);
}

/////////////////////////////

section("Example 2: Add/remove");
{
  const nums = [1, 2];
  nums.push(3);
  console.log(nums.pop());
  console.log(nums);
}

/////////////////////////////

section("Example 3: Loop");
{
  const nums = [1, 2, 3];
  for (const num of nums) {
    console.log(num * 2);
  }
}

/////////////////////////////
