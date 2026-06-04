"use strict";

/*
Path: 13-this-keyword/object-this/snippets.js
Topic: Object This

How to study:
1. Read one example.
2. Predict output.
3. Run this file.
4. Change one line and run again.

Run:
node 13-this-keyword/object-this/snippets.js
*/

function section(label) {
  console.log("\n--- " + label + " ---");
}

section("Topic");
console.log("object method this points to the object before the dot.");

section("Example 1: Method this");
{
  const user = {
    name: "Aman",
    getName() {
      return this.name;
    },
  };
  console.log(user.getName());
}

section("Example 2: Lost this");
{
  const user = {
    name: "Aman",
    getName() {
      return this.name;
    },
  };
  const getName = user.getName;
  try {
    console.log(getName());
  } catch (error) {
    console.log(error.name);
  }
}

section("Example 3: Fix with bind");
{
  const user = {
    name: "Aman",
    getName() {
      return this.name;
    },
  };
  const getName = user.getName.bind(user);
  console.log(getName());
}
