"use strict";

/*
Path: 1 SIMPLE JS\08_loops\07_break\02_snippets.js
Topic: break statement snippets

How to study:
1. Read one snippet.
2. Predict output.
3. Run this file.
4. Change one value and run again.

Run:
node "1 SIMPLE JS/08_loops/07_break/02_snippets.js"
*/

function section(label) {
  console.log("\n--- " + label + " ---");
}

section("1. Stop loop early");
{
  const result = [];
  for (let i = 1; i <= 5; i++) {
    if (i === 3) break;
    result.push(i);
  }
  console.log(result);
}

/////////////////////////////

section("2. Find first even");
{
  const nums = [1, 5, 8, 10];
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

section("3. Sum until negative");
{
  const nums = [2, 3, -1, 10];
  let total = 0;
  for (const num of nums) {
    if (num < 0) break;
    total += num;
  }
  console.log(total);
}

/////////////////////////////

section("4. Break while true");
{
  let count = 0;
  while (true) {
    count++;
    if (count === 3) break;
  }
  console.log(count);
}

/////////////////////////////

section("5. Break after push");
{
  const result = [];
  for (let i = 1; i <= 5; i++) {
    result.push(i);
    if (i === 3) break;
  }
  console.log(result);
}

/////////////////////////////

section("6. Break inner loop only");
{
  let count = 0;
  for (let row = 1; row <= 2; row++) {
    for (let col = 1; col <= 3; col++) {
      if (col === 2) break;
      count++;
    }
  }
  console.log(count);
}

/////////////////////////////

section("7. Break outer loop with label");
{
  let count = 0;
  outer: for (let row = 1; row <= 3; row++) {
    for (let col = 1; col <= 3; col++) {
      if (row === 2 && col === 2) break outer;
      count++;
    }
  }
  console.log(count);
}

/////////////////////////////

section("8. Break in switch");
{
  const statusCode = 200;
  let label;
  switch (statusCode) {
    case 200:
      label = "OK";
      break;
    default:
      label = "Unknown";
  }
  console.log(label);
}

/////////////////////////////
