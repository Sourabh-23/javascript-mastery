# Quick Sort Revision

Path: `2 ADVANCE JS\10_dsa\10_sorting\04_quick-sort\06_revision.md`

## Must Remember

- sort mutates the array; numeric sort needs a compare function.
- Always predict output before running code.
- Check whether the original value changes or a new value is returned.
- Practice one simple case and one edge case.

## Quick Example

```js
function search(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === target) return i;
  }
  return -1;
}
console.log(search([1, 2, 3], 2));
```

## Study Order

1. Read `01_theory.md`.
2. Run `02_snippets.js`.
3. Predict answers in `04_coding-output-practice.js`.
4. Revise this file before interview.

## Interview Sentence

Quick Sort means: sort mutates the array; numeric sort needs a compare function.
