"use strict";

/*
Path: 1 SIMPLE JS\09_ES6\06_ES6-modules\02_snippets.js
Topic: Modules snippets

How to study:
1. Read one snippet.
2. Predict output.
3. Run this file.
4. Change one value and run again.

Run:
node "1 SIMPLE JS/09_ES6/06_ES6-modules/02_snippets.js"
*/

function section(label) {
  console.log("\n--- " + label + " ---");
}

section("1. named export idea");
{
  const mathModule = {
    add(a, b) {
      return a + b;
    }
  };
  console.log(mathModule.add(2, 3));
}

/////////////////////////////

section("2. default import idea");
{
  const userModule = {
    default: "Amit"
  };
  console.log(userModule.default);
}

/////////////////////////////
