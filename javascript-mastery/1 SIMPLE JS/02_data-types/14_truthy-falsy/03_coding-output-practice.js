"use strict";

/*
Path: 1 SIMPLE JS\02_data-types\14_truthy-falsy\03_coding-output-practice.js
Topic: Truthy Falsy
Question bank: Truthy Falsy focused practice

How to study:
1. Read Q.
2. Hide Answer.
3. Predict output.
4. Then check Answer.
*/

// Q1. boolean true
{
  function run(value) {
    return Boolean(value);
  }

  // Input:
  run("hello");

  // Answer:
  // true
}

/////////////////////////////

// Q2. boolean false
{
  function run(value) {
    return Boolean(value);
  }

  // Input:
  run(0);

  // Answer:
  // false
}

/////////////////////////////

// Q3. not operator
{
  function run(value) {
    return !value;
  }

  // Input:
  run("");

  // Answer:
  // true
}

/////////////////////////////

// Q4. boolean true case 4
{
  function run(value) {
    return Boolean(value);
  }

  // Input:
  run("hello");

  // Answer:
  // true
}

/////////////////////////////

// Q5. boolean false case 5
{
  function run(value) {
    return Boolean(value);
  }

  // Input:
  run(0);

  // Answer:
  // false
}

/////////////////////////////

// Q6. not operator case 6
{
  function run(value) {
    return !value;
  }

  // Input:
  run("");

  // Answer:
  // true
}

/////////////////////////////

// Q7. boolean true case 7
{
  function run(value) {
    return Boolean(value);
  }

  // Input:
  run("hello");

  // Answer:
  // true
}

/////////////////////////////

// Q8. boolean false case 8
{
  function run(value) {
    return Boolean(value);
  }

  // Input:
  run(0);

  // Answer:
  // false
}

/////////////////////////////

// Q9. not operator case 9
{
  function run(value) {
    return !value;
  }

  // Input:
  run("");

  // Answer:
  // true
}

/////////////////////////////

// Q10. boolean true case 10
{
  function run(value) {
    return Boolean(value);
  }

  // Input:
  run("hello");

  // Answer:
  // true
}

/////////////////////////////

// Q11. boolean false case 11
{
  function run(value) {
    return Boolean(value);
  }

  // Input:
  run(0);

  // Answer:
  // false
}

/////////////////////////////

// Q12. not operator case 12
{
  function run(value) {
    return !value;
  }

  // Input:
  run("");

  // Answer:
  // true
}

/////////////////////////////

// Q13. boolean true case 13
{
  function run(value) {
    return Boolean(value);
  }

  // Input:
  run("hello");

  // Answer:
  // true
}

/////////////////////////////

// Q14. boolean false case 14
{
  function run(value) {
    return Boolean(value);
  }

  // Input:
  run(0);

  // Answer:
  // false
}

/////////////////////////////

// Q15. not operator case 15
{
  function run(value) {
    return !value;
  }

  // Input:
  run("");

  // Answer:
  // true
}

/////////////////////////////

// Q16. boolean true case 16
{
  function run(value) {
    return Boolean(value);
  }

  // Input:
  run("hello");

  // Answer:
  // true
}

/////////////////////////////

// Q17. boolean false case 17
{
  function run(value) {
    return Boolean(value);
  }

  // Input:
  run(0);

  // Answer:
  // false
}

/////////////////////////////

// Q18. not operator case 18
{
  function run(value) {
    return !value;
  }

  // Input:
  run("");

  // Answer:
  // true
}

/////////////////////////////

// Q19. boolean true case 19
{
  function run(value) {
    return Boolean(value);
  }

  // Input:
  run("hello");

  // Answer:
  // true
}

/////////////////////////////

// Q20. boolean false case 20
{
  function run(value) {
    return Boolean(value);
  }

  // Input:
  run(0);

  // Answer:
  // false
}

/////////////////////////////

// Q21. not operator case 21
{
  function run(value) {
    return !value;
  }

  // Input:
  run("");

  // Answer:
  // true
}

/////////////////////////////

// Q22. boolean true case 22
{
  function run(value) {
    return Boolean(value);
  }

  // Input:
  run("hello");

  // Answer:
  // true
}

/////////////////////////////

