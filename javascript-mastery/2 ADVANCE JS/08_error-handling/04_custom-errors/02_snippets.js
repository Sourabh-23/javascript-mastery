"use strict";

/*
Path: 2 ADVANCE JS\08_error-handling\04_custom-errors\02_snippets.js
Topic: Custom Errors snippets

How to study:
1. Read one snippet.
2. Predict output.
3. Run this file.
4. Change one value and run again.

Run:
node "2 ADVANCE JS/08_error-handling/04_custom-errors/02_snippets.js"
*/

function section(label) {
  console.log("\n--- " + label + " ---");
}

section("1. try catch catches error");
{
  function run() {
    try {
      throw new Error("fail");
    } catch (error) {
      return error.message;
    }
  }
  console.log(run());
}

/////////////////////////////

section("2. finally runs");
{
  function run() {
    const logs = [];
    try {
      logs.push("try");
    } finally {
      logs.push("finally");
    }
    return logs;
  }
  console.log(run());
}

/////////////////////////////

section("3. custom error");
{
  class AppError extends Error {}
  const error = new AppError("bad");
  console.log(error instanceof Error);
}

/////////////////////////////
