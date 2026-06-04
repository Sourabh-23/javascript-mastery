"use strict";

/*
Path: 18-oop/constructor-function/snippets.js
Topic: Constructor Function

How to study:
1. Read one example.
2. Predict output.
3. Run this file.
4. Change one line and run again.

Run:
node 18-oop/constructor-function/snippets.js
*/

function section(label) {
  console.log("\n--- " + label + " ---");
}

section("Topic");
console.log("Constructor functions create objects with new.");

section("Example 1: Create with new");
{
  function User(name) {
    this.name = name;
  }
  console.log(new User("Aman").name);
}

/////////////////////////////

section("Example 2: Add method");
{
  function User(name) {
    this.name = name;
    this.say = function () {
      return this.name;
    };
  }
  console.log(new User("Neha").say());
}

/////////////////////////////

section("Example 3: instanceof");
{
  function User(name) {
    this.name = name;
  }
  const user = new User("Aman");
  console.log(user instanceof User);
}

/////////////////////////////
