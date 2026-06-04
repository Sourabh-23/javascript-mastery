"use strict";

/*
Path: 17-error-handling/throw/snippets.js
Topic: Throw

How to study:
1. Read one example.
2. Predict output.
3. Run this file.
4. Change one line and run again.

Run:
node 17-error-handling/throw/snippets.js
*/

function section(label) {
  console.log("\n--- " + label + " ---");
}

section("Topic");
console.log("throw creates an error manually.");

section("Example 1: Throw Error");
{
  try {
    throw new Error("Something failed");
  } catch (error) {
    console.log(error.message);
  }
}

/////////////////////////////

section("Example 2: Validate input");
{
  function requireEmail(email) {
    if (!email) throw new Error("email required");
    return email;
  }
  try {
    requireEmail("");
  } catch (error) {
    console.log(error.message);
  }
}

/////////////////////////////

section("Example 3: Custom message");
{
  const error = new Error("Invalid request");
  console.log(error.message);
}

/////////////////////////////
