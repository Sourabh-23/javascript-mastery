# ES6 Const

Path: `1 SIMPLE JS\01_variables\03_ES6-const\01_ES6-theory.md`

## Simple Meaning

const declares a variable that cannot be reassigned.

## Understand It Like This

Use const when the variable name should always point to the same value/reference.

## Why We Use It

Use const by default for values, arrays, objects, functions, and imports.

## Small Example

```js
const user = { name: "Amit" };
user.name = "Rahul";
console.log(user.name);
```

## Common Mistake

const stops reassignment, but object and array contents can still be changed.

## Interview Answer

const is block-scoped and cannot be reassigned after initialization.

## How To Study

1. Read this theory slowly.
2. Open `02_ES6-snippets.js` and run each example.
3. Predict output before checking the answer.
4. Read `03_ES6-interview-questions.md` for spoken interview answers.
5. Practice `04_ES6-coding-output-practice.js` for confidence.
