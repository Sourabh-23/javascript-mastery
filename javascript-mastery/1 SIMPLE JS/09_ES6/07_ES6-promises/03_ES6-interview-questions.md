# Promises Interview Questions

Path: `1 SIMPLE JS\09_ES6\07_ES6-promises\03_ES6-interview-questions.md`

## Basic

1. What is Promises?
Answer: async JavaScript handles work that finishes later using callbacks, promises, timers, and the event loop.

2. Why do we use Promises?
Answer: We use it to make code behavior clear and predictable for this specific case.

3. Give a small example.

```js
async function getValue() {
  return "done";
}
getValue().then((value) => console.log(value));
```

## Intermediate

1. What is the common mistake?
Answer: The common mistake is memorizing the definition but not tracing the value line by line.

2. How do you debug Promises?
Answer: Make a tiny example, log the input and output, then change one value and check what changed.

3. What should you mention in interview?
Answer: Mention behavior, mutation or non-mutation, return value, and one edge case.

## Advanced

1. Explain Promises in runtime terms.
Answer: First identify what is created, then trace how JavaScript executes each line and what value is returned.

## One Line Revision

Promises: async JavaScript handles work that finishes later using callbacks, promises, timers, and the event loop.
