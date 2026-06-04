# Findindex

Path: `1 SIMPLE JS\05_arrays\08_findindex\01_theory.md`

## Simple Meaning

findIndex returns the index of the first item that matches a condition.

## Understand It Like This

It searches and gives the position.

## Why We Use It

Use it when you need to update or locate an item by index.

## Small Example

```js
const users = [{ id: 1 }, { id: 2 }];
const index = users.findIndex((u) => u.id === 2);
```

## Common Mistake

It returns -1 if nothing matches.

## Interview Answer

findIndex returns the index of the first matching item, or -1.

## How To Study

1. Read this theory slowly.
2. Open `02_snippets.js` and run each example.
3. Predict output before checking the answer.
4. Read `03_interview-questions.md` for spoken interview answers.
5. Practice `04_coding-output-practice.js` for confidence.
