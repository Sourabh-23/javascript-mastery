# Hoisting

Path: `1 SIMPLE JS\01_variables\04_hoisting\01_theory.md`

## Simple Meaning

Hoisting is JavaScript behavior where declarations are processed before code execution.

## Understand It Like This

JavaScript knows about declarations first, but initialization still happens where the code is written.

## Why We Use It

Hoisting explains many output questions involving var, let, const, and functions.

## Small Example

```js
console.log(a); // undefined
var a = 10;
```

## Common Mistake

Do not say JavaScript physically moves code. It creates memory during the creation phase.

## Interview Answer

Hoisting means declarations are registered before execution, which affects access before declaration.

## How To Study

1. Read this theory slowly.
2. Open `02_snippets.js` and run each example.
3. Predict output before checking the answer.
4. Read `03_interview-questions.md` for spoken interview answers.
5. Practice `04_coding-output-practice.js` for confidence.
