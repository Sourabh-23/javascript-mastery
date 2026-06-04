# Reduce

Path: `1 SIMPLE JS\05_arrays\06_reduce\01_theory.md`

## Simple Meaning

reduce converts an array into one final value.

## Understand It Like This

Carry an accumulator through each item.

## Why We Use It

Totals, grouping, counts, and object building often use reduce.

## Small Example

```js
const nums = [1, 2, 3];
const total = nums.reduce((sum, n) => sum + n, 0);
```

## Common Mistake

Forgetting the initial value can cause confusing behavior.

## Interview Answer

reduce processes every item and returns one accumulated result.

## How To Study

1. Read this theory slowly.
2. Open `02_snippets.js` and run each example.
3. Predict output before checking the answer.
4. Read `03_interview-questions.md` for spoken interview answers.
5. Practice `04_output-questions.js` for confidence.
