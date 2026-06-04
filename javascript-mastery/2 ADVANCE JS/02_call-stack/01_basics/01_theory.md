# Basics

Path: `2 ADVANCE JS\02_call-stack\01_basics\01_theory.md`

## Simple Meaning

the call stack tracks which function is currently running. It follows LIFO: last function called is the first one completed.

## Mental Model

Read the code in this order:

1. What is created first?
2. Which line runs next?
3. What value is stored or returned?

## Real Use

You will use Basics when tracing interview output questions and debugging real code behavior.

## Small Example

```js
function first() {
  return second();
}
function second() {
  return "done";
}
console.log(first());
```

## Common Mistake

The common mistake is jumping to the answer without tracing each function call, variable value, or returned result.

## Interview Answer

Basics is important because it changes how JavaScript stores work, calls functions, or reads values at runtime.

## How To Study

1. Read this file once.
2. Run `02_snippets.js`.
3. Predict every answer in `04_coding-output-practice.js`.
4. Explain the flow in your own words.
