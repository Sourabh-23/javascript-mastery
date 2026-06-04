"use strict";

/*
Path: 1 SIMPLE JS\08_loops\01_for\02_snippets.js
Topic: for loop snippets

How to study:
1. Read one snippet.
2. Predict output.
3. Run this file.
4. Change one value and run again.

Run:
node "1 SIMPLE JS/08_loops/01_for/02_snippets.js"
*/

function section(label) {
  console.log("\n--- " + label + " ---");
}

section("1. Count 1 to 5");
{
  const result = [];
  for (let i = 1; i <= 5; i++) {
    result.push(i);
  }
  console.log(result);
}

/////////////////////////////

section("2. Sum numbers");
{
  let total = 0;
  for (let i = 1; i <= 5; i++) {
    total += i;
  }
  console.log(total);
}

/////////////////////////////

section("3. Multiplication table");
{
  const table = [];
  for (let i = 1; i <= 5; i++) {
    table.push(3 * i);
  }
  console.log(table);
}

/////////////////////////////

section("4. Loop through array by index");
{
  const marks = [70, 85, 90];
  for (let i = 0; i < marks.length; i++) {
    console.log("mark", i, marks[i]);
  }
}

/////////////////////////////

section("5. Find max value");
{
  const nums = [12, 5, 30, 18];
  let max = nums[0];
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > max) max = nums[i];
  }
  console.log(max);
}

/////////////////////////////

section("6. Reverse array manually");
{
  const items = ["a", "b", "c"];
  const reversed = [];
  for (let i = items.length - 1; i >= 0; i--) {
    reversed.push(items[i]);
  }
  console.log(reversed);
}

/////////////////////////////

section("7. Loop string characters");
{
  const word = "loop";
  for (let i = 0; i < word.length; i++) {
    console.log(word[i]);
  }
}

/////////////////////////////

section("8. Nested for loop basics");
{
  const pairs = [];
  for (let i = 1; i <= 2; i++) {
    for (let j = 1; j <= 2; j++) {
      pairs.push([i, j]);
    }
  }
  console.log(pairs);
}

/////////////////////////////
