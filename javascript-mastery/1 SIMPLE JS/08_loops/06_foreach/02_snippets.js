"use strict";

/*
Path: 1 SIMPLE JS\08_loops\06_foreach\02_snippets.js
Topic: forEach snippets

How to study:
1. Read one snippet.
2. Predict output.
3. Run this file.
4. Change one value and run again.

Run:
node "1 SIMPLE JS/08_loops/06_foreach/02_snippets.js"
*/

function section(label) {
  console.log("\n--- " + label + " ---");
}

section("1. Loop array items");
{
  const names = ["Amit", "Neha"];
  names.forEach((name) => {
    console.log(name);
  });
}

/////////////////////////////

section("2. Use item and index");
{
  const names = ["Amit", "Neha"];
  names.forEach((name, index) => {
    console.log(index, name);
  });
}

/////////////////////////////

section("3. Sum using side effect");
{
  const nums = [1, 2, 3];
  let total = 0;
  nums.forEach((num) => {
    total += num;
  });
  console.log(total);
}

/////////////////////////////

section("4. Create new array manually");
{
  const nums = [1, 2, 3];
  const doubled = [];
  nums.forEach((num) => {
    doubled.push(num * 2);
  });
  console.log(doubled);
}

/////////////////////////////

section("5. forEach return value is undefined");
{
  const result = [1, 2, 3].forEach((num) => num * 2);
  console.log(result);
}

/////////////////////////////

section("6. Return does not break forEach");
{
  const nums = [1, 2, 3];
  let count = 0;
  nums.forEach((num) => {
    count++;
    if (num === 2) return;
  });
  console.log(count);
}

/////////////////////////////

section("7. Update array using index");
{
  const nums = [1, 2, 3];
  nums.forEach((num, index) => {
    nums[index] = num + 1;
  });
  console.log(nums);
}

/////////////////////////////

section("8. Filter manually with forEach");
{
  const nums = [-1, 2, 3];
  const positives = [];
  nums.forEach((num) => {
    if (num > 0) positives.push(num);
  });
  console.log(positives);
}

/////////////////////////////
