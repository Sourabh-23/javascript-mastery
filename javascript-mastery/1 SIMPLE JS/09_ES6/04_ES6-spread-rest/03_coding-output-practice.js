"use strict";

/*
Path: 1 SIMPLE JS\09_ES6\04_ES6-spread-rest\03_coding-output-practice.js
Topic: Spread Rest
Question bank: Spread Rest focused practice

How to study:
1. Read Q.
2. Hide Answer.
3. Predict output.
4. Then check Answer.
*/

// Q1. spread array
{
  function run(arr) {
    return [...arr, 3];
  }

  // Input:
  run([1, 2]);

  // Answer:
  // [1, 2, 3]
}

/////////////////////////////

// Q2. spread object
{
  function run(user) {
    return { ...user, active: true };
  }

  // Input:
  run({ name: "Amit" });

  // Answer:
  // { name: "Amit", active: true }
}

/////////////////////////////

// Q3. rest params
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

// Q4. spread array case 4
{
  function run(arr) {
    return [...arr, 3];
  }

  // Input:
  run([1, 2]);

  // Answer:
  // [1, 2, 3]
}

/////////////////////////////

// Q5. spread object case 5
{
  function run(user) {
    return { ...user, active: true };
  }

  // Input:
  run({ name: "Amit" });

  // Answer:
  // { name: "Amit", active: true }
}

/////////////////////////////

// Q6. rest params case 6
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

// Q7. spread array case 7
{
  function run(arr) {
    return [...arr, 3];
  }

  // Input:
  run([1, 2]);

  // Answer:
  // [1, 2, 3]
}

/////////////////////////////

// Q8. spread object case 8
{
  function run(user) {
    return { ...user, active: true };
  }

  // Input:
  run({ name: "Amit" });

  // Answer:
  // { name: "Amit", active: true }
}

/////////////////////////////

// Q9. rest params case 9
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

// Q10. spread array case 10
{
  function run(arr) {
    return [...arr, 3];
  }

  // Input:
  run([1, 2]);

  // Answer:
  // [1, 2, 3]
}

/////////////////////////////

// Q11. spread object case 11
{
  function run(user) {
    return { ...user, active: true };
  }

  // Input:
  run({ name: "Amit" });

  // Answer:
  // { name: "Amit", active: true }
}

/////////////////////////////

// Q12. rest params case 12
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

// Q13. spread array case 13
{
  function run(arr) {
    return [...arr, 3];
  }

  // Input:
  run([1, 2]);

  // Answer:
  // [1, 2, 3]
}

/////////////////////////////

// Q14. spread object case 14
{
  function run(user) {
    return { ...user, active: true };
  }

  // Input:
  run({ name: "Amit" });

  // Answer:
  // { name: "Amit", active: true }
}

/////////////////////////////

// Q15. rest params case 15
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

// Q16. spread array case 16
{
  function run(arr) {
    return [...arr, 3];
  }

  // Input:
  run([1, 2]);

  // Answer:
  // [1, 2, 3]
}

/////////////////////////////

// Q17. spread object case 17
{
  function run(user) {
    return { ...user, active: true };
  }

  // Input:
  run({ name: "Amit" });

  // Answer:
  // { name: "Amit", active: true }
}

/////////////////////////////

// Q18. rest params case 18
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

// Q19. spread array case 19
{
  function run(arr) {
    return [...arr, 3];
  }

  // Input:
  run([1, 2]);

  // Answer:
  // [1, 2, 3]
}

/////////////////////////////

// Q20. spread object case 20
{
  function run(user) {
    return { ...user, active: true };
  }

  // Input:
  run({ name: "Amit" });

  // Answer:
  // { name: "Amit", active: true }
}

/////////////////////////////

// Q21. rest params case 21
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

// Q22. spread array case 22
{
  function run(arr) {
    return [...arr, 3];
  }

  // Input:
  run([1, 2]);

  // Answer:
  // [1, 2, 3]
}

/////////////////////////////

// Q23. spread object case 23
{
  function run(user) {
    return { ...user, active: true };
  }

  // Input:
  run({ name: "Amit" });

  // Answer:
  // { name: "Amit", active: true }
}

/////////////////////////////

// Q24. rest params case 24
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

// Q25. spread array case 25
{
  function run(arr) {
    return [...arr, 3];
  }

  // Input:
  run([1, 2]);

  // Answer:
  // [1, 2, 3]
}

/////////////////////////////

// ================= PDF BASED PRACTICE =================

