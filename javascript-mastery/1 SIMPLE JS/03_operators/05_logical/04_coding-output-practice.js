"use strict";

/*
Path: 1 SIMPLE JS\03_operators\05_logical\04_coding-output-practice.js
Topic: 05_logical
Question bank: logical

How to study:
1. Read Q.
2. Hide Answer.
3. Predict output.
4. Then check Answer.
*/

// Q1. AND true true
{
  function check(a, b) {
    return a && b;
  }

  // Input:
  check(true, true);

  // Answer:
  // true
}

/////////////////////////////

// Q2. AND true false
{
  function check(a, b) {
    return a && b;
  }

  // Input:
  check(true, false);

  // Answer:
  // false
}

/////////////////////////////

// Q3. OR false true
{
  function check(a, b) {
    return a || b;
  }

  // Input:
  check(false, true);

  // Answer:
  // true
}

/////////////////////////////

// Q4. OR false false
{
  function check(a, b) {
    return a || b;
  }

  // Input:
  check(false, false);

  // Answer:
  // false
}

/////////////////////////////

// Q5. NOT true
{
  function invert(value) {
    return !value;
  }

  // Input:
  invert(true);

  // Answer:
  // false
}

/////////////////////////////

// Q6. NOT false
{
  function invert(value) {
    return !value;
  }

  // Input:
  invert(false);

  // Answer:
  // true
}

/////////////////////////////

// Q7. Double NOT string
{
  function toBoolean(value) {
    return !!value;
  }

  // Input:
  toBoolean("hello");

  // Answer:
  // true
}

/////////////////////////////

// Q8. Double NOT empty string
{
  function toBoolean(value) {
    return !!value;
  }

  // Input:
  toBoolean("");

  // Answer:
  // false
}

/////////////////////////////

// Q9. Default with OR
{
  function getName(name) {
    return name || "Guest";
  }

  // Input:
  getName("");

  // Answer:
  // "Guest"
}

/////////////////////////////

// Q10. Default with OR keeps value
{
  function getName(name) {
    return name || "Guest";
  }

  // Input:
  getName("Aman");

  // Answer:
  // "Aman"
}

/////////////////////////////

// Q11. AND returns second value
{
  function getToken(isLoggedIn) {
    return isLoggedIn && "token";
  }

  // Input:
  getToken(true);

  // Answer:
  // "token"
}

/////////////////////////////

// Q12. AND stops at false
{
  function getToken(isLoggedIn) {
    return isLoggedIn && "token";
  }

  // Input:
  getToken(false);

  // Answer:
  // false
}

/////////////////////////////

// Q13. OR returns first truthy
{
  function getValue(a, b) {
    return a || b;
  }

  // Input:
  getValue("JS", "React");

  // Answer:
  // "JS"
}

/////////////////////////////

// Q14. OR returns second if first falsy
{
  function getValue(a, b) {
    return a || b;
  }

  // Input:
  getValue(0, 10);

  // Answer:
  // 10
}

/////////////////////////////

// Q15. Access check
{
  function canAccess(user) {
    return user.isLoggedIn && user.isActive;
  }

  // Input:
  canAccess({ isLoggedIn: true, isActive: false });

  // Answer:
  // false
}

/////////////////////////////

// Q16. Role permission
{
  function hasPermission(role) {
    return role === "admin" || role === "editor";
  }

  // Input:
  hasPermission("editor");

  // Answer:
  // true
}

/////////////////////////////

// Q17. Disable button
{
  function shouldDisable(loading, valid) {
    return loading || !valid;
  }

  // Input:
  shouldDisable(false, true);

  // Answer:
  // false
}

/////////////////////////////

// Q18. Show error
{
  function showError(touched, error) {
    return touched && Boolean(error);
  }

  // Input:
  showError(true, "Required");

  // Answer:
  // true
}

/////////////////////////////

// Q19. Truthy number
{
  function check(value) {
    return value && "valid";
  }

  // Input:
  check(5);

  // Answer:
  // "valid"
}

/////////////////////////////

// Q20. Falsy zero
{
  function check(value) {
    return value || "empty";
  }

  // Input:
  check(0);

  // Answer:
  // "empty"
}

/////////////////////////////

// Q21. Falsy null
{
  function check(value) {
    return !value;
  }

  // Input:
  check(null);

  // Answer:
  // true
}

/////////////////////////////

// Q22. Falsy undefined
{
  function check(value) {
    return !value;
  }

  // Input:
  check(undefined);

  // Answer:
  // true
}

/////////////////////////////

// Q23. Combine three flags
{
  function canSubmit(valid, dirty, loading) {
    return valid && dirty && !loading;
  }

  // Input:
  canSubmit(true, true, false);

  // Answer:
  // true
}

/////////////////////////////

// Q24. Guard object access
{
  function getCity(user) {
    return user && user.address && user.address.city;
  }

  // Input:
  getCity({ address: { city: "Delhi" } });

  // Answer:
  // "Delhi"
}

/////////////////////////////

// Q25. Guard missing object
{
  function getCity(user) {
    return user && user.address && user.address.city;
  }

  // Input:
  getCity(null);

  // Answer:
  // null
}

/////////////////////////////

