"use strict";

/*
Path: 1 SIMPLE JS\03_operators\02_assignment\03_coding-output-practice.js
Topic: 02_assignment
Question bank: assignment

How to study:
1. Read Q.
2. Hide Answer.
3. Predict output.
4. Then check Answer.
*/

// Q1. Simple assignment
{
  function getValue() {
    let count = 10;
    return count;
  }

  // Input:
  getValue();

  // Answer:
  // 10
}

/////////////////////////////

// Q2. Add assignment
{
  function update() {
    let count = 5;
    count += 3;
    return count;
  }

  // Input:
  update();

  // Answer:
  // 8
}

/////////////////////////////

// Q3. Subtract assignment
{
  function update() {
    let balance = 100;
    balance -= 30;
    return balance;
  }

  // Input:
  update();

  // Answer:
  // 70
}

/////////////////////////////

// Q4. Multiply assignment
{
  function update() {
    let price = 50;
    price *= 2;
    return price;
  }

  // Input:
  update();

  // Answer:
  // 100
}

/////////////////////////////

// Q5. Divide assignment
{
  function update() {
    let total = 200;
    total /= 4;
    return total;
  }

  // Input:
  update();

  // Answer:
  // 50
}

/////////////////////////////

// Q6. Remainder assignment
{
  function update() {
    let num = 11;
    num %= 3;
    return num;
  }

  // Input:
  update();

  // Answer:
  // 2
}

/////////////////////////////

// Q7. Power assignment
{
  function update() {
    let num = 3;
    num **= 2;
    return num;
  }

  // Input:
  update();

  // Answer:
  // 9
}

/////////////////////////////

// Q8. String add assignment
{
  function greet() {
    let msg = "Hi";
    msg += " JS";
    return msg;
  }

  // Input:
  greet();

  // Answer:
  // "Hi JS"
}

/////////////////////////////

// Q9. Assign object property
{
  function updateUser() {
    const user = {};
    user.name = "Amit";
    return user.name;
  }

  // Input:
  updateUser();

  // Answer:
  // "Amit"
}

/////////////////////////////

// Q10. Assign array item
{
  function updateArray() {
    const nums = [1, 2];
    nums[1] = 9;
    return nums;
  }

  // Input:
  updateArray();

  // Answer:
  // [1, 9]
}

/////////////////////////////

// Q11. Chained assignment
{
  function sameValue() {
    let a;
    let b;
    a = b = 7;
    return a + b;
  }

  // Input:
  sameValue();

  // Answer:
  // 14
}

/////////////////////////////

// Q12. Logical OR assignment fills empty
{
  function setName(name) {
    name ||= "Guest";
    return name;
  }

  // Input:
  setName("");

  // Answer:
  // "Guest"
}

/////////////////////////////

// Q13. Logical OR assignment keeps value
{
  function setName(name) {
    name ||= "Guest";
    return name;
  }

  // Input:
  setName("Rahul");

  // Answer:
  // "Rahul"
}

/////////////////////////////

// Q14. Logical AND assignment changes truthy
{
  function update(active) {
    active &&= "Allowed";
    return active;
  }

  // Input:
  update(true);

  // Answer:
  // "Allowed"
}

/////////////////////////////

// Q15. Logical AND assignment keeps falsy
{
  function update(active) {
    active &&= "Allowed";
    return active;
  }

  // Input:
  update(false);

  // Answer:
  // false
}

/////////////////////////////

// Q16. Nullish assignment fills null
{
  function setCount(count) {
    count ??= 1;
    return count;
  }

  // Input:
  setCount(null);

  // Answer:
  // 1
}

/////////////////////////////

// Q17. Nullish assignment keeps zero
{
  function setCount(count) {
    count ??= 1;
    return count;
  }

  // Input:
  setCount(0);

  // Answer:
  // 0
}

/////////////////////////////

// Q18. Multiple updates
{
  function update() {
    let score = 10;
    score += 5;
    score *= 2;
    return score;
  }

  // Input:
  update();

  // Answer:
  // 30
}

/////////////////////////////

// Q19. Assignment returns value
{
  function test() {
    let x;
    return (x = 20);
  }

  // Input:
  test();

  // Answer:
  // 20
}

/////////////////////////////

// Q20. Array length assignment
{
  function trimArray() {
    const arr = [1, 2, 3];
    arr.length = 2;
    return arr;
  }

  // Input:
  trimArray();

  // Answer:
  // [1, 2]
}

/////////////////////////////

// Q21. Reassign let
{
  function change() {
    let city = "Pune";
    city = "Mumbai";
    return city;
  }

  // Input:
  change();

  // Answer:
  // "Mumbai"
}

/////////////////////////////

// Q22. Const object update
{
  function change() {
    const user = { age: 20 };
    user.age = 21;
    return user.age;
  }

  // Input:
  change();

  // Answer:
  // 21
}

/////////////////////////////

// Q23. Assign default manually
{
  function setRole(role) {
    role = role || "user";
    return role;
  }

  // Input:
  setRole("");

  // Answer:
  // "user"
}

/////////////////////////////

// Q24. Assignment with expression
{
  function total() {
    let result = 5 + 5;
    return result;
  }

  // Input:
  total();

  // Answer:
  // 10
}

/////////////////////////////

// Q25. Update inside loop
{
  function sum() {
    let total = 0;
    total += 1;
    total += 2;
    return total;
  }

  // Input:
  sum();

  // Answer:
  // 3
}

/////////////////////////////
