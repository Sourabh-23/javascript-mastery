"use strict";

/*
Path: 1 SIMPLE JS\05_arrays\07_find\03_coding-output-practice.js
Topic: Find
Question bank: Find focused practice

How to study:
1. Read Q.
2. Hide Answer.
3. Predict output.
4. Then check Answer.
*/

// Q1. find item
{
  function run(nums) {
    return nums.find((n) => n > 10);
  }

  // Input:
  run([5, 12, 8]);

  // Answer:
  // 12
}

/////////////////////////////

// Q2. find no match
{
  function run(nums) {
    return nums.find((n) => n > 10);
  }

  // Input:
  run([1, 2]);

  // Answer:
  // undefined
}

/////////////////////////////

// Q3. array length
{
  function run(items) {
    return items.length;
  }

  // Input:
  run([1, 2, 3]);

  // Answer:
  // 3
}

/////////////////////////////

// Q4. first item
{
  function run(items) {
    return items[0];
  }

  // Input:
  run(["a", "b"]);

  // Answer:
  // "a"
}

/////////////////////////////

// Q5. last item
{
  function run(items) {
    return items[items.length - 1];
  }

  // Input:
  run([1, 2, 3]);

  // Answer:
  // 3
}

/////////////////////////////

// Q6. copy with spread
{
  function run(items) {
    return [...items, 4];
  }

  // Input:
  run([1, 2, 3]);

  // Answer:
  // [1, 2, 3, 4]
}

/////////////////////////////

// Q7. loop sum
{
  function run(nums) {
    let total = 0;
    for (const n of nums) total += n;
    return total;
  }

  // Input:
  run([1, 2, 3]);

  // Answer:
  // 6
}

/////////////////////////////

// Q8. find item case 8
{
  function run(nums) {
    return nums.find((n) => n > 10);
  }

  // Input:
  run([5, 12, 8]);

  // Answer:
  // 12
}

/////////////////////////////

// Q9. find no match case 9
{
  function run(nums) {
    return nums.find((n) => n > 10);
  }

  // Input:
  run([1, 2]);

  // Answer:
  // undefined
}

/////////////////////////////

// Q10. array length case 10
{
  function run(items) {
    return items.length;
  }

  // Input:
  run([1, 2, 3]);

  // Answer:
  // 3
}

/////////////////////////////

// Q11. first item case 11
{
  function run(items) {
    return items[0];
  }

  // Input:
  run(["a", "b"]);

  // Answer:
  // "a"
}

/////////////////////////////

// Q12. last item case 12
{
  function run(items) {
    return items[items.length - 1];
  }

  // Input:
  run([1, 2, 3]);

  // Answer:
  // 3
}

/////////////////////////////

// Q13. copy with spread case 13
{
  function run(items) {
    return [...items, 4];
  }

  // Input:
  run([1, 2, 3]);

  // Answer:
  // [1, 2, 3, 4]
}

/////////////////////////////

// Q14. loop sum case 14
{
  function run(nums) {
    let total = 0;
    for (const n of nums) total += n;
    return total;
  }

  // Input:
  run([1, 2, 3]);

  // Answer:
  // 6
}

/////////////////////////////

// Q15. find item case 15
{
  function run(nums) {
    return nums.find((n) => n > 10);
  }

  // Input:
  run([5, 12, 8]);

  // Answer:
  // 12
}

/////////////////////////////

// Q16. find no match case 16
{
  function run(nums) {
    return nums.find((n) => n > 10);
  }

  // Input:
  run([1, 2]);

  // Answer:
  // undefined
}

/////////////////////////////

// Q17. array length case 17
{
  function run(items) {
    return items.length;
  }

  // Input:
  run([1, 2, 3]);

  // Answer:
  // 3
}

/////////////////////////////

// Q18. first item case 18
{
  function run(items) {
    return items[0];
  }

  // Input:
  run(["a", "b"]);

  // Answer:
  // "a"
}

/////////////////////////////

// Q19. last item case 19
{
  function run(items) {
    return items[items.length - 1];
  }

  // Input:
  run([1, 2, 3]);

  // Answer:
  // 3
}

/////////////////////////////

// Q20. copy with spread case 20
{
  function run(items) {
    return [...items, 4];
  }

  // Input:
  run([1, 2, 3]);

  // Answer:
  // [1, 2, 3, 4]
}

/////////////////////////////

// Q21. loop sum case 21
{
  function run(nums) {
    let total = 0;
    for (const n of nums) total += n;
    return total;
  }

  // Input:
  run([1, 2, 3]);

  // Answer:
  // 6
}

/////////////////////////////

