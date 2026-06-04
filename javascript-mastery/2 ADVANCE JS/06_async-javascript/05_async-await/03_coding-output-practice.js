"use strict";

/*
Path: 2 ADVANCE JS\06_async-javascript\05_async-await\03_coding-output-practice.js
Topic: Async Await
Question bank: Async Await focused practice

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

// ================= PDF BASED PRACTICE =================

// PDF Q353. Write clean code for async await and explain time complexity in comments.
{
  async function forAsyncAwaitExplainTime() {
    const value = await Promise.resolve(10);
    return value;
  }

  // Input:
  forAsyncAwaitExplainTime() instanceof Promise;

  // Answer:
  // true
}

/////////////////////////////

// PDF Q355. Debug a broken JavaScript snippet related to sequential calls and rewrite it correctly.
{
  function sequentialCallsIt(items) {
    return Array.isArray(items) ? items.length : String(items).length;
  }

  // Input:
  sequentialCallsIt([1, 2, 3]);

  // Answer:
  // 3
}

/////////////////////////////

// PDF Q356. Write a JavaScript function for retry logic and handle empty input.
{
  function retryLogic(items) {
    return Array.isArray(items) ? items.length : String(items).length;
  }

  // Input:
  retryLogic([1, 2, 3]);

  // Answer:
  // 3
}

/////////////////////////////

// PDF Q358. Write clean code for delay function and explain time complexity in comments.
{
  function delayIn(items) {
    return Array.isArray(items) ? items.length : String(items).length;
  }

  // Input:
  delayIn([1, 2, 3]);

  // Answer:
  // 3
}

/////////////////////////////

// PDF Q360. Debug a broken JavaScript snippet related to error handling and rewrite it correctly.
{
  function errorHandlingIt(callback) {
    try {
      return callback();
    } catch (error) {
      return error.message;
    }
  }

  // Input:
  errorHandlingIt(() => { throw new Error('fail'); });

  // Answer:
  // "fail"
}

/////////////////////////////

// PDF Q363. Write clean code for async await and explain time complexity in comments.
{
  async function forAsyncAwaitExplainTime() {
    const value = await Promise.resolve(10);
    return value;
  }

  // Input:
  forAsyncAwaitExplainTime() instanceof Promise;

  // Answer:
  // true
}

/////////////////////////////

// PDF Q365. Debug a broken JavaScript snippet related to sequential calls and rewrite it correctly.
{
  function sequentialCallsIt(items) {
    return Array.isArray(items) ? items.length : String(items).length;
  }

  // Input:
  sequentialCallsIt([1, 2, 3]);

  // Answer:
  // 3
}

/////////////////////////////

// PDF Q366. Write a JavaScript function for retry logic and handle empty input.
{
  function retryLogic(items) {
    return Array.isArray(items) ? items.length : String(items).length;
  }

  // Input:
  retryLogic([1, 2, 3]);

  // Answer:
  // 3
}

/////////////////////////////

// PDF Q368. Write clean code for delay function and explain time complexity in comments.
{
  function delayIn(items) {
    return Array.isArray(items) ? items.length : String(items).length;
  }

  // Input:
  delayIn([1, 2, 3]);

  // Answer:
  // 3
}

/////////////////////////////

// PDF Q370. Debug a broken JavaScript snippet related to error handling and rewrite it correctly.
{
  function errorHandlingIt(callback) {
    try {
      return callback();
    } catch (error) {
      return error.message;
    }
  }

  // Input:
  errorHandlingIt(() => { throw new Error('fail'); });

  // Answer:
  // "fail"
}

/////////////////////////////

// PDF Q373. Write clean code for async await and explain time complexity in comments.
{
  async function forAsyncAwaitExplainTime() {
    const value = await Promise.resolve(10);
    return value;
  }

  // Input:
  forAsyncAwaitExplainTime() instanceof Promise;

  // Answer:
  // true
}

/////////////////////////////

// PDF Q375. Debug a broken JavaScript snippet related to sequential calls and rewrite it correctly.
{
  function sequentialCallsIt(items) {
    return Array.isArray(items) ? items.length : String(items).length;
  }

  // Input:
  sequentialCallsIt([1, 2, 3]);

  // Answer:
  // 3
}

/////////////////////////////

// PDF Q376. Write a JavaScript function for retry logic and handle empty input.
{
  function retryLogic(items) {
    return Array.isArray(items) ? items.length : String(items).length;
  }

  // Input:
  retryLogic([1, 2, 3]);

  // Answer:
  // 3
}

/////////////////////////////

// PDF Q378. Write clean code for delay function and explain time complexity in comments.
{
  function delayIn(items) {
    return Array.isArray(items) ? items.length : String(items).length;
  }

  // Input:
  delayIn([1, 2, 3]);

  // Answer:
  // 3
}

/////////////////////////////

// PDF Q380. Debug a broken JavaScript snippet related to error handling and rewrite it correctly.
{
  function errorHandlingIt(callback) {
    try {
      return callback();
    } catch (error) {
      return error.message;
    }
  }

  // Input:
  errorHandlingIt(() => { throw new Error('fail'); });

  // Answer:
  // "fail"
}

/////////////////////////////

// PDF Q383. Write clean code for async await and explain time complexity in comments.
{
  async function forAsyncAwaitExplainTime() {
    const value = await Promise.resolve(10);
    return value;
  }

  // Input:
  forAsyncAwaitExplainTime() instanceof Promise;

  // Answer:
  // true
}

/////////////////////////////

// PDF Q385. Debug a broken JavaScript snippet related to sequential calls and rewrite it correctly.
{
  function sequentialCallsIt(items) {
    return Array.isArray(items) ? items.length : String(items).length;
  }

  // Input:
  sequentialCallsIt([1, 2, 3]);

  // Answer:
  // 3
}

/////////////////////////////

// PDF Q386. Write a JavaScript function for retry logic and handle empty input.
{
  function retryLogic(items) {
    return Array.isArray(items) ? items.length : String(items).length;
  }

  // Input:
  retryLogic([1, 2, 3]);

  // Answer:
  // 3
}

/////////////////////////////

// PDF Q388. Write clean code for delay function and explain time complexity in comments.
{
  function delayIn(items) {
    return Array.isArray(items) ? items.length : String(items).length;
  }

  // Input:
  delayIn([1, 2, 3]);

  // Answer:
  // 3
}

/////////////////////////////

// PDF Q390. Debug a broken JavaScript snippet related to error handling and rewrite it correctly.
{
  function errorHandlingIt(callback) {
    try {
      return callback();
    } catch (error) {
      return error.message;
    }
  }

  // Input:
  errorHandlingIt(() => { throw new Error('fail'); });

  // Answer:
  // "fail"
}

/////////////////////////////

// PDF Q393. Write clean code for async await and explain time complexity in comments.
{
  async function forAsyncAwaitExplainTime() {
    const value = await Promise.resolve(10);
    return value;
  }

  // Input:
  forAsyncAwaitExplainTime() instanceof Promise;

  // Answer:
  // true
}

/////////////////////////////

// PDF Q395. Debug a broken JavaScript snippet related to sequential calls and rewrite it correctly.
{
  function sequentialCallsIt(items) {
    return Array.isArray(items) ? items.length : String(items).length;
  }

  // Input:
  sequentialCallsIt([1, 2, 3]);

  // Answer:
  // 3
}

/////////////////////////////

// PDF Q396. Write a JavaScript function for retry logic and handle empty input.
{
  function retryLogic(items) {
    return Array.isArray(items) ? items.length : String(items).length;
  }

  // Input:
  retryLogic([1, 2, 3]);

  // Answer:
  // 3
}

/////////////////////////////

// PDF Q398. Write clean code for delay function and explain time complexity in comments.
{
  function delayIn(items) {
    return Array.isArray(items) ? items.length : String(items).length;
  }

  // Input:
  delayIn([1, 2, 3]);

  // Answer:
  // 3
}

/////////////////////////////

// PDF Q400. Debug a broken JavaScript snippet related to error handling and rewrite it correctly.
{
  function errorHandlingIt(callback) {
    try {
      return callback();
    } catch (error) {
      return error.message;
    }
  }

  // Input:
  errorHandlingIt(() => { throw new Error('fail'); });

  // Answer:
  // "fail"
}

/////////////////////////////

// PDF Q955. Debug a broken JavaScript snippet related to retry failed task and rewrite it correctly.
{
  async function retryFailedTaskIt(task, retries = 2) {
    let lastError;
    for (let i = 0; i <= retries; i++) {
      try { return await task(); }
      catch (error) { lastError = error; }
    }
    throw lastError;
  }

  // Input:
  retryFailedTaskIt(() => Promise.resolve('done')) instanceof Promise;

  // Answer:
  // true
}

/////////////////////////////

// PDF Q960. Debug a broken JavaScript snippet related to debug async and rewrite it correctly.
{
  async function asyncIt() {
    try {
      const value = await Promise.resolve(10);
      return value;
    } catch (error) {
      return 0;
    }
  }

  // Input:
  asyncIt() instanceof Promise;

  // Answer:
  // true
}

/////////////////////////////

// PDF Q965. Debug a broken JavaScript snippet related to retry failed task and rewrite it correctly.
{
  async function retryFailedTaskIt(task, retries = 2) {
    let lastError;
    for (let i = 0; i <= retries; i++) {
      try { return await task(); }
      catch (error) { lastError = error; }
    }
    throw lastError;
  }

  // Input:
  retryFailedTaskIt(() => Promise.resolve('done')) instanceof Promise;

  // Answer:
  // true
}

/////////////////////////////

// PDF Q970. Debug a broken JavaScript snippet related to debug async and rewrite it correctly.
{
  async function asyncIt() {
    try {
      const value = await Promise.resolve(10);
      return value;
    } catch (error) {
      return 0;
    }
  }

  // Input:
  asyncIt() instanceof Promise;

  // Answer:
  // true
}

/////////////////////////////

// PDF Q975. Debug a broken JavaScript snippet related to retry failed task and rewrite it correctly.
{
  async function retryFailedTaskIt(task, retries = 2) {
    let lastError;
    for (let i = 0; i <= retries; i++) {
      try { return await task(); }
      catch (error) { lastError = error; }
    }
    throw lastError;
  }

  // Input:
  retryFailedTaskIt(() => Promise.resolve('done')) instanceof Promise;

  // Answer:
  // true
}

/////////////////////////////

// PDF Q980. Debug a broken JavaScript snippet related to debug async and rewrite it correctly.
{
  async function asyncIt() {
    try {
      const value = await Promise.resolve(10);
      return value;
    } catch (error) {
      return 0;
    }
  }

  // Input:
  asyncIt() instanceof Promise;

  // Answer:
  // true
}

/////////////////////////////

// PDF Q985. Debug a broken JavaScript snippet related to retry failed task and rewrite it correctly.
{
  async function retryFailedTaskIt(task, retries = 2) {
    let lastError;
    for (let i = 0; i <= retries; i++) {
      try { return await task(); }
      catch (error) { lastError = error; }
    }
    throw lastError;
  }

  // Input:
  retryFailedTaskIt(() => Promise.resolve('done')) instanceof Promise;

  // Answer:
  // true
}

/////////////////////////////

// PDF Q990. Debug a broken JavaScript snippet related to debug async and rewrite it correctly.
{
  async function asyncIt() {
    try {
      const value = await Promise.resolve(10);
      return value;
    } catch (error) {
      return 0;
    }
  }

  // Input:
  asyncIt() instanceof Promise;

  // Answer:
  // true
}

/////////////////////////////

// PDF Q995. Debug a broken JavaScript snippet related to retry failed task and rewrite it correctly.
{
  async function retryFailedTaskIt(task, retries = 2) {
    let lastError;
    for (let i = 0; i <= retries; i++) {
      try { return await task(); }
      catch (error) { lastError = error; }
    }
    throw lastError;
  }

  // Input:
  retryFailedTaskIt(() => Promise.resolve('done')) instanceof Promise;

  // Answer:
  // true
}

/////////////////////////////

// PDF Q1000. Debug a broken JavaScript snippet related to debug async and rewrite it correctly. Final Revision Checklist
{
  async function asyncItFinalRevisionChecklist() {
    try {
      const value = await Promise.resolve(10);
      return value;
    } catch (error) {
      return 0;
    }
  }

  // Input:
  asyncItFinalRevisionChecklist() instanceof Promise;

  // Answer:
  // true
}

/////////////////////////////

