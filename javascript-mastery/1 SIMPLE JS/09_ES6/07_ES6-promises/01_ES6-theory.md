# ES6 Promises

Path: `1 SIMPLE JS\09_ES6\07_ES6-promises\01_ES6-theory.md`

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
2. Open `02_ES6-snippets.js` and run each example.
3. Predict output before checking the answer.
4. Read `03_ES6-interview-questions.md` for spoken interview answers.
5. Practice `04_ES6-output-questions.js` for confidence.
