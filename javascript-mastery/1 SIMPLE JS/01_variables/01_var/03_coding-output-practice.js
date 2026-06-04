"use strict";

/*
Path: 1 SIMPLE JS\01_variables\01_var\03_coding-output-practice.js
Topic: Var
Question bank: Var focused practice

How to study:
1. Read Q.
2. Hide Answer.
3. Predict output.
4. Then check Answer.
*/

// Q1. var is function scoped
{
  function run() {
    if (true) {
      var message = "inside";
    }
    return message;
  }

  // Input:
  run();

  // Answer:
  // "inside"
}

/////////////////////////////

// Q2. var hoists as undefined
{
  function run() {
    return value;
    var value = 10;
  }

  // Input:
  run();

  // Answer:
  // undefined
}

/////////////////////////////

// Q3. var can be redeclared
{
  function run() {
    var count = 1;
    var count = 2;
    return count;
  }

  // Input:
  run();

  // Answer:
  // 2
}

/////////////////////////////

// Q4. var ignores block scope
{
  function run() {
    for (var i = 0; i < 3; i++) {}
    return i;
  }

  // Input:
  run();

  // Answer:
  // 3
}

/////////////////////////////

// Q5. var function boundary
{
  function run() {
    var name = "Amit";
    return name;
  }

  // Input:
  run();

  // Answer:
  // "Amit"
}

/////////////////////////////

// Q6. var is function scoped case 6
{
  function run() {
    if (true) {
      var message = "inside";
    }
    return message;
  }

  // Input:
  run();

  // Answer:
  // "inside"
}

/////////////////////////////

// Q7. var hoists as undefined case 7
{
  function run() {
    return value;
    var value = 10;
  }

  // Input:
  run();

  // Answer:
  // undefined
}

/////////////////////////////

// Q8. var can be redeclared case 8
{
  function run() {
    var count = 1;
    var count = 2;
    return count;
  }

  // Input:
  run();

  // Answer:
  // 2
}

/////////////////////////////

// Q9. var ignores block scope case 9
{
  function run() {
    for (var i = 0; i < 3; i++) {}
    return i;
  }

  // Input:
  run();

  // Answer:
  // 3
}

/////////////////////////////

// Q10. var function boundary case 10
{
  function run() {
    var name = "Amit";
    return name;
  }

  // Input:
  run();

  // Answer:
  // "Amit"
}

/////////////////////////////

// Q11. var is function scoped case 11
{
  function run() {
    if (true) {
      var message = "inside";
    }
    return message;
  }

  // Input:
  run();

  // Answer:
  // "inside"
}

/////////////////////////////

// Q12. var hoists as undefined case 12
{
  function run() {
    return value;
    var value = 10;
  }

  // Input:
  run();

  // Answer:
  // undefined
}

/////////////////////////////

// Q13. var can be redeclared case 13
{
  function run() {
    var count = 1;
    var count = 2;
    return count;
  }

  // Input:
  run();

  // Answer:
  // 2
}

/////////////////////////////

// Q14. var ignores block scope case 14
{
  function run() {
    for (var i = 0; i < 3; i++) {}
    return i;
  }

  // Input:
  run();

  // Answer:
  // 3
}

/////////////////////////////

// Q15. var function boundary case 15
{
  function run() {
    var name = "Amit";
    return name;
  }

  // Input:
  run();

  // Answer:
  // "Amit"
}

/////////////////////////////

// Q16. var is function scoped case 16
{
  function run() {
    if (true) {
      var message = "inside";
    }
    return message;
  }

  // Input:
  run();

  // Answer:
  // "inside"
}

/////////////////////////////

// Q17. var hoists as undefined case 17
{
  function run() {
    return value;
    var value = 10;
  }

  // Input:
  run();

  // Answer:
  // undefined
}

/////////////////////////////

// Q18. var can be redeclared case 18
{
  function run() {
    var count = 1;
    var count = 2;
    return count;
  }

  // Input:
  run();

  // Answer:
  // 2
}

/////////////////////////////

// Q19. var ignores block scope case 19
{
  function run() {
    for (var i = 0; i < 3; i++) {}
    return i;
  }

  // Input:
  run();

  // Answer:
  // 3
}

/////////////////////////////

// Q20. var function boundary case 20
{
  function run() {
    var name = "Amit";
    return name;
  }

  // Input:
  run();

  // Answer:
  // "Amit"
}

/////////////////////////////

// Q21. var is function scoped case 21
{
  function run() {
    if (true) {
      var message = "inside";
    }
    return message;
  }

  // Input:
  run();

  // Answer:
  // "inside"
}

/////////////////////////////

// Q22. var hoists as undefined case 22
{
  function run() {
    return value;
    var value = 10;
  }

  // Input:
  run();

  // Answer:
  // undefined
}

/////////////////////////////

// Q23. var can be redeclared case 23
{
  function run() {
    var count = 1;
    var count = 2;
    return count;
  }

  // Input:
  run();

  // Answer:
  // 2
}

/////////////////////////////

// Q24. var ignores block scope case 24
{
  function run() {
    for (var i = 0; i < 3; i++) {}
    return i;
  }

  // Input:
  run();

  // Answer:
  // 3
}

/////////////////////////////

// Q25. var function boundary case 25
{
  function run() {
    var name = "Amit";
    return name;
  }

  // Input:
  run();

  // Answer:
  // "Amit"
}

/////////////////////////////
