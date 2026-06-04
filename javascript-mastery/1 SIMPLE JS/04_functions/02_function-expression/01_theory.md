# Function Expression

Path: `1 SIMPLE JS\04_functions\02_function-expression\01_theory.md`

## Simple Meaning

A function expression stores a function inside a variable.

## Understand It Like This

The variable receives a function value, so hoisting behaves differently from declarations.

## Why We Use It

Callbacks, handlers, and assigned utilities often use function expressions.

## Small Example

```js
const add = function (a, b) {
  return a + b;
};
```

## Common Mistake

You cannot safely call a const function expression before initialization.

## Interview Answer

A function expression is a function assigned to a variable.

## How To Study

1. Read this theory slowly.
2. Open `02_snippets.js` and run each example.
3. Predict output before checking the answer.
4. Read `03_interview-questions.md` for spoken interview answers.
5. Practice `04_output-questions.js` for confidence.
