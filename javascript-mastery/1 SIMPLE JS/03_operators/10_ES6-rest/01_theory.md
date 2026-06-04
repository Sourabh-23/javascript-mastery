# ES6 Rest

Path: `1 SIMPLE JS\03_operators\10_ES6-rest\01_theory.md`

## Simple Meaning

Rest collects multiple values into one array-like parameter.

## Understand It Like This

Spread opens values; rest gathers values.

## Why We Use It

Use rest when a function can receive many arguments.

## Small Example

```js
function sum(...nums) {
  return nums.reduce((a, b) => a + b, 0);
}
```

## Common Mistake

Rest must usually be the last parameter.

## Interview Answer

Rest syntax collects remaining values into an array.

## How To Study

1. Read this theory slowly.
2. Open `02_snippets.js` and run each example.
3. Predict output before checking the answer.
4. Read `03_coding-output-practice.js` for spoken interview answers.
5. Practice `03_coding-output-practice.js` for confidence.
