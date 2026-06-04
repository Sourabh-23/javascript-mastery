# Number Coding Questions

Path: `1 SIMPLE JS/02_data-types/02_number/05_coding-questions.md`

Level: Easy to medium for 1.5 years experience

Goal: Understand how numbers work in real code without making it too difficult.

## Q1. Add Two Numbers

Problem:
Create a function that adds two values.

Important:
Sometimes values may come as strings, like `"10"` and `"20"`.

```js
function addNumbers(a, b) {
  return Number(a) + Number(b);
}
```

Example:

```js
addNumbers("10", "20"); // 30
addNumbers(5, 7);       // 12
```

Explanation:
`Number()` converts string numbers into actual numbers.

/////////////////////////////

## Q2. Check Age

Problem:
Create a function that checks if a user is adult or not.

```js
function isAdult(age) {
  const userAge = Number(age);

  if (userAge >= 18) {
    return true;
  }

  return false;
}
```

Example:

```js
isAdult("20"); // true
isAdult("15"); // false
```

Explanation:
Input can be string, so we convert it into number first.

/////////////////////////////

## Q3. Calculate Total Price

Problem:
Create a function that calculates total price using price and quantity.

```js
function calculateTotal(price, quantity) {
  return Number(price) * Number(quantity);
}
```

Example:

```js
calculateTotal("100", "3"); // 300
calculateTotal(50, 2);      // 100
```

Explanation:
This is useful in cart, orders, and billing.

/////////////////////////////

## Q4. Apply Simple Discount

Problem:
Create a function that applies discount on price.

```js
function applyDiscount(price, discount) {
  const actualPrice = Number(price);
  const discountPercent = Number(discount);

  const discountAmount = (actualPrice * discountPercent) / 100;

  return actualPrice - discountAmount;
}
```

Example:

```js
applyDiscount(1000, 10); // 900
applyDiscount("500", 20); // 400
```

Explanation:
First calculate discount amount, then subtract it from price.

/////////////////////////////

## Q5. Convert Rupees To Paisa

Problem:
Convert rupees into paisa.

```js
function rupeesToPaisa(rupees) {
  return Number(rupees) * 100;
}
```

Example:

```js
rupeesToPaisa(10);      // 1000
rupeesToPaisa("99.5"); // 9950
```

Explanation:
1 rupee = 100 paisa.

/////////////////////////////

## Q6. Find Average Of Two Numbers

Problem:
Create a function that returns average of two numbers.

```js
function findAverage(a, b) {
  return (Number(a) + Number(b)) / 2;
}
```

Example:

```js
findAverage(10, 20);     // 15
findAverage("50", "70"); // 60
```

Explanation:
Average means sum divided by count.

/////////////////////////////

## Q7. Check Even Or Odd

Problem:
Create a function that checks whether a number is even or odd.

```js
function checkEvenOdd(value) {
  const number = Number(value);

  if (number % 2 === 0) {
    return "Even";
  }

  return "Odd";
}
```

Example:

```js
checkEvenOdd(10);   // "Even"
checkEvenOdd("7");  // "Odd"
```

Explanation:
If a number is divisible by 2, it is even.

/////////////////////////////

## Q8. Simple Number Validation

Problem:
Create a function that checks if a value can become a valid number.

```js
function isValidNumber(value) {
  const number = Number(value);

  return !Number.isNaN(number);
}
```

Example:

```js
isValidNumber("100"); // true
isValidNumber("abc"); // false
```

Explanation:
`Number.isNaN()` checks if conversion failed.

/////////////////////////////

## How To Practice

Do this for every question:

1. Read the problem.
2. Hide the solution.
3. Try to write the function.
4. Check with example input.
5. Say the explanation out loud.
