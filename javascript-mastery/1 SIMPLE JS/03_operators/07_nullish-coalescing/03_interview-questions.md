# Nullish Coalescing Interview Questions

Path: `1 SIMPLE JS\03_operators\07_nullish-coalescing\03_interview-questions.md`

## Basic

1. What is Nullish Coalescing?
Answer: null is an intentional empty value.

2. Why do we use Nullish Coalescing?
Answer: We use it to make code behavior clear and predictable for this specific case.

3. Give a small example.

```js
function run(value) {
  return value;
}
console.log(run("Nullish Coalescing"));
```

## Intermediate

1. What is the common mistake?
Answer: The common mistake is memorizing the definition but not tracing the value line by line.

2. How do you debug Nullish Coalescing?
Answer: Make a tiny example, log the input and output, then change one value and check what changed.

3. What should you mention in interview?
Answer: Mention behavior, mutation or non-mutation, return value, and one edge case.

## Advanced

1. Explain Nullish Coalescing in runtime terms.
Answer: First identify what is created, then trace how JavaScript executes each line and what value is returned.

## One Line Revision

Nullish Coalescing: null is an intentional empty value.
