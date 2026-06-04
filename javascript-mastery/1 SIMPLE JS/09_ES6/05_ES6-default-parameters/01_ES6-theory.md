# Default Parameters

Path: `1 SIMPLE JS\09_ES6\05_ES6-default-parameters\01_ES6-theory.md`

## Simple Meaning

default parameters provide fallback values when an argument is missing or passed as undefined.

## Mental Model

Read the code in this order:

1. What is created first?
2. Which line runs next?
3. What value is stored or returned?

## Real Use

You will use Default Parameters when tracing interview output questions and debugging real code behavior.

## Small Example

```js
function greet(name = "User") {
  return "Hi " + name;
}
console.log(greet());
```

## Common Mistake

The common mistake is jumping to the answer without tracing each function call, variable value, or returned result.

## Interview Answer

Default Parameters is important because it changes how JavaScript stores work, calls functions, or reads values at runtime.

## How To Study

1. Read this file once.
2. Run `02_ES6-snippets.js`.
3. Predict every answer in `04_ES6-coding-output-practice.js`.
4. Explain the flow in your own words.
