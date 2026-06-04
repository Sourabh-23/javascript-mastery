# Reduce Interview Questions

Path: `1 SIMPLE JS\05_arrays\06_reduce\03_interview-questions.md`

## Basic

1. What is Reduce?
Answer: reduce converts an array into one final value like sum, object, or grouped data.

2. Why do we use Reduce?
Answer: We use it to make code behavior clear and predictable for this specific case.

3. Give a small example.

```js
const nums = [1, 2, 3];
const total = nums.reduce((sum, num) => sum + num, 0);
console.log(total);
```

## Intermediate

1. What is the common mistake?
Answer: The common mistake is memorizing the definition but not tracing the value line by line.

2. How do you debug Reduce?
Answer: Make a tiny example, log the input and output, then change one value and check what changed.

3. What should you mention in interview?
Answer: Mention behavior, mutation or non-mutation, return value, and one edge case.

## Advanced

1. Explain Reduce in runtime terms.
Answer: First identify what is created, then trace how JavaScript executes each line and what value is returned.

## One Line Revision

Reduce: reduce converts an array into one final value like sum, object, or grouped data.
