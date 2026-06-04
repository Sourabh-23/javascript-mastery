# Counter Example Revision

Path: `2 ADVANCE JS\03_closures\05_counter-example\06_revision.md`

## Must Remember

- closure lets an inner function remember variables from its outer scope.
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

Counter Example means: closure lets an inner function remember variables from its outer scope.
