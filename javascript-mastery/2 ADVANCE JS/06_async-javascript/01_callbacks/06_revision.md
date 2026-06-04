# Callbacks Revision

Path: `2 ADVANCE JS\06_async-javascript\01_callbacks\06_revision.md`

## Must Remember

- this depends on how a function is called; call/apply/bind manually control it.
- Always predict output before running code.
- Check whether the original value changes or a new value is returned.
- Practice one simple case and one edge case.

## Quick Example

```js
const user = { name: "Amit" };
function getName() {
  return this.name;
}
console.log(getName.call(user));
```

## Study Order

1. Read `01_theory.md`.
2. Run `02_snippets.js`.
3. Predict answers in `04_coding-output-practice.js`.
4. Revise this file before interview.

## Interview Sentence

Callbacks means: this depends on how a function is called; call/apply/bind manually control it.
