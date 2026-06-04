"use strict";

/*
Path: 1 SIMPLE JS\08_loops\05_ES6-for-of\04_ES6-coding-output-practice.js
Topic: 05_ES6-for-of
Question bank: ES6 for-of loop

How to study:
1. Read Q.
2. Hide Answer.
3. Predict output.
4. Then check Answer.
*/
// Q1. Collect values
{
  function collect(items) {
    const result = [];
    for (const item of items) result.push(item);
    return result;
  }

  // Input:
  collect([1, 2, 3]);

  // Answer:
  // [1, 2, 3]
}

/////////////////////////////
// Q2. Sum values
{
  function sum(nums) {
    let total = 0;
    for (const num of nums) total += num;
    return total;
  }

  // Input:
  sum([2, 4, 6]);

  // Answer:
  // 12
}

/////////////////////////////
// Q3. Double values
{
  function double(nums) {
    const result = [];
    for (const num of nums) result.push(num * 2);
    return result;
  }

  // Input:
  double([1, 2, 3]);

  // Answer:
  // [2, 4, 6]
}

/////////////////////////////
// Q4. String letters
{
  function letters(str) {
    const result = [];
    for (const char of str) result.push(char);
    return result;
  }

  // Input:
  letters("JS");

  // Answer:
  // ["J", "S"]
}

/////////////////////////////
// Q5. Count vowels
{
  function countVowels(str) {
    let count = 0;
    for (const char of str) if ("aeiou".includes(char)) count++;
    return count;
  }

  // Input:
  countVowels("hello");

  // Answer:
  // 2
}

/////////////////////////////
// Q6. First even
{
  function firstEven(nums) {
    for (const num of nums) if (num % 2 === 0) return num;
    return null;
  }

  // Input:
  firstEven([1, 5, 8]);

  // Answer:
  // 8
}

/////////////////////////////
// Q7. Loop Set
{
  function setValues(set) {
    const result = [];
    for (const item of set) result.push(item);
    return result;
  }

  // Input:
  setValues(new Set([1, 1, 2]));

  // Answer:
  // [1, 2]
}

/////////////////////////////
// Q8. Loop Map keys
{
  function mapKeys(map) {
    const result = [];
    for (const [key] of map) result.push(key);
    return result;
  }

  // Input:
  mapKeys(new Map([["a", 1], ["b", 2]]));

  // Answer:
  // ["a", "b"]
}

/////////////////////////////
// Q9. for-of active names
{
  function activeNames(users) {
    const result = [];
    for (const user of users) if (user.active) result.push(user.name);
    return result;
  }

  // Input:
  activeNames([{ name: "A", active: true }, { name: "B", active: false }]);

  // Answer:
  // ["A"]
}

/////////////////////////////
// Q10. for-of active names
{
  function activeNames(users) {
    const result = [];
    for (const user of users) if (user.active) result.push(user.name);
    return result;
  }

  // Input:
  activeNames([{ name: "A", active: true }, { name: "B", active: false }]);

  // Answer:
  // ["A"]
}

/////////////////////////////
// Q11. for-of active names
{
  function activeNames(users) {
    const result = [];
    for (const user of users) if (user.active) result.push(user.name);
    return result;
  }

  // Input:
  activeNames([{ name: "A", active: true }, { name: "B", active: false }]);

  // Answer:
  // ["A"]
}

/////////////////////////////
// Q12. for-of active names
{
  function activeNames(users) {
    const result = [];
    for (const user of users) if (user.active) result.push(user.name);
    return result;
  }

  // Input:
  activeNames([{ name: "A", active: true }, { name: "B", active: false }]);

  // Answer:
  // ["A"]
}

/////////////////////////////
// Q13. for-of active names
{
  function activeNames(users) {
    const result = [];
    for (const user of users) if (user.active) result.push(user.name);
    return result;
  }

  // Input:
  activeNames([{ name: "A", active: true }, { name: "B", active: false }]);

  // Answer:
  // ["A"]
}

