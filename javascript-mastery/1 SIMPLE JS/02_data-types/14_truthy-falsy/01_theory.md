# Truthy Falsy

Path: `1 SIMPLE JS\02_data-types\14_truthy-falsy\01_theory.md`

## Simple Meaning

Truthy and falsy describe how values behave inside conditions.

## Understand It Like This

A value does not need to be true/false to behave like true/false in if statements.

## Why We Use It

Conditions, validation, defaults, and short-circuit logic use truthy/falsy behavior.

## Small Example

```js
if ("hello") {
  console.log("runs");
}
```

## Common Mistake

Empty string, 0, null, undefined, NaN, and false are falsy.

## Interview Answer

Truthy values act like true in conditions; falsy values act like false.

## How To Study

1. Read this theory slowly.
2. Open `02_snippets.js` and run each example.
3. Predict output before checking the answer.
4. Read `03_interview-questions.md` for spoken interview answers.
5. Practice `04_output-questions.js` for confidence.
