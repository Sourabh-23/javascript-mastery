# Lexical Environment Interview Questions

Path: `2 ADVANCE JS\03_closures\02_lexical-environment\03_interview-questions.md`

## Basic

1. What is Lexical Environment?
Answer: closure lets an inner function remember variables from its outer scope.

2. Why do we use Lexical Environment?
Answer: We use it to make code behavior clear and predictable for this specific case.

3. Give a small example.

```js
function run(value) {
  return value;
}
console.log(run("Lexical Environment"));
```

## Intermediate

1. What is the common mistake?
Answer: The common mistake is memorizing the definition but not tracing the value line by line.

2. How do you debug Lexical Environment?
Answer: Make a tiny example, log the input and output, then change one value and check what changed.

3. What should you mention in interview?
Answer: Mention behavior, mutation or non-mutation, return value, and one edge case.

## Advanced

1. Explain Lexical Environment in runtime terms.
Answer: First identify what is created, then trace how JavaScript executes each line and what value is returned.

## One Line Revision

Lexical Environment: closure lets an inner function remember variables from its outer scope.
