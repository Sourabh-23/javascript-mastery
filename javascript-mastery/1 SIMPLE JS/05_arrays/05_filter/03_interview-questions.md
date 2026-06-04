# Filter Interview Questions

Path: `1 SIMPLE JS\05_arrays\05_filter\03_interview-questions.md`

## Basic

1. What is Filter?
Answer: filter keeps only items that pass a condition and returns a new array.

2. Why do we use Filter?
Answer: We use it to make code behavior clear and predictable for this specific case.

3. Give a small example.

```js
const nums = [-1, 2, 3];
const result = nums.filter((num) => num > 0);
console.log(result);
```

## Intermediate

1. What is the common mistake?
Answer: The common mistake is memorizing the definition but not tracing the value line by line.

2. How do you debug Filter?
Answer: Make a tiny example, log the input and output, then change one value and check what changed.

3. What should you mention in interview?
Answer: Mention behavior, mutation or non-mutation, return value, and one edge case.

## Advanced

1. Explain Filter in runtime terms.
Answer: First identify what is created, then trace how JavaScript executes each line and what value is returned.

## One Line Revision

Filter: filter keeps only items that pass a condition and returns a new array.
