"use strict";

/*
Path: 04-functions/arrow-function/snippets.js
Topic: Arrow Function

How to study:
1. Read one example.
2. Predict output.
3. Run this file.
4. Change one line and run again.

Run:
node 04-functions/arrow-function/snippets.js
*/

function section(label) {
  console.log("\n--- " + label + " ---");
}

section("Topic");
console.log("Arrow functions are shorter and do not have their own this.");

section("Example 1: Short return");
{
  const add = (a, b) => a + b;
  console.log(add(2, 3));
}

section("Example 2: Array callback");
{
  const nums = [1, 2, 3];
  console.log(nums.map((num) => num * 2));
}

section("Example 3: No own this");
{
  const service = {
    name: "API",
    normal() {
      return this.name;
    },
    arrow: () => typeof this,
  };
  console.log(service.normal());
  console.log(service.arrow());
}
