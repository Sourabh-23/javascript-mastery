# Stack Revision

Path: `2 ADVANCE JS\10_dsa\11_stack\06_revision.md`

## Must Remember

- DSA is about solving problems efficiently using the right algorithm and data structure.
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

Stack means: DSA is about solving problems efficiently using the right algorithm and data structure.
