"use strict";

/*
Path: 05-arrays/slice/snippets.js
Topic: Slice

How to study:
1. Read one example.
2. Predict output.
3. Run this file.
4. Change one line and run again.

Run:
node 05-arrays/slice/snippets.js
*/

function section(label) {
  console.log("\n--- " + label + " ---");
}

section("Topic");
console.log("slice copies part of an array without mutation.");

section("Example 1: Copy range");
{
  const nums = [1, 2, 3, 4];
  console.log(nums.slice(1, 3));
}

section("Example 2: Original unchanged");
{
  const nums = [1, 2, 3];
  const part = nums.slice(0, 2);
  console.log(nums);
  console.log(part);
}

section("Example 3: Copy full array");
{
  const roles = ["user", "admin"];
  const copy = roles.slice();
  console.log(copy);
  console.log(copy === roles);
}
