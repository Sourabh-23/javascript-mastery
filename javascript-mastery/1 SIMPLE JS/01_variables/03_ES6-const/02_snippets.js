"use strict";

/*
Path: 01-variables/const/snippets.js
Topic: Const

How to study:
1. Read one example.
2. Predict output.
3. Run this file.
4. Change one line and run again.

Run:
node 01-variables/const/snippets.js
*/

function section(label) {
  console.log("\n--- " + label + " ---");
}

section("Topic");
console.log("const is block scoped and cannot be reassigned, but objects can still mutate.");

section("Example 1: No reassignment");
{
  const appName = "API";
  console.log(appName);
}

/////////////////////////////

section("Example 2: Object mutation allowed");
{
  const user = { name: "Aman" };
  user.name = "Neha";
  console.log(user);
}

/////////////////////////////

section("Example 3: Array mutation allowed");
{
  const roles = ["user"];
  roles.push("admin");
  console.log(roles);
}

// what is mutation?
//answer: Mutation is the ability to change the contents of an object or array without changing its reference. 
// In JavaScript, when you declare a variable with const, you cannot reassign it to a new value, but if that variable holds an object or an array, you can still modify the properties of the object or the elements of the array.


// what do u mean by can not reassign?

const x = 10;
// x = 20; // This will throw an error because x is declared with const and cannot be reassigned to a new value.

const y = [1, 2, 3];
// y = [4, 5, 6]; // This will throw an error because y is declared with const and cannot be reassigned to a new value.

/////////////////////////////
