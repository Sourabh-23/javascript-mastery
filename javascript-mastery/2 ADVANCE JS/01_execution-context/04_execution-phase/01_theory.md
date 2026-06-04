# Execution Phase

Path: `2 ADVANCE JS\01_execution-context\04_execution-phase\01_theory.md`

## Simple Meaning

execution phase is where JavaScript runs code line by line, assigns values, calls functions, and updates memory.

## Mental Model

Read the code in this order:

1. What is created first?
2. Which line runs next?
3. What value is stored or returned?

## Real Use

You will use Execution Phase when tracing interview output questions and debugging real code behavior.

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

Execution Phase is important because it changes how JavaScript stores work, calls functions, or reads values at runtime.

## How To Study

1. Read this file once.
2. Run `02_snippets.js`.
3. Predict every answer in `03_coding-output-practice.js`.
4. Explain the flow in your own words.
