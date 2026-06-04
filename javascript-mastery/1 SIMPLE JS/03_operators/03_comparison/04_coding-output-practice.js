"use strict";

/*
Path: 1 SIMPLE JS\03_operators\03_comparison\04_coding-output-practice.js
Topic: 03_comparison
Question bank: comparison

How to study:
1. Read Q.
2. Hide Answer.
3. Predict output.
4. Then check Answer.
*/

// Q1. Greater than
{
  function check(a, b) {
    return a > b;
  }

  // Input:
  check(10, 5);

  // Answer:
  // true
}

/////////////////////////////

// Q2. Less than
{
  function check(a, b) {
    return a < b;
  }

  // Input:
  check(3, 8);

  // Answer:
  // true
}

/////////////////////////////

// Q3. Greater or equal true
{
  function check(age) {
    return age >= 18;
  }

  // Input:
  check(18);

  // Answer:
  // true
}

/////////////////////////////

// Q4. Greater or equal false
{
  function check(age) {
    return age >= 18;
  }

  // Input:
  check(16);

  // Answer:
  // false
}

/////////////////////////////

// Q5. Less or equal true
{
  function check(stock) {
    return stock <= 0;
  }

  // Input:
  check(0);

  // Answer:
  // true
}

/////////////////////////////

// Q6. Less or equal false
{
  function check(stock) {
    return stock <= 0;
  }

  // Input:
  check(3);

  // Answer:
  // false
}

/////////////////////////////

// Q7. Compare negative numbers
{
  function check(a, b) {
    return a > b;
  }

  // Input:
  check(-2, -5);

  // Answer:
  // true
}

/////////////////////////////

// Q8. Compare decimals
{
  function check(a, b) {
    return a < b;
  }

  // Input:
  check(2.5, 2.75);

  // Answer:
  // true
}

/////////////////////////////

// Q9. Number string comparison
{
  function check() {
    return "10" > 2;
  }

  // Input:
  check();

  // Answer:
  // true
}

/////////////////////////////

// Q10. Invalid string comparison
{
  function check() {
    return "abc" > 2;
  }

  // Input:
  check();

  // Answer:
  // false
}

/////////////////////////////

// Q11. String alphabet comparison
{
  function check() {
    return "b" > "a";
  }

  // Input:
  check();

  // Answer:
  // true
}

/////////////////////////////

// Q12. Uppercase lowercase comparison
{
  function check() {
    return "A" < "a";
  }

  // Input:
  check();

  // Answer:
  // true
}

/////////////////////////////

// Q13. Compare same numbers
{
  function check(a, b) {
    return a >= b;
  }

  // Input:
  check(5, 5);

  // Answer:
  // true
}

/////////////////////////////

// Q14. Between range
{
  function inRange(num) {
    return num >= 10 && num <= 20;
  }

  // Input:
  inRange(15);

  // Answer:
  // true
}

/////////////////////////////

// Q15. Out of range
{
  function inRange(num) {
    return num >= 10 && num <= 20;
  }

  // Input:
  inRange(25);

  // Answer:
  // false
}

/////////////////////////////

// Q16. Minimum check
{
  function isMinimum(qty) {
    return qty >= 1;
  }

  // Input:
  isMinimum(0);

  // Answer:
  // false
}

/////////////////////////////

// Q17. Password length check
{
  function valid(password) {
    return password.length >= 8;
  }

  // Input:
  valid("secret");

  // Answer:
  // false
}

/////////////////////////////

// Q18. Array length compare
{
  function hasItems(items) {
    return items.length > 0;
  }

  // Input:
  hasItems([1]);

  // Answer:
  // true
}

/////////////////////////////

// Q19. Date timestamp compare
{
  function isFuture(now, time) {
    return time > now;
  }

  // Input:
  isFuture(1000, 2000);

  // Answer:
  // true
}

/////////////////////////////

// Q20. NaN comparison
{
  function check() {
    return NaN > 0;
  }

  // Input:
  check();

  // Answer:
  // false
}

/////////////////////////////

// Q21. Null comparison
{
  function check() {
    return null >= 0;
  }

  // Input:
  check();

  // Answer:
  // true
}

/////////////////////////////

// Q22. Undefined comparison
{
  function check() {
    return undefined > 0;
  }

  // Input:
  check();

  // Answer:
  // false
}

/////////////////////////////

// Q23. Boolean comparison
{
  function check() {
    return true > false;
  }

  // Input:
  check();

  // Answer:
  // true
}

/////////////////////////////

// Q24. Compare total price
{
  function freeShipping(total) {
    return total >= 499;
  }

  // Input:
  freeShipping(500);

  // Answer:
  // true
}

/////////////////////////////

// Q25. Compare marks
{
  function passed(marks) {
    return marks >= 35;
  }

  // Input:
  passed(34);

  // Answer:
  // false
}

/////////////////////////////
