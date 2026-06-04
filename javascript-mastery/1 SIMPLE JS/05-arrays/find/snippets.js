"use strict";

/*
Path: 05-arrays/find/snippets.js
Topic: Find

How to study:
1. Read one example.
2. Predict output.
3. Run this file.
4. Change one line and run again.

Run:
node 05-arrays/find/snippets.js
*/

function section(label) {
  console.log("\n--- " + label + " ---");
}

section("Topic");
console.log("find returns the first matching item.");

section("Example 1: Find number");
{
  const nums = [5, 12, 8];
  console.log(nums.find((num) => num > 10));
}

section("Example 2: Find object");
{
  const users = [{ id: 1 }, { id: 2 }];
  console.log(users.find((user) => user.id === 2));
}

section("Example 3: No match");
{
  const users = [{ id: 1 }];
  console.log(users.find((user) => user.id === 99));
}
