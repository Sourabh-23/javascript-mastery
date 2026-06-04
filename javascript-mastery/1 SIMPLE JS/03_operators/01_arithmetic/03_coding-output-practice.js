"use strict";

/*
Path: 1 SIMPLE JS\03_operators\01_arithmetic\03_coding-output-practice.js
Topic: 01_arithmetic
Question bank: arithmetic

How to study:
1. Read Q.
2. Hide Answer.
3. Predict output.
4. Then check Answer.
*/

// Q1. Add two prices
{
  function total(a, b) {
    return a + b;
  }

  // Input:
  total(120, 80);

  // Answer:
  // 200
}

/////////////////////////////

// Q2. Subtract discount
{
  function finalPrice(price, discount) {
    return price - discount;
  }

  // Input:
  finalPrice(500, 50);

  // Answer:
  // 450
}

/////////////////////////////

// Q3. Multiply quantity and price
{
  function bill(qty, price) {
    return qty * price;
  }

  // Input:
  bill(3, 99);

  // Answer:
  // 297
}

/////////////////////////////

// Q4. Divide bill
{
  function splitBill(total, people) {
    return total / people;
  }

  // Input:
  splitBill(900, 3);

  // Answer:
  // 300
}

/////////////////////////////

// Q5. Remainder check
{
  function remainder(num) {
    return num % 2;
  }

  // Input:
  remainder(9);

  // Answer:
  // 1
}

/////////////////////////////

// Q6. Power value
{
  function square(num) {
    return num ** 2;
  }

  // Input:
  square(6);

  // Answer:
  // 36
}

/////////////////////////////

// Q7. Operator precedence
{
  function calculate() {
    return 10 + 5 * 2;
  }

  // Input:
  calculate();

  // Answer:
  // 20
}

/////////////////////////////

// Q8. Bracket priority
{
  function calculate() {
    return (10 + 5) * 2;
  }

  // Input:
  calculate();

  // Answer:
  // 30
}

/////////////////////////////

// Q9. Increment after use
{
  function next() {
    let count = 5;
    return count++;
  }

  // Input:
  next();

  // Answer:
  // 5
}

/////////////////////////////

// Q10. Increment before use
{
  function next() {
    let count = 5;
    return ++count;
  }

  // Input:
  next();

  // Answer:
  // 6
}

/////////////////////////////

// Q11. Decrement after use
{
  function previous() {
    let count = 5;
    return count--;
  }

  // Input:
  previous();

  // Answer:
  // 5
}

/////////////////////////////

// Q12. Decrement before use
{
  function previous() {
    let count = 5;
    return --count;
  }

  // Input:
  previous();

  // Answer:
  // 4
}

/////////////////////////////

// Q13. Average marks
{
  function average(a, b, c) {
    return (a + b + c) / 3;
  }

  // Input:
  average(60, 70, 80);

  // Answer:
  // 70
}

/////////////////////////////

// Q14. Percentage amount
{
  function tenPercent(amount) {
    return amount * 10 / 100;
  }

  // Input:
  tenPercent(250);

  // Answer:
  // 25
}

/////////////////////////////

// Q15. Convert minutes to seconds
{
  function toSeconds(minutes) {
    return minutes * 60;
  }

  // Input:
  toSeconds(5);

  // Answer:
  // 300
}

/////////////////////////////

// Q16. Floor division result
{
  function pages(items, perPage) {
    return Math.ceil(items / perPage);
  }

  // Input:
  pages(21, 10);

  // Answer:
  // 3
}

/////////////////////////////

// Q17. Negative calculation
{
  function balance(amount) {
    return amount - 500;
  }

  // Input:
  balance(300);

  // Answer:
  // -200
}

/////////////////////////////

// Q18. String plus number
{
  function joinValue() {
    return "5" + 2;
  }

  // Input:
  joinValue();

  // Answer:
  // "52"
}

/////////////////////////////

// Q19. String minus number
{
  function minusValue() {
    return "5" - 2;
  }

  // Input:
  minusValue();

  // Answer:
  // 3
}

/////////////////////////////

// Q20. Invalid number math
{
  function badMath() {
    return "hello" * 2;
  }

  // Input:
  badMath();

  // Answer:
  // NaN
}

/////////////////////////////

// Q21. Modulo for even
{
  function isEven(num) {
    return num % 2 === 0;
  }

  // Input:
  isEven(12);

  // Answer:
  // true
}

/////////////////////////////

// Q22. Compound arithmetic
{
  function calc(a, b) {
    return a * b + a;
  }

  // Input:
  calc(4, 5);

  // Answer:
  // 24
}

/////////////////////////////

// Q23. Zero division
{
  function divideByZero(num) {
    return num / 0;
  }

  // Input:
  divideByZero(10);

  // Answer:
  // Infinity
}

/////////////////////////////

// Q24. Decimal addition
{
  function addDecimal() {
    return 0.1 + 0.2;
  }

  // Input:
  addDecimal();

  // Answer:
  // 0.30000000000000004
}

/////////////////////////////

// Q25. Round final amount
{
  function roundAmount(amount) {
    return Math.round(amount);
  }

  // Input:
  roundAmount(99.6);

  // Answer:
  // 100
}

/////////////////////////////
