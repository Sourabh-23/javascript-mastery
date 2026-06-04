"use strict";

/*
Path: 1 SIMPLE JS\08_loops\03_do-while\02_snippets.js
Topic: do-while loop snippets

How to study:
1. Read one snippet.
2. Predict output.
3. Run this file.
4. Change one value and run again.

Run:
node "1 SIMPLE JS/08_loops/03_do-while/02_snippets.js"
*/

function section(label) {
  console.log("\n--- " + label + " ---");
}

section("1. Runs at least once");
{
  let count = 0;
  do {
    count++;
  } while (false);
  console.log(count);
}

/////////////////////////////

section("2. Count with do while");
{
  const result = [];
  let i = 1;
  do {
    result.push(i);
    i++;
  } while (i <= 3);
  console.log(result);
}

/////////////////////////////

section("3. Ask until valid");
{
  const inputs = ["", "", "ok"];
  let index = 0;
  let value;
  do {
    value = inputs[index];
    index++;
  } while (value !== "ok");
  console.log(index);
}

/////////////////////////////

section("4. Menu style loop");
{
  let choice = "retry";
  let tries = 0;
  do {
    tries++;
    choice = tries === 2 ? "exit" : "retry";
  } while (choice !== "exit");
  console.log(tries);
}

/////////////////////////////

section("5. Count digits including zero");
{
  let num = 0;
  let digits = 0;
  do {
    digits++;
    num = Math.floor(num / 10);
  } while (num > 0);
  console.log(digits);
}

/////////////////////////////

section("6. Post increment condition");
{
  let i = 0;
  do {
    console.log(i);
  } while (i++ < 2);
}

/////////////////////////////

section("7. Payment count");
{
  let amount = 250;
  let payments = 0;
  do {
    amount -= 100;
    payments++;
  } while (amount > 0);
  console.log(payments);
}

/////////////////////////////

section("8. Difference from while");
{
  let whileRuns = 0;
  while (false) {
    whileRuns++;
  }
  
  let doRuns = 0;
  do {
    doRuns++;
  } while (false);
  
  console.log({ whileRuns, doRuns });
}

/////////////////////////////
