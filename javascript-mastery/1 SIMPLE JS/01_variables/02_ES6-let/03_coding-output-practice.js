"use strict";

/*
Path: 1 SIMPLE JS\01_variables\02_ES6-let\03_coding-output-practice.js
Topic: Let
Question bank: Let focused practice

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

// Q6. let is block scoped case 6
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

// Q7. let can update case 7
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

// Q8. let loop scope case 8
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

// Q9. let no redeclare in same scope case 9
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

// Q10. let inside if case 10
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

// Q16. let is block scoped case 16
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

// Q17. let can update case 17
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

// Q18. let loop scope case 18
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

// Q19. let no redeclare in same scope case 19
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

// Q20. let inside if case 20
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
