"use strict";

/*
Path: 1 SIMPLE JS\03_operators\04_equality\04_coding-output-practice.js
Topic: 04_equality
Question bank: equality

How to study:
1. Read Q.
2. Hide Answer.
3. Predict output.
4. Then check Answer.
*/

// Q1. Strict equal same number
{
  function check(a, b) {
    return a === b;
  }

  // Input:
  check(5, 5);

  // Answer:
  // true
}

/////////////////////////////

// Q2. Strict equal number string
{
  function check(a, b) {
    return a === b;
  }

  // Input:
  check(5, "5");

  // Answer:
  // false
}

/////////////////////////////

// Q3. Loose equal number string
{
  function check(a, b) {
    return a == b;
  }

  // Input:
  check(5, "5");

  // Answer:
  // true
}

/////////////////////////////

// Q4. Strict not equal
{
  function check(a, b) {
    return a !== b;
  }

  // Input:
  check(5, "5");

  // Answer:
  // true
}

/////////////////////////////

// Q5. Loose not equal
{
  function check(a, b) {
    return a != b;
  }

  // Input:
  check(5, "5");

  // Answer:
  // false
}

/////////////////////////////

// Q6. Null and undefined loose
{
  function check() {
    return null == undefined;
  }

  // Input:
  check();

  // Answer:
  // true
}

/////////////////////////////

// Q7. Null and undefined strict
{
  function check() {
    return null === undefined;
  }

  // Input:
  check();

  // Answer:
  // false
}

/////////////////////////////

// Q8. Zero and false loose
{
  function check() {
    return 0 == false;
  }

  // Input:
  check();

  // Answer:
  // true
}

/////////////////////////////

// Q9. Zero and false strict
{
  function check() {
    return 0 === false;
  }

  // Input:
  check();

  // Answer:
  // false
}

/////////////////////////////

// Q10. Empty string and false loose
{
  function check() {
    return "" == false;
  }

  // Input:
  check();

  // Answer:
  // true
}

/////////////////////////////

// Q11. Empty string and false strict
{
  function check() {
    return "" === false;
  }

  // Input:
  check();

  // Answer:
  // false
}

/////////////////////////////

// Q12. NaN strict equal
{
  function check() {
    return NaN === NaN;
  }

  // Input:
  check();

  // Answer:
  // false
}

/////////////////////////////

// Q13. Object is NaN
{
  function check() {
    return Object.is(NaN, NaN);
  }

  // Input:
  check();

  // Answer:
  // true
}

/////////////////////////////

// Q14. Object reference different
{
  function check() {
    return {} === {};
  }

  // Input:
  check();

  // Answer:
  // false
}

/////////////////////////////

// Q15. Object reference same
{
  function check() {
    const user = {};
    return user === user;
  }

  // Input:
  check();

  // Answer:
  // true
}

/////////////////////////////

// Q16. Array reference different
{
  function check() {
    return [] === [];
  }

  // Input:
  check();

  // Answer:
  // false
}

/////////////////////////////

// Q17. Same string strict
{
  function check() {
    return "js" === "js";
  }

  // Input:
  check();

  // Answer:
  // true
}

/////////////////////////////

// Q18. Case sensitive equality
{
  function check() {
    return "JS" === "js";
  }

  // Input:
  check();

  // Answer:
  // false
}

/////////////////////////////

// Q19. Boolean strict equal
{
  function check() {
    return true === true;
  }

  // Input:
  check();

  // Answer:
  // true
}

/////////////////////////////

// Q20. Boolean and number loose
{
  function check() {
    return true == 1;
  }

  // Input:
  check();

  // Answer:
  // true
}

/////////////////////////////

// Q21. Boolean and number strict
{
  function check() {
    return true === 1;
  }

  // Input:
  check();

  // Answer:
  // false
}

/////////////////////////////

// Q22. Minus zero strict
{
  function check() {
    return -0 === 0;
  }

  // Input:
  check();

  // Answer:
  // true
}

/////////////////////////////

// Q23. Object is minus zero
{
  function check() {
    return Object.is(-0, 0);
  }

  // Input:
  check();

  // Answer:
  // false
}

/////////////////////////////

// Q24. Array loose equal empty string
{
  function check() {
    return [] == "";
  }

  // Input:
  check();

  // Answer:
  // true
}

/////////////////////////////

// Q25. Array strict equal empty string
{
  function check() {
    return [] === "";
  }

  // Input:
  check();

  // Answer:
  // false
}

/////////////////////////////
