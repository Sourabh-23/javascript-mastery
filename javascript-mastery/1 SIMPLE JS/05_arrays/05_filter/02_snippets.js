"use strict";

/*
Path: 05-arrays/filter/snippets.js
Topic: Filter

How to study:
1. Read one example.
2. Predict output.
3. Run this file.
4. Change one line and run again.

Run:
node 05-arrays/filter/snippets.js
*/

function section(label) {
  console.log("\n--- " + label + " ---");
}

section("Topic");
console.log("filter keeps matching items and returns a new array.");

section("Example 1: Keep even numbers");
{
  const nums = [1, 2, 3, 4];
  console.log(nums.filter((num) => num % 2 === 0));
}

/////////////////////////////

section("Example 2: Filter objects");
{
  const users = [{ active: true }, { active: false }];
  console.log(users.filter((user) => user.active));
}

/////////////////////////////

section("Example 3: No match returns empty");
{
  const nums = [1, 3, 5];
  console.log(nums.filter((num) => num > 10));
}

/////////////////////////////
