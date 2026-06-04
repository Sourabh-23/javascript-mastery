# For In Interview Questions

Path: `1 SIMPLE JS\08_loops\04_for-in\03_interview-questions.md`

## Basic

1. What is For In?
Answer: for-in loops object keys.

2. Why do we use For In?
Answer: We use it to make code behavior clear and predictable for this specific case.

3. Give a small example.

```js
const user = { name: "Amit", role: "dev" };
for (const key in user) {
  console.log(key, user[key]);
}
```

## Intermediate

1. What is the common mistake?
Answer: The common mistake is memorizing the definition but not tracing the value line by line.

2. How do you debug For In?
Answer: Make a tiny example, log the input and output, then change one value and check what changed.

3. What should you mention in interview?
Answer: Mention behavior, mutation or non-mutation, return value, and one edge case.

## Advanced

1. Explain For In in runtime terms.
Answer: First identify what is created, then trace how JavaScript executes each line and what value is returned.

## One Line Revision

For In: for-in loops object keys.
