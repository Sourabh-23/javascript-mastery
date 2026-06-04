"use strict";

/*
Path: 19-dsa/binary-search/snippets.js
Topic: Binary Search

How to study:
1. Read one example.
2. Predict output.
3. Run this file.
4. Change one line and run again.

Run:
node 19-dsa/binary-search/snippets.js
*/

function section(label) {
  console.log("\n--- " + label + " ---");
}

section("Topic");
console.log("Binary search finds values in sorted data.");

section("Example 1: Search existing");
{
  function binarySearch(nums, target) {
    let left = 0;
    let right = nums.length - 1;
    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
      if (nums[mid] === target) return mid;
      if (nums[mid] < target) left = mid + 1;
      else right = mid - 1;
    }
    return -1;
  }
  console.log(binarySearch([1, 3, 5], 5));
}

section("Example 2: Search missing");
{
  function binarySearch(nums, target) {
    let left = 0;
    let right = nums.length - 1;
    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
      if (nums[mid] === target) return mid;
      if (nums[mid] < target) left = mid + 1;
      else right = mid - 1;
    }
    return -1;
  }
  console.log(binarySearch([1, 3, 5], 2));
}

section("Example 3: Sorted requirement");
{
  console.log("Binary search needs sorted input.");
}
