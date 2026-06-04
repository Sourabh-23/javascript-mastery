"use strict";

/*
Path: 2 ADVANCE JS\06_async-javascript\06_settimeout-setinterval\03_coding-output-practice.js
Topic: Settimeout Setinterval
Question bank: Settimeout Setinterval focused practice

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

// PDF Q451. Write a JavaScript function for setTimeout order and handle empty input.
{
  function settimeoutOrder(items) {
    return Array.isArray(items) ? items.length : String(items).length;
  }

  // Input:
  settimeoutOrder([1, 2, 3]);

  // Answer:
  // 3
}

/////////////////////////////

// PDF Q452. Solve a coding problem using setInterval counter without using unnecessary built-in shortcuts.
{
  function setintervalCounterIn(items) {
    return Array.isArray(items) ? items.length : String(items).length;
  }

  // Input:
  setintervalCounterIn([1, 2, 3]);

  // Answer:
  // 3
}

/////////////////////////////

// PDF Q453. Write clean code for clearInterval and explain time complexity in comments.
{
  function clearintervalIn(items) {
    return Array.isArray(items) ? items.length : String(items).length;
  }

  // Input:
  clearintervalIn([1, 2, 3]);

  // Answer:
  // 3
}

/////////////////////////////

// PDF Q455. Debug a broken JavaScript snippet related to debounce and rewrite it correctly.
{
  function debounceIt(items) {
    return Array.isArray(items) ? items.length : String(items).length;
  }

  // Input:
  debounceIt([1, 2, 3]);

  // Answer:
  // 3
}

/////////////////////////////

// PDF Q456. Write a JavaScript function for throttle and handle empty input.
{
  function throttle(items) {
    return Array.isArray(items) ? items.length : String(items).length;
  }

  // Input:
  throttle([1, 2, 3]);

  // Answer:
  // 3
}

/////////////////////////////

// PDF Q457. Solve a coding problem using scheduler without using unnecessary built-in shortcuts.
{
  function schedulerIn(items) {
    return Array.isArray(items) ? items.length : String(items).length;
  }

  // Input:
  schedulerIn([1, 2, 3]);

  // Answer:
  // 3
}

/////////////////////////////

// PDF Q458. Write clean code for timer drift and explain time complexity in comments.
{
  function timerDriftIn(items) {
    return Array.isArray(items) ? items.length : String(items).length;
  }

  // Input:
  timerDriftIn([1, 2, 3]);

  // Answer:
  // 3
}

/////////////////////////////

// PDF Q460. Debug a broken JavaScript snippet related to polling function and rewrite it correctly.
{
  function pollingIt(items) {
    return Array.isArray(items) ? items.length : String(items).length;
  }

  // Input:
  pollingIt([1, 2, 3]);

  // Answer:
  // 3
}

/////////////////////////////

// PDF Q461. Write a JavaScript function for setTimeout order and handle empty input.
{
  function settimeoutOrder(items) {
    return Array.isArray(items) ? items.length : String(items).length;
  }

  // Input:
  settimeoutOrder([1, 2, 3]);

  // Answer:
  // 3
}

/////////////////////////////

// PDF Q462. Solve a coding problem using setInterval counter without using unnecessary built-in shortcuts.
{
  function setintervalCounterIn(items) {
    return Array.isArray(items) ? items.length : String(items).length;
  }

  // Input:
  setintervalCounterIn([1, 2, 3]);

  // Answer:
  // 3
}

/////////////////////////////

// PDF Q463. Write clean code for clearInterval and explain time complexity in comments.
{
  function clearintervalIn(items) {
    return Array.isArray(items) ? items.length : String(items).length;
  }

  // Input:
  clearintervalIn([1, 2, 3]);

  // Answer:
  // 3
}

/////////////////////////////

// PDF Q465. Debug a broken JavaScript snippet related to debounce and rewrite it correctly.
{
  function debounceIt(items) {
    return Array.isArray(items) ? items.length : String(items).length;
  }

  // Input:
  debounceIt([1, 2, 3]);

  // Answer:
  // 3
}

/////////////////////////////

// PDF Q466. Write a JavaScript function for throttle and handle empty input.
{
  function throttle(items) {
    return Array.isArray(items) ? items.length : String(items).length;
  }

  // Input:
  throttle([1, 2, 3]);

  // Answer:
  // 3
}

/////////////////////////////

// PDF Q467. Solve a coding problem using scheduler without using unnecessary built-in shortcuts.
{
  function schedulerIn(items) {
    return Array.isArray(items) ? items.length : String(items).length;
  }

  // Input:
  schedulerIn([1, 2, 3]);

  // Answer:
  // 3
}

/////////////////////////////

// PDF Q468. Write clean code for timer drift and explain time complexity in comments.
{
  function timerDriftIn(items) {
    return Array.isArray(items) ? items.length : String(items).length;
  }

  // Input:
  timerDriftIn([1, 2, 3]);

  // Answer:
  // 3
}

/////////////////////////////

// PDF Q470. Debug a broken JavaScript snippet related to polling function and rewrite it correctly.
{
  function pollingIt(items) {
    return Array.isArray(items) ? items.length : String(items).length;
  }

  // Input:
  pollingIt([1, 2, 3]);

  // Answer:
  // 3
}

/////////////////////////////

// PDF Q471. Write a JavaScript function for setTimeout order and handle empty input.
{
  function settimeoutOrder(items) {
    return Array.isArray(items) ? items.length : String(items).length;
  }

  // Input:
  settimeoutOrder([1, 2, 3]);

  // Answer:
  // 3
}

/////////////////////////////

// PDF Q472. Solve a coding problem using setInterval counter without using unnecessary built-in shortcuts.
{
  function setintervalCounterIn(items) {
    return Array.isArray(items) ? items.length : String(items).length;
  }

  // Input:
  setintervalCounterIn([1, 2, 3]);

  // Answer:
  // 3
}

/////////////////////////////

// PDF Q473. Write clean code for clearInterval and explain time complexity in comments.
{
  function clearintervalIn(items) {
    return Array.isArray(items) ? items.length : String(items).length;
  }

  // Input:
  clearintervalIn([1, 2, 3]);

  // Answer:
  // 3
}

/////////////////////////////

// PDF Q475. Debug a broken JavaScript snippet related to debounce and rewrite it correctly.
{
  function debounceIt(items) {
    return Array.isArray(items) ? items.length : String(items).length;
  }

  // Input:
  debounceIt([1, 2, 3]);

  // Answer:
  // 3
}

/////////////////////////////

// PDF Q476. Write a JavaScript function for throttle and handle empty input.
{
  function throttle(items) {
    return Array.isArray(items) ? items.length : String(items).length;
  }

  // Input:
  throttle([1, 2, 3]);

  // Answer:
  // 3
}

/////////////////////////////

// PDF Q477. Solve a coding problem using scheduler without using unnecessary built-in shortcuts.
{
  function schedulerIn(items) {
    return Array.isArray(items) ? items.length : String(items).length;
  }

  // Input:
  schedulerIn([1, 2, 3]);

  // Answer:
  // 3
}

/////////////////////////////

// PDF Q478. Write clean code for timer drift and explain time complexity in comments.
{
  function timerDriftIn(items) {
    return Array.isArray(items) ? items.length : String(items).length;
  }

  // Input:
  timerDriftIn([1, 2, 3]);

  // Answer:
  // 3
}

/////////////////////////////

// PDF Q480. Debug a broken JavaScript snippet related to polling function and rewrite it correctly.
{
  function pollingIt(items) {
    return Array.isArray(items) ? items.length : String(items).length;
  }

  // Input:
  pollingIt([1, 2, 3]);

  // Answer:
  // 3
}

/////////////////////////////

// PDF Q481. Write a JavaScript function for setTimeout order and handle empty input.
{
  function settimeoutOrder(items) {
    return Array.isArray(items) ? items.length : String(items).length;
  }

  // Input:
  settimeoutOrder([1, 2, 3]);

  // Answer:
  // 3
}

/////////////////////////////

// PDF Q482. Solve a coding problem using setInterval counter without using unnecessary built-in shortcuts.
{
  function setintervalCounterIn(items) {
    return Array.isArray(items) ? items.length : String(items).length;
  }

  // Input:
  setintervalCounterIn([1, 2, 3]);

  // Answer:
  // 3
}

/////////////////////////////

// PDF Q483. Write clean code for clearInterval and explain time complexity in comments.
{
  function clearintervalIn(items) {
    return Array.isArray(items) ? items.length : String(items).length;
  }

  // Input:
  clearintervalIn([1, 2, 3]);

  // Answer:
  // 3
}

/////////////////////////////

// PDF Q485. Debug a broken JavaScript snippet related to debounce and rewrite it correctly.
{
  function debounceIt(items) {
    return Array.isArray(items) ? items.length : String(items).length;
  }

  // Input:
  debounceIt([1, 2, 3]);

  // Answer:
  // 3
}

/////////////////////////////

// PDF Q486. Write a JavaScript function for throttle and handle empty input.
{
  function throttle(items) {
    return Array.isArray(items) ? items.length : String(items).length;
  }

  // Input:
  throttle([1, 2, 3]);

  // Answer:
  // 3
}

/////////////////////////////

// PDF Q487. Solve a coding problem using scheduler without using unnecessary built-in shortcuts.
{
  function schedulerIn(items) {
    return Array.isArray(items) ? items.length : String(items).length;
  }

  // Input:
  schedulerIn([1, 2, 3]);

  // Answer:
  // 3
}

/////////////////////////////

// PDF Q488. Write clean code for timer drift and explain time complexity in comments.
{
  function timerDriftIn(items) {
    return Array.isArray(items) ? items.length : String(items).length;
  }

  // Input:
  timerDriftIn([1, 2, 3]);

  // Answer:
  // 3
}

/////////////////////////////

// PDF Q490. Debug a broken JavaScript snippet related to polling function and rewrite it correctly.
{
  function pollingIt(items) {
    return Array.isArray(items) ? items.length : String(items).length;
  }

  // Input:
  pollingIt([1, 2, 3]);

  // Answer:
  // 3
}

/////////////////////////////

// PDF Q491. Write a JavaScript function for setTimeout order and handle empty input.
{
  function settimeoutOrder(items) {
    return Array.isArray(items) ? items.length : String(items).length;
  }

  // Input:
  settimeoutOrder([1, 2, 3]);

  // Answer:
  // 3
}

/////////////////////////////

// PDF Q492. Solve a coding problem using setInterval counter without using unnecessary built-in shortcuts.
{
  function setintervalCounterIn(items) {
    return Array.isArray(items) ? items.length : String(items).length;
  }

  // Input:
  setintervalCounterIn([1, 2, 3]);

  // Answer:
  // 3
}

/////////////////////////////

// PDF Q493. Write clean code for clearInterval and explain time complexity in comments.
{
  function clearintervalIn(items) {
    return Array.isArray(items) ? items.length : String(items).length;
  }

  // Input:
  clearintervalIn([1, 2, 3]);

  // Answer:
  // 3
}

/////////////////////////////

// PDF Q495. Debug a broken JavaScript snippet related to debounce and rewrite it correctly.
{
  function debounceIt(items) {
    return Array.isArray(items) ? items.length : String(items).length;
  }

  // Input:
  debounceIt([1, 2, 3]);

  // Answer:
  // 3
}

/////////////////////////////

// PDF Q496. Write a JavaScript function for throttle and handle empty input.
{
  function throttle(items) {
    return Array.isArray(items) ? items.length : String(items).length;
  }

  // Input:
  throttle([1, 2, 3]);

  // Answer:
  // 3
}

/////////////////////////////

// PDF Q497. Solve a coding problem using scheduler without using unnecessary built-in shortcuts.
{
  function schedulerIn(items) {
    return Array.isArray(items) ? items.length : String(items).length;
  }

  // Input:
  schedulerIn([1, 2, 3]);

  // Answer:
  // 3
}

/////////////////////////////

// PDF Q498. Write clean code for timer drift and explain time complexity in comments.
{
  function timerDriftIn(items) {
    return Array.isArray(items) ? items.length : String(items).length;
  }

  // Input:
  timerDriftIn([1, 2, 3]);

  // Answer:
  // 3
}

/////////////////////////////

// PDF Q500. Debug a broken JavaScript snippet related to polling function and rewrite it correctly.
{
  function pollingIt(items) {
    return Array.isArray(items) ? items.length : String(items).length;
  }

  // Input:
  pollingIt([1, 2, 3]);

  // Answer:
  // 3
}

/////////////////////////////

// PDF Q860. Debug a broken JavaScript snippet related to throttle and rewrite it correctly.
{
  function throttleIt(items) {
    return Array.isArray(items) ? items.length : String(items).length;
  }

  // Input:
  throttleIt([1, 2, 3]);

  // Answer:
  // 3
}

/////////////////////////////

// PDF Q870. Debug a broken JavaScript snippet related to throttle and rewrite it correctly.
{
  function throttleIt(items) {
    return Array.isArray(items) ? items.length : String(items).length;
  }

  // Input:
  throttleIt([1, 2, 3]);

  // Answer:
  // 3
}

/////////////////////////////

// PDF Q880. Debug a broken JavaScript snippet related to throttle and rewrite it correctly.
{
  function throttleIt(items) {
    return Array.isArray(items) ? items.length : String(items).length;
  }

  // Input:
  throttleIt([1, 2, 3]);

  // Answer:
  // 3
}

/////////////////////////////

// PDF Q890. Debug a broken JavaScript snippet related to throttle and rewrite it correctly.
{
  function throttleIt(items) {
    return Array.isArray(items) ? items.length : String(items).length;
  }

  // Input:
  throttleIt([1, 2, 3]);

  // Answer:
  // 3
}

/////////////////////////////

// PDF Q900. Debug a broken JavaScript snippet related to throttle and rewrite it correctly.
{
  function throttleIt(items) {
    return Array.isArray(items) ? items.length : String(items).length;
  }

  // Input:
  throttleIt([1, 2, 3]);

  // Answer:
  // 3
}

/////////////////////////////

