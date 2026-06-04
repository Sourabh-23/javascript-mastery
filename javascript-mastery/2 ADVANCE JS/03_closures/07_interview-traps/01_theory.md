# Interview Traps

Path: `2 ADVANCE JS\03_closures\07_interview-traps\01_theory.md`

## Simple Meaning

closure interview traps usually involve loop variables, shared outer variables, private state, and functions remembering old values.

## Mental Model

Read the code in this order:

1. What is created first?
2. Which line runs next?
3. What value is stored or returned?

## Real Use

You will use Interview Traps when tracing interview output questions and debugging real code behavior.

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

Interview Traps is important because it changes how JavaScript stores work, calls functions, or reads values at runtime.

## How To Study

1. Read this file once.
2. Run `02_snippets.js`.
3. Predict every answer in `04_coding-output-practice.js`.
4. Explain the flow in your own words.
