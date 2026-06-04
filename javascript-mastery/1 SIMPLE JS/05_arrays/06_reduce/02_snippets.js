"use strict";

/*
Path: 05-arrays/reduce/snippets.js
Topic: Reduce

How to study:
1. Read one example.
2. Predict output.
3. Run this file.
4. Change one line and run again.

Run:
node 05-arrays/reduce/snippets.js
*/

function section(label) {
  console.log("\n--- " + label + " ---");
}

section("Topic");
console.log("reduce converts many values into one result.");

section("Example 1: Sum numbers");
{
  const nums = [1, 2, 3];
  console.log(nums.reduce((sum, num) => sum + num, 0));
}

/////////////////////////////

section("Example 2: Count values");
{
  const roles = ["user", "admin", "user"];
  const count = roles.reduce((acc, role) => {
    acc[role] = (acc[role] ?? 0) + 1;
    return acc;
  }, {});
  console.log(count);
}

/////////////////////////////

section("Example 3: Build object");
{
  const users = [{ id: 1, name: "Aman" }, { id: 2, name: "Neha" }];
  const byId = users.reduce((acc, user) => {
    acc[user.id] = user;
    return acc;
  }, {});
  console.log(byId[2]);
}

/////////////////////////////
