"use strict";

/*
Path: 1 SIMPLE JS\07_objects\09_freeze-seal\02_snippets.js
Topic: Freeze Seal snippets

How to study:
1. Read one snippet.
2. Predict output.
3. Run this file.
4. Change one value and run again.

Run:
node "1 SIMPLE JS/07_objects/09_freeze-seal/02_snippets.js"
*/

function section(label) {
  console.log("\n--- " + label + " ---");
}

section("1. read property");
{
  function run(user) {
    return user.name;
  }
  console.log(run({ name: "Amit" }));
}

/////////////////////////////

section("2. add property");
{
  function run(user) {
    user.active = true;
    return user;
  }
  console.log(run({ name: "Amit" }));
}

/////////////////////////////

section("3. object keys");
{
  function run(obj) {
    return Object.keys(obj);
  }
  console.log(run({ a: 1, b: 2 }));
}

/////////////////////////////

section("4. object values");
{
  function run(obj) {
    return Object.values(obj);
  }
  console.log(run({ a: 1, b: 2 }));
}

/////////////////////////////

section("5. destructure");
{
  function run(user) {
    const { name } = user;
    return name;
  }
  console.log(run({ name: "Amit" }));
}

/////////////////////////////

section("6. spread copy");
{
  function run(user) {
    return { ...user, role: "dev" };
  }
  console.log(run({ name: "Amit" }));
}

/////////////////////////////