// PDF Q9. Write a program to calculate simple interest using JavaScript variables.
{
  function calculateSimpleInterestVariables(principal, rate, years) {
    return principal * rate * years / 100;
  }

  // Input:
  calculateSimpleInterestVariables(1000, 10, 2);

  // Answer:
  // 200
}

/////////////////////////////

// PDF Q10. Write a function to calculate compound interest for given principal, rate and years.
{
  function calculateCompoundInterestForPrincipal(principal, rate, years) {
    return principal * Math.pow(1 + rate / 100, years) - principal;
  }

  // Input:
  calculateCompoundInterestForPrincipal(1000, 10, 2);

  // Answer:
  // 210.00000000000023
}

/////////////////////////////

// PDF Q551. Write a JavaScript function for destructuring and handle empty input.
{
  function destructuring(items) {
    const [first, ...rest] = [...items];
    return { first, rest };
  }

  // Input:
  destructuring([10, 20, 30]);

  // Answer:
  // { first: 10, rest: [20, 30] }
}

/////////////////////////////

// PDF Q552. Solve a coding problem using spread operator without using unnecessary built-in shortcuts.
{
  function spreadOperatorIn(items) {
    const [first, ...rest] = [...items];
    return { first, rest };
  }

  // Input:
  spreadOperatorIn([10, 20, 30]);

  // Answer:
  // { first: 10, rest: [20, 30] }
}

/////////////////////////////

// PDF Q553. Write clean code for rest parameter and explain time complexity in comments.
{
  function restParameterIn(items) {
    const [first, ...rest] = [...items];
    return { first, rest };
  }

  // Input:
  restParameterIn([10, 20, 30]);

  // Answer:
  // { first: 10, rest: [20, 30] }
}

/////////////////////////////

// PDF Q556. Write a JavaScript function for Set and handle empty input.
{
  function set(items) {
    const [first, ...rest] = [...items];
    return { first, rest };
  }

  // Input:
  set([10, 20, 30]);

  // Answer:
  // { first: 10, rest: [20, 30] }
}

/////////////////////////////

// PDF Q558. Write clean code for WeakMap and explain time complexity in comments.
{
  function forWeakmapExplainTimeComplexity(items) {
    return items.map((item) => item * 2);
  }

  // Input:
  forWeakmapExplainTimeComplexity([1, 2, 3]);

  // Answer:
  // [2, 4, 6]
}

/////////////////////////////

// PDF Q561. Write a JavaScript function for destructuring and handle empty input.
{
  function destructuring(items) {
    const [first, ...rest] = [...items];
    return { first, rest };
  }

  // Input:
  destructuring([10, 20, 30]);

  // Answer:
  // { first: 10, rest: [20, 30] }
}

/////////////////////////////

// PDF Q562. Solve a coding problem using spread operator without using unnecessary built-in shortcuts.
{
  function spreadOperatorIn(items) {
    const [first, ...rest] = [...items];
    return { first, rest };
  }

  // Input:
  spreadOperatorIn([10, 20, 30]);

  // Answer:
  // { first: 10, rest: [20, 30] }
}

/////////////////////////////

// PDF Q563. Write clean code for rest parameter and explain time complexity in comments.
{
  function restParameterIn(items) {
    const [first, ...rest] = [...items];
    return { first, rest };
  }

  // Input:
  restParameterIn([10, 20, 30]);

  // Answer:
  // { first: 10, rest: [20, 30] }
}

/////////////////////////////

// PDF Q566. Write a JavaScript function for Set and handle empty input.
{
  function set(items) {
    const [first, ...rest] = [...items];
    return { first, rest };
  }

  // Input:
  set([10, 20, 30]);

  // Answer:
  // { first: 10, rest: [20, 30] }
}

/////////////////////////////

// PDF Q568. Write clean code for WeakMap and explain time complexity in comments.
{
  function forWeakmapExplainTimeComplexity(items) {
    return items.map((item) => item * 2);
  }

  // Input:
  forWeakmapExplainTimeComplexity([1, 2, 3]);

  // Answer:
  // [2, 4, 6]
}

/////////////////////////////

// PDF Q571. Write a JavaScript function for destructuring and handle empty input.
{
  function destructuring(items) {
    const [first, ...rest] = [...items];
    return { first, rest };
  }

  // Input:
  destructuring([10, 20, 30]);

  // Answer:
  // { first: 10, rest: [20, 30] }
}

/////////////////////////////

// PDF Q572. Solve a coding problem using spread operator without using unnecessary built-in shortcuts.
{
  function spreadOperatorIn(items) {
    const [first, ...rest] = [...items];
    return { first, rest };
  }

  // Input:
  spreadOperatorIn([10, 20, 30]);

  // Answer:
  // { first: 10, rest: [20, 30] }
}

