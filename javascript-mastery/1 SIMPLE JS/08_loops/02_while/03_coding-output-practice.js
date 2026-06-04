"use strict";

/*
Path: 1 SIMPLE JS\08_loops\02_while\03_coding-output-practice.js
Topic: 02_while
Question bank: while loop

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
    let i = 1;
    while (i <= n) {
      result.push(i);
      i++;
    }
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
    let i = 0;
    while (i < n) {
      result.push(i);
      i++;
    }
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
    while (n > 0) {
      result.push(n);
      n--;
    }
    return result;
  }

  // Input:
  reverse(3);

  // Answer:
  // [3, 2, 1]
}

/////////////////////////////
// Q4. Sum 1 to n
{
  function sumTo(n) {
    let total = 0;
    let i = 1;
    while (i <= n) {
      total += i;
      i++;
    }
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
    let i = 2;
    while (i <= n) {
      result.push(i);
      i += 2;
    }
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
    let i = 1;
    while (i <= n) {
      result.push(i);
      i += 2;
    }
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
    let i = 1;
    while (i <= 5) {
      result.push(num * i);
      i++;
    }
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
    let i = 0;
    while (i < nums.length) {
      total += nums[i];
      i++;
    }
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
    let i = 1;
    while (i < nums.length) {
      if (nums[i] > largest) largest = nums[i];
      i++;
    }
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
    let i = 1;
    while (i < nums.length) {
      if (nums[i] < smallest) smallest = nums[i];
      i++;
    }
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
    let i = 0;
    while (i < nums.length) {
      if (nums[i] > 0) count++;
      i++;
    }
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
    let i = 0;
    while (i < nums.length) {
      result.push(nums[i] * 2);
      i++;
    }
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
    let i = items.length - 1;
    while (i >= 0) {
      result.push(items[i]);
      i--;
    }
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
    let i = 0;
    while (i < str.length) {
      result.push(str[i]);
      i++;
    }
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
    let i = 0;
    while (i < str.length) {
      if ("aeiou".includes(str[i])) count++;
      i++;
    }
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
    let i = 0;
    while (i < times) {
      result += text;
      i++;
    }
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
    while (n > 1) {
      result *= n;
      n--;
    }
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
    let i = 0;
    while (i < items.length) {
      if (items[i] === target) return i;
      i++;
    }
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
    let i = 0;
    while (i < items.length) {
      if (items[i] === target) return true;
      i++;
    }
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
    let i = 1;
    while (i < items.length) {
      result.push(items[i]);
      i++;
    }
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
    let i = 0;
    while (i < 3 && i < items.length) {
      result.push(items[i]);
      i++;
    }
    return result;
  }

  // Input:
  takeThree([1, 2, 3, 4]);

  // Answer:
  // [1, 2, 3]
}

/////////////////////////////
// Q22. Loop never runs
{
  function test() {
    let count = 0;
    let i = 5;
    while (i < 3) {
      count++;
      i++;
    }
    return count;
  }

  // Input:
  test();

  // Answer:
  // 0
}

/////////////////////////////
// Q23. Post increment while
{
  function test() {
    let i = 0;
    while (i++ < 3) {}
    return i;
  }

  // Input:
  test();

  // Answer:
  // 4
}

/////////////////////////////
// Q24. Stop on null
{
  function countValues(items) {
    let i = 0;
    while (items[i] != null) i++;
    return i;
  }

  // Input:
  countValues([1, 2, null, 3]);

  // Answer:
  // 2
}

/////////////////////////////
// Q25. Reduce amount
{
  function payments(amount) {
    let count = 0;
    while (amount > 0) {
      amount -= 100;
      count++;
    }
    return count;
  }

  // Input:
  payments(250);

  // Answer:
  // 3
}

/////////////////////////////
