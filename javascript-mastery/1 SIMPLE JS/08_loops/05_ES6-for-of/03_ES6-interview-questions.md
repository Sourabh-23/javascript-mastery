# For Of Interview Questions

Path: `1 SIMPLE JS\08_loops\05_ES6-for-of\03_ES6-interview-questions.md`

## Basic

1. What is For Of?
Answer: for-of loops iterable values like arrays, strings, Sets, and Maps.

2. Why do we use For Of?
Answer: We use it to make code behavior clear and predictable for this specific case.

3. Give a small example.

```js
const skills = ["JS", "React"];
for (const skill of skills) {
  console.log(skill);
}
```

## Intermediate

1. What is the common mistake?
Answer: The common mistake is memorizing the definition but not tracing the value line by line.

2. How do you debug For Of?
Answer: Make a tiny example, log the input and output, then change one value and check what changed.

3. What should you mention in interview?
Answer: Mention behavior, mutation or non-mutation, return value, and one edge case.

## Advanced

1. Explain For Of in runtime terms.
Answer: First identify what is created, then trace how JavaScript executes each line and what value is returned.

## One Line Revision

For Of: for-of loops iterable values like arrays, strings, Sets, and Maps.
