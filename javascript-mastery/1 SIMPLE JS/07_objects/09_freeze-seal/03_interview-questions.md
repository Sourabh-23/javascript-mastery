# Freeze Seal Interview Questions

Path: `1 SIMPLE JS\07_objects\09_freeze-seal\03_interview-questions.md`

## Basic

1. What is Freeze Seal?
Answer: objects store key-value data and this topic explains one way to read, update, copy, or protect that data.

2. Why do we use Freeze Seal?
Answer: We use it to make code behavior clear and predictable for this specific case.

3. Give a small example.

```js
const user = { name: "Amit" };
console.log({ ...user, active: true });
```

## Intermediate

1. What is the common mistake?
Answer: The common mistake is memorizing the definition but not tracing the value line by line.

2. How do you debug Freeze Seal?
Answer: Make a tiny example, log the input and output, then change one value and check what changed.

3. What should you mention in interview?
Answer: Mention behavior, mutation or non-mutation, return value, and one edge case.

## Advanced

1. Explain Freeze Seal in runtime terms.
Answer: First identify what is created, then trace how JavaScript executes each line and what value is returned.

## One Line Revision

Freeze Seal: objects store key-value data and this topic explains one way to read, update, copy, or protect that data.
