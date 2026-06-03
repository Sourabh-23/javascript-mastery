"use strict";

/*
Path: 05-arrays/findindex/snippets.js
Topic: Findindex

How to study:
1. Read one example.
2. Predict output.
3. Run this file.
4. Change one line and run again.

Run:
node 05-arrays/findindex/snippets.js
*/

function section(label) {
  console.log("\n--- " + label + " ---");
}

section("Topic");
console.log("findIndex returns the first matching index.");

section("Example 1: Find index");
{
  const nums = [5, 12, 8];
  console.log(nums.findIndex((num) => num > 10));
}

section("Example 2: Object index");
{
  const users = [{ id: 1 }, { id: 2 }];
  console.log(users.findIndex((user) => user.id === 2));
}

section("Example 3: No match");
{
  console.log([1, 2].findIndex((num) => num > 10));
}
