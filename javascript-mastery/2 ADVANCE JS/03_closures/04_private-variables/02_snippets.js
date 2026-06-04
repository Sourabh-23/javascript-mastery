"use strict";

/*
Path: 12-closures/private-variables/snippets.js
Topic: Private Variables

How to study:
1. Read one example.
2. Predict output.
3. Run this file.
4. Change one line and run again.

Run:
node 12-closures/private-variables/snippets.js
*/

function section(label) {
  console.log("\n--- " + label + " ---");
}

section("Topic");
console.log("Private variables are hidden by closure or class private fields.");

section("Example 1: Closure private");
{
  function wallet() {
    let balance = 0;
    return {
      add(amount) {
        balance += amount;
        return balance;
      },
    };
  }
  console.log(wallet().add(100));
}

/////////////////////////////

section("Example 2: Class private");
{
  class Wallet {
    #balance = 0;
    add(amount) {
      this.#balance += amount;
      return this.#balance;
    }
  }
  console.log(new Wallet().add(50));
}

/////////////////////////////

section("Example 3: Protect data");
{
  console.log("Private variables stop direct outside mutation.");
}

/////////////////////////////
