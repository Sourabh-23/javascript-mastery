"use strict";

/*
Path: 1 SIMPLE JS\08_loops\06_foreach\04_coding-output-practice.js
Topic: 06_foreach
Question bank: forEach loop

How to study:
1. Read Q.
2. Hide Answer.
3. Predict output.
4. Then check Answer.
*/
// Q1. Collect with forEach
{
  function collect(items) {
    const result = [];
    items.forEach((item) => result.push(item));
    return result;
  }

  // Input:
  collect([1, 2]);

  // Answer:
  // [1, 2]
}

/////////////////////////////
// Q2. Sum with forEach
{
  function sum(nums) {
    let total = 0;
    nums.forEach((num) => total += num);
    return total;
  }

  // Input:
  sum([1, 2, 3]);

  // Answer:
  // 6
}

/////////////////////////////
// Q3. forEach index
{
  function indexes(items) {
    const result = [];
    items.forEach((item, index) => result.push(index));
    return result;
  }

  // Input:
  indexes(["a", "b"]);

  // Answer:
  // [0, 1]
}

/////////////////////////////
// Q4. forEach returns undefined
{
  function test() {
    return [1, 2].forEach((num) => num * 2);
  }

  // Input:
  test();

  // Answer:
  // undefined
}

/////////////////////////////
// Q5. Cannot break with return
{
  function test(items) {
    let count = 0;
    items.forEach((item) => {
      count++;
      if (item === 2) return;
    });
    return count;
  }

  // Input:
  test([1, 2, 3]);

  // Answer:
  // 3
}

/////////////////////////////
// Q6. forEach manual filter
{
  function positives(nums) {
    const result = [];
    nums.forEach((num) => { if (num > 0) result.push(num); });
    return result;
  }

  // Input:
  positives([-1, 2, 3]);

  // Answer:
  // [2, 3]
}

/////////////////////////////
// Q7. forEach manual filter
{
  function positives(nums) {
    const result = [];
    nums.forEach((num) => { if (num > 0) result.push(num); });
    return result;
  }

  // Input:
  positives([-1, 2, 3]);

  // Answer:
  // [2, 3]
}

/////////////////////////////
// Q8. forEach manual filter
{
  function positives(nums) {
    const result = [];
    nums.forEach((num) => { if (num > 0) result.push(num); });
    return result;
  }

  // Input:
  positives([-1, 2, 3]);

  // Answer:
  // [2, 3]
}

/////////////////////////////
// Q9. forEach manual filter
{
  function positives(nums) {
    const result = [];
    nums.forEach((num) => { if (num > 0) result.push(num); });
    return result;
  }

  // Input:
  positives([-1, 2, 3]);

  // Answer:
  // [2, 3]
}

/////////////////////////////
// Q10. forEach manual filter
{
  function positives(nums) {
    const result = [];
    nums.forEach((num) => { if (num > 0) result.push(num); });
    return result;
  }

  // Input:
  positives([-1, 2, 3]);

  // Answer:
  // [2, 3]
}

/////////////////////////////
// Q11. forEach manual filter
{
  function positives(nums) {
    const result = [];
    nums.forEach((num) => { if (num > 0) result.push(num); });
    return result;
  }

  // Input:
  positives([-1, 2, 3]);

  // Answer:
  // [2, 3]
}

/////////////////////////////
// Q12. forEach manual filter
{
  function positives(nums) {
    const result = [];
    nums.forEach((num) => { if (num > 0) result.push(num); });
    return result;
  }

  // Input:
  positives([-1, 2, 3]);

  // Answer:
  // [2, 3]
}

/////////////////////////////
// Q13. forEach manual filter
{
  function positives(nums) {
    const result = [];
    nums.forEach((num) => { if (num > 0) result.push(num); });
    return result;
  }

  // Input:
  positives([-1, 2, 3]);

  // Answer:
  // [2, 3]
}

/////////////////////////////
// Q14. forEach manual filter
{
  function positives(nums) {
    const result = [];
    nums.forEach((num) => { if (num > 0) result.push(num); });
    return result;
  }

  // Input:
  positives([-1, 2, 3]);

  // Answer:
  // [2, 3]
}

/////////////////////////////
// Q15. forEach manual filter
{
  function positives(nums) {
    const result = [];
    nums.forEach((num) => { if (num > 0) result.push(num); });
    return result;
  }

  // Input:
  positives([-1, 2, 3]);

  // Answer:
  // [2, 3]
}

/////////////////////////////
// Q16. forEach manual filter
{
  function positives(nums) {
    const result = [];
    nums.forEach((num) => { if (num > 0) result.push(num); });
    return result;
  }

  // Input:
  positives([-1, 2, 3]);

  // Answer:
  // [2, 3]
}

/////////////////////////////
// Q17. forEach manual filter
{
  function positives(nums) {
    const result = [];
    nums.forEach((num) => { if (num > 0) result.push(num); });
    return result;
  }

  // Input:
  positives([-1, 2, 3]);

  // Answer:
  // [2, 3]
}

/////////////////////////////
// Q18. forEach manual filter
{
  function positives(nums) {
    const result = [];
    nums.forEach((num) => { if (num > 0) result.push(num); });
    return result;
  }

  // Input:
  positives([-1, 2, 3]);

  // Answer:
  // [2, 3]
}

/////////////////////////////
// Q19. forEach manual filter
{
  function positives(nums) {
    const result = [];
    nums.forEach((num) => { if (num > 0) result.push(num); });
    return result;
  }

  // Input:
  positives([-1, 2, 3]);

  // Answer:
  // [2, 3]
}

/////////////////////////////
// Q20. forEach manual filter
{
  function positives(nums) {
    const result = [];
    nums.forEach((num) => { if (num > 0) result.push(num); });
    return result;
  }

  // Input:
  positives([-1, 2, 3]);

  // Answer:
  // [2, 3]
}

/////////////////////////////
// Q21. forEach manual filter
{
  function positives(nums) {
    const result = [];
    nums.forEach((num) => { if (num > 0) result.push(num); });
    return result;
  }

  // Input:
  positives([-1, 2, 3]);

  // Answer:
  // [2, 3]
}

/////////////////////////////
// Q22. forEach manual filter
{
  function positives(nums) {
    const result = [];
    nums.forEach((num) => { if (num > 0) result.push(num); });
    return result;
  }

  // Input:
  positives([-1, 2, 3]);

  // Answer:
  // [2, 3]
}

/////////////////////////////
// Q23. forEach manual filter
{
  function positives(nums) {
    const result = [];
    nums.forEach((num) => { if (num > 0) result.push(num); });
    return result;
  }

  // Input:
  positives([-1, 2, 3]);

  // Answer:
  // [2, 3]
}

/////////////////////////////
// Q24. forEach manual filter
{
  function positives(nums) {
    const result = [];
    nums.forEach((num) => { if (num > 0) result.push(num); });
    return result;
  }

  // Input:
  positives([-1, 2, 3]);

  // Answer:
  // [2, 3]
}

/////////////////////////////
// Q25. forEach manual filter
{
  function positives(nums) {
    const result = [];
    nums.forEach((num) => { if (num > 0) result.push(num); });
    return result;
  }

  // Input:
  positives([-1, 2, 3]);

  // Answer:
  // [2, 3]
}

/////////////////////////////
