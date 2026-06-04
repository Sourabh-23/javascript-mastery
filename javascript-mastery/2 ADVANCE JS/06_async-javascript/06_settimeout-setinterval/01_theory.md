# Settimeout Setinterval

Path: `2 ADVANCE JS\06_async-javascript\06_settimeout-setinterval\01_theory.md`

## Simple Meaning

setTimeout runs once after a delay; setInterval runs repeatedly.

## Understand It Like This

Timeout is one alarm. Interval is a repeating alarm.

## Why We Use It

Timers, polling, delays, loading states, and repeated tasks use these.

## Small Example

```js
setTimeout(() => console.log("once"), 1000);
const id = setInterval(() => console.log("repeat"), 1000);
```

## Common Mistake

Always clear intervals when they are no longer needed.

## Interview Answer

setTimeout executes once after delay; setInterval executes repeatedly until cleared.

## How To Study

1. Read this theory slowly.
2. Open `02_snippets.js` and run each example.
3. Predict output before checking the answer.
4. Read `03_coding-output-practice.js` for spoken interview answers.
5. Practice `03_coding-output-practice.js` for confidence.
