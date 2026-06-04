# Var

Path: `1 SIMPLE JS\01_variables\01_var\01_theory.md`

## Simple Meaning

var is the old way to declare variables in JavaScript.

## Understand It Like This

var is function-scoped, not block-scoped.

## Why We Use It

You mostly see var in old codebases and interview questions.

## Small Example

```js
if (true) {
  var count = 10;
}
console.log(count); // 10
```

## Common Mistake

var can be redeclared and is hoisted, which can create confusing bugs.

## Interview Answer

var is function-scoped and hoisted. Modern JavaScript usually prefers let and const.

## How To Study

1. Read this theory slowly.
2. Open `02_snippets.js` and run each example.
3. Predict output before checking the answer.
4. Read `03_coding-output-practice.js` for spoken interview answers.
5. Practice `03_coding-output-practice.js` for confidence.
