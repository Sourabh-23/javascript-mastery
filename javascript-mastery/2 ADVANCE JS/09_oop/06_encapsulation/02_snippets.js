"use strict";

/*
Path: 2 ADVANCE JS\09_oop\06_encapsulation\02_snippets.js
Topic: Encapsulation snippets

How to study:
1. Read one snippet.
2. Predict output.
3. Run this file.
4. Change one value and run again.

Run:
node "2 ADVANCE JS/09_oop/06_encapsulation/02_snippets.js"
*/

function section(label) {
  console.log("\n--- " + label + " ---");
}

section("1. class method");
{
  class User {
    constructor(name) {
      this.name = name;
    }
    greet() {
      return "Hi " + this.name;
    }
  }
  console.log(new User("Amit").greet());
}

/////////////////////////////

section("2. inheritance");
{
  class Animal {
    speak() {
      return "sound";
    }
  }
  class Dog extends Animal {}
  console.log(new Dog().speak());
}

/////////////////////////////

section("3. private field");
{
  class Counter {
    #count = 0;
    inc() {
      this.#count++;
      return this.#count;
    }
  }
  console.log(new Counter().inc());
}

/////////////////////////////
