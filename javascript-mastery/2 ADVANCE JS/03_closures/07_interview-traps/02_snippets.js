"use strict";

/*
Path: 2 ADVANCE JS\03_closures\07_interview-traps\02_snippets.js
Topic: Interview Traps snippets

How to study:
1. Read one snippet.
2. Predict output.
3. Run this file.
4. Change one value and run again.

Run:
node "2 ADVANCE JS/03_closures/07_interview-traps/02_snippets.js"
*/

function section(label) {
  console.log("\n--- " + label + " ---");
}

section("1. closure remembers count");
{
  function createCounter() {
    let count = 0;
    return function () {
      count++;
      return count;
    };
  }
  const counter = createCounter();
  console.log(counter());
}

/////////////////////////////

section("2. closure second call");
{
  function createCounter() {
    let count = 0;
    return function () {
      count++;
      return count;
    };
  }
  const counter = createCounter();
  counter();
  console.log(counter());
}

/////////////////////////////

section("3. private variable");
{
  function createUser() {
    let name = "Amit";
    return {
      getName() {
        return name;
      }
    };
  }
  console.log(createUser().getName());
}

/////////////////////////////
