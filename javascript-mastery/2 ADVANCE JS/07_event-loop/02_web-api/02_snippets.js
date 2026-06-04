"use strict";

/*
Path: 2 ADVANCE JS\07_event-loop\02_web-api\02_snippets.js
Topic: Web Api snippets

How to study:
1. Read one snippet.
2. Predict output.
3. Run this file.
4. Change one value and run again.

Run:
node "2 ADVANCE JS/07_event-loop/02_web-api/02_snippets.js"
*/

function section(label) {
  console.log("\n--- " + label + " ---");
}

section("1. promise resolves");
{
  function getValue() {
    return Promise.resolve("done");
  }
  console.log(getValue() instanceof Promise);
}

/////////////////////////////

section("2. async returns promise");
{
  async function getValue() {
    return 10;
  }
  console.log(getValue() instanceof Promise);
}

/////////////////////////////

section("3. then callback type");
{
  const promise = Promise.resolve(10);
  console.log(typeof promise.then);
}

/////////////////////////////

section("4. setTimeout id type");
{
  const id = setTimeout(() => {}, 1);
  clearTimeout(id);
  console.log(typeof id);
}

/////////////////////////////

section("5. promise all");
{
  function run() {
    return Promise.all([Promise.resolve(1), Promise.resolve(2)]);
  }
  console.log(run() instanceof Promise);
}

/////////////////////////////