/////////////////////////////
// Q14. for-of active names
{
  function activeNames(users) {
    const result = [];
    for (const user of users) if (user.active) result.push(user.name);
    return result;
  }

  // Input:
  activeNames([{ name: "A", active: true }, { name: "B", active: false }]);

  // Answer:
  // ["A"]
}

/////////////////////////////
// Q15. for-of active names
{
  function activeNames(users) {
    const result = [];
    for (const user of users) if (user.active) result.push(user.name);
    return result;
  }

  // Input:
  activeNames([{ name: "A", active: true }, { name: "B", active: false }]);

  // Answer:
  // ["A"]
}

/////////////////////////////
// Q16. for-of active names
{
  function activeNames(users) {
    const result = [];
    for (const user of users) if (user.active) result.push(user.name);
    return result;
  }

  // Input:
  activeNames([{ name: "A", active: true }, { name: "B", active: false }]);

  // Answer:
  // ["A"]
}

/////////////////////////////
// Q17. for-of active names
{
  function activeNames(users) {
    const result = [];
    for (const user of users) if (user.active) result.push(user.name);
    return result;
  }

  // Input:
  activeNames([{ name: "A", active: true }, { name: "B", active: false }]);

  // Answer:
  // ["A"]
}

/////////////////////////////
// Q18. for-of active names
{
  function activeNames(users) {
    const result = [];
    for (const user of users) if (user.active) result.push(user.name);
    return result;
  }

  // Input:
  activeNames([{ name: "A", active: true }, { name: "B", active: false }]);

  // Answer:
  // ["A"]
}

/////////////////////////////
// Q19. for-of active names
{
  function activeNames(users) {
    const result = [];
    for (const user of users) if (user.active) result.push(user.name);
    return result;
  }

  // Input:
  activeNames([{ name: "A", active: true }, { name: "B", active: false }]);

  // Answer:
  // ["A"]
}

/////////////////////////////
// Q20. for-of active names
{
  function activeNames(users) {
    const result = [];
    for (const user of users) if (user.active) result.push(user.name);
    return result;
  }

  // Input:
  activeNames([{ name: "A", active: true }, { name: "B", active: false }]);

  // Answer:
  // ["A"]
}

/////////////////////////////
// Q21. for-of active names
{
  function activeNames(users) {
    const result = [];
    for (const user of users) if (user.active) result.push(user.name);
    return result;
  }

  // Input:
  activeNames([{ name: "A", active: true }, { name: "B", active: false }]);

  // Answer:
  // ["A"]
}

/////////////////////////////
// Q22. for-of active names
{
  function activeNames(users) {
    const result = [];
    for (const user of users) if (user.active) result.push(user.name);
    return result;
  }

  // Input:
  activeNames([{ name: "A", active: true }, { name: "B", active: false }]);

  // Answer:
  // ["A"]
}

/////////////////////////////
// Q23. for-of active names
{
  function activeNames(users) {
    const result = [];
    for (const user of users) if (user.active) result.push(user.name);
    return result;
  }

  // Input:
  activeNames([{ name: "A", active: true }, { name: "B", active: false }]);

  // Answer:
  // ["A"]
}

/////////////////////////////
// Q24. for-of active names
{
  function activeNames(users) {
    const result = [];
    for (const user of users) if (user.active) result.push(user.name);
    return result;
  }

  // Input:
  activeNames([{ name: "A", active: true }, { name: "B", active: false }]);

  // Answer:
  // ["A"]
}

/////////////////////////////
// Q25. for-of active names
{
  function activeNames(users) {
    const result = [];
    for (const user of users) if (user.active) result.push(user.name);
    return result;
  }

  // Input:
  activeNames([{ name: "A", active: true }, { name: "B", active: false }]);

  // Answer:
  // ["A"]
}

/////////////////////////////
