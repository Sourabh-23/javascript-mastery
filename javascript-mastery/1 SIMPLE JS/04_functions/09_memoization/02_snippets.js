"use strict";

/*
Path: 04-functions/memoization/snippets.js
Topic: Memoization

How to study:
1. Read one example.
2. Predict output.
3. Run this file.
4. Change one line and run again.

Run:
node 04-functions/memoization/snippets.js
*/

function section(label) {
  console.log("\n--- " + label + " ---");
}

section("Topic");
console.log("Memoization caches results.");

section("Example 1: Cache square");
{
  const cache = new Map();
  function square(n) {
    if (cache.has(n)) return cache.get(n);
    const result = n * n;
    cache.set(n, result);
    return result;
  }
  console.log(square(4));
  console.log(square(4));
}

/////////////////////////////

section("Example 2: Memoize wrapper");
{
  function memoize(fn) {
    const cache = new Map();
    return (value) => {
      if (cache.has(value)) return cache.get(value);
      const result = fn(value);
      cache.set(value, result);
      return result;
    };
  }
  const double = memoize((n) => n * 2);
  console.log(double(5));
}

/////////////////////////////

section("Example 3: Repeated call");
{
  let calls = 0;
  function calculate(n) {
    calls += 1;
    return n * n;
  }
  console.log(calculate(3));
  console.log("calls:", calls);
}

/////////////////////////////
