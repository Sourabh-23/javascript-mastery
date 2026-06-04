# ES6 Arrow Function

Path: `1 SIMPLE JS\04_functions\03_ES6-arrow-function\01_theory.md`

## Simple Meaning

An arrow function is a shorter ES6 function syntax.

## Understand It Like This

It is great for small callbacks and it does not have its own this.

## Why We Use It

Array methods, callbacks, promises, and concise helper functions use arrow functions.

## Small Example

```js
const double = (num) => num * 2;
console.log(double(5));
```

## Common Mistake

Arrow functions do not bind their own this, so avoid them when you need dynamic this.

## Interview Answer

Arrow functions are ES6 functions with shorter syntax and lexical this.

## How To Study

1. Read this theory slowly.
2. Open `02_snippets.js` and run each example.
3. Predict output before checking the answer.
4. Read `03_coding-output-practice.js` for spoken interview answers.
5. Practice `03_coding-output-practice.js` for confidence.
