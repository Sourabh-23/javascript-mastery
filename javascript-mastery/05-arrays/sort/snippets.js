"use strict";

/*
Path: 05-arrays/sort/snippets.js
Topic: Sort

How to study:
1. Read one example.
2. Predict output.
3. Run this file.
4. Change one line and run again.

Run:
node 05-arrays/sort/snippets.js
*/

function section(label) {
  console.log("\n--- " + label + " ---");
}

section("Topic");
console.log("sort changes order and mutates the array.");

section("Example 1: Wrong numeric sort");
{
  const nums = [10, 2, 5];
  console.log([...nums].sort());
}

section("Example 2: Correct numeric sort");
{
  const nums = [10, 2, 5];
  console.log([...nums].sort((a, b) => a - b));
}

section("Example 3: Sort objects");
{
  const users = [{ age: 30 }, { age: 20 }];
  console.log([...users].sort((a, b) => a.age - b.age));
}
