"use strict";

/*
Path: 1 SIMPLE JS\03_operators\07_nullish-coalescing\03_coding-output-practice.js
Topic: 07_nullish-coalescing
Question bank: nullish-coalescing

How to study:
1. Read Q.
2. Hide Answer.
3. Predict output.
4. Then check Answer.
*/

// Q1. Null fallback
{
  function getValue(value) {
    return value ?? "default";
  }

  // Input:
  getValue(null);

  // Answer:
  // "default"
}

/////////////////////////////

// Q2. Undefined fallback
{
  function getValue(value) {
    return value ?? "default";
  }

  // Input:
  getValue(undefined);

  // Answer:
  // "default"
}

/////////////////////////////

// Q3. Keeps zero
{
  function getCount(count) {
    return count ?? 10;
  }

  // Input:
  getCount(0);

  // Answer:
  // 0
}

/////////////////////////////

// Q4. OR replaces zero
{
  function getCount(count) {
    return count || 10;
  }

  // Input:
  getCount(0);

  // Answer:
  // 10
}

/////////////////////////////

// Q5. Keeps empty string
{
  function getName(name) {
    return name ?? "Guest";
  }

  // Input:
  getName("");

  // Answer:
  // ""
}

/////////////////////////////

// Q6. OR replaces empty string
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

// Q7. Keeps false
{
  function getFlag(flag) {
    return flag ?? true;
  }

  // Input:
  getFlag(false);

  // Answer:
  // false
}

/////////////////////////////

// Q8. OR replaces false
{
  function getFlag(flag) {
    return flag || true;
  }

  // Input:
  getFlag(false);

  // Answer:
  // true
}

/////////////////////////////

// Q9. Default page
{
  function getPage(page) {
    return page ?? 1;
  }

  // Input:
  getPage(null);

  // Answer:
  // 1
}

/////////////////////////////

// Q10. Default limit
{
  function getLimit(limit) {
    return limit ?? 10;
  }

  // Input:
  getLimit(undefined);

  // Answer:
  // 10
}

/////////////////////////////

// Q11. API name fallback
{
  function getUserName(user) {
    return user.name ?? "No name";
  }

  // Input:
  getUserName({ name: null });

  // Answer:
  // "No name"
}

/////////////////////////////

// Q12. API age keeps zero
{
  function getAge(user) {
    return user.age ?? 18;
  }

  // Input:
  getAge({ age: 0 });

  // Answer:
  // 0
}

/////////////////////////////

// Q13. Config theme
{
  function getTheme(config) {
    return config.theme ?? "light";
  }

  // Input:
  getTheme({});

  // Answer:
  // "light"
}

/////////////////////////////

// Q14. Nested optional nullish
{
  function getCity(user) {
    return user.address?.city ?? "NA";
  }

  // Input:
  getCity({});

  // Answer:
  // "NA"
}

/////////////////////////////

// Q15. Cart quantity
{
  function getQty(qty) {
    return qty ?? 1;
  }

  // Input:
  getQty(0);

  // Answer:
  // 0
}

/////////////////////////////

// Q16. Search keyword
{
  function getKeyword(keyword) {
    return keyword ?? "";
  }

  // Input:
  getKeyword(null);

  // Answer:
  // ""
}

/////////////////////////////

// Q17. Selected tab
{
  function getTab(tab) {
    return tab ?? "home";
  }

  // Input:
  getTab(undefined);

  // Answer:
  // "home"
}

/////////////////////////////

// Q18. Message fallback
{
  function getMessage(message) {
    return message ?? "No message";
  }

  // Input:
  getMessage("Hi");

  // Answer:
  // "Hi"
}

/////////////////////////////

// Q19. Score fallback
{
  function getScore(score) {
    return score ?? 0;
  }

  // Input:
  getScore(null);

  // Answer:
  // 0
}

/////////////////////////////

// Q20. Score keeps zero
{
  function getScore(score) {
    return score ?? 100;
  }

  // Input:
  getScore(0);

  // Answer:
  // 0
}

/////////////////////////////

// Q21. Boolean fallback
{
  function getEnabled(enabled) {
    return enabled ?? false;
  }

  // Input:
  getEnabled(undefined);

  // Answer:
  // false
}

/////////////////////////////

// Q22. Boolean keeps false
{
  function getEnabled(enabled) {
    return enabled ?? true;
  }

  // Input:
  getEnabled(false);

  // Answer:
  // false
}

/////////////////////////////

// Q23. Nullish assignment idea
{
  function setDefault(value) {
    value = value ?? "default";
    return value;
  }

  // Input:
  setDefault(null);

  // Answer:
  // "default"
}

/////////////////////////////

// Q24. Compare nullish and ternary
{
  function getValue(value) {
    return value === null || value === undefined ? "default" : value;
  }

  // Input:
  getValue(0);

  // Answer:
  // 0
}

/////////////////////////////

// Q25. Form field fallback
{
  function getField(value) {
    return value ?? "Not provided";
  }

  // Input:
  getField(undefined);

  // Answer:
  // "Not provided"
}

/////////////////////////////

