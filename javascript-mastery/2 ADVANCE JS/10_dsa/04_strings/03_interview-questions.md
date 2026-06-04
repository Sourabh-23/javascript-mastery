# Strings Interview Questions

Path: `2 ADVANCE JS\10_dsa\04_strings\03_interview-questions.md`

## Basic

1. What is Strings?
Answer: string stores text and is immutable, so methods return new strings instead of changing the original.

2. Why do we use Strings?
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

2. How do you debug Strings?
Answer: Make a tiny example, log the input and output, then change one value and check what changed.

3. What should you mention in interview?
Answer: Mention behavior, mutation or non-mutation, return value, and one edge case.

## Advanced

1. Explain Strings in runtime terms.
Answer: First identify what is created, then trace how JavaScript executes each line and what value is returned.

## One Line Revision

Strings: string stores text and is immutable, so methods return new strings instead of changing the original.
