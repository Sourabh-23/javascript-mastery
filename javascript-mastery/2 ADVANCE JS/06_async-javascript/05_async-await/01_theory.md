# Async Await

Path: `2 ADVANCE JS\06_async-javascript\05_async-await\01_theory.md`

## Simple Meaning

async/await is syntax for writing promise-based code in a cleaner way.

## Understand It Like This

await pauses inside an async function until the promise settles.

## Why We Use It

API calls and backend service logic often use async/await.

## Small Example

```js
async function loadUsers() {
  const res = await fetch("/api/users");
  return res.json();
}
```

## Common Mistake

await works only inside async functions or top-level modules.

## Interview Answer

async/await is built on promises and makes async code easier to read.

## How To Study

1. Read this theory slowly.
2. Open `02_snippets.js` and run each example.
3. Predict output before checking the answer.
4. Read `03_interview-questions.md` for spoken interview answers.
5. Practice `04_output-questions.js` for confidence.
