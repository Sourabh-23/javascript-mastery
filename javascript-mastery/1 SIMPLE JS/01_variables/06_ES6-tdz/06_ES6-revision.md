# Tdz Revision

Path: `1 SIMPLE JS\01_variables\06_ES6-tdz\06_ES6-revision.md`

## Must Remember

- TDZ is the unsafe area before a let or const declaration is initialized.
- Always predict output before running code.
- Check whether the original value changes or a new value is returned.
- Practice one simple case and one edge case.

## Quick Example

```js
function run(value) {
  return value;
}
console.log(run("Tdz"));
```

## Study Order

1. Read `01_theory.md`.
2. Run `02_ES6-snippets.js`.
3. Predict answers in `04_ES6-coding-output-practice.js`.
4. Revise this file before interview.

## Interview Sentence

Tdz means: TDZ is the unsafe area before a let or const declaration is initialized.
