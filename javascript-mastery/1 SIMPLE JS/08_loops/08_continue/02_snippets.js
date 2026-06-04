"use strict";

/*
Path: 1 SIMPLE JS\08_loops\08_continue\02_snippets.js
Topic: continue statement snippets

How to study:
1. Read one snippet.
2. Predict output.
3. Run this file.
4. Change one value and run again.

Run:
node "1 SIMPLE JS/08_loops/08_continue/02_snippets.js"
*/

function section(label) {
  console.log("\n--- " + label + " ---");
}

section("1. Skip one value");
{
  const result = [];
  for (let i = 1; i <= 5; i++) {
    if (i === 3) continue;
    result.push(i);
  }
  console.log(result);
}

/////////////////////////////

section("2. Skip negative numbers");
{
  const nums = [1, -2, 3, -4];
  const positives = [];
  for (const num of nums) {
    if (num < 0) continue;
    positives.push(num);
  }
  console.log(positives);
}

/////////////////////////////

section("3. Sum only positives");
{
  const nums = [1, -2, 3];
  let total = 0;
  for (const num of nums) {
    if (num < 0) continue;
    total += num;
  }
  console.log(total);
}

/////////////////////////////

section("4. Skip spaces in string");
{
  const text = "a b c";
  let result = "";
  for (const char of text) {
    if (char === " ") continue;
    result += char;
  }
  console.log(result);
}

/////////////////////////////

section("5. Continue in while loop");
{
  const result = [];
  let i = 0;
  while (i < 5) {
    i++;
    if (i === 2) continue;
    result.push(i);
  }
  console.log(result);
}

/////////////////////////////

section("6. Skip invalid marks");
{
  const marks = [80, -1, 120, 60];
  const valid = [];
  for (const mark of marks) {
    if (mark < 0 || mark > 100) continue;
    valid.push(mark);
  }
  console.log(valid);
}

/////////////////////////////

section("7. Skip duplicate values");
{
  const nums = [1, 1, 2, 3, 3];
  const seen = new Set();
  const unique = [];
  for (const num of nums) {
    if (seen.has(num)) continue;
    seen.add(num);
    unique.push(num);
  }
  console.log(unique);
}

/////////////////////////////

section("8. Continue outer loop with label");
{
  let count = 0;
  outer: for (let row = 1; row <= 2; row++) {
    for (let col = 1; col <= 3; col++) {
      if (col === 2) continue outer;
      count++;
    }
  }
  console.log(count);
}

/////////////////////////////
