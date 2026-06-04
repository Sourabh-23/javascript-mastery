# Arrays Interview Questions

Path: `2 ADVANCE JS\10_dsa\03_arrays\03_interview-questions.md`

## Basic

1. What is Arrays?
Answer: Arrays belongs to DSA and should be understood by tracing inputs, operations, and output.

2. Why do we use Arrays?
Answer: We use it to make code behavior clear and predictable for this specific case.

3. Give a small example.

```js
function search(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === target) return i;
  }
  return -1;
}
console.log(search([1, 2, 3], 2));
```

## Intermediate

1. What is the common mistake?
Answer: The common mistake is memorizing the definition but not tracing the value line by line.

2. How do you debug Arrays?
Answer: Make a tiny example, log the input and output, then change one value and check what changed.

3. What should you mention in interview?
Answer: Mention behavior, mutation or non-mutation, return value, and one edge case.

## Advanced

1. Explain Arrays in runtime terms.
Answer: First identify what is created, then trace how JavaScript executes each line and what value is returned.

## One Line Revision

Arrays: Arrays belongs to DSA and should be understood by tracing inputs, operations, and output.
