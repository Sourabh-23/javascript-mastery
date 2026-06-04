"use strict";

/*
Path: 1 SIMPLE JS\09_ES6\10_ES6-iterators\02_snippets.js
Topic: Iterators snippets

How to study:
1. Read one snippet.
2. Predict output.
3. Run this file.
4. Change one value and run again.

Run:
node "1 SIMPLE JS/09_ES6/10_ES6-iterators/02_snippets.js"
*/

function section(label) {
  console.log("\n--- " + label + " ---");
}

section("1. array iterator");
{
  const iterator = [1, 2][Symbol.iterator]();
  console.log(iterator.next().value);
}

/////////////////////////////

section("2. iterator done");
{
  const iterator = [1][Symbol.iterator]();
  iterator.next();
  console.log(iterator.next().done);
}

/////////////////////////////
