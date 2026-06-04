"use strict";

/*
Path: 1 SIMPLE JS\09_ES6\01_ES6-let-const\04_ES6-coding-output-practice.js
Topic: Let Const
Question bank: Let Const focused practice

How to study:
1. Read Q.
2. Hide Answer.
3. Predict output.
4. Then check Answer.
*/

// Q1. let is block scoped
{
  function run() {
    let result = "outer";
    if (true) {
      let result = "inner";
    }
    return result;
  }

  // Input:
  run();

  // Answer:
  // "outer"
}

/////////////////////////////

// Q2. let can update
{
  function run() {
    let count = 1;
    count = 2;
    return count;
  }

  // Input:
  run();

  // Answer:
  // 2
}

/////////////////////////////

// Q3. let loop scope
{
  function run() {
    let total = 0;
    for (let i = 1; i <= 3; i++) total += i;
    return total;
  }

  // Input:
  run();

  // Answer:
  // 6
}

/////////////////////////////

// Q4. let no redeclare in same scope
{
  function run() {
    let name = "Amit";
    name = "Neha";
    return name;
  }

  // Input:
  run();

  // Answer:
  // "Neha"
}

/////////////////////////////

// Q5. let inside if
{
  function run(active) {
    if (active) {
      let status = "yes";
      return status;
    }
    return "no";
  }

  // Input:
  run(true);

  // Answer:
  // "yes"
}

/////////////////////////////

// Q6. const needs value
{
  function run() {
    const role = "admin";
    return role;
  }

  // Input:
  run();

  // Answer:
  // "admin"
}

/////////////////////////////

// Q7. const object can mutate
{
  function run() {
    const user = { name: "Amit" };
    user.name = "Neha";
    return user.name;
  }

  // Input:
  run();

  // Answer:
  // "Neha"
}

/////////////////////////////

// Q8. const array can push
{
  function run() {
    const nums = [1, 2];
    nums.push(3);
    return nums;
  }

  // Input:
  run();

  // Answer:
  // [1, 2, 3]
}

/////////////////////////////

// Q9. const block scope
{
  function run() {
    const value = 1;
    if (true) {
      const value = 2;
    }
    return value;
  }

  // Input:
  run();

  // Answer:
  // 1
}

/////////////////////////////

// Q10. const for object reference
{
  function run() {
    const config = { dark: false };
    config.dark = true;
    return config.dark;
  }

  // Input:
  run();

  // Answer:
  // true
}

/////////////////////////////

// Q11. let is block scoped case 11
{
  function run() {
    let result = "outer";
    if (true) {
      let result = "inner";
    }
    return result;
  }

  // Input:
  run();

  // Answer:
  // "outer"
}

/////////////////////////////

// Q12. let can update case 12
{
  function run() {
    let count = 1;
    count = 2;
    return count;
  }

  // Input:
  run();

  // Answer:
  // 2
}

/////////////////////////////

// Q13. let loop scope case 13
{
  function run() {
    let total = 0;
    for (let i = 1; i <= 3; i++) total += i;
    return total;
  }

  // Input:
  run();

  // Answer:
  // 6
}

/////////////////////////////

// Q14. let no redeclare in same scope case 14
{
  function run() {
    let name = "Amit";
    name = "Neha";
    return name;
  }

  // Input:
  run();

  // Answer:
  // "Neha"
}

/////////////////////////////

// Q15. let inside if case 15
{
  function run(active) {
    if (active) {
      let status = "yes";
      return status;
    }
    return "no";
  }

  // Input:
  run(true);

  // Answer:
  // "yes"
}

/////////////////////////////

// Q16. const needs value case 16
{
  function run() {
    const role = "admin";
    return role;
  }

  // Input:
  run();

  // Answer:
  // "admin"
}

/////////////////////////////

// Q17. const object can mutate case 17
{
  function run() {
    const user = { name: "Amit" };
    user.name = "Neha";
    return user.name;
  }

  // Input:
  run();

  // Answer:
  // "Neha"
}

/////////////////////////////

// Q18. const array can push case 18
{
  function run() {
    const nums = [1, 2];
    nums.push(3);
    return nums;
  }

  // Input:
  run();

  // Answer:
  // [1, 2, 3]
}

/////////////////////////////

// Q19. const block scope case 19
{
  function run() {
    const value = 1;
    if (true) {
      const value = 2;
    }
    return value;
  }

  // Input:
  run();

  // Answer:
  // 1
}

/////////////////////////////

// Q20. const for object reference case 20
{
  function run() {
    const config = { dark: false };
    config.dark = true;
    return config.dark;
  }

  // Input:
  run();

  // Answer:
  // true
}

/////////////////////////////

// Q21. let is block scoped case 21
{
  function run() {
    let result = "outer";
    if (true) {
      let result = "inner";
    }
    return result;
  }

  // Input:
  run();

  // Answer:
  // "outer"
}

/////////////////////////////

// Q22. let can update case 22
{
  function run() {
    let count = 1;
    count = 2;
    return count;
  }

  // Input:
  run();

  // Answer:
  // 2
}

/////////////////////////////

// Q23. let loop scope case 23
{
  function run() {
    let total = 0;
    for (let i = 1; i <= 3; i++) total += i;
    return total;
  }

  // Input:
  run();

  // Answer:
  // 6
}

/////////////////////////////

// Q24. let no redeclare in same scope case 24
{
  function run() {
    let name = "Amit";
    name = "Neha";
    return name;
  }

  // Input:
  run();

  // Answer:
  // "Neha"
}

/////////////////////////////

// Q25. let inside if case 25
{
  function run(active) {
    if (active) {
      let status = "yes";
      return status;
    }
    return "no";
  }

  // Input:
  run(true);

  // Answer:
  // "yes"
}

/////////////////////////////
