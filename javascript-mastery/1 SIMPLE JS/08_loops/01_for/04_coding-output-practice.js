"use strict";

/*
Path: 1 SIMPLE JS\08_loops\01_for\04_coding-output-practice.js
Topic: 01_for
Question bank: for loop

How to study:
1. Read Q.
2. Hide Answer.
3. Predict output.
4. Then check Answer.
*/
// Q1. Count 1 to n
{
  function countTo(n) {
    const result = [];
    for (let i = 1; i <= n; i++) result.push(i);
    return result;
  }

  // Input:
  countTo(4);

  // Answer:
  // [1, 2, 3, 4]
}

/////////////////////////////
// Q2. Count from zero
{
  function count(n) {
    const result = [];
    for (let i = 0; i < n; i++) result.push(i);
    return result;
  }

  // Input:
  count(4);

  // Answer:
  // [0, 1, 2, 3]
}

/////////////////////////////
// Q3. Reverse count
{
  function reverse(n) {
    const result = [];
    for (let i = n; i >= 1; i--) result.push(i);
    return result;
  }

  // Input:
  reverse(4);

  // Answer:
  // [4, 3, 2, 1]
}

/////////////////////////////
// Q4. Sum 1 to n
{
  function sumTo(n) {
    let total = 0;
    for (let i = 1; i <= n; i++) total += i;
    return total;
  }

  // Input:
  sumTo(5);

  // Answer:
  // 15
}

/////////////////////////////
// Q5. Even numbers
{
  function evens(n) {
    const result = [];
    for (let i = 2; i <= n; i += 2) result.push(i);
    return result;
  }

  // Input:
  evens(8);

  // Answer:
  // [2, 4, 6, 8]
}

/////////////////////////////
// Q6. Odd numbers
{
  function odds(n) {
    const result = [];
    for (let i = 1; i <= n; i += 2) result.push(i);
    return result;
  }

  // Input:
  odds(7);

  // Answer:
  // [1, 3, 5, 7]
}

/////////////////////////////
// Q7. Multiplication table
{
  function table(num) {
    const result = [];
    for (let i = 1; i <= 5; i++) result.push(num * i);
    return result;
  }

  // Input:
  table(3);

  // Answer:
  // [3, 6, 9, 12, 15]
}

/////////////////////////////
// Q8. Array sum
{
  function sum(nums) {
    let total = 0;
    for (let i = 0; i < nums.length; i++) total += nums[i];
    return total;
  }

  // Input:
  sum([2, 4, 6]);

  // Answer:
  // 12
}

/////////////////////////////
// Q9. Array max
{
  function max(nums) {
    let largest = nums[0];
    for (let i = 1; i < nums.length; i++) if (nums[i] > largest) largest = nums[i];
    return largest;
  }

  // Input:
  max([3, 9, 5]);

  // Answer:
  // 9
}

/////////////////////////////
// Q10. Array min
{
  function min(nums) {
    let smallest = nums[0];
    for (let i = 1; i < nums.length; i++) if (nums[i] < smallest) smallest = nums[i];
    return smallest;
  }

  // Input:
  min([3, 9, 5]);

  // Answer:
  // 3
}

/////////////////////////////
// Q11. Count positives
{
  function countPositive(nums) {
    let count = 0;
    for (let i = 0; i < nums.length; i++) if (nums[i] > 0) count++;
    return count;
  }

  // Input:
  countPositive([-1, 2, 3]);

  // Answer:
  // 2
}

/////////////////////////////
// Q12. Double array
{
  function double(nums) {
    const result = [];
    for (let i = 0; i < nums.length; i++) result.push(nums[i] * 2);
    return result;
  }

  // Input:
  double([1, 2, 3]);

  // Answer:
  // [2, 4, 6]
}

/////////////////////////////
// Q13. Reverse array manually
{
  function reverseArray(items) {
    const result = [];
    for (let i = items.length - 1; i >= 0; i--) result.push(items[i]);
    return result;
  }

  // Input:
  reverseArray([1, 2, 3]);

  // Answer:
  // [3, 2, 1]
}

/////////////////////////////
// Q14. String characters
{
  function chars(str) {
    const result = [];
    for (let i = 0; i < str.length; i++) result.push(str[i]);
    return result;
  }

  // Input:
  chars("JS");

  // Answer:
  // ["J", "S"]
}

/////////////////////////////
// Q15. Count vowels
{
  function countVowels(str) {
    let count = 0;
    for (let i = 0; i < str.length; i++) if ("aeiou".includes(str[i])) count++;
    return count;
  }

  // Input:
  countVowels("react");

  // Answer:
  // 2
}

/////////////////////////////
// Q16. Build repeated string
{
  function repeatText(text, times) {
    let result = "";
    for (let i = 0; i < times; i++) result += text;
    return result;
  }

  // Input:
  repeatText("ha", 3);

  // Answer:
  // "hahaha"
}

/////////////////////////////
// Q17. Factorial
{
  function factorial(n) {
    let result = 1;
    for (let i = 2; i <= n; i++) result *= i;
    return result;
  }

  // Input:
  factorial(5);

  // Answer:
  // 120
}

/////////////////////////////
// Q18. Find index
{
  function findIndex(items, target) {
    for (let i = 0; i < items.length; i++) if (items[i] === target) return i;
    return -1;
  }

  // Input:
  findIndex(["a", "b", "c"], "b");

  // Answer:
  // 1
}

/////////////////////////////
// Q19. Has value
{
  function hasValue(items, target) {
    for (let i = 0; i < items.length; i++) if (items[i] === target) return true;
    return false;
  }

  // Input:
  hasValue([1, 2, 3], 4);

  // Answer:
  // false
}

/////////////////////////////
// Q20. Skip first item
{
  function afterFirst(items) {
    const result = [];
    for (let i = 1; i < items.length; i++) result.push(items[i]);
    return result;
  }

  // Input:
  afterFirst([10, 20, 30]);

  // Answer:
  // [20, 30]
}

/////////////////////////////
// Q21. Take first three
{
  function takeThree(items) {
    const result = [];
    for (let i = 0; i < 3 && i < items.length; i++) result.push(items[i]);
    return result;
  }

  // Input:
  takeThree([1, 2, 3, 4]);

  // Answer:
  // [1, 2, 3]
}

/////////////////////////////
// Q22. Sum even numbers
{
  function sumEven(nums) {
    let total = 0;
    for (let i = 0; i < nums.length; i++) if (nums[i] % 2 === 0) total += nums[i];
    return total;
  }

  // Input:
  sumEven([1, 2, 3, 4]);

  // Answer:
  // 6
}

/////////////////////////////
// Q23. Create range
{
  function range(start, end) {
    const result = [];
    for (let i = start; i <= end; i++) result.push(i);
    return result;
  }

  // Input:
  range(3, 6);

  // Answer:
  // [3, 4, 5, 6]
}

/////////////////////////////
// Q24. Loop never runs
{
  function test() {
    let count = 0;
    for (let i = 5; i < 3; i++) count++;
    return count;
  }

  // Input:
  test();

  // Answer:
  // 0
}

/////////////////////////////
// Q25. Nested loop count
{
  function countPairs(a, b) {
    let count = 0;
    for (let i = 0; i < a; i++) for (let j = 0; j < b; j++) count++;
    return count;
  }

  // Input:
  countPairs(2, 3);

  // Answer:
  // 6
}

/////////////////////////////
