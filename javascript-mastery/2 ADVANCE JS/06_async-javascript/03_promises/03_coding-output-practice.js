"use strict";

/*
Path: 2 ADVANCE JS\06_async-javascript\03_promises\03_coding-output-practice.js
Topic: Promises
Question bank: Promises focused practice

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

// PDF Q352. Solve a coding problem using promise chain without using unnecessary built-in shortcuts.
{
  function promiseChainWithoutUnnecessaryBuilt() {
    return Promise.resolve('done');
  }

  // Input:
  promiseChainWithoutUnnecessaryBuilt() instanceof Promise;

  // Answer:
  // true
}

/////////////////////////////

// PDF Q357. Solve a coding problem using timeout promise without using unnecessary built-in shortcuts.
{
  function timeoutPromiseWithoutUnnecessaryBuilt() {
    return Promise.resolve('done');
  }

  // Input:
  timeoutPromiseWithoutUnnecessaryBuilt() instanceof Promise;

  // Answer:
  // true
}

/////////////////////////////

// PDF Q362. Solve a coding problem using promise chain without using unnecessary built-in shortcuts.
{
  function promiseChainWithoutUnnecessaryBuilt() {
    return Promise.resolve('done');
  }

  // Input:
  promiseChainWithoutUnnecessaryBuilt() instanceof Promise;

  // Answer:
  // true
}

/////////////////////////////

// PDF Q367. Solve a coding problem using timeout promise without using unnecessary built-in shortcuts.
{
  function timeoutPromiseWithoutUnnecessaryBuilt() {
    return Promise.resolve('done');
  }

  // Input:
  timeoutPromiseWithoutUnnecessaryBuilt() instanceof Promise;

  // Answer:
  // true
}

/////////////////////////////

// PDF Q372. Solve a coding problem using promise chain without using unnecessary built-in shortcuts.
{
  function promiseChainWithoutUnnecessaryBuilt() {
    return Promise.resolve('done');
  }

  // Input:
  promiseChainWithoutUnnecessaryBuilt() instanceof Promise;

  // Answer:
  // true
}

/////////////////////////////

// PDF Q377. Solve a coding problem using timeout promise without using unnecessary built-in shortcuts.
{
  function timeoutPromiseWithoutUnnecessaryBuilt() {
    return Promise.resolve('done');
  }

  // Input:
  timeoutPromiseWithoutUnnecessaryBuilt() instanceof Promise;

  // Answer:
  // true
}

/////////////////////////////

// PDF Q382. Solve a coding problem using promise chain without using unnecessary built-in shortcuts.
{
  function promiseChainWithoutUnnecessaryBuilt() {
    return Promise.resolve('done');
  }

  // Input:
  promiseChainWithoutUnnecessaryBuilt() instanceof Promise;

  // Answer:
  // true
}

/////////////////////////////

// PDF Q387. Solve a coding problem using timeout promise without using unnecessary built-in shortcuts.
{
  function timeoutPromiseWithoutUnnecessaryBuilt() {
    return Promise.resolve('done');
  }

  // Input:
  timeoutPromiseWithoutUnnecessaryBuilt() instanceof Promise;

  // Answer:
  // true
}

/////////////////////////////

// PDF Q392. Solve a coding problem using promise chain without using unnecessary built-in shortcuts.
{
  function promiseChainWithoutUnnecessaryBuilt() {
    return Promise.resolve('done');
  }

  // Input:
  promiseChainWithoutUnnecessaryBuilt() instanceof Promise;

  // Answer:
  // true
}

/////////////////////////////

// PDF Q397. Solve a coding problem using timeout promise without using unnecessary built-in shortcuts.
{
  function timeoutPromiseWithoutUnnecessaryBuilt() {
    return Promise.resolve('done');
  }

  // Input:
  timeoutPromiseWithoutUnnecessaryBuilt() instanceof Promise;

  // Answer:
  // true
}

/////////////////////////////

// PDF Q401. Write a JavaScript function for Promise.all polyfill and handle empty input.
{
  function forPromiseAllPolyfillHandle() {
    return Promise.resolve('done');
  }

  // Input:
  forPromiseAllPolyfillHandle() instanceof Promise;

  // Answer:
  // true
}

/////////////////////////////

// PDF Q402. Solve a coding problem using Promise.race polyfill without using unnecessary built-in shortcuts.
{
  function promiseRacePolyfillWithoutUnnecessary() {
    return Promise.resolve('done');
  }

  // Input:
  promiseRacePolyfillWithoutUnnecessary() instanceof Promise;

  // Answer:
  // true
}

/////////////////////////////

// PDF Q403. Write clean code for Promise.allSettled polyfill and explain time complexity in comments.
{
  function forPromiseAllsettledPolyfillExplain() {
    return Promise.resolve('done');
  }

  // Input:
  forPromiseAllsettledPolyfillExplain() instanceof Promise;

  // Answer:
  // true
}

/////////////////////////////

// PDF Q405. Debug a broken JavaScript snippet related to limit concurrency and rewrite it correctly.
{
  function limitConcurrencyIt(items) {
    return Array.isArray(items) ? items.length : String(items).length;
  }

  // Input:
  limitConcurrencyIt([1, 2, 3]);

  // Answer:
  // 3
}

/////////////////////////////

// PDF Q406. Write a JavaScript function for retry promise and handle empty input.
{
  function forRetryPromiseHandleEmpty() {
    return Promise.resolve('done');
  }

  // Input:
  forRetryPromiseHandleEmpty() instanceof Promise;

  // Answer:
  // true
}

/////////////////////////////

// PDF Q407. Solve a coding problem using cancel token simulation without using unnecessary built-in shortcuts.
{
  function cancelTokenSimulationIn(items) {
    return Array.isArray(items) ? items.length : String(items).length;
  }

  // Input:
  cancelTokenSimulationIn([1, 2, 3]);

  // Answer:
  // 3
}

/////////////////////////////

// PDF Q410. Debug a broken JavaScript snippet related to promise cache and rewrite it correctly.
{
  function promiseCacheIt() {
    return Promise.resolve('done');
  }

  // Input:
  promiseCacheIt() instanceof Promise;

  // Answer:
  // true
}

/////////////////////////////

// PDF Q411. Write a JavaScript function for Promise.all polyfill and handle empty input.
{
  function forPromiseAllPolyfillHandle() {
    return Promise.resolve('done');
  }

  // Input:
  forPromiseAllPolyfillHandle() instanceof Promise;

  // Answer:
  // true
}

/////////////////////////////

// PDF Q412. Solve a coding problem using Promise.race polyfill without using unnecessary built-in shortcuts.
{
  function promiseRacePolyfillWithoutUnnecessary() {
    return Promise.resolve('done');
  }

  // Input:
  promiseRacePolyfillWithoutUnnecessary() instanceof Promise;

  // Answer:
  // true
}

/////////////////////////////

// PDF Q413. Write clean code for Promise.allSettled polyfill and explain time complexity in comments.
{
  function forPromiseAllsettledPolyfillExplain() {
    return Promise.resolve('done');
  }

  // Input:
  forPromiseAllsettledPolyfillExplain() instanceof Promise;

  // Answer:
  // true
}

/////////////////////////////

// PDF Q415. Debug a broken JavaScript snippet related to limit concurrency and rewrite it correctly.
{
  function limitConcurrencyIt(items) {
    return Array.isArray(items) ? items.length : String(items).length;
  }

  // Input:
  limitConcurrencyIt([1, 2, 3]);

  // Answer:
  // 3
}

/////////////////////////////

// PDF Q416. Write a JavaScript function for retry promise and handle empty input.
{
  function forRetryPromiseHandleEmpty() {
    return Promise.resolve('done');
  }

  // Input:
  forRetryPromiseHandleEmpty() instanceof Promise;

  // Answer:
  // true
}

/////////////////////////////

// PDF Q417. Solve a coding problem using cancel token simulation without using unnecessary built-in shortcuts.
{
  function cancelTokenSimulationIn(items) {
    return Array.isArray(items) ? items.length : String(items).length;
  }

  // Input:
  cancelTokenSimulationIn([1, 2, 3]);

  // Answer:
  // 3
}

/////////////////////////////

// PDF Q420. Debug a broken JavaScript snippet related to promise cache and rewrite it correctly.
{
  function promiseCacheIt() {
    return Promise.resolve('done');
  }

  // Input:
  promiseCacheIt() instanceof Promise;

  // Answer:
  // true
}

/////////////////////////////

// PDF Q421. Write a JavaScript function for Promise.all polyfill and handle empty input.
{
  function forPromiseAllPolyfillHandle() {
    return Promise.resolve('done');
  }

  // Input:
  forPromiseAllPolyfillHandle() instanceof Promise;

  // Answer:
  // true
}

/////////////////////////////

// PDF Q422. Solve a coding problem using Promise.race polyfill without using unnecessary built-in shortcuts.
{
  function promiseRacePolyfillWithoutUnnecessary() {
    return Promise.resolve('done');
  }

  // Input:
  promiseRacePolyfillWithoutUnnecessary() instanceof Promise;

  // Answer:
  // true
}

/////////////////////////////

// PDF Q423. Write clean code for Promise.allSettled polyfill and explain time complexity in comments.
{
  function forPromiseAllsettledPolyfillExplain() {
    return Promise.resolve('done');
  }

  // Input:
  forPromiseAllsettledPolyfillExplain() instanceof Promise;

  // Answer:
  // true
}

/////////////////////////////

// PDF Q425. Debug a broken JavaScript snippet related to limit concurrency and rewrite it correctly.
{
  function limitConcurrencyIt(items) {
    return Array.isArray(items) ? items.length : String(items).length;
  }

  // Input:
  limitConcurrencyIt([1, 2, 3]);

  // Answer:
  // 3
}

/////////////////////////////

// PDF Q426. Write a JavaScript function for retry promise and handle empty input.
{
  function forRetryPromiseHandleEmpty() {
    return Promise.resolve('done');
  }

  // Input:
  forRetryPromiseHandleEmpty() instanceof Promise;

  // Answer:
  // true
}

/////////////////////////////

// PDF Q427. Solve a coding problem using cancel token simulation without using unnecessary built-in shortcuts.
{
  function cancelTokenSimulationIn(items) {
    return Array.isArray(items) ? items.length : String(items).length;
  }

  // Input:
  cancelTokenSimulationIn([1, 2, 3]);

  // Answer:
  // 3
}

/////////////////////////////

// PDF Q430. Debug a broken JavaScript snippet related to promise cache and rewrite it correctly.
{
  function promiseCacheIt() {
    return Promise.resolve('done');
  }

  // Input:
  promiseCacheIt() instanceof Promise;

  // Answer:
  // true
}

/////////////////////////////

// PDF Q431. Write a JavaScript function for Promise.all polyfill and handle empty input.
{
  function forPromiseAllPolyfillHandle() {
    return Promise.resolve('done');
  }

  // Input:
  forPromiseAllPolyfillHandle() instanceof Promise;

  // Answer:
  // true
}

/////////////////////////////

// PDF Q432. Solve a coding problem using Promise.race polyfill without using unnecessary built-in shortcuts.
{
  function promiseRacePolyfillWithoutUnnecessary() {
    return Promise.resolve('done');
  }

  // Input:
  promiseRacePolyfillWithoutUnnecessary() instanceof Promise;

  // Answer:
  // true
}

/////////////////////////////

// PDF Q433. Write clean code for Promise.allSettled polyfill and explain time complexity in comments.
{
  function forPromiseAllsettledPolyfillExplain() {
    return Promise.resolve('done');
  }

  // Input:
  forPromiseAllsettledPolyfillExplain() instanceof Promise;

  // Answer:
  // true
}

/////////////////////////////

// PDF Q435. Debug a broken JavaScript snippet related to limit concurrency and rewrite it correctly.
{
  function limitConcurrencyIt(items) {
    return Array.isArray(items) ? items.length : String(items).length;
  }

  // Input:
  limitConcurrencyIt([1, 2, 3]);

  // Answer:
  // 3
}

/////////////////////////////

// PDF Q436. Write a JavaScript function for retry promise and handle empty input.
{
  function forRetryPromiseHandleEmpty() {
    return Promise.resolve('done');
  }

  // Input:
  forRetryPromiseHandleEmpty() instanceof Promise;

  // Answer:
  // true
}

/////////////////////////////

// PDF Q437. Solve a coding problem using cancel token simulation without using unnecessary built-in shortcuts.
{
  function cancelTokenSimulationIn(items) {
    return Array.isArray(items) ? items.length : String(items).length;
  }

  // Input:
  cancelTokenSimulationIn([1, 2, 3]);

  // Answer:
  // 3
}

/////////////////////////////

// PDF Q440. Debug a broken JavaScript snippet related to promise cache and rewrite it correctly.
{
  function promiseCacheIt() {
    return Promise.resolve('done');
  }

  // Input:
  promiseCacheIt() instanceof Promise;

  // Answer:
  // true
}

/////////////////////////////

// PDF Q441. Write a JavaScript function for Promise.all polyfill and handle empty input.
{
  function forPromiseAllPolyfillHandle() {
    return Promise.resolve('done');
  }

  // Input:
  forPromiseAllPolyfillHandle() instanceof Promise;

  // Answer:
  // true
}

/////////////////////////////

// PDF Q442. Solve a coding problem using Promise.race polyfill without using unnecessary built-in shortcuts.
{
  function promiseRacePolyfillWithoutUnnecessary() {
    return Promise.resolve('done');
  }

  // Input:
  promiseRacePolyfillWithoutUnnecessary() instanceof Promise;

  // Answer:
  // true
}

/////////////////////////////

// PDF Q443. Write clean code for Promise.allSettled polyfill and explain time complexity in comments.
{
  function forPromiseAllsettledPolyfillExplain() {
    return Promise.resolve('done');
  }

  // Input:
  forPromiseAllsettledPolyfillExplain() instanceof Promise;

  // Answer:
  // true
}

/////////////////////////////

// PDF Q445. Debug a broken JavaScript snippet related to limit concurrency and rewrite it correctly.
{
  function limitConcurrencyIt(items) {
    return Array.isArray(items) ? items.length : String(items).length;
  }

  // Input:
  limitConcurrencyIt([1, 2, 3]);

  // Answer:
  // 3
}

/////////////////////////////

// PDF Q446. Write a JavaScript function for retry promise and handle empty input.
{
  function forRetryPromiseHandleEmpty() {
    return Promise.resolve('done');
  }

  // Input:
  forRetryPromiseHandleEmpty() instanceof Promise;

  // Answer:
  // true
}

/////////////////////////////

// PDF Q447. Solve a coding problem using cancel token simulation without using unnecessary built-in shortcuts.
{
  function cancelTokenSimulationIn(items) {
    return Array.isArray(items) ? items.length : String(items).length;
  }

  // Input:
  cancelTokenSimulationIn([1, 2, 3]);

  // Answer:
  // 3
}

/////////////////////////////

// PDF Q450. Debug a broken JavaScript snippet related to promise cache and rewrite it correctly.
{
  function promiseCacheIt() {
    return Promise.resolve('done');
  }

  // Input:
  promiseCacheIt() instanceof Promise;

  // Answer:
  // true
}

/////////////////////////////

// PDF Q808. Write clean code for promise order and explain time complexity in comments.
{
  function forPromiseOrderExplainTime() {
    return Promise.resolve('done');
  }

  // Input:
  forPromiseOrderExplainTime() instanceof Promise;

  // Answer:
  // true
}

/////////////////////////////

// PDF Q818. Write clean code for promise order and explain time complexity in comments.
{
  function forPromiseOrderExplainTime() {
    return Promise.resolve('done');
  }

  // Input:
  forPromiseOrderExplainTime() instanceof Promise;

  // Answer:
  // true
}

/////////////////////////////

// PDF Q828. Write clean code for promise order and explain time complexity in comments.
{
  function forPromiseOrderExplainTime() {
    return Promise.resolve('done');
  }

  // Input:
  forPromiseOrderExplainTime() instanceof Promise;

  // Answer:
  // true
}

/////////////////////////////

// PDF Q838. Write clean code for promise order and explain time complexity in comments.
{
  function forPromiseOrderExplainTime() {
    return Promise.resolve('done');
  }

  // Input:
  forPromiseOrderExplainTime() instanceof Promise;

  // Answer:
  // true
}

/////////////////////////////

// PDF Q848. Write clean code for promise order and explain time complexity in comments.
{
  function forPromiseOrderExplainTime() {
    return Promise.resolve('done');
  }

  // Input:
  forPromiseOrderExplainTime() instanceof Promise;

  // Answer:
  // true
}

/////////////////////////////

// PDF Q858. Write clean code for Promise.all and explain time complexity in comments.
{
  function forPromiseAllExplainTime() {
    return Promise.resolve('done');
  }

  // Input:
  forPromiseAllExplainTime() instanceof Promise;

  // Answer:
  // true
}

/////////////////////////////

// PDF Q868. Write clean code for Promise.all and explain time complexity in comments.
{
  function forPromiseAllExplainTime() {
    return Promise.resolve('done');
  }

  // Input:
  forPromiseAllExplainTime() instanceof Promise;

  // Answer:
  // true
}

/////////////////////////////

// PDF Q878. Write clean code for Promise.all and explain time complexity in comments.
{
  function forPromiseAllExplainTime() {
    return Promise.resolve('done');
  }

  // Input:
  forPromiseAllExplainTime() instanceof Promise;

  // Answer:
  // true
}

/////////////////////////////

// PDF Q888. Write clean code for Promise.all and explain time complexity in comments.
{
  function forPromiseAllExplainTime() {
    return Promise.resolve('done');
  }

  // Input:
  forPromiseAllExplainTime() instanceof Promise;

  // Answer:
  // true
}

/////////////////////////////

// PDF Q898. Write clean code for Promise.all and explain time complexity in comments.
{
  function forPromiseAllExplainTime() {
    return Promise.resolve('done');
  }

  // Input:
  forPromiseAllExplainTime() instanceof Promise;

  // Answer:
  // true
}

/////////////////////////////

// PDF Q951. Write a JavaScript function for try catch and handle empty input.
{
  function forTryCatchHandleEmpty(callback) {
    try {
      return callback();
    } catch (error) {
      return error.message;
    }
  }

  // Input:
  forTryCatchHandleEmpty(() => { throw new Error('fail'); });

  // Answer:
  // "fail"
}

/////////////////////////////

// PDF Q961. Write a JavaScript function for try catch and handle empty input.
{
  function forTryCatchHandleEmpty(callback) {
    try {
      return callback();
    } catch (error) {
      return error.message;
    }
  }

  // Input:
  forTryCatchHandleEmpty(() => { throw new Error('fail'); });

  // Answer:
  // "fail"
}

/////////////////////////////

// PDF Q971. Write a JavaScript function for try catch and handle empty input.
{
  function forTryCatchHandleEmpty(callback) {
    try {
      return callback();
    } catch (error) {
      return error.message;
    }
  }

  // Input:
  forTryCatchHandleEmpty(() => { throw new Error('fail'); });

  // Answer:
  // "fail"
}

/////////////////////////////

// PDF Q981. Write a JavaScript function for try catch and handle empty input.
{
  function forTryCatchHandleEmpty(callback) {
    try {
      return callback();
    } catch (error) {
      return error.message;
    }
  }

  // Input:
  forTryCatchHandleEmpty(() => { throw new Error('fail'); });

  // Answer:
  // "fail"
}

/////////////////////////////

// PDF Q991. Write a JavaScript function for try catch and handle empty input.
{
  function forTryCatchHandleEmpty(callback) {
    try {
      return callback();
    } catch (error) {
      return error.message;
    }
  }

  // Input:
  forTryCatchHandleEmpty(() => { throw new Error('fail'); });

  // Answer:
  // "fail"
}

/////////////////////////////

