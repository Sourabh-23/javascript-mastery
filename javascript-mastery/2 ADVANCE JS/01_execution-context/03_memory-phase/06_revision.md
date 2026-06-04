# Memory Phase Revision

Path: `2 ADVANCE JS\01_execution-context\03_memory-phase\06_revision.md`

## Must Remember

- Memory Phase belongs to execution context and should be understood by tracing inputs, operations, and output.
- Always predict output before running code.
- Check whether the original value changes or a new value is returned.
- Practice one simple case and one edge case.

## Quick Example

```js
function run(value) {
  return value;
}
console.log(run("Memory Phase"));
```

## Study Order

1. Read `01_theory.md`.
2. Run `02_snippets.js`.
3. Predict answers in `04_coding-output-practice.js`.
4. Revise this file before interview.

## Interview Sentence

Memory Phase means: Memory Phase belongs to execution context and should be understood by tracing inputs, operations, and output.
