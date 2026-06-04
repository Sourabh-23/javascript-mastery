# Lexical Environment

Path: `2 ADVANCE JS\03_closures\02_lexical-environment\01_theory.md`

## Simple Meaning

A closure happens when an inner function remembers variables from its outer function.

## Understand It Like This

The inner function carries its surrounding memory with it.

## Why We Use It

Closures are used for data privacy, counters, callbacks, and function factories.

## Small Example

```js
function counter() {
  let count = 0;
  return function () {
    count++;
    return count;
  };
}
```

## Common Mistake

Do not think outer variables disappear immediately if an inner function still uses them.

## Interview Answer

A closure is a function bundled with references to its lexical environment.

## How To Study

1. Read this theory slowly.
2. Open `02_snippets.js` and run each example.
3. Predict output before checking the answer.
4. Read `03_coding-output-practice.js` for spoken interview answers.
5. Practice `03_coding-output-practice.js` for confidence.
