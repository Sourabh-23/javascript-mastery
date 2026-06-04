# Map Interview Questions

Path: `1 SIMPLE JS\05_arrays\04_map\03_interview-questions.md`

## Basic

1. What is Map?
Answer: map transforms every array item and returns a new array.

2. Why do we use Map?
Answer: We use it to make code behavior clear and predictable for this specific case.

3. Give a small example.

```js
const nums = [1, 2, 3];
const result = nums.map((num) => num * 2);
console.log(result);
```

## Intermediate

1. What is the common mistake?
Answer: The common mistake is memorizing the definition but not tracing the value line by line.

2. How do you debug Map?
Answer: Make a tiny example, log the input and output, then change one value and check what changed.

3. What should you mention in interview?
Answer: Mention behavior, mutation or non-mutation, return value, and one edge case.

## Advanced

1. Explain Map in runtime terms.
Answer: First identify what is created, then trace how JavaScript executes each line and what value is returned.

## One Line Revision

Map: map transforms every array item and returns a new array.
