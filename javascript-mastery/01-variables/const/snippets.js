"use strict";

/*
Path: 01-variables/const/snippets.js
Topic: Const

How to study:
1. Read one example.
2. Predict output.
3. Run this file.
4. Change one line and run again.

Run:
node 01-variables/const/snippets.js
*/

function section(label) {
  console.log("\n--- " + label + " ---");
}

section("Topic");
console.log("const is block scoped and cannot be reassigned, but objects can still mutate.");

section("Example 1: No reassignment");
{
  const appName = "API";
  console.log(appName);
}

section("Example 2: Object mutation allowed");
{
  const user = { name: "Aman" };
  user.name = "Neha";
  console.log(user);
}

section("Example 3: Array mutation allowed");
{
  const roles = ["user"];
  roles.push("admin");
  console.log(roles);
}
