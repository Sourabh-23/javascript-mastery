"use strict";

/*
Path: 18-oop/objects/snippets.js
Topic: Objects

How to study:
1. Read one example.
2. Predict output.
3. Run this file.
4. Change one line and run again.

Run:
node 18-oop/objects/snippets.js
*/

function section(label) {
  console.log("\n--- " + label + " ---");
}

section("Topic");
console.log("Objects are the base of JavaScript OOP.");

section("Example 1: Create object");
{
  const user = { name: "Aman" };
  console.log(user.name);
}

section("Example 2: Method");
{
  const user = {
    name: "Aman",
    sayName() {
      return this.name;
    },
  };
  console.log(user.sayName());
}

section("Example 3: Object as model");
{
  const order = { id: 1, total: 500, status: "paid" };
  console.log(order.status);
}
