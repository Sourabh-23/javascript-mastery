# Null

Path: `1 SIMPLE JS\02_data-types\05_null\01_theory.md`

## Simple Meaning

null means intentionally empty.

## Understand It Like This

Use null when you want to clearly say: there is no value right now.

## Why We Use It

APIs, databases, and state values often use null for missing data.

## Small Example

```js
let selectedUser = null;
console.log(selectedUser); // null
```

## Common Mistake

typeof null returns "object". This is an old JavaScript bug, but null is still a primitive value.

## Interview Answer

null is used to intentionally represent absence of value.

## How To Study

1. Read this theory slowly.
2. Open `02_snippets.js` and run each example.
3. Predict output before checking the answer.
4. Read `03_coding-output-practice.js` for spoken interview answers.
5. Practice `03_coding-output-practice.js` for confidence.
