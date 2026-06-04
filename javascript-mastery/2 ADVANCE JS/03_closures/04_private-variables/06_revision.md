# Private Variables Revision

Path: `2 ADVANCE JS\03_closures\04_private-variables\06_revision.md`

## Must Remember

- var is function scoped, can be redeclared, and is hoisted with undefined.
- Always predict output before running code.
- Check whether the original value changes or a new value is returned.
- Practice one simple case and one edge case.

## Quick Example

```js
function createCounter() {
  let count = 0;
  return function () {
    count++;
    return count;
  };
}
const counter = createCounter();
console.log(counter());
```

## Study Order

1. Read `01_theory.md`.
2. Run `02_snippets.js`.
3. Predict answers in `04_coding-output-practice.js`.
4. Revise this file before interview.

## Interview Sentence

Private Variables means: var is function scoped, can be redeclared, and is hoisted with undefined.
