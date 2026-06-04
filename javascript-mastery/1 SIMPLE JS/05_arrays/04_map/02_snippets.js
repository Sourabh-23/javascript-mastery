"use strict";

/*
Path: 05-arrays/map/snippets.js
Topic: Map

How to study:
1. Read one example.
2. Predict output.
3. Run this file.
4. Change one line and run again.

Run:
node 05-arrays/map/snippets.js
*/

function section(label) {
  console.log("\n--- " + label + " ---");
}

section("Topic");
console.log("map transforms every item and returns a new array.");

section("Example 1: Transform numbers");
{
  const nums = [1, 2, 3];
  console.log(nums.map((num) => num * 2));
}

/////////////////////////////

section("Example 2: Transform objects");
{
  const users = [{ name: "Aman" }, { name: "Neha" }];
  console.log(users.map((user) => user.name));
}

/////////////////////////////

section("Example 3: Original unchanged");
{
  const nums = [1, 2];
  const result = nums.map((num) => num + 10);
  console.log(nums);
  console.log(result);
}

/////////////////////////////
