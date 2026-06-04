# Polyfills Interview Questions

Path: `2 ADVANCE JS\05_call-apply-bind\05_polyfills\03_interview-questions.md`

## Basic

1. What is Polyfills?
Answer: Polyfills belongs to call apply bind and should be understood by tracing inputs, operations, and output.

2. Why do we use Polyfills?
Answer: We use it to make code behavior clear and predictable for this specific case.

3. Give a small example.

```js
function run(value) {
  return value;
}
console.log(run("Polyfills"));
```

## Intermediate

1. What is the common mistake?
Answer: The common mistake is memorizing the definition but not tracing the value line by line.

2. How do you debug Polyfills?
Answer: Make a tiny example, log the input and output, then change one value and check what changed.

3. What should you mention in interview?
Answer: Mention behavior, mutation or non-mutation, return value, and one edge case.

## Advanced

1. Explain Polyfills in runtime terms.
Answer: First identify what is created, then trace how JavaScript executes each line and what value is returned.

## One Line Revision

Polyfills: Polyfills belongs to call apply bind and should be understood by tracing inputs, operations, and output.
