"use strict";

/*
Path: 1 SIMPLE JS\03_operators\09_ES6-spread\04_ES6-coding-output-practice.js
Topic: 09_ES6-spread
Question bank: ES6-spread

How to study:
1. Read Q.
2. Hide Answer.
3. Predict output.
4. Then check Answer.
*/

// Q1. Copy array
{
  function copy(items) {
    return [...items];
  }

  // Input:
  copy([1, 2]);

  // Answer:
  // [1, 2]
}

/////////////////////////////

// Q2. Add item at end
{
  function add(items, item) {
    return [...items, item];
  }

  // Input:
  add([1, 2], 3);

  // Answer:
  // [1, 2, 3]
}

/////////////////////////////

// Q3. Add item at start
{
  function add(items, item) {
    return [item, ...items];
  }

  // Input:
  add([2, 3], 1);

  // Answer:
  // [1, 2, 3]
}

/////////////////////////////

// Q4. Merge arrays
{
  function merge(a, b) {
    return [...a, ...b];
  }

  // Input:
  merge([1, 2], [3, 4]);

  // Answer:
  // [1, 2, 3, 4]
}

/////////////////////////////

// Q5. Copy object
{
  function copy(user) {
    return { ...user };
  }

  // Input:
  copy({ name: "Amit" });

  // Answer:
  // { name: "Amit" }
}

/////////////////////////////

// Q6. Update object property
{
  function update(user) {
    return { ...user, active: true };
  }

  // Input:
  update({ name: "Amit" });

  // Answer:
  // { name: "Amit", active: true }
}

/////////////////////////////

// Q7. Override object property
{
  function update(user) {
    return { ...user, role: "admin" };
  }

  // Input:
  update({ role: "user" });

  // Answer:
  // { role: "admin" }
}

/////////////////////////////

// Q8. Order matters in object spread
{
  function update(user) {
    return { role: "admin", ...user };
  }

  // Input:
  update({ role: "user" });

  // Answer:
  // { role: "user" }
}

/////////////////////////////

// Q9. Spread string to array
{
  function letters(str) {
    return [...str];
  }

  // Input:
  letters("JS");

  // Answer:
  // ["J", "S"]
}

/////////////////////////////

// Q10. Math max using spread
{
  function max(nums) {
    return Math.max(...nums);
  }

  // Input:
  max([2, 9, 4]);

  // Answer:
  // 9
}

/////////////////////////////

// Q11. Math min using spread
{
  function min(nums) {
    return Math.min(...nums);
  }

  // Input:
  min([2, 9, 4]);

  // Answer:
  // 2
}

/////////////////////////////

// Q12. Clone is shallow
{
  function sameNested() {
    const user = { address: { city: "Pune" } };
    const copy = { ...user };
    return user.address === copy.address;
  }

  // Input:
  sameNested();

  // Answer:
  // true
}

/////////////////////////////

// Q13. Remove mutation risk for top level
{
  function update(items) {
    const copy = [...items];
    copy.push(3);
    return items;
  }

  // Input:
  update([1, 2]);

  // Answer:
  // [1, 2]
}

/////////////////////////////

// Q14. Spread function arguments
{
  function add(a, b, c) {
    return a + b + c;
  }
  function total(nums) {
    return add(...nums);
  }

  // Input:
  total([1, 2, 3]);

  // Answer:
  // 6
}

/////////////////////////////

// Q15. Combine with fixed values
{
  function build(items) {
    return [0, ...items, 99];
  }

  // Input:
  build([1, 2]);

  // Answer:
  // [0, 1, 2, 99]
}

/////////////////////////////

// Q16. Merge object defaults
{
  function create(options) {
    return { theme: "light", ...options };
  }

  // Input:
  create({ theme: "dark" });

  // Answer:
  // { theme: "dark" }
}

/////////////////////////////

// Q17. Merge object fallback
{
  function create(options) {
    return { ...options, theme: "light" };
  }

  // Input:
  create({ theme: "dark" });

  // Answer:
  // { theme: "light" }
}

/////////////////////////////

// Q18. Spread empty array
{
  function copy(items) {
    return [...items];
  }

  // Input:
  copy([]);

  // Answer:
  // []
}

/////////////////////////////

// Q19. Spread empty object
{
  function copy(obj) {
    return { ...obj };
  }

  // Input:
  copy({});

  // Answer:
  // {}
}

/////////////////////////////

// Q20. Append multiple items
{
  function append(items) {
    return [...items, 3, 4];
  }

  // Input:
  append([1, 2]);

  // Answer:
  // [1, 2, 3, 4]
}

/////////////////////////////

// Q21. Prepend multiple items
{
  function prepend(items) {
    return [1, 2, ...items];
  }

  // Input:
  prepend([3, 4]);

  // Answer:
  // [1, 2, 3, 4]
}

/////////////////////////////

// Q22. Spread Set
{
  function unique(items) {
    return [...new Set(items)];
  }

  // Input:
  unique([1, 1, 2]);

  // Answer:
  // [1, 2]
}

/////////////////////////////

// Q23. Copy then sort
{
  function sorted(items) {
    return [...items].sort((a, b) => a - b);
  }

  // Input:
  sorted([3, 1, 2]);

  // Answer:
  // [1, 2, 3]
}

/////////////////////////////

// Q24. Original remains after sort copy
{
  function original(items) {
    const sorted = [...items].sort();
    return items;
  }

  // Input:
  original(["b", "a"]);

  // Answer:
  // ["b", "a"]
}

/////////////////////////////

// Q25. Spread with destructuring
{
  function firstAndRest(items) {
    const [first, ...rest] = items;
    return [first, rest.length];
  }

  // Input:
  firstAndRest([10, 20, 30]);

  // Answer:
  // [10, 2]
}

/////////////////////////////
