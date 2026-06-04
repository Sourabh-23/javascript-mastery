# ES6 Symbol

Path: `1 SIMPLE JS\02_data-types\07_ES6-symbol\01_ES6-theory.md`

## Simple Meaning

Symbol creates a unique value, even if two symbols have the same description.

## Understand It Like This

Use Symbol when you need a property key that should not accidentally clash.

## Why We Use It

Symbols are used for unique object keys and some advanced JavaScript internals.

## Small Example

```js
const id = Symbol("id");
const user = { [id]: 101 };
console.log(user[id]);
```

## Common Mistake

Symbol("id") === Symbol("id") is false because both symbols are unique.

## Interview Answer

Symbol is an ES6 primitive used to create unique identifiers.

## How To Study

1. Read this theory slowly.
2. Open `02_ES6-snippets.js` and run each example.
3. Predict output before checking the answer.
4. Read `03_ES6-interview-questions.md` for spoken interview answers.
5. Practice `04_ES6-output-questions.js` for confidence.
