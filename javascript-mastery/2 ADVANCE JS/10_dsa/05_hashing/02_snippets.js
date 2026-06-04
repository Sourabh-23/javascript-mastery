"use strict";

/*
Path: 19-dsa/hashing/snippets.js
Topic: Hashing

How to study:
1. Read one example.
2. Predict output.
3. Run this file.
4. Change one line and run again.

Run:
node 19-dsa/hashing/snippets.js
*/

function section(label) {
  console.log("\n--- " + label + " ---");
}

section("Topic");
console.log("Hashing stores fast lookup data.");

section("Example 1: Frequency map");
{
  const map = {};
  for (const char of "aabbc") {
    map[char] = (map[char] ?? 0) + 1;
  }
  console.log(map);
}

/////////////////////////////

section("Example 2: Set lookup");
{
  const seen = new Set([1, 2, 3]);
  console.log(seen.has(2));
}

/////////////////////////////

section("Example 3: Find duplicate");
{
  function hasDuplicate(nums) {
    const seen = new Set();
    for (const num of nums) {
      if (seen.has(num)) return true;
      seen.add(num);
    }
    return false;
  }
  console.log(hasDuplicate([1, 2, 2]));
}

/////////////////////////////
