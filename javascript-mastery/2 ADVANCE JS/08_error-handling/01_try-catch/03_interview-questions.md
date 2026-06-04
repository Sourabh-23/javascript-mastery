# Try Catch Interview Questions

Path: `2 ADVANCE JS\08_error-handling\01_try-catch\03_interview-questions.md`

## Basic

1. What is Try Catch?
Answer: error handling catches failures, throws meaningful errors, and runs cleanup code.

2. Why do we use Try Catch?
Answer: We use it to make code behavior clear and predictable for this specific case.

3. Give a small example.

```js
function run(value) {
  return value;
}
console.log(run("Try Catch"));
```

## Intermediate

1. What is the common mistake?
Answer: The common mistake is memorizing the definition but not tracing the value line by line.

2. How do you debug Try Catch?
Answer: Make a tiny example, log the input and output, then change one value and check what changed.

3. What should you mention in interview?
Answer: Mention behavior, mutation or non-mutation, return value, and one edge case.

## Advanced

1. Explain Try Catch in runtime terms.
Answer: First identify what is created, then trace how JavaScript executes each line and what value is returned.

## One Line Revision

Try Catch: error handling catches failures, throws meaningful errors, and runs cleanup code.
