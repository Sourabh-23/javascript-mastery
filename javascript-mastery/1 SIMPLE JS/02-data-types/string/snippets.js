"use strict";

/*
Path: 02-data-types/string/snippets.js
Topic: String

How to study:
1. Read one example.
2. Predict output.
3. Run this file.
4. Change one line and run again.

Run:
node 02-data-types/string/snippets.js
*/

function section(label) {
  console.log("\n--- " + label + " ---");
}

section("Topic");
console.log("String stores text and string methods usually return new strings.");

section("Example 1: Basic string");
{
  const name = "Aman";
  console.log(name.length);
  console.log(name[0]);
}

section("Example 2: String methods");
{
  const text = "  Node JS  ";
  console.log(text.trim());
  console.log(text.toLowerCase());
}

section("Example 3: Immutability");
{
  const word = "node";
  console.log(word.toUpperCase());
  console.log(word);
}
