# Let Const Interview Questions

Path: `1 SIMPLE JS\09_ES6\01_ES6-let-const\03_ES6-interview-questions.md`

## Basic

1. What is Let Const?
Answer: let is block scoped and can be reassigned, but cannot be used before declaration because of TDZ.

2. Why do we use Let Const?
Answer: We use it to make code behavior clear and predictable for this specific case.

3. Give a small example.

```js
function run(value) {
  return value;
}
console.log(run("Let Const"));
```

## Intermediate

1. What is the common mistake?
Answer: The common mistake is memorizing the definition but not tracing the value line by line.

2. How do you debug Let Const?
Answer: Make a tiny example, log the input and output, then change one value and check what changed.

3. What should you mention in interview?
Answer: Mention behavior, mutation or non-mutation, return value, and one edge case.

## Advanced

1. Explain Let Const in runtime terms.
Answer: First identify what is created, then trace how JavaScript executes each line and what value is returned.

## One Line Revision

Let Const: let is block scoped and can be reassigned, but cannot be used before declaration because of TDZ.
