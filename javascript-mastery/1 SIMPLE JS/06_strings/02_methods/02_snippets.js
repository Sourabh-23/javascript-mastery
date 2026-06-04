"use strict";

/*
Path: 1 SIMPLE JS\06_strings\02_methods\02_snippets.js
Topic: Methods snippets

How to study:
1. Read one snippet.
2. Predict output.
3. Run this file.
4. Change one value and run again.

Run:
node "1 SIMPLE JS/06_strings/02_methods/02_snippets.js"
*/

function section(label) {
  console.log("\n--- " + label + " ---");
}

section("1. string length");
{
  function run(str) {
    return str.length;
  }
  console.log(run("hello"));
}

/////////////////////////////

section("2. uppercase");
{
  function run(str) {
    return str.toUpperCase();
  }
  console.log(run("js"));
}

/////////////////////////////

section("3. includes text");
{
  function run(str) {
    return str.includes("script");
  }
  console.log(run("javascript"));
}

/////////////////////////////

section("4. slice text");
{
  function run(str) {
    return str.slice(0, 4);
  }
  console.log(run("javascript"));
}

/////////////////////////////

section("5. replace text");
{
  function run(str) {
    return str.replace("old", "new");
  }
  console.log(run("old value"));
}

/////////////////////////////

section("6. split words");
{
  function run(str) {
    return str.split(" ");
  }
  console.log(run("hello js"));
}

/////////////////////////////
