# Async Errors Revision

Path: `2 ADVANCE JS\08_error-handling\05_async-errors\06_revision.md`

## Must Remember

- async JavaScript handles work that finishes later using callbacks, promises, timers, and the event loop.
- Always predict output before running code.
- Check whether the original value changes or a new value is returned.
- Practice one simple case and one edge case.

## Quick Example

```js
async function getValue() {
  return "done";
}
getValue().then((value) => console.log(value));
```

## Study Order

1. Read `01_theory.md`.
2. Run `02_snippets.js`.
3. Predict answers in `04_coding-output-practice.js`.
4. Revise this file before interview.

## Interview Sentence

Async Errors means: async JavaScript handles work that finishes later using callbacks, promises, timers, and the event loop.
