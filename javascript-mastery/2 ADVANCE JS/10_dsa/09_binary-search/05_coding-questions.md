# Binary Search Coding Questions

Path: `2 ADVANCE JS\10_dsa\09_binary-search\05_coding-questions.md`

## Easy

1. Write a small function that demonstrates Binary Search.
2. Return the result instead of only using console.log.
3. Add one test input and expected output.

```js
function search(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === target) return i;
  }
  return -1;
}
console.log(search([1, 2, 3], 2));
```

## Medium

1. Wrap the same logic inside a reusable function.
2. Handle an empty, null, or invalid input where it makes sense.
3. Write two different test cases.

## Interview Practice

1. Explain input.
2. Explain output.
3. Explain whether original data changes.
4. Explain one edge case.
5. Explain time complexity only if loop, array, or DSA logic is involved.
