"use strict";

/*
Path: 2 ADVANCE JS\06_async-javascript\04_promise-methods\03_coding-output-practice.js
Topic: Promise Methods
Question bank: Promise Methods focused practice

How to study:
1. Read Q.
2. Hide Answer.
3. Predict output.
4. Then check Answer.
*/

// Q1. promise resolves
{
  function getValue() {
    return Promise.resolve("done");
  }

  // Input:
  getValue() instanceof Promise;

  // Answer:
  // true
}

/////////////////////////////

// Q2. async returns promise
{
  async function getValue() {
    return 10;
  }

  // Input:
  getValue() instanceof Promise;

  // Answer:
  // true
}

/////////////////////////////

// Q3. then callback type
{
  const promise = Promise.resolve(10);

  // Input:
  typeof promise.then;

  // Answer:
  // "function"
}

/////////////////////////////

// Q4. setTimeout id type
{
  const id = setTimeout(() => {}, 1);
  clearTimeout(id);

  // Input:
  typeof id;

  // Answer:
  // "object"
}

/////////////////////////////

// Q5. promise all
{
  function run() {
    return Promise.all([Promise.resolve(1), Promise.resolve(2)]);
  }

  // Input:
  run() instanceof Promise;

  // Answer:
  // true
}

/////////////////////////////

// Q6. promise resolves case 6
{
  function getValue() {
    return Promise.resolve("done");
  }

  // Input:
  getValue() instanceof Promise;

  // Answer:
  // true
}

/////////////////////////////

// Q7. async returns promise case 7
{
  async function getValue() {
    return 10;
  }

  // Input:
  getValue() instanceof Promise;

  // Answer:
  // true
}

/////////////////////////////

// Q8. then callback type case 8
{
  const promise = Promise.resolve(10);

  // Input:
  typeof promise.then;

  // Answer:
  // "function"
}

/////////////////////////////

// Q9. setTimeout id type case 9
{
  const id = setTimeout(() => {}, 1);
  clearTimeout(id);

  // Input:
  typeof id;

  // Answer:
  // "object"
}

/////////////////////////////

// Q10. promise all case 10
{
  function run() {
    return Promise.all([Promise.resolve(1), Promise.resolve(2)]);
  }

  // Input:
  run() instanceof Promise;

  // Answer:
  // true
}

/////////////////////////////

// Q11. promise resolves case 11
{
  function getValue() {
    return Promise.resolve("done");
  }

  // Input:
  getValue() instanceof Promise;

  // Answer:
  // true
}

/////////////////////////////

// Q12. async returns promise case 12
{
  async function getValue() {
    return 10;
  }

  // Input:
  getValue() instanceof Promise;

  // Answer:
  // true
}

/////////////////////////////

// Q13. then callback type case 13
{
  const promise = Promise.resolve(10);

  // Input:
  typeof promise.then;

  // Answer:
  // "function"
}

/////////////////////////////

// Q14. setTimeout id type case 14
{
  const id = setTimeout(() => {}, 1);
  clearTimeout(id);

  // Input:
  typeof id;

  // Answer:
  // "object"
}

/////////////////////////////

// Q15. promise all case 15
{
  function run() {
    return Promise.all([Promise.resolve(1), Promise.resolve(2)]);
  }

  // Input:
  run() instanceof Promise;

  // Answer:
  // true
}

/////////////////////////////

// Q16. promise resolves case 16
{
  function getValue() {
    return Promise.resolve("done");
  }

  // Input:
  getValue() instanceof Promise;

  // Answer:
  // true
}

/////////////////////////////

// Q17. async returns promise case 17
{
  async function getValue() {
    return 10;
  }

  // Input:
  getValue() instanceof Promise;

  // Answer:
  // true
}

/////////////////////////////

// Q18. then callback type case 18
{
  const promise = Promise.resolve(10);

  // Input:
  typeof promise.then;

  // Answer:
  // "function"
}

/////////////////////////////

// Q19. setTimeout id type case 19
{
  const id = setTimeout(() => {}, 1);
  clearTimeout(id);

  // Input:
  typeof id;

  // Answer:
  // "object"
}

/////////////////////////////

// Q20. promise all case 20
{
  function run() {
    return Promise.all([Promise.resolve(1), Promise.resolve(2)]);
  }

  // Input:
  run() instanceof Promise;

  // Answer:
  // true
}

/////////////////////////////

// Q21. promise resolves case 21
{
  function getValue() {
    return Promise.resolve("done");
  }

  // Input:
  getValue() instanceof Promise;

  // Answer:
  // true
}

/////////////////////////////

// Q22. async returns promise case 22
{
  async function getValue() {
    return 10;
  }

  // Input:
  getValue() instanceof Promise;

  // Answer:
  // true
}

/////////////////////////////

// Q23. then callback type case 23
{
  const promise = Promise.resolve(10);

  // Input:
  typeof promise.then;

  // Answer:
  // "function"
}

/////////////////////////////

// Q24. setTimeout id type case 24
{
  const id = setTimeout(() => {}, 1);
  clearTimeout(id);

  // Input:
  typeof id;

  // Answer:
  // "object"
}

/////////////////////////////

// Q25. promise all case 25
{
  function run() {
    return Promise.all([Promise.resolve(1), Promise.resolve(2)]);
  }

  // Input:
  run() instanceof Promise;

  // Answer:
  // true
}

/////////////////////////////
