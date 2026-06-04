# Truthy Falsy Interview Questions

Path: `1 SIMPLE JS\02_data-types\14_truthy-falsy\03_interview-questions.md`

## Basic

1. What is Truthy Falsy?
Answer: boolean and truthy/falsy values decide how conditions behave.

2. Why do we use Truthy Falsy?
Answer: We use it to make code behavior clear and predictable for this specific case.

3. Give a small example.

```js
function run(value) {
  return value;
}
console.log(run("Truthy Falsy"));
```

## Intermediate

1. What is the common mistake?
Answer: The common mistake is memorizing the definition but not tracing the value line by line.

2. How do you debug Truthy Falsy?
Answer: Make a tiny example, log the input and output, then change one value and check what changed.

3. What should you mention in interview?
Answer: Mention behavior, mutation or non-mutation, return value, and one edge case.

## Advanced

1. Explain Truthy Falsy in runtime terms.
Answer: First identify what is created, then trace how JavaScript executes each line and what value is returned.

## One Line Revision

Truthy Falsy: boolean and truthy/falsy values decide how conditions behave.
