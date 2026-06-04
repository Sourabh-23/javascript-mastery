# Map

Path: `1 SIMPLE JS\05_arrays\04_map\01_theory.md`

## Simple Meaning

map creates a new array by transforming every item.

## Understand It Like This

Input array in, transformed array out.

## Why We Use It

Use map when you need a new array of changed values.

## Small Example

```js
const nums = [1, 2, 3];
const doubled = nums.map((n) => n * 2);
```

## Common Mistake

Do not use map only for console.log side effects. Use forEach for that.

## Interview Answer

map returns a new array; forEach does not.

## How To Study

1. Read this theory slowly.
2. Open `02_snippets.js` and run each example.
3. Predict output before checking the answer.
4. Read `03_interview-questions.md` for spoken interview answers.
5. Practice `04_output-questions.js` for confidence.
