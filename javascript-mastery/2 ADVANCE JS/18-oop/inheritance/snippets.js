"use strict";

/*
Path: 18-oop/inheritance/snippets.js
Topic: Inheritance

How to study:
1. Read one example.
2. Predict output.
3. Run this file.
4. Change one line and run again.

Run:
node 18-oop/inheritance/snippets.js
*/

function section(label) {
  console.log("\n--- " + label + " ---");
}

section("Topic");
console.log("Inheritance lets one type reuse another type's behavior.");

section("Example 1: Class extends");
{
  class Animal {
    speak() {
      return "sound";
    }
  }
  class Dog extends Animal {}
  console.log(new Dog().speak());
}

section("Example 2: super constructor");
{
  class User {
    constructor(name) {
      this.name = name;
    }
  }
  class Admin extends User {
    constructor(name) {
      super(name);
      this.role = "admin";
    }
  }
  console.log(new Admin("Aman"));
}

section("Example 3: instanceof parent");
{
  class A {}
  class B extends A {}
  console.log(new B() instanceof A);
}
