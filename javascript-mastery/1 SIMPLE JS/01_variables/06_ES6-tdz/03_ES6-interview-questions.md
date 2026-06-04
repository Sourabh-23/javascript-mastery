# Tdz Interview Questions

Path: `1 SIMPLE JS\01_variables\06_ES6-tdz\03_ES6-interview-questions.md`

## Basic

1. What is Tdz?
Answer: TDZ is the unsafe area before a let or const declaration is initialized.

2. Why do we use Tdz?
Answer: We use it to make code behavior clear and predictable for this specific case.

3. Give a small example.

```js
function run(value) {
  return value;
}
console.log(run("Tdz"));
```

## Intermediate

1. What is the common mistake?
Answer: The common mistake is memorizing the definition but not tracing the value line by line.

2. How do you debug Tdz?
Answer: Make a tiny example, log the input and output, then change one value and check what changed.

3. What should you mention in interview?
Answer: Mention behavior, mutation or non-mutation, return value, and one edge case.

## Advanced

1. Explain Tdz in runtime terms.
Answer: First identify what is created, then trace how JavaScript executes each line and what value is returned.

## One Line Revision

Tdz: TDZ is the unsafe area before a let or const declaration is initialized.
