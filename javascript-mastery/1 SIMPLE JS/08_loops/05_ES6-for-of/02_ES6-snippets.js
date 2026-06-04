"use strict";

/*
Path: 1 SIMPLE JS\08_loops\05_ES6-for-of\02_ES6-snippets.js
Topic: ES6 for-of loop snippets

How to study:
1. Read one snippet.
2. Predict output.
3. Run this file.
4. Change one value and run again.

Run:
node "1 SIMPLE JS/08_loops/05_ES6-for-of/02_ES6-snippets.js"
*/

function section(label) {
  console.log("\n--- " + label + " ---");
}

section("1. Loop array values");
{
  const nums = [10, 20, 30];
  for (const num of nums) {
    console.log(num);
  }
}

/////////////////////////////

section("2. Sum array values");
{
  const nums = [2, 4, 6];
  let total = 0;
  for (const num of nums) {
    total += num;
  }
  console.log(total);
}

/////////////////////////////

section("3. Loop string characters");
{
  const word = "JS";
  for (const char of word) {
    console.log(char);
  }
}

/////////////////////////////

section("4. Loop Set unique values");
{
  const ids = new Set([1, 1, 2, 3]);
  for (const id of ids) {
    console.log(id);
  }
}

/////////////////////////////

section("5. Loop Map entries");
{
  const user = new Map([
    ["name", "Amit"],
    ["role", "dev"],
  ]);
  
  for (const [key, value] of user) {
    console.log(key, value);
  }
}

/////////////////////////////

section("6. Break inside for-of");
{
  const nums = [1, 3, 8, 10];
  let firstEven = null;
  for (const num of nums) {
    if (num % 2 === 0) {
      firstEven = num;
      break;
    }
  }
  console.log(firstEven);
}

/////////////////////////////

section("7. Continue inside for-of");
{
  const nums = [1, 0, 2, 0, 3];
  const withoutZero = [];
  for (const num of nums) {
    if (num === 0) continue;
    withoutZero.push(num);
  }
  console.log(withoutZero);
}

/////////////////////////////

section("8. Object array practical use");
{
  const users = [
    { name: "A", active: true },
    { name: "B", active: false },
  ];
  const activeNames = [];
  for (const user of users) {
    if (user.active) activeNames.push(user.name);
  }
  console.log(activeNames);
}

/////////////////////////////
