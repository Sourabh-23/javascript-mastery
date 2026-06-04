"use strict";

/*
Path: 19-dsa/arrays/snippets.js
Topic: Arrays

How to study:
1. Read one example.
2. Predict output.
3. Run this file.
4. Change one line and run again.

Run:
node 19-dsa/arrays/snippets.js
*/

function section(label) {
  console.log("\n--- " + label + " ---");
}

section("Topic");
console.log("Array DSA uses ordered lists.");

section("Example 1: Largest");
{
  function largest(nums) {
    return Math.max(...nums);
  }
  console.log(largest([3, 9, 1]));
}

section("Example 2: Remove duplicates");
{
  function unique(nums) {
    return [...new Set(nums)];
  }
  console.log(unique([1, 1, 2]));
}

section("Example 3: Second largest");
{
  function secondLargest(nums) {
    return [...new Set(nums)].sort((a, b) => b - a)[1] ?? null;
  }
  console.log(secondLargest([4, 9, 1, 9]));
}
