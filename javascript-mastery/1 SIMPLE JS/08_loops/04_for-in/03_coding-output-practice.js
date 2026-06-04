"use strict";

/*
Path: 1 SIMPLE JS\08_loops\04_for-in\03_coding-output-practice.js
Topic: 04_for-in
Question bank: for-in loop

How to study:
1. Read Q.
2. Hide Answer.
3. Predict output.
4. Then check Answer.
*/
// Q1. Object keys
{
  function keys(obj) {
    const result = [];
    for (const key in obj) result.push(key);
    return result;
  }

  // Input:
  keys({ name: "Amit", age: 22 });

  // Answer:
  // ["name", "age"]
}

/////////////////////////////
// Q2. Object values
{
  function values(obj) {
    const result = [];
    for (const key in obj) result.push(obj[key]);
    return result;
  }

  // Input:
  values({ a: 1, b: 2 });

  // Answer:
  // [1, 2]
}

/////////////////////////////
// Q3. Count properties
{
  function countProps(obj) {
    let count = 0;
    for (const key in obj) count++;
    return count;
  }

  // Input:
  countProps({ a: 1, b: 2, c: 3 });

  // Answer:
  // 3
}

/////////////////////////////
// Q4. Sum object values
{
  function sum(obj) {
    let total = 0;
    for (const key in obj) total += obj[key];
    return total;
  }

  // Input:
  sum({ math: 70, eng: 80 });

  // Answer:
  // 150
}

/////////////////////////////
// Q5. Find key by value
{
  function findKey(obj, value) {
    for (const key in obj) if (obj[key] === value) return key;
    return null;
  }

  // Input:
  findKey({ a: 10, b: 20 }, 20);

  // Answer:
  // "b"
}

/////////////////////////////
// Q6. Copy object
{
  function copy(obj) {
    const result = {};
    for (const key in obj) result[key] = obj[key];
    return result;
  }

  // Input:
  copy({ name: "Amit" });

  // Answer:
  // { name: "Amit" }
}

/////////////////////////////
// Q7. Only numbers
{
  function onlyNumbers(obj) {
    const result = {};
    for (const key in obj) if (typeof obj[key] === "number") result[key] = obj[key];
    return result;
  }

  // Input:
  onlyNumbers({ a: 1, b: "x" });

  // Answer:
  // { a: 1 }
}

/////////////////////////////
// Q8. Has key
{
  function hasKey(obj, target) {
    for (const key in obj) if (key === target) return true;
    return false;
  }

  // Input:
  hasKey({ name: "Amit" }, "name");

  // Answer:
  // true
}

/////////////////////////////
// Q9. Array indexes
{
  function indexes(arr) {
    const result = [];
    for (const index in arr) result.push(index);
    return result;
  }

  // Input:
  indexes(["a", "b"]);

  // Answer:
  // ["0", "1"]
}

/////////////////////////////
// Q10. Array values
{
  function values(arr) {
    const result = [];
    for (const index in arr) result.push(arr[index]);
    return result;
  }

  // Input:
  values(["a", "b"]);

  // Answer:
  // ["a", "b"]
}

/////////////////////////////
// Q11. for-in property practice 11
{
  function countTruthy(obj) {
    let count = 0;
    for (const key in obj) if (obj[key]) count++;
    return count;
  }

  // Input:
  countTruthy({ a: 1, b: 0, c: true });

  // Answer:
  // 2
}

/////////////////////////////
// Q12. for-in property practice 12
{
  function countTruthy(obj) {
    let count = 0;
    for (const key in obj) if (obj[key]) count++;
    return count;
  }

  // Input:
  countTruthy({ a: 1, b: 0, c: true });

  // Answer:
  // 2
}

/////////////////////////////
// Q13. for-in property practice 13
{
  function countTruthy(obj) {
    let count = 0;
    for (const key in obj) if (obj[key]) count++;
    return count;
  }

  // Input:
  countTruthy({ a: 1, b: 0, c: true });

  // Answer:
  // 2
}

/////////////////////////////
// Q14. for-in property practice 14
{
  function countTruthy(obj) {
    let count = 0;
    for (const key in obj) if (obj[key]) count++;
    return count;
  }

  // Input:
  countTruthy({ a: 1, b: 0, c: true });

  // Answer:
  // 2
}

/////////////////////////////
// Q15. for-in property practice 15
{
  function countTruthy(obj) {
    let count = 0;
    for (const key in obj) if (obj[key]) count++;
    return count;
  }

  // Input:
  countTruthy({ a: 1, b: 0, c: true });

  // Answer:
  // 2
}

/////////////////////////////
// Q16. for-in property practice 16
{
  function countTruthy(obj) {
    let count = 0;
    for (const key in obj) if (obj[key]) count++;
    return count;
  }

  // Input:
  countTruthy({ a: 1, b: 0, c: true });

  // Answer:
  // 2
}

/////////////////////////////
// Q17. for-in property practice 17
{
  function countTruthy(obj) {
    let count = 0;
    for (const key in obj) if (obj[key]) count++;
    return count;
  }

  // Input:
  countTruthy({ a: 1, b: 0, c: true });

  // Answer:
  // 2
}

/////////////////////////////
// Q18. for-in property practice 18
{
  function countTruthy(obj) {
    let count = 0;
    for (const key in obj) if (obj[key]) count++;
    return count;
  }

  // Input:
  countTruthy({ a: 1, b: 0, c: true });

  // Answer:
  // 2
}

/////////////////////////////
// Q19. for-in property practice 19
{
  function countTruthy(obj) {
    let count = 0;
    for (const key in obj) if (obj[key]) count++;
    return count;
  }

  // Input:
  countTruthy({ a: 1, b: 0, c: true });

  // Answer:
  // 2
}

/////////////////////////////
// Q20. for-in property practice 20
{
  function countTruthy(obj) {
    let count = 0;
    for (const key in obj) if (obj[key]) count++;
    return count;
  }

  // Input:
  countTruthy({ a: 1, b: 0, c: true });

  // Answer:
  // 2
}

/////////////////////////////
// Q21. for-in property practice 21
{
  function countTruthy(obj) {
    let count = 0;
    for (const key in obj) if (obj[key]) count++;
    return count;
  }

  // Input:
  countTruthy({ a: 1, b: 0, c: true });

  // Answer:
  // 2
}

/////////////////////////////
// Q22. for-in property practice 22
{
  function countTruthy(obj) {
    let count = 0;
    for (const key in obj) if (obj[key]) count++;
    return count;
  }

  // Input:
  countTruthy({ a: 1, b: 0, c: true });

  // Answer:
  // 2
}

/////////////////////////////
// Q23. for-in property practice 23
{
  function countTruthy(obj) {
    let count = 0;
    for (const key in obj) if (obj[key]) count++;
    return count;
  }

  // Input:
  countTruthy({ a: 1, b: 0, c: true });

  // Answer:
  // 2
}

/////////////////////////////
// Q24. for-in property practice 24
{
  function countTruthy(obj) {
    let count = 0;
    for (const key in obj) if (obj[key]) count++;
    return count;
  }

  // Input:
  countTruthy({ a: 1, b: 0, c: true });

  // Answer:
  // 2
}

/////////////////////////////
// Q25. for-in property practice 25
{
  function countTruthy(obj) {
    let count = 0;
    for (const key in obj) if (obj[key]) count++;
    return count;
  }

  // Input:
  countTruthy({ a: 1, b: 0, c: true });

  // Answer:
  // 2
}

/////////////////////////////
