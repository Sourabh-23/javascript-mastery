# Binary Search

Path: `2 ADVANCE JS\10_dsa\09_binary-search\01_theory.md`

## Simple Meaning

DSA focuses on solving problems efficiently by choosing the right data structure and algorithm pattern.

## Mental Model

When you read this topic, ask three things:

1. What value goes in?
2. What operation happens?
3. What value or side effect comes out?

## Real Use

You will use Binary Search while reading output questions, writing small interview examples, and debugging real code. The main goal is not memorizing the name. The main goal is understanding exactly what JavaScript does line by line.

## Small Example

```js
function binarySearch(nums, target) {
  let left = 0;
  let right = nums.length - 1;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (nums[mid] === target) return mid;
    if (nums[mid] < target) left = mid + 1;
    else right = mid - 1;
  }
  return -1;
}
console.log(binarySearch([1, 3, 5], 5));
```

## Common Mistake

The common mistake is reading only the definition and skipping output prediction. Always run the snippet, then change one value and predict again.

## Interview Answer

Binary Search is useful because it controls how data is read, changed, compared, stored, or executed in JavaScript. In interviews, explain the behavior first, then give a tiny code example.

## How To Study

1. Read this file once.
2. Run `02_snippets.js`.
3. Predict every answer in `03_coding-output-practice.js`.
4. Write two small examples without looking.
