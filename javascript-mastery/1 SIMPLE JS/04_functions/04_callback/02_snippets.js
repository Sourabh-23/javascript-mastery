"use strict";

/*
Path: 04-functions/callback/snippets.js
Topic: Callback

How to study:
1. Read one example.
2. Predict output.
3. Run this file.
4. Change one line and run again.

Run:
node 04-functions/callback/snippets.js
*/

function section(label) {
  console.log("\n--- " + label + " ---");
}

section("Topic");
console.log("Callbacks are functions passed to other functions.");

section("Example 1: Basic callback");
{
  function run(fn) {
    fn();
  }
  run(() => console.log("called"));
}

/////////////////////////////

section("Example 2: Formatter callback");
{
  function greet(name, formatter) {
    return formatter(name);
  }
  console.log(greet("aman", (name) => name.toUpperCase()));
}

/////////////////////////////

section("Example 3: Async callback");
{
  setTimeout(() => console.log("later"), 0);
  console.log("now");
}

/////////////////////////////