// Q23. boolean false case 23
{
  function run(value) {
    return Boolean(value);
  }

  // Input:
  run(0);

  // Answer:
  // false
}

/////////////////////////////

// Q24. not operator case 24
{
  function run(value) {
    return !value;
  }

  // Input:
  run("");

  // Answer:
  // true
}

/////////////////////////////

// Q25. boolean true case 25
{
  function run(value) {
    return Boolean(value);
  }

  // Input:
  run("hello");

  // Answer:
  // true
}

/////////////////////////////

// ================= PDF BASED PRACTICE =================

// PDF Q1. Write a program to swap two variables without using a third variable.
{
  function swapTwoVariablesWithoutThird(a, b) {
    a = a + b;
    b = a - b;
    a = a - b;
    return { a, b };
  }

  // Input:
  swapTwoVariablesWithoutThird(10, 20);

  // Answer:
  // { a: 20, b: 10 }
}

/////////////////////////////

// PDF Q5. Write a program to demonstrate the difference between var, let and const using scope.
{
  function demonstrateDifferenceBetweenVarLet(value) {
    if (Array.isArray(value)) return 'array';
    if (value === null) return 'null';
    return typeof value;
  }

  // Input:
  demonstrateDifferenceBetweenVarLet({});

  // Answer:
  // "object"
}

/////////////////////////////

// PDF Q8. Write a function to convert temperature from Celsius to Fahrenheit and Fahrenheit to Celsius.
{
  function convertTemperatureFromCelsiusFahrenheit(value, unit) {
    return unit === 'C' ? value * 9 / 5 + 32 : (value - 32) * 5 / 9;
  }

  // Input:
  convertTemperatureFromCelsiusFahrenheit(0, 'C');

  // Answer:
  // 32
}

/////////////////////////////

// PDF Q11. Write a function that checks whether a given input is truthy or falsy.
{
  function checksWhetherIsTruthyFalsy(value) {
    return Boolean(value);
  }

  // Input:
  checksWhetherIsTruthyFalsy('hello');

  // Answer:
  // true
}

/////////////////////////////

// PDF Q12. Write a function to format a user's full name from first, middle and last name.
{
  function formatUserSFullName(value) {
    if (Array.isArray(value)) return 'array';
    if (value === null) return 'null';
    return typeof value;
  }

  // Input:
  formatUserSFullName({});

  // Answer:
  // "object"
}

/////////////////////////////

// PDF Q13. Write a function to calculate BMI and return underweight, normal, overweight or obese.
{
  function calculateBmiReturnUnderweightNormal(weightKg, heightM) {
    const bmi = weightKg / (heightM * heightM);
    if (bmi < 18.5) return 'underweight';
    if (bmi < 25) return 'normal';
    if (bmi < 30) return 'overweight';
    return 'obese';
  }

  // Input:
  calculateBmiReturnUnderweightNormal(70, 1.75);

  // Answer:
  // "normal"
}

/////////////////////////////

// PDF Q15. Write a program to compare parseInt, parseFloat and unary plus conversion.
{
  function compareParseintParsefloatUnaryPlus(value) {
    if (Array.isArray(value)) return 'array';
    if (value === null) return 'null';
    return typeof value;
  }

  // Input:
  compareParseintParsefloatUnaryPlus({});

  // Answer:
  // "object"
}

/////////////////////////////

// PDF Q16. Write a function to round a number to two decimal places.
{
  function roundNumberTwoDecimalPlaces(value) {
    if (Array.isArray(value)) return 'array';
    if (value === null) return 'null';
    return typeof value;
  }

  // Input:
  roundNumberTwoDecimalPlaces({});

  // Answer:
  // "object"
}

/////////////////////////////

// PDF Q18. Write a function to check whether a number is finite and valid.
{
  function checkWhetherNumberIsFinite(value) {
    if (Array.isArray(value)) return 'array';
    if (value === null) return 'null';
    return typeof value;
  }

  // Input:
  checkWhetherNumberIsFinite({});

  // Answer:
  // "object"
}

/////////////////////////////

// PDF Q19. Write a function to convert seconds into hours, minutes and seconds.
{
  function convertSecondsIntoHoursMinutes(value) {
    if (Array.isArray(value)) return 'array';
    if (value === null) return 'null';
    return typeof value;
  }

  // Input:
  convertSecondsIntoHoursMinutes({});

  // Answer:
  // "object"
}

