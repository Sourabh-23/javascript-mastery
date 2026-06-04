# Iterators

Path: `1 SIMPLE JS\09_ES6\10_ES6-iterators\01_theory.md`

## Simple Meaning

iterators follow a protocol where next() returns an object with value and done, allowing JavaScript to read values one by one.

## Mental Model

Read the code in this order:

1. What is created first?
2. Which line runs next?
3. What value is stored or returned?

## Real Use

You will use Iterators when tracing interview output questions and debugging real code behavior.

## Small Example

```js
const iterator = [1, 2][Symbol.iterator]();
console.log(iterator.next());
```

## Common Mistake

The common mistake is jumping to the answer without tracing each function call, variable value, or returned result.

## Interview Answer

Iterators is important because it changes how JavaScript stores work, calls functions, or reads values at runtime.

## How To Study

1. Read this file once.
2. Run `02_snippets.js`.
3. Predict every answer in `03_coding-output-practice.js`.
4. Explain the flow in your own words.
