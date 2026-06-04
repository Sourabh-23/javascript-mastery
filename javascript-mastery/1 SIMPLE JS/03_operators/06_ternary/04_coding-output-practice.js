"use strict";

/*
Path: 1 SIMPLE JS\03_operators\06_ternary\04_coding-output-practice.js
Topic: 06_ternary
Question bank: ternary

How to study:
1. Read Q.
2. Hide Answer.
3. Predict output.
4. Then check Answer.
*/

// Q1. Adult label
{
  function label(age) {
    return age >= 18 ? "Adult" : "Minor";
  }

  // Input:
  label(20);

  // Answer:
  // "Adult"
}

/////////////////////////////

// Q2. Even odd
{
  function evenOdd(num) {
    return num % 2 === 0 ? "Even" : "Odd";
  }

  // Input:
  evenOdd(7);

  // Answer:
  // "Odd"
}

/////////////////////////////

// Q3. Login label
{
  function status(isLoggedIn) {
    return isLoggedIn ? "Online" : "Offline";
  }

  // Input:
  status(true);

  // Answer:
  // "Online"
}

/////////////////////////////

// Q4. Discount label
{
  function discountLabel(discount) {
    return discount > 0 ? "Discount applied" : "No discount";
  }

  // Input:
  discountLabel(10);

  // Answer:
  // "Discount applied"
}

/////////////////////////////

// Q5. Pass fail
{
  function result(marks) {
    return marks >= 35 ? "Pass" : "Fail";
  }

  // Input:
  result(30);

  // Answer:
  // "Fail"
}

/////////////////////////////

// Q6. Empty fallback
{
  function getName(name) {
    return name ? name : "Guest";
  }

  // Input:
  getName("");

  // Answer:
  // "Guest"
}

/////////////////////////////

// Q7. Positive negative
{
  function sign(num) {
    return num >= 0 ? "Positive" : "Negative";
  }

  // Input:
  sign(-5);

  // Answer:
  // "Negative"
}

/////////////////////////////

// Q8. Max two numbers
{
  function max(a, b) {
    return a > b ? a : b;
  }

  // Input:
  max(10, 20);

  // Answer:
  // 20
}

/////////////////////////////

// Q9. Min two numbers
{
  function min(a, b) {
    return a < b ? a : b;
  }

  // Input:
  min(10, 20);

  // Answer:
  // 10
}

/////////////////////////////

// Q10. Admin access
{
  function canAccess(role) {
    return role === "admin" ? true : false;
  }

  // Input:
  canAccess("user");

  // Answer:
  // false
}

/////////////////////////////

// Q11. Button text
{
  function buttonText(loading) {
    return loading ? "Saving..." : "Save";
  }

  // Input:
  buttonText(true);

  // Answer:
  // "Saving..."
}

/////////////////////////////

// Q12. Stock label
{
  function stockLabel(qty) {
    return qty > 0 ? "In stock" : "Out of stock";
  }

  // Input:
  stockLabel(0);

  // Answer:
  // "Out of stock"
}

/////////////////////////////

// Q13. Nested grade
{
  function grade(marks) {
    return marks >= 90 ? "A" : marks >= 75 ? "B" : "C";
  }

  // Input:
  grade(80);

  // Answer:
  // "B"
}

/////////////////////////////

// Q14. Theme fallback
{
  function theme(isDark) {
    return isDark ? "dark" : "light";
  }

  // Input:
  theme(false);

  // Answer:
  // "light"
}

/////////////////////////////

// Q15. Fee status
{
  function feeStatus(paid) {
    return paid ? "Paid" : "Pending";
  }

  // Input:
  feeStatus(false);

  // Answer:
  // "Pending"
}

/////////////////////////////

// Q16. Array empty check
{
  function message(items) {
    return items.length === 0 ? "Empty" : "Has items";
  }

  // Input:
  message([]);

  // Answer:
  // "Empty"
}

/////////////////////////////

// Q17. Error message
{
  function errorText(error) {
    return error ? error : "No error";
  }

  // Input:
  errorText("Required");

  // Answer:
  // "Required"
}

/////////////////////////////

// Q18. Number type check
{
  function check(value) {
    return typeof value === "number" ? "Number" : "Other";
  }

  // Input:
  check("10");

  // Answer:
  // "Other"
}

/////////////////////////////

// Q19. Vote message
{
  function vote(age) {
    return age >= 18 ? "Can vote" : "Cannot vote";
  }

  // Input:
  vote(18);

  // Answer:
  // "Can vote"
}

/////////////////////////////

// Q20. Length check
{
  function passwordStatus(password) {
    return password.length >= 8 ? "Strong" : "Weak";
  }

  // Input:
  passwordStatus("abc");

  // Answer:
  // "Weak"
}

/////////////////////////////

// Q21. API status
{
  function apiStatus(code) {
    return code === 200 ? "Success" : "Failed";
  }

  // Input:
  apiStatus(500);

  // Answer:
  // "Failed"
}

/////////////////////////////

// Q22. Toggle label
{
  function toggleLabel(on) {
    return on ? "ON" : "OFF";
  }

  // Input:
  toggleLabel(false);

  // Answer:
  // "OFF"
}

/////////////////////////////

// Q23. Price label
{
  function priceLabel(price) {
    return price === 0 ? "Free" : "Paid";
  }

  // Input:
  priceLabel(0);

  // Answer:
  // "Free"
}

/////////////////////////////

// Q24. User role label
{
  function roleLabel(role) {
    return role === "admin" ? "Admin Panel" : "User Panel";
  }

  // Input:
  roleLabel("admin");

  // Answer:
  // "Admin Panel"
}

/////////////////////////////

// Q25. Valid invalid
{
  function validLabel(valid) {
    return valid ? "Valid" : "Invalid";
  }

  // Input:
  validLabel(true);

  // Answer:
  // "Valid"
}

/////////////////////////////