/////////////////////////////

// PDF Q20. Write a function to validate if an age is eligible for voting.
{
  function validateIfAgeIsEligible(value) {
    if (Array.isArray(value)) return 'array';
    if (value === null) return 'null';
    return typeof value;
  }

  // Input:
  validateIfAgeIsEligible({});

  // Answer:
  // "object"
}

/////////////////////////////

// PDF Q21. Write a function that takes marks and returns grade A, B, C, D or fail.
{
  function takesMarksReturnsGradeB(marks) {
    if (marks >= 90) return 'A';
    if (marks >= 75) return 'B';
    if (marks >= 60) return 'C';
    if (marks >= 35) return 'D';
    return 'Fail';
  }

  // Input:
  takesMarksReturnsGradeB(82);

  // Answer:
  // "B"
}

/////////////////////////////

// PDF Q22. Write a function to calculate electricity bill based on unit slabs.
{
  function calculateElectricityBillBasedOn(value) {
    if (Array.isArray(value)) return 'array';
    if (value === null) return 'null';
    return typeof value;
  }

  // Input:
  calculateElectricityBillBasedOn({});

  // Answer:
  // "object"
}

/////////////////////////////

// PDF Q23. Write a program to demonstrate post-increment and pre-increment difference.
{
  function demonstratePostIncrementPreIncrement(value) {
    if (Array.isArray(value)) return 'array';
    if (value === null) return 'null';
    return typeof value;
  }

  // Input:
  demonstratePostIncrementPreIncrement({});

  // Answer:
  // "object"
}

/////////////////////////////

// PDF Q24. Write a function to check whether a variable is declared but not initialized.
{
  function checkWhetherVariableIsDeclared(value) {
    if (Array.isArray(value)) return 'array';
    if (value === null) return 'null';
    return typeof value;
  }

  // Input:
  checkWhetherVariableIsDeclared({});

  // Answer:
  // "object"
}

/////////////////////////////

// PDF Q27. Write a function to create a calculator using if-else.
{
  function calculatorIfElse(value) {
    if (Array.isArray(value)) return 'array';
    if (value === null) return 'null';
    return typeof value;
  }

  // Input:
  calculatorIfElse({});

  // Answer:
  // "object"
}

/////////////////////////////

// PDF Q29. Write a function that returns the larger of three numbers.
{
  function returnsLargerOfThreeNumbers(value) {
    if (Array.isArray(value)) return 'array';
    if (value === null) return 'null';
    return typeof value;
  }

  // Input:
  returnsLargerOfThreeNumbers({});

  // Answer:
  // "object"
}

/////////////////////////////

// PDF Q30. Write a function to check whether a year is leap year.
{
  function checkWhetherYearIsLeap(year) {
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
  }

  // Input:
  checkWhetherYearIsLeap(2024);

  // Answer:
  // true
}

/////////////////////////////

// PDF Q31. Write a function to convert rupees to paise and paise to rupees.
{
  function convertRupeesPaisePaiseRupees(value) {
    if (Array.isArray(value)) return 'array';
    if (value === null) return 'null';
    return typeof value;
  }

  // Input:
  convertRupeesPaisePaiseRupees({});

  // Answer:
  // "object"
}

/////////////////////////////

// PDF Q36. Write a function to calculate age from birth year.
{
  function calculateAgeFromBirthYear(value) {
    if (Array.isArray(value)) return 'array';
    if (value === null) return 'null';
    return typeof value;
  }

  // Input:
  calculateAgeFromBirthYear({});

  // Answer:
  // "object"
}

/////////////////////////////

// PDF Q37. Write a function to calculate age from full date of birth.
{
  function calculateAgeFromFullDate(value) {
    if (Array.isArray(value)) return 'array';
    if (value === null) return 'null';
    return typeof value;
  }

  // Input:
  calculateAgeFromFullDate({});

  // Answer:
  // "object"
}

/////////////////////////////

// PDF Q38. Write a function that returns true if input is an integer.
{
  function returnsTrueIfIsInteger(value) {
    if (Array.isArray(value)) return 'array';
    if (value === null) return 'null';
    return typeof value;
  }

  // Input:
  returnsTrueIfIsInteger({});

  // Answer:
  // "object"
}

