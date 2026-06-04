# Typeof Interview Questions

Path: `1 SIMPLE JS\02_data-types\11_typeof\03_interview-questions.md`

## Basic

1. What is Typeof?
Answer: typeof returns the type name as a string, with quirks like typeof null returning object.

2. Why do we use Typeof?
Answer: We use it to make code behavior clear and predictable for this specific case.

3. Give a small example.

```js
function run(value) {
  return value;
}
console.log(run("Typeof"));
```

## Intermediate

1. What is the common mistake?
Answer: The common mistake is memorizing the definition but not tracing the value line by line.

2. How do you debug Typeof?
Answer: Make a tiny example, log the input and output, then change one value and check what changed.

3. What should you mention in interview?
Answer: Mention behavior, mutation or non-mutation, return value, and one edge case.

## Advanced

1. Explain Typeof in runtime terms.
Answer: First identify what is created, then trace how JavaScript executes each line and what value is returned.

## One Line Revision

Typeof: typeof returns the type name as a string, with quirks like typeof null returning object.
