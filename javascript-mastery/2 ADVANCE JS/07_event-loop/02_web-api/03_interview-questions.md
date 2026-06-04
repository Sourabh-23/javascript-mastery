# Web Api Interview Questions

Path: `2 ADVANCE JS\07_event-loop\02_web-api\03_interview-questions.md`

## Basic

1. What is Web Api?
Answer: async JavaScript handles work that finishes later using callbacks, promises, timers, and the event loop.

2. Why do we use Web Api?
Answer: We use it to make code behavior clear and predictable for this specific case.

3. Give a small example.

```js
function run(value) {
  return value;
}
console.log(run("Web Api"));
```

## Intermediate

1. What is the common mistake?
Answer: The common mistake is memorizing the definition but not tracing the value line by line.

2. How do you debug Web Api?
Answer: Make a tiny example, log the input and output, then change one value and check what changed.

3. What should you mention in interview?
Answer: Mention behavior, mutation or non-mutation, return value, and one edge case.

## Advanced

1. Explain Web Api in runtime terms.
Answer: First identify what is created, then trace how JavaScript executes each line and what value is returned.

## One Line Revision

Web Api: async JavaScript handles work that finishes later using callbacks, promises, timers, and the event loop.
