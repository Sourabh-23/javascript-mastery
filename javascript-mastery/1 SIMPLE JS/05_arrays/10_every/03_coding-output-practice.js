"use strict";

/*
Path: 1 SIMPLE JS\05_arrays\10_every\03_coding-output-practice.js
Topic: Every
Question bank: Every focused practice

How to study:
1. Read Q.
2. Hide Answer.
3. Predict output.
4. Then check Answer.
*/

// Q1. every true
{
  function run(nums) {
    return nums.every((n) => n > 0);
  }

  // Input:
  run([1, 2, 3]);

  // Answer:
  // true
}

/////////////////////////////

// Q2. every false
{
  function run(nums) {
    return nums.every((n) => n > 0);
  }

  // Input:
  run([1, -2, 3]);

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

// Q8. every true case 8
{
  function run(nums) {
    return nums.every((n) => n > 0);
  }

  // Input:
  run([1, 2, 3]);

  // Answer:
  // true
}

/////////////////////////////

// Q9. every false case 9
{
  function run(nums) {
    return nums.every((n) => n > 0);
  }

  // Input:
  run([1, -2, 3]);

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

// Q15. every true case 15
{
  function run(nums) {
    return nums.every((n) => n > 0);
  }

  // Input:
  run([1, 2, 3]);

  // Answer:
  // true
}

/////////////////////////////

// Q16. every false case 16
{
  function run(nums) {
    return nums.every((n) => n > 0);
  }

  // Input:
  run([1, -2, 3]);

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

// Q22. every true case 22
{
  function run(nums) {
    return nums.every((n) => n > 0);
  }

  // Input:
  run([1, 2, 3]);

  // Answer:
  // true
}

/////////////////////////////

// Q23. every false case 23
{
  function run(nums) {
    return nums.every((n) => n > 0);
  }

  // Input:
  run([1, -2, 3]);

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

// PDF Q124. Write a function to move all zeros to the end.
{
  function moveAllZerosEnd(items) {
    return items.filter(Boolean).map((item) => item);
  }

  // Input:
  moveAllZerosEnd([0, 'a', false, 'b']);

  // Answer:
  // ["a", "b"]
}

/////////////////////////////

// PDF Q125. Write a function to move all zeros to the start.
{
  function moveAllZerosStart(items) {
    return items.filter(Boolean).map((item) => item);
  }

  // Input:
  moveAllZerosStart([0, 'a', false, 'b']);

  // Answer:
  // ["a", "b"]
}

/////////////////////////////

// PDF Q158. Write clean code for every and explain time complexity in comments.
{
  function everyIn(items) {
    return items.filter(Boolean).map((item) => item);
  }

  // Input:
  everyIn([0, 'a', false, 'b']);

  // Answer:
  // ["a", "b"]
}

/////////////////////////////

// PDF Q168. Write clean code for every and explain time complexity in comments.
{
  function everyIn(items) {
    return items.filter(Boolean).map((item) => item);
  }

  // Input:
  everyIn([0, 'a', false, 'b']);

  // Answer:
  // ["a", "b"]
}

/////////////////////////////

// PDF Q178. Write clean code for every and explain time complexity in comments.
{
  function everyIn(items) {
    return items.filter(Boolean).map((item) => item);
  }

  // Input:
  everyIn([0, 'a', false, 'b']);

  // Answer:
  // ["a", "b"]
}

/////////////////////////////

// PDF Q188. Write clean code for every and explain time complexity in comments.
{
  function everyIn(items) {
    return items.filter(Boolean).map((item) => item);
  }

  // Input:
  everyIn([0, 'a', false, 'b']);

  // Answer:
  // ["a", "b"]
}

/////////////////////////////

// PDF Q198. Write clean code for every and explain time complexity in comments.
{
  function everyIn(items) {
    return items.filter(Boolean).map((item) => item);
  }

  // Input:
  everyIn([0, 'a', false, 'b']);

  // Answer:
  // ["a", "b"]
}

/////////////////////////////