/////////////////////////////

// PDF Q573. Write clean code for rest parameter and explain time complexity in comments.
{
  function restParameterIn(items) {
    const [first, ...rest] = [...items];
    return { first, rest };
  }

  // Input:
  restParameterIn([10, 20, 30]);

  // Answer:
  // { first: 10, rest: [20, 30] }
}

/////////////////////////////

// PDF Q576. Write a JavaScript function for Set and handle empty input.
{
  function set(items) {
    const [first, ...rest] = [...items];
    return { first, rest };
  }

  // Input:
  set([10, 20, 30]);

  // Answer:
  // { first: 10, rest: [20, 30] }
}

/////////////////////////////

// PDF Q578. Write clean code for WeakMap and explain time complexity in comments.
{
  function forWeakmapExplainTimeComplexity(items) {
    return items.map((item) => item * 2);
  }

  // Input:
  forWeakmapExplainTimeComplexity([1, 2, 3]);

  // Answer:
  // [2, 4, 6]
}

/////////////////////////////

// PDF Q581. Write a JavaScript function for destructuring and handle empty input.
{
  function destructuring(items) {
    const [first, ...rest] = [...items];
    return { first, rest };
  }

  // Input:
  destructuring([10, 20, 30]);

  // Answer:
  // { first: 10, rest: [20, 30] }
}

/////////////////////////////

// PDF Q582. Solve a coding problem using spread operator without using unnecessary built-in shortcuts.
{
  function spreadOperatorIn(items) {
    const [first, ...rest] = [...items];
    return { first, rest };
  }

  // Input:
  spreadOperatorIn([10, 20, 30]);

  // Answer:
  // { first: 10, rest: [20, 30] }
}

/////////////////////////////

// PDF Q583. Write clean code for rest parameter and explain time complexity in comments.
{
  function restParameterIn(items) {
    const [first, ...rest] = [...items];
    return { first, rest };
  }

  // Input:
  restParameterIn([10, 20, 30]);

  // Answer:
  // { first: 10, rest: [20, 30] }
}

/////////////////////////////

// PDF Q586. Write a JavaScript function for Set and handle empty input.
{
  function set(items) {
    const [first, ...rest] = [...items];
    return { first, rest };
  }

  // Input:
  set([10, 20, 30]);

  // Answer:
  // { first: 10, rest: [20, 30] }
}

/////////////////////////////

// PDF Q588. Write clean code for WeakMap and explain time complexity in comments.
{
  function forWeakmapExplainTimeComplexity(items) {
    return items.map((item) => item * 2);
  }

  // Input:
  forWeakmapExplainTimeComplexity([1, 2, 3]);

  // Answer:
  // [2, 4, 6]
}

/////////////////////////////

// PDF Q591. Write a JavaScript function for destructuring and handle empty input.
{
  function destructuring(items) {
    const [first, ...rest] = [...items];
    return { first, rest };
  }

  // Input:
  destructuring([10, 20, 30]);

  // Answer:
  // { first: 10, rest: [20, 30] }
}

/////////////////////////////

// PDF Q592. Solve a coding problem using spread operator without using unnecessary built-in shortcuts.
{
  function spreadOperatorIn(items) {
    const [first, ...rest] = [...items];
    return { first, rest };
  }

  // Input:
  spreadOperatorIn([10, 20, 30]);

  // Answer:
  // { first: 10, rest: [20, 30] }
}

/////////////////////////////

// PDF Q593. Write clean code for rest parameter and explain time complexity in comments.
{
  function restParameterIn(items) {
    const [first, ...rest] = [...items];
    return { first, rest };
  }

  // Input:
  restParameterIn([10, 20, 30]);

  // Answer:
  // { first: 10, rest: [20, 30] }
}

/////////////////////////////

// PDF Q596. Write a JavaScript function for Set and handle empty input.
{
  function set(items) {
    const [first, ...rest] = [...items];
    return { first, rest };
  }

  // Input:
  set([10, 20, 30]);

  // Answer:
  // { first: 10, rest: [20, 30] }
}

/////////////////////////////

// PDF Q598. Write clean code for WeakMap and explain time complexity in comments.
{
  function forWeakmapExplainTimeComplexity(items) {
    return items.map((item) => item * 2);
  }

  // Input:
  forWeakmapExplainTimeComplexity([1, 2, 3]);

  // Answer:
  // [2, 4, 6]
}

/////////////////////////////

