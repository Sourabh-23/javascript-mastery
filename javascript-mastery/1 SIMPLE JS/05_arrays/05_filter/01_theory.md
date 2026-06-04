# Filter

Path: `1 SIMPLE JS\05_arrays\05_filter\01_theory.md`

## Simple Meaning

filter creates a new array with items that pass a condition.

## Understand It Like This

Keep only the matching items.

## Why We Use It

Search results, active users, valid values, and permissions use filter.

## Small Example

```js
const nums = [1, 2, 3, 4];
const even = nums.filter((n) => n % 2 === 0);
```

## Common Mistake

The callback must return true or false.

## Interview Answer

filter returns a new array containing only items that satisfy the condition.

## How To Study

1. Read this theory slowly.
2. Open `02_snippets.js` and run each example.
3. Predict output before checking the answer.
4. Read `03_interview-questions.md` for spoken interview answers.
5. Practice `04_coding-output-practice.js` for confidence.
