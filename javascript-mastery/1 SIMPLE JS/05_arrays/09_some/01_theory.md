# Some

Path: `1 SIMPLE JS\05_arrays\09_some\01_theory.md`

## Simple Meaning

some checks if at least one item passes a condition.

## Understand It Like This

At least one true means result is true.

## Why We Use It

Use it for checks like any admin, any invalid field, any selected item.

## Small Example

```js
const nums = [1, 3, 4];
console.log(nums.some((n) => n % 2 === 0));
```

## Common Mistake

some returns a boolean, not the matched item.

## Interview Answer

some returns true if any array item satisfies the condition.

## How To Study

1. Read this theory slowly.
2. Open `02_snippets.js` and run each example.
3. Predict output before checking the answer.
4. Read `03_interview-questions.md` for spoken interview answers.
5. Practice `04_coding-output-practice.js` for confidence.
