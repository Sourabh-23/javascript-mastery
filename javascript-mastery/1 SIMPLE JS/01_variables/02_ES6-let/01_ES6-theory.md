# ES6 Let

Path: `1 SIMPLE JS\01_variables\02_ES6-let\01_ES6-theory.md`

## Simple Meaning

let declares a variable that can be reassigned.

## Understand It Like This

let is block-scoped, so it lives only inside the nearest block.

## Why We Use It

Use let when the value will change later.

## Small Example

```js
let count = 1;
count = 2;
console.log(count);
```

## Common Mistake

let is hoisted but stays in the temporal dead zone until declaration.

## Interview Answer

let is an ES6 block-scoped variable declaration that can be reassigned.

## How To Study

1. Read this theory slowly.
2. Open `02_ES6-snippets.js` and run each example.
3. Predict output before checking the answer.
4. Read `03_ES6-interview-questions.md` for spoken interview answers.
5. Practice `04_ES6-output-questions.js` for confidence.
