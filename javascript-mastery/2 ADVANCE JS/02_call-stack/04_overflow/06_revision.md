# Overflow Revision

Path: `2 ADVANCE JS\02_call-stack\04_overflow\06_revision.md`

## Must Remember

- Overflow belongs to call stack and should be understood by tracing inputs, operations, and output.
- Always predict output before running code.
- Check whether the original value changes or a new value is returned.
- Practice one simple case and one edge case.

## Quick Example

```js
function run(value) {
  return value;
}
console.log(run("Overflow"));
```

## Study Order

1. Read `01_theory.md`.
2. Run `02_snippets.js`.
3. Predict answers in `04_coding-output-practice.js`.
4. Revise this file before interview.

## Interview Sentence

Overflow means: Overflow belongs to call stack and should be understood by tracing inputs, operations, and output.
