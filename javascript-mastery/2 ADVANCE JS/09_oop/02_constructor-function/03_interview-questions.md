# Constructor Function Interview Questions

Path: `2 ADVANCE JS\09_oop\02_constructor-function\03_interview-questions.md`

## Basic

1. What is Constructor Function?
Answer: const is block scoped and cannot be reassigned, but object and array contents can still change.

2. Why do we use Constructor Function?
Answer: We use it to make code behavior clear and predictable for this specific case.

3. Give a small example.

```js
function run(value) {
  return value;
}
console.log(run("Constructor Function"));
```

## Intermediate

1. What is the common mistake?
Answer: The common mistake is memorizing the definition but not tracing the value line by line.

2. How do you debug Constructor Function?
Answer: Make a tiny example, log the input and output, then change one value and check what changed.

3. What should you mention in interview?
Answer: Mention behavior, mutation or non-mutation, return value, and one edge case.

## Advanced

1. Explain Constructor Function in runtime terms.
Answer: First identify what is created, then trace how JavaScript executes each line and what value is returned.

## One Line Revision

Constructor Function: const is block scoped and cannot be reassigned, but object and array contents can still change.
