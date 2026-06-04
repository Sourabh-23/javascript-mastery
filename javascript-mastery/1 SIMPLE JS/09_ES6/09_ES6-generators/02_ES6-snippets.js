"use strict";

/*
Path: 1 SIMPLE JS\09_ES6\09_ES6-generators\02_ES6-snippets.js
Topic: Generators snippets

How to study:
1. Read one snippet.
2. Predict output.
3. Run this file.
4. Change one value and run again.

Run:
node "1 SIMPLE JS/09_ES6/09_ES6-generators/02_ES6-snippets.js"
*/

function section(label) {
  console.log("\n--- " + label + " ---");
}

section("1. generator first value");
{
  function* numbers() {
    yield 1;
    yield 2;
  }
  const gen = numbers();
  console.log(gen.next().value);
}

/////////////////////////////

section("2. generator done");
{
  function* numbers() {
    yield 1;
  }
  const gen = numbers();
  gen.next();
  console.log(gen.next().done);
}

/////////////////////////////
