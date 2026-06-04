# ES6 TDZ

Path: `1 SIMPLE JS\01_variables\06_ES6-tdz\01_ES6-theory.md`

## Simple Meaning

TDZ means Temporal Dead Zone: the time before let or const can be accessed.

## Understand It Like This

The variable exists, but JavaScript does not allow you to use it before declaration.

## Why We Use It

TDZ explains why let and const throw ReferenceError before declaration.

## Small Example

```js
console.log(name); // ReferenceError
let name = "Amit";
```

## Common Mistake

Do not think let and const are not hoisted. They are hoisted but not initialized.

## Interview Answer

TDZ is the period between entering scope and variable initialization for let and const.

## How To Study

1. Read this theory slowly.
2. Open `02_ES6-snippets.js` and run each example.
3. Predict output before checking the answer.
4. Read `03_ES6-interview-questions.md` for spoken interview answers.
5. Practice `04_ES6-output-questions.js` for confidence.