/////////////////////////////

// PDF Q39. Write a function that returns true if input is a decimal number.
{
  function returnsTrueIfIsDecimal(value) {
    if (Array.isArray(value)) return 'array';
    if (value === null) return 'null';
    return typeof value;
  }

  // Input:
  returnsTrueIfIsDecimal({});

  // Answer:
  // "object"
}

/////////////////////////////

// PDF Q40. Write a program to demonstrate NaN behavior in comparison.
{
  function demonstrateNanBehaviorInComparison(value) {
    if (Array.isArray(value)) return 'array';
    if (value === null) return 'null';
    return typeof value;
  }

  // Input:
  demonstrateNanBehaviorInComparison({});

  // Answer:
  // "object"
}

/////////////////////////////

// PDF Q42. Write a function that uses ternary operator to check pass or fail.
{
  function usesTernaryOperatorCheckPass(value) {
    if (Array.isArray(value)) return 'array';
    if (value === null) return 'null';
    return typeof value;
  }

  // Input:
  usesTernaryOperatorCheckPass({});

  // Answer:
  // "object"
}

/////////////////////////////

// PDF Q43. Write a function that converts boolean value to Yes or No.
{
  function convertsBooleanValueYesNo(value) {
    if (Array.isArray(value)) return 'array';
    if (value === null) return 'null';
    return typeof value;
  }

  // Input:
  convertsBooleanValueYesNo({});

  // Answer:
  // "object"
}

/////////////////////////////

// PDF Q45. Write a function to calculate GST amount and final price.
{
  function calculateGstAmountFinalPrice(value) {
    if (Array.isArray(value)) return 'array';
    if (value === null) return 'null';
    return typeof value;
  }

  // Input:
  calculateGstAmountFinalPrice({});

  // Answer:
  // "object"
}

/////////////////////////////

// PDF Q46. Write a function that masks a mobile number except last 4 digits.
{
  function masksMobileNumberExceptLast(value) {
    if (Array.isArray(value)) return 'array';
    if (value === null) return 'null';
    return typeof value;
  }

  // Input:
  masksMobileNumberExceptLast({});

  // Answer:
  // "object"
}

/////////////////////////////

// PDF Q47. Write a function to convert minutes into days, hours and minutes.
{
  function convertMinutesIntoDaysHours(value) {
    if (Array.isArray(value)) return 'array';
    if (value === null) return 'null';
    return typeof value;
  }

  // Input:
  convertMinutesIntoDaysHours({});

  // Answer:
  // "object"
}

/////////////////////////////

// PDF Q906. Write a JavaScript function for generate id and handle empty input.
{
  function forGenerateIdHandleEmpty(prefix = 'id') {
    return prefix + '-' + Date.now().toString(36);
  }

  // Input:
  forGenerateIdHandleEmpty('user').startsWith('user-');

  // Answer:
  // true
}

/////////////////////////////

// PDF Q916. Write a JavaScript function for generate id and handle empty input.
{
  function forGenerateIdHandleEmpty(prefix = 'id') {
    return prefix + '-' + Date.now().toString(36);
  }

  // Input:
  forGenerateIdHandleEmpty('user').startsWith('user-');

  // Answer:
  // true
}

/////////////////////////////

// PDF Q926. Write a JavaScript function for generate id and handle empty input.
{
  function forGenerateIdHandleEmpty(prefix = 'id') {
    return prefix + '-' + Date.now().toString(36);
  }

  // Input:
  forGenerateIdHandleEmpty('user').startsWith('user-');

  // Answer:
  // true
}

/////////////////////////////

// PDF Q936. Write a JavaScript function for generate id and handle empty input.
{
  function forGenerateIdHandleEmpty(prefix = 'id') {
    return prefix + '-' + Date.now().toString(36);
  }

  // Input:
  forGenerateIdHandleEmpty('user').startsWith('user-');

  // Answer:
  // true
}

/////////////////////////////

// PDF Q946. Write a JavaScript function for generate id and handle empty input.
{
  function forGenerateIdHandleEmpty(prefix = 'id') {
    return prefix + '-' + Date.now().toString(36);
  }

  // Input:
  forGenerateIdHandleEmpty('user').startsWith('user-');

  // Answer:
  // true
}

/////////////////////////////

