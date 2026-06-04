"use strict";

/*
Path: 1 SIMPLE JS\08_loops\02_while\02_snippets.js
Topic: while loop snippets

How to study:
1. Read one snippet.
2. Predict output.
3. Run this file.
4. Change one value and run again.

Run:
node "1 SIMPLE JS/08_loops/02_while/02_snippets.js"
*/

function section(label) {
  console.log("\n--- " + label + " ---");
}

section("1. Count while condition is true");
{
  const result = [];
  let i = 1;
  while (i <= 5) {
    result.push(i);
    i++;
  }
  console.log(result);
}

/////////////////////////////

section("2. Countdown");
{
  let count = 3;
  while (count > 0) {
    console.log(count);
    count--;
  }
}

/////////////////////////////

section("3. Sum with while");
{
  let total = 0;
  let num = 1;
  while (num <= 5) {
    total += num;
    num++;
  }
  console.log(total);
}

/////////////////////////////

section("4. Search until found");
{
  const users = ["Amit", "Neha", "Rahul"];
  let index = 0;
  let found = false;
  while (index < users.length) {
    if (users[index] === "Neha") {
      found = true;
      break;
    }
    index++;
  }
  console.log(found);
}

/////////////////////////////

section("5. Process queue");
{
  const queue = ["task1", "task2", "task3"];
  while (queue.length > 0) {
    const task = queue.shift();
    console.log("done", task);
  }
}

/////////////////////////////

section("6. Count digits");
{
  let value = 1234;
  let digits = 0;
  while (value > 0) {
    digits++;
    value = Math.floor(value / 10);
  }
  console.log(digits);
}

/////////////////////////////

section("7. Avoid infinite loop with update");
{
  let attempts = 0;
  while (attempts < 3) {
    console.log("try", attempts + 1);
    attempts++;
  }
}

/////////////////////////////

section("8. Condition can skip loop");
{
  let runs = 0;
  while (false) {
    runs++;
  }
  console.log(runs);
}

/////////////////////////////
