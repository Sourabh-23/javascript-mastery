"use strict";

/*
Path: 04-functions/throttle/snippets.js
Topic: Throttle

How to study:
1. Read one example.
2. Predict output.
3. Run this file.
4. Change one line and run again.

Run:
node 04-functions/throttle/snippets.js
*/

function section(label) {
  console.log("\n--- " + label + " ---");
}

section("Topic");
console.log("Throttle limits how often a function runs.");

section("Example 1: Create throttle");
{
  function throttle(fn, delay) {
    let last = 0;
    return (...args) => {
      const now = Date.now();
      if (now - last >= delay) {
        last = now;
        fn(...args);
      }
    };
  }
  console.log(typeof throttle);
}

section("Example 2: Scroll example");
{
  let calls = 0;
  function onScroll() {
    calls += 1;
  }
  onScroll();
  console.log(calls);
}

section("Example 3: Why useful");
{
  console.log("Throttle limits frequent actions like scroll or resize.");
}
