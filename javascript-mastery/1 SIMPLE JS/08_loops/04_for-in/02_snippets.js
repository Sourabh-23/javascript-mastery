"use strict";

/*
Path: 1 SIMPLE JS\08_loops\04_for-in\02_snippets.js
Topic: for-in loop snippets

How to study:
1. Read one snippet.
2. Predict output.
3. Run this file.
4. Change one value and run again.

Run:
node "1 SIMPLE JS/08_loops/04_for-in/02_snippets.js"
*/

function section(label) {
  console.log("\n--- " + label + " ---");
}

section("1. Loop object keys");
{
  const user = { name: "Amit", age: 22 };
  for (const key in user) {
    console.log(key);
  }
}

/////////////////////////////

section("2. Access object values");
{
  const marks = { math: 80, english: 75 };
  for (const subject in marks) {
    console.log(subject, marks[subject]);
  }
}

/////////////////////////////

section("3. Sum object values");
{
  const marks = { math: 80, english: 75, science: 90 };
  let total = 0;
  for (const subject in marks) {
    total += marks[subject];
  }
  console.log(total);
}

/////////////////////////////

section("4. Copy object manually");
{
  const user = { name: "Amit", role: "dev" };
  const copy = {};
  for (const key in user) {
    copy[key] = user[key];
  }
  console.log(copy);
}

/////////////////////////////

section("5. Filter object values");
{
  const data = { a: 1, b: "hello", c: 3 };
  const numbers = {};
  for (const key in data) {
    if (typeof data[key] === "number") numbers[key] = data[key];
  }
  console.log(numbers);
}

/////////////////////////////

section("6. for-in on array gives indexes");
{
  const colors = ["red", "blue"];
  for (const index in colors) {
    console.log(index, colors[index]);
  }
}

/////////////////////////////

section("7. Check own property");
{
  const user = { name: "Amit" };
  for (const key in user) {
    if (Object.hasOwn(user, key)) {
      console.log(key);
    }
  }
}

/////////////////////////////

section("8. Create labels from object");
{
  const product = { name: "Phone", price: 12000 };
  const labels = [];
  for (const key in product) {
    labels.push(key + ": " + product[key]);
  }
  console.log(labels);
}

/////////////////////////////
