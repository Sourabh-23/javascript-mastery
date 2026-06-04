# Basics

Path: `2 ADVANCE JS\03_closures\01_basics\01_theory.md`

## Simple Meaning

closure basics means an inner function can remember and use variables from its outer function even after the outer function has returned.

## Mental Model

Read the code in this order:

1. What is created first?
2. Which line runs next?
3. What value is stored or returned?

## Real Use

You will use Basics when tracing interview output questions and debugging real code behavior.

## Small Example

```js
function outer() {
  let count = 0;
  return function inner() {
    count++;
    return count;
  };
}
const counter = outer();
console.log(counter());
```

## Common Mistake

The common mistake is jumping to the answer without tracing each function call, variable value, or returned result.

## Interview Answer

Basics is important because it changes how JavaScript stores work, calls functions, or reads values at runtime.

## How To Study

1. Read this file once.
2. Run `02_snippets.js`.
3. Predict every answer in `03_coding-output-practice.js`.
4. Explain the flow in your own words.
