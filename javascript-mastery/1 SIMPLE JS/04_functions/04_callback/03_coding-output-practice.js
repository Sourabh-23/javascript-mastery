"use strict";

/*
Path: 1 SIMPLE JS\04_functions\04_callback\03_coding-output-practice.js
Topic: Callback
Question bank: Callback focused practice

How to study:
1. Read Q.
2. Hide Answer.
3. Predict output.
4. Then check Answer.
*/

// Q1. function call
{
  function add(a, b) {
    return a + b;
  }

  // Input:
  add(2, 3);

  // Answer:
  // 5
}

/////////////////////////////

// Q2. function expression
{
  const add = function (a, b) {
    return a + b;
  };

  // Input:
  add(2, 3);

  // Answer:
  // 5
}

/////////////////////////////

// Q3. arrow function
{
  const double = (num) => num * 2;

  // Input:
  double(5);

  // Answer:
  // 10
}

/////////////////////////////

// Q4. callback
{
  function run(value, callback) {
    return callback(value);
  }

  // Input:
  run(5, (n) => n * 2);

  // Answer:
  // 10
}

/////////////////////////////

// Q5. higher order
{
  function multiplier(factor) {
    return (num) => num * factor;
  }
  const double = multiplier(2);

  // Input:
  double(5);

  // Answer:
  // 10
}

/////////////////////////////

// Q6. function call case 6
{
  function add(a, b) {
    return a + b;
  }

  // Input:
  add(2, 3);

  // Answer:
  // 5
}

/////////////////////////////

// Q7. function expression case 7
{
  const add = function (a, b) {
    return a + b;
  };

  // Input:
  add(2, 3);

  // Answer:
  // 5
}

/////////////////////////////

// Q8. arrow function case 8
{
  const double = (num) => num * 2;

  // Input:
  double(5);

  // Answer:
  // 10
}

/////////////////////////////

// Q9. callback case 9
{
  function run(value, callback) {
    return callback(value);
  }

  // Input:
  run(5, (n) => n * 2);

  // Answer:
  // 10
}

/////////////////////////////

// Q10. higher order case 10
{
  function multiplier(factor) {
    return (num) => num * factor;
  }
  const double = multiplier(2);

  // Input:
  double(5);

  // Answer:
  // 10
}

/////////////////////////////

// Q11. function call case 11
{
  function add(a, b) {
    return a + b;
  }

  // Input:
  add(2, 3);

  // Answer:
  // 5
}

/////////////////////////////

// Q12. function expression case 12
{
  const add = function (a, b) {
    return a + b;
  };

  // Input:
  add(2, 3);

  // Answer:
  // 5
}

/////////////////////////////

// Q13. arrow function case 13
{
  const double = (num) => num * 2;

  // Input:
  double(5);

  // Answer:
  // 10
}

/////////////////////////////

// Q14. callback case 14
{
  function run(value, callback) {
    return callback(value);
  }

  // Input:
  run(5, (n) => n * 2);

  // Answer:
  // 10
}

/////////////////////////////

// Q15. higher order case 15
{
  function multiplier(factor) {
    return (num) => num * factor;
  }
  const double = multiplier(2);

  // Input:
  double(5);

  // Answer:
  // 10
}

/////////////////////////////

// Q16. function call case 16
{
  function add(a, b) {
    return a + b;
  }

  // Input:
  add(2, 3);

  // Answer:
  // 5
}

/////////////////////////////

// Q17. function expression case 17
{
  const add = function (a, b) {
    return a + b;
  };

  // Input:
  add(2, 3);

  // Answer:
  // 5
}

/////////////////////////////

// Q18. arrow function case 18
{
  const double = (num) => num * 2;

  // Input:
  double(5);

  // Answer:
  // 10
}

/////////////////////////////

// Q19. callback case 19
{
  function run(value, callback) {
    return callback(value);
  }

  // Input:
  run(5, (n) => n * 2);

  // Answer:
  // 10
}

/////////////////////////////

// Q20. higher order case 20
{
  function multiplier(factor) {
    return (num) => num * factor;
  }
  const double = multiplier(2);

  // Input:
  double(5);

  // Answer:
  // 10
}

/////////////////////////////

// Q21. function call case 21
{
  function add(a, b) {
    return a + b;
  }

  // Input:
  add(2, 3);

  // Answer:
  // 5
}

/////////////////////////////

// Q22. function expression case 22
{
  const add = function (a, b) {
    return a + b;
  };

  // Input:
  add(2, 3);

  // Answer:
  // 5
}

/////////////////////////////

// Q23. arrow function case 23
{
  const double = (num) => num * 2;

  // Input:
  double(5);

  // Answer:
  // 10
}

/////////////////////////////

// Q24. callback case 24
{
  function run(value, callback) {
    return callback(value);
  }

  // Input:
  run(5, (n) => n * 2);

  // Answer:
  // 10
}

/////////////////////////////

// Q25. higher order case 25
{
  function multiplier(factor) {
    return (num) => num * factor;
  }
  const double = multiplier(2);

  // Input:
  double(5);

  // Answer:
  // 10
}

/////////////////////////////
