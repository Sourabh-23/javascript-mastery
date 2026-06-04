"use strict";

/*
Path: 1 SIMPLE JS\05_arrays\15_flat\03_coding-output-practice.js
Topic: Flat
Question bank: Flat focused practice

How to study:
1. Read Q.
2. Hide Answer.
3. Predict output.
4. Then check Answer.
*/

// Q1. flat one level
{
  function run(arr) {
    return arr.flat();
  }

  // Input:
  run([1, [2, 3]]);

  // Answer:
  // [1, 2, 3]
}

/////////////////////////////

// Q2. flat two levels
{
  function run(arr) {
    return arr.flat(2);
  }

  // Input:
  run([1, [2, [3]]]);

  // Answer:
  // [1, 2, 3]
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

// Q8. flat one level case 8
{
  function run(arr) {
    return arr.flat();
  }

  // Input:
  run([1, [2, 3]]);

  // Answer:
  // [1, 2, 3]
}

/////////////////////////////

// Q9. flat two levels case 9
{
  function run(arr) {
    return arr.flat(2);
  }

  // Input:
  run([1, [2, [3]]]);

  // Answer:
  // [1, 2, 3]
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

// Q15. flat one level case 15
{
  function run(arr) {
    return arr.flat();
  }

  // Input:
  run([1, [2, 3]]);

  // Answer:
  // [1, 2, 3]
}

/////////////////////////////

// Q16. flat two levels case 16
{
  function run(arr) {
    return arr.flat(2);
  }

  // Input:
  run([1, [2, [3]]]);

  // Answer:
  // [1, 2, 3]
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

// Q22. flat one level case 22
{
  function run(arr) {
    return arr.flat();
  }

  // Input:
  run([1, [2, 3]]);

  // Answer:
  // [1, 2, 3]
}

/////////////////////////////

// Q23. flat two levels case 23
{
  function run(arr) {
    return arr.flat(2);
  }

  // Input:
  run([1, [2, [3]]]);

  // Answer:
  // [1, 2, 3]
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

// PDF Q127. Write a function to flatten one-level nested array.
{
  function flattenOneLevelNestedArray(obj, key) {
    return obj?.[key];
  }

  // Input:
  flattenOneLevelNestedArray({ name: 'Amit' }, 'name');

  // Answer:
  // "Amit"
}

/////////////////////////////

// PDF Q128. Write a function to flatten deeply nested array.
{
  function flattenDeeplyNestedArray(obj, key) {
    return obj?.[key];
  }

  // Input:
  flattenDeeplyNestedArray({ name: 'Amit' }, 'name');

  // Answer:
  // "Amit"
}

/////////////////////////////

// PDF Q305. Debug a broken JavaScript snippet related to flatten array and rewrite it correctly.
{
  function flattenArrayIt(items) {
    return items.length;
  }

  // Input:
  flattenArrayIt([1, 2, 3]);

  // Answer:
  // 3
}

/////////////////////////////

// PDF Q315. Debug a broken JavaScript snippet related to flatten array and rewrite it correctly.
{
  function flattenArrayIt(items) {
    return items.length;
  }

  // Input:
  flattenArrayIt([1, 2, 3]);

  // Answer:
  // 3
}

/////////////////////////////

// PDF Q325. Debug a broken JavaScript snippet related to flatten array and rewrite it correctly.
{
  function flattenArrayIt(items) {
    return items.length;
  }

  // Input:
  flattenArrayIt([1, 2, 3]);

  // Answer:
  // 3
}

/////////////////////////////

// PDF Q335. Debug a broken JavaScript snippet related to flatten array and rewrite it correctly.
{
  function flattenArrayIt(items) {
    return items.length;
  }

  // Input:
  flattenArrayIt([1, 2, 3]);

  // Answer:
  // 3
}

/////////////////////////////

// PDF Q345. Debug a broken JavaScript snippet related to flatten array and rewrite it correctly.
{
  function flattenArrayIt(items) {
    return items.length;
  }

  // Input:
  flattenArrayIt([1, 2, 3]);

  // Answer:
  // 3
}

/////////////////////////////

