# Execution Phase Interview Questions

Path: `2 ADVANCE JS\01_execution-context\04_execution-phase\03_interview-questions.md`

## Basic

1. What is Execution Phase?
Answer: Execution Phase belongs to execution context and should be understood by tracing inputs, operations, and output.

2. Why do we use Execution Phase?
Answer: We use it to make code behavior clear and predictable for this specific case.

3. Give a small example.

```js
function run(value) {
  return value;
}
console.log(run("Execution Phase"));
```

## Intermediate

1. What is the common mistake?
Answer: The common mistake is memorizing the definition but not tracing the value line by line.

2. How do you debug Execution Phase?
Answer: Make a tiny example, log the input and output, then change one value and check what changed.

3. What should you mention in interview?
Answer: Mention behavior, mutation or non-mutation, return value, and one edge case.

## Advanced

1. Explain Execution Phase in runtime terms.
Answer: First identify what is created, then trace how JavaScript executes each line and what value is returned.

## One Line Revision

Execution Phase: Execution Phase belongs to execution context and should be understood by tracing inputs, operations, and output.
