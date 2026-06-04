"use strict";

/*
Path: 19-dsa/strings/snippets.js
Topic: Strings

How to study:
1. Read one example.
2. Predict output.
3. Run this file.
4. Change one line and run again.

Run:
node 19-dsa/strings/snippets.js
*/

function section(label) {
  console.log("\n--- " + label + " ---");
}

section("Topic");
console.log("String DSA works with text logic.");

section("Example 1: Reverse");
{
  function reverse(str) {
    return str.split("").reverse().join("");
  }
  console.log(reverse("node"));
}

/////////////////////////////

section("Example 2: Palindrome");
{
  function isPalindrome(str) {
    const clean = str.toLowerCase();
    return clean === clean.split("").reverse().join("");
  }
  console.log(isPalindrome("madam"));
}

/////////////////////////////

section("Example 3: Frequency");
{
  function frequency(str) {
    const map = {};
    for (const char of str) map[char] = (map[char] ?? 0) + 1;
    return map;
  }
  console.log(frequency("aabbc"));
}

/////////////////////////////
