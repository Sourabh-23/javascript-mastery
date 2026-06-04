"use strict";

/*
Path: 1 SIMPLE JS\08_loops\09_nested-loops\02_snippets.js
Topic: nested loops snippets

How to study:
1. Read one snippet.
2. Predict output.
3. Run this file.
4. Change one value and run again.

Run:
node "1 SIMPLE JS/08_loops/09_nested-loops/02_snippets.js"
*/

function section(label) {
  console.log("\n--- " + label + " ---");
}

section("1. Count rows and columns");
{
  let count = 0;
  for (let row = 1; row <= 2; row++) {
    for (let col = 1; col <= 3; col++) {
      count++;
    }
  }
  console.log(count);
}

/////////////////////////////

section("2. Create coordinate pairs");
{
  const pairs = [];
  for (let row = 1; row <= 2; row++) {
    for (let col = 1; col <= 2; col++) {
      pairs.push([row, col]);
    }
  }
  console.log(pairs);
}

/////////////////////////////

section("3. Flatten 2D array");
{
  const matrix = [[1, 2], [3, 4]];
  const flat = [];
  for (const row of matrix) {
    for (const value of row) {
      flat.push(value);
    }
  }
  console.log(flat);
}

/////////////////////////////

section("4. Sum matrix values");
{
  const matrix = [[1, 2], [3, 4]];
  let total = 0;
  for (const row of matrix) {
    for (const value of row) {
      total += value;
    }
  }
  console.log(total);
}

/////////////////////////////

section("5. Star triangle");
{
  const rows = [];
  for (let i = 1; i <= 3; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
      row += "*";
    }
    rows.push(row);
  }
  console.log(rows);
}

/////////////////////////////

section("6. Compare every pair");
{
  const nums = [1, 2, 3];
  const pairs = [];
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      pairs.push([nums[i], nums[j]]);
    }
  }
  console.log(pairs);
}

/////////////////////////////

section("7. Find duplicate using nested loop");
{
  const nums = [1, 2, 1];
  let duplicate = false;
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] === nums[j]) duplicate = true;
    }
  }
  console.log(duplicate);
}

/////////////////////////////

section("8. Break nested loop");
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
