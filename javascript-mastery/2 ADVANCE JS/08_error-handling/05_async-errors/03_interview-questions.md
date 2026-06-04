# Async Errors Interview Questions

Path: `2 ADVANCE JS\08_error-handling\05_async-errors\03_interview-questions.md`

## Basic

1. What is Async Errors?
Answer: async JavaScript handles work that finishes later using callbacks, promises, timers, and the event loop.

2. Why do we use Async Errors?
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

2. How do you debug Async Errors?
Answer: Make a tiny example, log the input and output, then change one value and check what changed.

3. What should you mention in interview?
Answer: Mention behavior, mutation or non-mutation, return value, and one edge case.

## Advanced

1. Explain Async Errors in runtime terms.
Answer: First identify what is created, then trace how JavaScript executes each line and what value is returned.

## One Line Revision

Async Errors: async JavaScript handles work that finishes later using callbacks, promises, timers, and the event loop.
