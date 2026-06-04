"use strict";

/*
Path: 02-data-types/bigint/snippets.js
Topic: Bigint

How to study:
1. Read one example.
2. Predict output.
3. Run this file.
4. Change one line and run again.

Run:
node 02-data-types/bigint/snippets.js
*/

function section(label) {
  console.log("\n--- " + label + " ---");
}

section("Topic");
console.log("BigInt stores integers larger than Number's safe integer limit.");

section("Example 1: Large integer");
{
  const big = 9007199254740993n;
  console.log(big);
}

section("Example 2: BigInt math");
{
  console.log(10n + 2n);
}

section("Example 3: Type check");
{
  console.log(typeof 10n);
}
