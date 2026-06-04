"use strict";

/*
Path: 1 SIMPLE JS\05_arrays\14_concat\03_coding-output-practice.js
Topic: Concat
Question bank: Concat focused practice

How to study:
1. Read Q.
2. Hide Answer.
3. Predict output.
4. Then check Answer.
*/

// Q1. concat arrays
{
  function run(a, b) {
    return a.concat(b);
  }

  // Input:
  run([1, 2], [3]);

  // Answer:
  // [1, 2, 3]
}

/////////////////////////////

// Q2. concat keeps original
{
  function run(a) {
    a.concat([3]);
    return a;
  }

  // Input:
  run([1, 2]);

  // Answer:
  // [1, 2]
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

// Q8. concat arrays case 8
{
  function run(a, b) {
    return a.concat(b);
  }

  // Input:
  run([1, 2], [3]);

  // Answer:
  // [1, 2, 3]
}

/////////////////////////////

// Q9. concat keeps original case 9
{
  function run(a) {
    a.concat([3]);
    return a;
  }

  // Input:
  run([1, 2]);

  // Answer:
  // [1, 2]
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

// Q15. concat arrays case 15
{
  function run(a, b) {
    return a.concat(b);
  }

  // Input:
  run([1, 2], [3]);

  // Answer:
  // [1, 2, 3]
}

/////////////////////////////

// Q16. concat keeps original case 16
{
  function run(a) {
    a.concat([3]);
    return a;
  }

  // Input:
  run([1, 2]);

  // Answer:
  // [1, 2]
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

// Q22. concat arrays case 22
{
  function run(a, b) {
    return a.concat(b);
  }

  // Input:
  run([1, 2], [3]);

  // Answer:
  // [1, 2, 3]
}

/////////////////////////////

// Q23. concat keeps original case 23
{
  function run(a) {
    a.concat([3]);
    return a;
  }

  // Input:
  run([1, 2]);

  // Answer:
  // [1, 2]
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
