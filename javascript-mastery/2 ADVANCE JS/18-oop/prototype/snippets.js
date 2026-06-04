"use strict";

/*
Path: 18-oop/prototype/snippets.js
Topic: Prototype

How to study:
1. Read one example.
2. Predict output.
3. Run this file.
4. Change one line and run again.

Run:
node 18-oop/prototype/snippets.js
*/

function section(label) {
  console.log("\n--- " + label + " ---");
}

section("Topic");
console.log("Prototype stores shared behavior.");

section("Example 1: Prototype method");
{
  function User(name) {
    this.name = name;
  }
  User.prototype.say = function () {
    return this.name;
  };
  console.log(new User("Aman").say());
}

section("Example 2: Shared method");
{
  function User(name) {
    this.name = name;
  }
  User.prototype.role = "user";
  console.log(new User("Aman").role);
}

section("Example 3: Prototype lookup");
{
  const base = { type: "base" };
  const child = Object.create(base);
  console.log(child.type);
}
