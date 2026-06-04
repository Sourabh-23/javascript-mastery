"use strict";

/*
Path: 1 SIMPLE JS\05_arrays\06_reduce\03_coding-output-practice.js
Topic: Reduce
Question bank: Reduce focused practice

How to study:
1. Read Q.
2. Hide Answer.
3. Predict output.
4. Then check Answer.
*/

// Q1. reduce sum
{
  function run(nums) {
    return nums.reduce((sum, n) => sum + n, 0);
  }

  // Input:
  run([1, 2, 3]);

  // Answer:
  // 6
}

/////////////////////////////

// Q2. reduce max
{
  function run(nums) {
    return nums.reduce((max, n) => n > max ? n : max, nums[0]);
  }

  // Input:
  run([4, 9, 2]);

  // Answer:
  // 9
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

// Q8. reduce sum case 8
{
  function run(nums) {
    return nums.reduce((sum, n) => sum + n, 0);
  }

  // Input:
  run([1, 2, 3]);

  // Answer:
  // 6
}

/////////////////////////////

// Q9. reduce max case 9
{
  function run(nums) {
    return nums.reduce((max, n) => n > max ? n : max, nums[0]);
  }

  // Input:
  run([4, 9, 2]);

  // Answer:
  // 9
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

// Q15. reduce sum case 15
{
  function run(nums) {
    return nums.reduce((sum, n) => sum + n, 0);
  }

  // Input:
  run([1, 2, 3]);

  // Answer:
  // 6
}

/////////////////////////////

// Q16. reduce max case 16
{
  function run(nums) {
    return nums.reduce((max, n) => n > max ? n : max, nums[0]);
  }

  // Input:
  run([4, 9, 2]);

  // Answer:
  // 9
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

// Q22. reduce sum case 22
{
  function run(nums) {
    return nums.reduce((sum, n) => sum + n, 0);
  }

  // Input:
  run([1, 2, 3]);

  // Answer:
  // 6
}

/////////////////////////////

// Q23. reduce max case 23
{
  function run(nums) {
    return nums.reduce((max, n) => n > max ? n : max, nums[0]);
  }

  // Input:
  run([4, 9, 2]);

  // Answer:
  // 9
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

// PDF Q44. Write a function to calculate total price after discount.
{
  function calculateTotalPriceAfterDiscount(items) {
    return items.reduce((total, item) => total + item, 0);
  }

  // Input:
  calculateTotalPriceAfterDiscount([1, 2, 3]);

  // Answer:
  // 6
}

/////////////////////////////

// PDF Q105. Write a function to calculate sum of all array elements.
{
  function calculateSumOfAllArray(items) {
    return items.reduce((total, item) => total + item, 0);
  }

  // Input:
  calculateSumOfAllArray([1, 2, 3]);

  // Answer:
  // 6
}

/////////////////////////////

// PDF Q106. Write a function to calculate average of array elements.
{
  function calculateAverageOfArrayElements(items) {
    return items.reduce((total, item) => total + item, 0);
  }

  // Input:
  calculateAverageOfArrayElements([1, 2, 3]);

  // Answer:
  // 6
}

/////////////////////////////

// PDF Q150. Write a function to find pair with given sum.
{
  function findPairSum(items) {
    return items.reduce((total, item) => total + item, 0);
  }

  // Input:
  findPairSum([1, 2, 3]);

  // Answer:
  // 6
}

/////////////////////////////

// PDF Q153. Write clean code for reduce and explain time complexity in comments.
{
  function forReduceExplainTimeComplexity(items) {
    return items.reduce((total, item) => total + item, 0);
  }

  // Input:
  forReduceExplainTimeComplexity([1, 2, 3]);

  // Answer:
  // 6
}

/////////////////////////////

// PDF Q163. Write clean code for reduce and explain time complexity in comments.
{
  function forReduceExplainTimeComplexity(items) {
    return items.reduce((total, item) => total + item, 0);
  }

  // Input:
  forReduceExplainTimeComplexity([1, 2, 3]);

  // Answer:
  // 6
}

/////////////////////////////

// PDF Q173. Write clean code for reduce and explain time complexity in comments.
{
  function forReduceExplainTimeComplexity(items) {
    return items.reduce((total, item) => total + item, 0);
  }

  // Input:
  forReduceExplainTimeComplexity([1, 2, 3]);

  // Answer:
  // 6
}

/////////////////////////////

// PDF Q183. Write clean code for reduce and explain time complexity in comments.
{
  function forReduceExplainTimeComplexity(items) {
    return items.reduce((total, item) => total + item, 0);
  }

  // Input:
  forReduceExplainTimeComplexity([1, 2, 3]);

  // Answer:
  // 6
}

/////////////////////////////

// PDF Q193. Write clean code for reduce and explain time complexity in comments.
{
  function forReduceExplainTimeComplexity(items) {
    return items.reduce((total, item) => total + item, 0);
  }

  // Input:
  forReduceExplainTimeComplexity([1, 2, 3]);

  // Answer:
  // 6
}

/////////////////////////////

// PDF Q303. Write clean code for sum digits and explain time complexity in comments.
{
  function forSumDigitsExplainTime(items) {
    return items.reduce((total, item) => total + item, 0);
  }

  // Input:
  forSumDigitsExplainTime([1, 2, 3]);

  // Answer:
  // 6
}

/////////////////////////////

// PDF Q313. Write clean code for sum digits and explain time complexity in comments.
{
  function forSumDigitsExplainTime(items) {
    return items.reduce((total, item) => total + item, 0);
  }

  // Input:
  forSumDigitsExplainTime([1, 2, 3]);

  // Answer:
  // 6
}

/////////////////////////////

// PDF Q323. Write clean code for sum digits and explain time complexity in comments.
{
  function forSumDigitsExplainTime(items) {
    return items.reduce((total, item) => total + item, 0);
  }

  // Input:
  forSumDigitsExplainTime([1, 2, 3]);

  // Answer:
  // 6
}

/////////////////////////////

// PDF Q333. Write clean code for sum digits and explain time complexity in comments.
{
  function forSumDigitsExplainTime(items) {
    return items.reduce((total, item) => total + item, 0);
  }

  // Input:
  forSumDigitsExplainTime([1, 2, 3]);

  // Answer:
  // 6
}

/////////////////////////////

// PDF Q343. Write clean code for sum digits and explain time complexity in comments.
{
  function forSumDigitsExplainTime(items) {
    return items.reduce((total, item) => total + item, 0);
  }

  // Input:
  forSumDigitsExplainTime([1, 2, 3]);

  // Answer:
  // 6
}

/////////////////////////////

// PDF Q853. Write clean code for reduce and explain time complexity in comments.
{
  function forReduceExplainTimeComplexity(items) {
    return items.reduce((total, item) => total + item, 0);
  }

  // Input:
  forReduceExplainTimeComplexity([1, 2, 3]);

  // Answer:
  // 6
}

/////////////////////////////

// PDF Q863. Write clean code for reduce and explain time complexity in comments.
{
  function forReduceExplainTimeComplexity(items) {
    return items.reduce((total, item) => total + item, 0);
  }

  // Input:
  forReduceExplainTimeComplexity([1, 2, 3]);

  // Answer:
  // 6
}

/////////////////////////////

// PDF Q873. Write clean code for reduce and explain time complexity in comments.
{
  function forReduceExplainTimeComplexity(items) {
    return items.reduce((total, item) => total + item, 0);
  }

  // Input:
  forReduceExplainTimeComplexity([1, 2, 3]);

  // Answer:
  // 6
}

/////////////////////////////

// PDF Q883. Write clean code for reduce and explain time complexity in comments.
{
  function forReduceExplainTimeComplexity(items) {
    return items.reduce((total, item) => total + item, 0);
  }

  // Input:
  forReduceExplainTimeComplexity([1, 2, 3]);

  // Answer:
  // 6
}

/////////////////////////////

// PDF Q893. Write clean code for reduce and explain time complexity in comments.
{
  function forReduceExplainTimeComplexity(items) {
    return items.reduce((total, item) => total + item, 0);
  }

  // Input:
  forReduceExplainTimeComplexity([1, 2, 3]);

  // Answer:
  // 6
}

/////////////////////////////

// PDF Q907. Solve a coding problem using group transactions without using unnecessary built-in shortcuts.
{
  function groupTransactionsWithoutUnnecessaryBuilt(transactions) {
    return transactions.reduce((group, item) => {
      group[item.type] = (group[item.type] || 0) + item.amount;
      return group;
    }, {});
  }

  // Input:
  groupTransactionsWithoutUnnecessaryBuilt([{type:'food',amount:100},{type:'food',amount:50}]);

  // Answer:
  // { food: 150 }
}

/////////////////////////////

// PDF Q908. Write clean code for calculate cart total and explain time complexity in comments.
{
  function forCalculateCartTotalExplain(cart) {
    return cart.reduce((total, item) => total + item.price * item.qty, 0);
  }

  // Input:
  forCalculateCartTotalExplain([{price:100,qty:2},{price:50,qty:1}]);

  // Answer:
  // 250
}

/////////////////////////////

// PDF Q917. Solve a coding problem using group transactions without using unnecessary built-in shortcuts.
{
  function groupTransactionsWithoutUnnecessaryBuilt(transactions) {
    return transactions.reduce((group, item) => {
      group[item.type] = (group[item.type] || 0) + item.amount;
      return group;
    }, {});
  }

  // Input:
  groupTransactionsWithoutUnnecessaryBuilt([{type:'food',amount:100},{type:'food',amount:50}]);

  // Answer:
  // { food: 150 }
}

/////////////////////////////

// PDF Q918. Write clean code for calculate cart total and explain time complexity in comments.
{
  function forCalculateCartTotalExplain(cart) {
    return cart.reduce((total, item) => total + item.price * item.qty, 0);
  }

  // Input:
  forCalculateCartTotalExplain([{price:100,qty:2},{price:50,qty:1}]);

  // Answer:
  // 250
}

/////////////////////////////

// PDF Q927. Solve a coding problem using group transactions without using unnecessary built-in shortcuts.
{
  function groupTransactionsWithoutUnnecessaryBuilt(transactions) {
    return transactions.reduce((group, item) => {
      group[item.type] = (group[item.type] || 0) + item.amount;
      return group;
    }, {});
  }

  // Input:
  groupTransactionsWithoutUnnecessaryBuilt([{type:'food',amount:100},{type:'food',amount:50}]);

  // Answer:
  // { food: 150 }
}

/////////////////////////////

// PDF Q928. Write clean code for calculate cart total and explain time complexity in comments.
{
  function forCalculateCartTotalExplain(cart) {
    return cart.reduce((total, item) => total + item.price * item.qty, 0);
  }

  // Input:
  forCalculateCartTotalExplain([{price:100,qty:2},{price:50,qty:1}]);

  // Answer:
  // 250
}

/////////////////////////////

// PDF Q937. Solve a coding problem using group transactions without using unnecessary built-in shortcuts.
{
  function groupTransactionsWithoutUnnecessaryBuilt(transactions) {
    return transactions.reduce((group, item) => {
      group[item.type] = (group[item.type] || 0) + item.amount;
      return group;
    }, {});
  }

  // Input:
  groupTransactionsWithoutUnnecessaryBuilt([{type:'food',amount:100},{type:'food',amount:50}]);

  // Answer:
  // { food: 150 }
}

/////////////////////////////

// PDF Q938. Write clean code for calculate cart total and explain time complexity in comments.
{
  function forCalculateCartTotalExplain(cart) {
    return cart.reduce((total, item) => total + item.price * item.qty, 0);
  }

  // Input:
  forCalculateCartTotalExplain([{price:100,qty:2},{price:50,qty:1}]);

  // Answer:
  // 250
}

/////////////////////////////

// PDF Q947. Solve a coding problem using group transactions without using unnecessary built-in shortcuts.
{
  function groupTransactionsWithoutUnnecessaryBuilt(transactions) {
    return transactions.reduce((group, item) => {
      group[item.type] = (group[item.type] || 0) + item.amount;
      return group;
    }, {});
  }

  // Input:
  groupTransactionsWithoutUnnecessaryBuilt([{type:'food',amount:100},{type:'food',amount:50}]);

  // Answer:
  // { food: 150 }
}

/////////////////////////////

// PDF Q948. Write clean code for calculate cart total and explain time complexity in comments.
{
  function forCalculateCartTotalExplain(cart) {
    return cart.reduce((total, item) => total + item.price * item.qty, 0);
  }

  // Input:
  forCalculateCartTotalExplain([{price:100,qty:2},{price:50,qty:1}]);

  // Answer:
  // 250
}

/////////////////////////////

