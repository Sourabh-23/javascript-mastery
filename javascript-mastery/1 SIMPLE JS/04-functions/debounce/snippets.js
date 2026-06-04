"use strict";

/*
Path: 04-functions/debounce/snippets.js
Topic: Debounce

How to study:
1. Read one example.
2. Predict output.
3. Run this file.
4. Change one line and run again.

Run:
node 04-functions/debounce/snippets.js
*/

function section(label) {
  console.log("\n--- " + label + " ---");
}

section("Topic");
console.log("Debounce runs after calls stop for a delay.");

section("Example 1: Create debounce");
{
  function debounce(fn, delay) {
    let timer;
    return (...args) => {
      clearTimeout(timer);
      timer = setTimeout(() => fn(...args), delay);
    };
  }
  console.log(typeof debounce);
}

section("Example 2: Search example");
{
  function debounce(fn, delay) {
    let timer;
    return (...args) => {
      clearTimeout(timer);
      timer = setTimeout(() => fn(...args), delay);
    };
  }
  const search = debounce((query) => console.log(query), 20);
  search("n");
  search("node");
}

section("Example 3: Why useful");
{
  console.log("Debounce prevents running search on every keystroke.");
}
