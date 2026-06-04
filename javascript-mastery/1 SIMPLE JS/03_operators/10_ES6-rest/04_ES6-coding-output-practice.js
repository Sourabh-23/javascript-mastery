"use strict";

/*
Path: 1 SIMPLE JS\03_operators\10_ES6-rest\04_ES6-coding-output-practice.js
Topic: 10_ES6-rest
Question bank: ES6-rest

How to study:
1. Read Q.
2. Hide Answer.
3. Predict output.
4. Then check Answer.
*/

// Q1. Count arguments
{
  function count(...items) {
    return items.length;
  }

  // Input:
  count(1, 2, 3);

  // Answer:
  // 3
}

/////////////////////////////

// Q2. Sum rest numbers
{
  function sum(...nums) {
    return nums.reduce((total, n) => total + n, 0);
  }

  // Input:
  sum(1, 2, 3);

  // Answer:
  // 6
}

/////////////////////////////

// Q3. First normal rest remaining
{
  function info(first, ...others) {
    return others.length;
  }

  // Input:
  info("a", "b", "c");

  // Answer:
  // 2
}

/////////////////////////////

// Q4. Rest can be empty
{
  function info(first, ...others) {
    return others;
  }

  // Input:
  info("a");

  // Answer:
  // []
}

/////////////////////////////

// Q5. Rest is array
{
  function check(...items) {
    return Array.isArray(items);
  }

  // Input:
  check(1, 2);

  // Answer:
  // true
}

/////////////////////////////

// Q6. Multiply all
{
  function multiply(...nums) {
    return nums.reduce((total, n) => total * n, 1);
  }

  // Input:
  multiply(2, 3, 4);

  // Answer:
  // 24
}

/////////////////////////////

// Q7. Join words
{
  function sentence(...words) {
    return words.join(" ");
  }

  // Input:
  sentence("I", "love", "JS");

  // Answer:
  // "I love JS"
}

/////////////////////////////

// Q8. Find max
{
  function max(...nums) {
    return Math.max(...nums);
  }

  // Input:
  max(2, 9, 4);

  // Answer:
  // 9
}

/////////////////////////////

// Q9. Collect extra user fields
{
  function getExtra({ name, ...extra }) {
    return extra;
  }

  // Input:
  getExtra({ name: "Amit", age: 22, city: "Pune" });

  // Answer:
  // { age: 22, city: "Pune" }
}

/////////////////////////////

// Q10. Array destructuring rest
{
  function restItems(items) {
    const [first, ...rest] = items;
    return rest;
  }

  // Input:
  restItems([1, 2, 3]);

  // Answer:
  // [2, 3]
}

/////////////////////////////

// Q11. Rest after two values
{
  function restItems(items) {
    const [a, b, ...rest] = items;
    return rest;
  }

  // Input:
  restItems([1, 2, 3, 4]);

  // Answer:
  // [3, 4]
}

/////////////////////////////

// Q12. Rest keeps order
{
  function collect(...items) {
    return items[1];
  }

  // Input:
  collect("a", "b", "c");

  // Answer:
  // "b"
}

/////////////////////////////

// Q13. Rest with no params
{
  function collect(...items) {
    return items.length;
  }

  // Input:
  collect();

  // Answer:
  // 0
}

/////////////////////////////

// Q14. Filter rest values
{
  function positives(...nums) {
    return nums.filter(n => n > 0);
  }

  // Input:
  positives(-1, 2, 3);

  // Answer:
  // [2, 3]
}

/////////////////////////////

// Q15. Rest with arrow function
{
  const count = (...items) => items.length;

  // Input:
  count("x", "y");

  // Answer:
  // 2
}

/////////////////////////////

// Q16. Rest in wrapper function
{
  function callAdd(...nums) {
    return nums[0] + nums[1];
  }

  // Input:
  callAdd(4, 6);

  // Answer:
  // 10
}

/////////////////////////////

// Q17. Rest ignores named first
{
  function total(gst, ...prices) {
    return prices.reduce((sum, price) => sum + price, 0) + gst;
  }

  // Input:
  total(18, 100, 200);

  // Answer:
  // 318
}

/////////////////////////////

// Q18. Rest with string methods
{
  function upperAll(...names) {
    return names.map(name => name.toUpperCase());
  }

  // Input:
  upperAll("ram", "shyam");

  // Answer:
  // ["RAM", "SHYAM"]
}

/////////////////////////////

// Q19. Rest creates new array each call
{
  function same(...items) {
    return items === items;
  }

  // Input:
  same(1, 2);

  // Answer:
  // true
}

/////////////////////////////

// Q20. Rest length after push
{
  function addOne(...items) {
    items.push(99);
    return items.length;
  }

  // Input:
  addOne(1, 2);

  // Answer:
  // 3
}

/////////////////////////////

// Q21. Rest with default first
{
  function greet(greeting = "Hi", ...names) {
    return `${greeting} ${names[0]}`;
  }

  // Input:
  greet(undefined, "Amit");

  // Answer:
  // "Hi Amit"
}

/////////////////////////////

// Q22. Rest object without password
{
  function safeUser({ password, ...publicUser }) {
    return publicUser;
  }

  // Input:
  safeUser({ name: "Amit", password: "123" });

  // Answer:
  // { name: "Amit" }
}

/////////////////////////////

// Q23. Rest array remaining total
{
  function remainingTotal(items) {
    const [first, ...rest] = items;
    return rest.reduce((sum, n) => sum + n, 0);
  }

  // Input:
  remainingTotal([10, 20, 30]);

  // Answer:
  // 50
}

/////////////////////////////

// Q24. Rest with mixed values
{
  function types(...values) {
    return values.map(value => typeof value);
  }

  // Input:
  types(1, "a", true);

  // Answer:
  // ["number", "string", "boolean"]
}

/////////////////////////////

// Q25. Rest parameter must be last practice
{
  function valid(first, ...rest) {
    return rest.length;
  }

  // Input:
  valid(1, 2, 3);

  // Answer:
  // 2
}

/////////////////////////////
