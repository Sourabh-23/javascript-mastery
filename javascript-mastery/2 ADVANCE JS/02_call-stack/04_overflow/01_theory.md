# Overflow

Path: `2 ADVANCE JS\02_call-stack\04_overflow\01_theory.md`

## Simple Meaning

stack overflow happens when function calls keep adding to the call stack until it becomes too deep, usually because recursion has no safe stop condition.

## Mental Model

Read the code in this order:

1. What is created first?
2. Which line runs next?
3. What value is stored or returned?

## Real Use

You will use Overflow when tracing interview output questions and debugging real code behavior.

## Small Example

```js
function count(n) {
  if (n === 0) return 0;
  return 1 + count(n - 1);
}
console.log(count(3));
```

## Common Mistake

The common mistake is jumping to the answer without tracing each function call, variable value, or returned result.

## Interview Answer

Overflow is important because it changes how JavaScript stores work, calls functions, or reads values at runtime.

## How To Study

1. Read this file once.
2. Run `02_snippets.js`.
3. Predict every answer in `03_coding-output-practice.js`.
4. Explain the flow in your own words.
