"use strict";

/*
Path: 1 SIMPLE JS\08_loops\03_do-while\03_coding-output-practice.js
Topic: 03_do-while
Question bank: do-while loop

How to study:
1. Read Q.
2. Hide Answer.
3. Predict output.
4. Then check Answer.
*/
// Q1. Runs at least once
{
  function test() {
    let count = 0;
    do {
      count++;
    } while (false);
    return count;
  }

  // Input:
  test();

  // Answer:
  // 1
}

/////////////////////////////
// Q2. Count 1 to n
{
  function countTo(n) {
    const result = [];
    let i = 1;
    do {
      result.push(i);
      i++;
    } while (i <= n);
    return result;
  }

  // Input:
  countTo(3);

  // Answer:
  // [1, 2, 3]
}

/////////////////////////////
// Q3. Condition false from start
{
  function test() {
    let i = 5;
    do {
      i++;
    } while (i < 3);
    return i;
  }

  // Input:
  test();

  // Answer:
  // 6
}

/////////////////////////////
// Q4. Sum do while
{
  function sumTo(n) {
    let total = 0;
    let i = 1;
    do {
      total += i;
      i++;
    } while (i <= n);
    return total;
  }

  // Input:
  sumTo(4);

  // Answer:
  // 10
}

/////////////////////////////
// Q5. Reverse count
{
  function reverse(n) {
    const result = [];
    do {
      result.push(n);
      n--;
    } while (n > 0);
    return result;
  }

  // Input:
  reverse(3);

  // Answer:
  // [3, 2, 1]
}

/////////////////////////////
// Q6. Count digit zero
{
  function countDigits(num) {
    let count = 0;
    do {
      count++;
      num = Math.floor(num / 10);
    } while (num > 0);
    return count;
  }

  // Input:
  countDigits(0);

  // Answer:
  // 1
}

/////////////////////////////
// Q7. Double until limit
{
  function doubleUntil(value, limit) {
    do {
      value *= 2;
    } while (value < limit);
    return value;
  }

  // Input:
  doubleUntil(5, 20);

  // Answer:
  // 20
}

/////////////////////////////
// Q8. String repeat
{
  function repeat(text, times) {
    let result = "";
    let i = 0;
    do {
      result += text;
      i++;
    } while (i < times);
    return result;
  }

  // Input:
  repeat("x", 3);

  // Answer:
  // "xxx"
}

/////////////////////////////
// Q9. Post increment condition
{
  function test() {
    let i = 0;
    do {} while (i++ < 2);
    return i;
  }

  // Input:
  test();

  // Answer:
  // 3
}

/////////////////////////////
// Q10. Pre increment condition
{
  function test() {
    let i = 0;
    do {} while (++i < 2);
    return i;
  }

  // Input:
  test();

  // Answer:
  // 2
}

/////////////////////////////
// Q11. Find first positive
{
  function firstPositive(nums) {
    let i = 0;
    do {
      if (nums[i] > 0) return nums[i];
      i++;
    } while (i < nums.length);
    return null;
  }

  // Input:
  firstPositive([-2, 5]);

  // Answer:
  // 5
}

/////////////////////////////
// Q12. Minimum one payment
{
  function payments(amount) {
    let count = 0;
    do {
      amount -= 100;
      count++;
    } while (amount > 0);
    return count;
  }

  // Input:
  payments(0);

  // Answer:
  // 1
}

/////////////////////////////
// Q13. do-while counter practice
{
  function run(limit) {
    let count = 0;
    do {
      count++;
    } while (count < limit);
    return count;
  }

  // Input:
  run(3);

  // Answer:
  // 3
}

/////////////////////////////
// Q14. do-while counter practice
{
  function run(limit) {
    let count = 0;
    do {
      count++;
    } while (count < limit);
    return count;
  }

  // Input:
  run(3);

  // Answer:
  // 3
}

/////////////////////////////
// Q15. do-while counter practice
{
  function run(limit) {
    let count = 0;
    do {
      count++;
    } while (count < limit);
    return count;
  }

  // Input:
  run(3);

  // Answer:
  // 3
}

/////////////////////////////
// Q16. do-while counter practice
{
  function run(limit) {
    let count = 0;
    do {
      count++;
    } while (count < limit);
    return count;
  }

  // Input:
  run(3);

  // Answer:
  // 3
}

/////////////////////////////
// Q17. do-while counter practice
{
  function run(limit) {
    let count = 0;
    do {
      count++;
    } while (count < limit);
    return count;
  }

  // Input:
  run(3);

  // Answer:
  // 3
}

/////////////////////////////
// Q18. do-while counter practice
{
  function run(limit) {
    let count = 0;
    do {
      count++;
    } while (count < limit);
    return count;
  }

  // Input:
  run(3);

  // Answer:
  // 3
}

/////////////////////////////
// Q19. do-while counter practice
{
  function run(limit) {
    let count = 0;
    do {
      count++;
    } while (count < limit);
    return count;
  }

  // Input:
  run(3);

  // Answer:
  // 3
}

/////////////////////////////
// Q20. do-while counter practice
{
  function run(limit) {
    let count = 0;
    do {
      count++;
    } while (count < limit);
    return count;
  }

  // Input:
  run(3);

  // Answer:
  // 3
}

/////////////////////////////
// Q21. do-while counter practice
{
  function run(limit) {
    let count = 0;
    do {
      count++;
    } while (count < limit);
    return count;
  }

  // Input:
  run(3);

  // Answer:
  // 3
}

/////////////////////////////
// Q22. do-while counter practice
{
  function run(limit) {
    let count = 0;
    do {
      count++;
    } while (count < limit);
    return count;
  }

  // Input:
  run(3);

  // Answer:
  // 3
}

/////////////////////////////
// Q23. do-while counter practice
{
  function run(limit) {
    let count = 0;
    do {
      count++;
    } while (count < limit);
    return count;
  }

  // Input:
  run(3);

  // Answer:
  // 3
}

/////////////////////////////
// Q24. do-while counter practice
{
  function run(limit) {
    let count = 0;
    do {
      count++;
    } while (count < limit);
    return count;
  }

  // Input:
  run(3);

  // Answer:
  // 3
}

/////////////////////////////
// Q25. do-while counter practice
{
  function run(limit) {
    let count = 0;
    do {
      count++;
    } while (count < limit);
    return count;
  }

  // Input:
  run(3);

  // Answer:
  // 3
}

/////////////////////////////
