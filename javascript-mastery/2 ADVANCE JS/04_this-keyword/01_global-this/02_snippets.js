"use strict";

/*
Path: 2 ADVANCE JS\04_this-keyword\01_global-this\02_snippets.js
Topic: Global This snippets

How to study:
1. Read one snippet.
2. Predict output.
3. Run this file.
4. Change one value and run again.

Run:
node "2 ADVANCE JS/04_this-keyword/01_global-this/02_snippets.js"
*/

function section(label) {
  console.log("\n--- " + label + " ---");
}

section("1. object this");
{
  const user = {
    name: "Amit",
    getName() {
      return this.name;
    }
  };
  console.log(user.getName());// "Amit"
}

/////////////////////////////

section("2. call sets this");
{
  const user = { name: "Amit" };
  function getName() {
    return this.name;
  }
  console.log(getName.call(user));
}

/////////////////////////////

section("3. bind returns function");
{
  const user = { name: "Amit" };
  function getName() {
    return this.name;
  }
  const bound = getName.bind(user);
  console.log(bound());
}

/////////////////////////////
