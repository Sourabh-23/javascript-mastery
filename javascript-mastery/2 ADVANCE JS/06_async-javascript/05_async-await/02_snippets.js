"use strict";

/*
Path: 15-async-javascript/async-await/snippets.js
Topic: Async Await

How to study:
1. Read one example.
2. Predict output.
3. Run this file.
4. Change one line and run again.

Run:
node 15-async-javascript/async-await/snippets.js
*/

function section(label) {
  console.log("\n--- " + label + " ---");
}

section("Topic");
console.log("async-await makes promise code read like synchronous code.");

section("Example 1: Await resolved promise");
{
  async function main() {
    const value = await Promise.resolve("done");
    console.log(value);
  }
  main();
}

/////////////////////////////

section("Example 2: try catch");
{
  async function main() {
    try {
      await Promise.reject(new Error("failed"));
    } catch (error) {
      console.log(error.message);
    }
  }
  main();
}

/////////////////////////////

section("Example 3: Parallel with Promise.all");
{
  async function main() {
    const result = await Promise.all([
      Promise.resolve("user"),
      Promise.resolve("orders"),
    ]);
    console.log(result);
  }
  main();
}

/////////////////////////////