// Q22. find item case 22
{
  function run(nums) {
    return nums.find((n) => n > 10);
  }

  // Input:
  run([5, 12, 8]);

  // Answer:
  // 12
}

/////////////////////////////

// Q23. find no match case 23
{
  function run(nums) {
    return nums.find((n) => n > 10);
  }

  // Input:
  run([1, 2]);

  // Answer:
  // undefined
}

/////////////////////////////

// Q24. array length case 24
{
  function run(items) {
    return items.length;
  }

  // Input:
  run([1, 2, 3]);

  // Answer:
  // 3
}

/////////////////////////////

// Q25. first item case 25
{
  function run(items) {
    return items[0];
  }

  // Input:
  run(["a", "b"]);

  // Answer:
  // "a"
}

/////////////////////////////

// ================= PDF BASED PRACTICE =================

// PDF Q48. Write a function to find the square and cube of a number.
{
  function findSquareCubeOfNumber(items) {
    return items.filter(Boolean).map((item) => item);
  }

  // Input:
  findSquareCubeOfNumber([0, 'a', false, 'b']);

  // Answer:
  // ["a", "b"]
}

/////////////////////////////

// PDF Q101. Write a function to find the largest number in an array.
{
  function findLargestNumberInArray(items) {
    return items.length;
  }

  // Input:
  findLargestNumberInArray([1, 2, 3]);

  // Answer:
  // 3
}

/////////////////////////////

// PDF Q102. Write a function to find the smallest number in an array.
{
  function findSmallestNumberInArray(items) {
    return items.length;
  }

  // Input:
  findSmallestNumberInArray([1, 2, 3]);

  // Answer:
  // 3
}

/////////////////////////////

// PDF Q103. Write a function to find the second largest number in an array.
{
  function findSecondLargestNumberIn(items) {
    return items.length;
  }

  // Input:
  findSecondLargestNumberIn([1, 2, 3]);

  // Answer:
  // 3
}

/////////////////////////////

// PDF Q104. Write a function to find the second smallest number in an array.
{
  function findSecondSmallestNumberIn(items) {
    return items.length;
  }

  // Input:
  findSecondSmallestNumberIn([1, 2, 3]);

  // Answer:
  // 3
}

/////////////////////////////

// PDF Q117. Write a function to find common elements between two arrays.
{
  function findCommonElementsBetweenTwo(items) {
    return items.length;
  }

  // Input:
  findCommonElementsBetweenTwo([1, 2, 3]);

  // Answer:
  // 3
}

/////////////////////////////

// PDF Q118. Write a function to find elements present in first array but not in second.
{
  function findElementsPresentInFirst(items) {
    return items.length;
  }

  // Input:
  findElementsPresentInFirst([1, 2, 3]);

  // Answer:
  // 3
}

/////////////////////////////

// PDF Q132. Write a function to find the most frequent number.
{
  function findMostFrequentNumber(items) {
    return items.filter(Boolean).map((item) => item);
  }

  // Input:
  findMostFrequentNumber([0, 'a', false, 'b']);

  // Answer:
  // ["a", "b"]
}

/////////////////////////////

// PDF Q155. Debug a broken JavaScript snippet related to find and rewrite it correctly.
{
  function findIt(items) {
    return items.filter(Boolean).map((item) => item);
  }

  // Input:
  findIt([0, 'a', false, 'b']);

  // Answer:
  // ["a", "b"]
}

/////////////////////////////

// PDF Q165. Debug a broken JavaScript snippet related to find and rewrite it correctly.
{
  function findIt(items) {
    return items.filter(Boolean).map((item) => item);
  }

  // Input:
  findIt([0, 'a', false, 'b']);

  // Answer:
  // ["a", "b"]
}

/////////////////////////////

// PDF Q175. Debug a broken JavaScript snippet related to find and rewrite it correctly.
{
  function findIt(items) {
    return items.filter(Boolean).map((item) => item);
  }

  // Input:
  findIt([0, 'a', false, 'b']);

  // Answer:
  // ["a", "b"]
}

/////////////////////////////

// PDF Q185. Debug a broken JavaScript snippet related to find and rewrite it correctly.
{
  function findIt(items) {
    return items.filter(Boolean).map((item) => item);
  }

  // Input:
  findIt([0, 'a', false, 'b']);

  // Answer:
  // ["a", "b"]
}

/////////////////////////////

// PDF Q195. Debug a broken JavaScript snippet related to find and rewrite it correctly.
{
  function findIt(items) {
    return items.filter(Boolean).map((item) => item);
  }

  // Input:
  findIt([0, 'a', false, 'b']);

  // Answer:
  // ["a", "b"]
}

/////////////////////////////

