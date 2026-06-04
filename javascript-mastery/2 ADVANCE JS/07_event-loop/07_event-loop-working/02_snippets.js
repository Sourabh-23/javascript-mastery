"use strict";

/*
Path: 16-event-loop/event-loop-working/snippets.js
Topic: Event Loop Working

How to study:
1. Read one example.
2. Predict output.
3. Run this file.
4. Change one line and run again.

Run:
node 16-event-loop/event-loop-working/snippets.js
*/

function section(label) {
  console.log("\n--- " + label + " ---");
}

section("Topic");
console.log("Event loop moves queued callbacks when stack is empty.");

section("Example 1: Sync first");
{
  console.log("1");
  console.log("2");
}

/////////////////////////////

section("Example 2: Promise before timeout");
{
  console.log("start");
  setTimeout(() => console.log("timeout"), 0);
  Promise.resolve().then(() => console.log("promise"));
  console.log("end");
}

/////////////////////////////

section("Example 3: Microtask queue");
{
  Promise.resolve().then(() => console.log("microtask 1"));
  Promise.resolve().then(() => console.log("microtask 2"));
  console.log("sync");
}

/////////////////////////////
