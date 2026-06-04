"use strict";

/*
Path: 19-dsa/recursion/snippets.js
Topic: Recursion

How to study:
1. Read one example.
2. Predict output.
3. Run this file.
4. Change one line and run again.

Run:
node 19-dsa/recursion/snippets.js
*/

function section(label) {
  console.log("\n--- " + label + " ---");
}

section("Topic");
console.log("Recursion means a function calls itself.");

section("Example 1: Countdown");
{
  function countDown(n) {
    if (n === 0) return;
    console.log(n);
    countDown(n - 1);
  }
  countDown(3);
}

/////////////////////////////

section("Example 2: Factorial");
{
  function factorial(n) {
    if (n === 0) return 1;
    return n * factorial(n - 1);
  }
  console.log(factorial(5));
}

/////////////////////////////

section("Example 3: Array sum");
{
  function sum(nums) {
    if (nums.length === 0) return 0;
    return nums[0] + sum(nums.slice(1));
  }
  console.log(sum([1, 2, 3]));
}

/////////////////////////////
