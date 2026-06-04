"use strict";

/*
Path: 12-closures/counter-example/snippets.js
Topic: Counter Example

How to study:
1. Read one example.
2. Predict output.
3. Run this file.
4. Change one line and run again.

Run:
node 12-closures/counter-example/snippets.js
*/

function section(label) {
  console.log("\n--- " + label + " ---");
}

section("Topic");
console.log("Counter example demonstrates closure memory.");

section("Example 1: Basic counter");
{
  function createCounter() {
    let count = 0;
    return () => ++count;
  }
  const counter = createCounter();
  console.log(counter());
  console.log(counter());
}

section("Example 2: Separate counters");
{
  function createCounter() {
    let count = 0;
    return () => ++count;
  }
  const a = createCounter();
  const b = createCounter();
  console.log(a());
  console.log(b());
}

section("Example 3: Counter object");
{
  function createCounter() {
    let count = 0;
    return {
      inc: () => ++count,
      get: () => count,
    };
  }
  const counter = createCounter();
  counter.inc();
  console.log(counter.get());
}
