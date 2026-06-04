"use strict";

/*
Path: 1 SIMPLE JS\05_arrays\09_some\03_coding-output-practice.js
Topic: Some
Question bank: Some focused practice

How to study:
1. Read Q.
2. Hide Answer.
3. Predict output.
4. Then check Answer.
*/

// Q1. some true
{
  function run(nums) {
    return nums.some((n) => n % 2 === 0);
  }

  // Input:
  run([1, 3, 4]);

  // Answer:
  // true
}

/////////////////////////////

// Q2. some false
{
  function run(nums) {
    return nums.some((n) => n % 2 === 0);
  }

  // Input:
  run([1, 3]);

  // Answer:
  // false
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

// Q8. some true case 8
{
  function run(nums) {
    return nums.some((n) => n % 2 === 0);
  }

  // Input:
  run([1, 3, 4]);

  // Answer:
  // true
}

/////////////////////////////

// Q9. some false case 9
{
  function run(nums) {
    return nums.some((n) => n % 2 === 0);
  }

  // Input:
  run([1, 3]);

  // Answer:
  // false
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

// Q15. some true case 15
{
  function run(nums) {
    return nums.some((n) => n % 2 === 0);
  }

  // Input:
  run([1, 3, 4]);

  // Answer:
  // true
}

/////////////////////////////

// Q16. some false case 16
{
  function run(nums) {
    return nums.some((n) => n % 2 === 0);
  }

  // Input:
  run([1, 3]);

  // Answer:
  // false
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

// Q22. some true case 22
{
  function run(nums) {
    return nums.some((n) => n % 2 === 0);
  }

  // Input:
  run([1, 3, 4]);

  // Answer:
  // true
}

/////////////////////////////

// Q23. some false case 23
{
  function run(nums) {
    return nums.some((n) => n % 2 === 0);
  }

  // Input:
  run([1, 3]);

  // Answer:
  // false
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

// PDF Q157. Solve a coding problem using some without using unnecessary built-in shortcuts.
{
  function someIn(items) {
    return items.filter(Boolean).map((item) => item);
  }

  // Input:
  someIn([0, 'a', false, 'b']);

  // Answer:
  // ["a", "b"]
}

/////////////////////////////

// PDF Q167. Solve a coding problem using some without using unnecessary built-in shortcuts.
{
  function someIn(items) {
    return items.filter(Boolean).map((item) => item);
  }

  // Input:
  someIn([0, 'a', false, 'b']);

  // Answer:
  // ["a", "b"]
}

/////////////////////////////

// PDF Q177. Solve a coding problem using some without using unnecessary built-in shortcuts.
{
  function someIn(items) {
    return items.filter(Boolean).map((item) => item);
  }

  // Input:
  someIn([0, 'a', false, 'b']);

  // Answer:
  // ["a", "b"]
}

/////////////////////////////

// PDF Q187. Solve a coding problem using some without using unnecessary built-in shortcuts.
{
  function someIn(items) {
    return items.filter(Boolean).map((item) => item);
  }

  // Input:
  someIn([0, 'a', false, 'b']);

  // Answer:
  // ["a", "b"]
}

/////////////////////////////

// PDF Q197. Solve a coding problem using some without using unnecessary built-in shortcuts.
{
  function someIn(items) {
    return items.filter(Boolean).map((item) => item);
  }

  // Input:
  someIn([0, 'a', false, 'b']);

  // Answer:
  // ["a", "b"]
}

/////////////////////////////

