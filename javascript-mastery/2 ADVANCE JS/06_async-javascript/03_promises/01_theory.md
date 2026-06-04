# Promises

Path: `2 ADVANCE JS\06_async-javascript\03_promises\01_theory.md`

## Simple Meaning

A Promise represents a future async result.

## Understand It Like This

It can be pending, fulfilled, or rejected.

## Why We Use It

API calls, database calls, file operations, and async workflows use promises.

## Small Example

```js
fetch("/api/users")
  .then((res) => res.json())
  .catch((err) => console.log(err));
```

## Common Mistake

Forgetting return inside then chains can break promise flow.

## Interview Answer

A Promise is an object representing eventual completion or failure of async work.

## How To Study

1. Read this theory slowly.
2. Open `02_snippets.js` and run each example.
3. Predict output before checking the answer.
4. Read `03_interview-questions.md` for spoken interview answers.
5. Practice `04_output-questions.js` for confidence.
