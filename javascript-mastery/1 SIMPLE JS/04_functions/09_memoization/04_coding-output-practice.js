"use strict";

/*
Path: 1 SIMPLE JS\04_functions\09_memoization\04_coding-output-practice.js
Topic: Memoization
Question bank: Memoization focused practice

How to study:
1. Read Q.
2. Hide Answer.
3. Predict output.
4. Then check Answer.
*/

// Q1. memo cache hit
{
  function memoAdd() {
    const cache = {};
    return function (num) {
      if (cache[num]) return cache[num];
      cache[num] = num + 10;
      return cache[num];
    };
  }
  const add = memoAdd();

  // Input:
  add(5);

  // Answer:
  // 15
}

/////////////////////////////

// Q2. memo second call
{
  function memoAdd() {
    const cache = {};
    return function (num) {
      if (cache[num]) return cache[num];
      cache[num] = num + 10;
      return cache[num];
    };
  }
  const add = memoAdd();
  add(5);

  // Input:
  add(5);

  // Answer:
  // 15
}

/////////////////////////////

// Q3. memo cache hit case 3
{
  function memoAdd() {
    const cache = {};
    return function (num) {
      if (cache[num]) return cache[num];
      cache[num] = num + 10;
      return cache[num];
    };
  }
  const add = memoAdd();

  // Input:
  add(5);

  // Answer:
  // 15
}

/////////////////////////////

// Q4. memo second call case 4
{
  function memoAdd() {
    const cache = {};
    return function (num) {
      if (cache[num]) return cache[num];
      cache[num] = num + 10;
      return cache[num];
    };
  }
  const add = memoAdd();
  add(5);

  // Input:
  add(5);

  // Answer:
  // 15
}

/////////////////////////////

// Q5. memo cache hit case 5
{
  function memoAdd() {
    const cache = {};
    return function (num) {
      if (cache[num]) return cache[num];
      cache[num] = num + 10;
      return cache[num];
    };
  }
  const add = memoAdd();

  // Input:
  add(5);

  // Answer:
  // 15
}

/////////////////////////////

// Q6. memo second call case 6
{
  function memoAdd() {
    const cache = {};
    return function (num) {
      if (cache[num]) return cache[num];
      cache[num] = num + 10;
      return cache[num];
    };
  }
  const add = memoAdd();
  add(5);

  // Input:
  add(5);

  // Answer:
  // 15
}

/////////////////////////////

// Q7. memo cache hit case 7
{
  function memoAdd() {
    const cache = {};
    return function (num) {
      if (cache[num]) return cache[num];
      cache[num] = num + 10;
      return cache[num];
    };
  }
  const add = memoAdd();

  // Input:
  add(5);

  // Answer:
  // 15
}

/////////////////////////////

// Q8. memo second call case 8
{
  function memoAdd() {
    const cache = {};
    return function (num) {
      if (cache[num]) return cache[num];
      cache[num] = num + 10;
      return cache[num];
    };
  }
  const add = memoAdd();
  add(5);

  // Input:
  add(5);

  // Answer:
  // 15
}

/////////////////////////////

// Q9. memo cache hit case 9
{
  function memoAdd() {
    const cache = {};
    return function (num) {
      if (cache[num]) return cache[num];
      cache[num] = num + 10;
      return cache[num];
    };
  }
  const add = memoAdd();

  // Input:
  add(5);

  // Answer:
  // 15
}

/////////////////////////////

// Q10. memo second call case 10
{
  function memoAdd() {
    const cache = {};
    return function (num) {
      if (cache[num]) return cache[num];
      cache[num] = num + 10;
      return cache[num];
    };
  }
  const add = memoAdd();
  add(5);

  // Input:
  add(5);

  // Answer:
  // 15
}

/////////////////////////////

// Q11. memo cache hit case 11
{
  function memoAdd() {
    const cache = {};
    return function (num) {
      if (cache[num]) return cache[num];
      cache[num] = num + 10;
      return cache[num];
    };
  }
  const add = memoAdd();

  // Input:
  add(5);

  // Answer:
  // 15
}

/////////////////////////////

// Q12. memo second call case 12
{
  function memoAdd() {
    const cache = {};
    return function (num) {
      if (cache[num]) return cache[num];
      cache[num] = num + 10;
      return cache[num];
    };
  }
  const add = memoAdd();
  add(5);

  // Input:
  add(5);

  // Answer:
  // 15
}

/////////////////////////////

// Q13. memo cache hit case 13
{
  function memoAdd() {
    const cache = {};
    return function (num) {
      if (cache[num]) return cache[num];
      cache[num] = num + 10;
      return cache[num];
    };
  }
  const add = memoAdd();

  // Input:
  add(5);

  // Answer:
  // 15
}

/////////////////////////////

// Q14. memo second call case 14
{
  function memoAdd() {
    const cache = {};
    return function (num) {
      if (cache[num]) return cache[num];
      cache[num] = num + 10;
      return cache[num];
    };
  }
  const add = memoAdd();
  add(5);

  // Input:
  add(5);

  // Answer:
  // 15
}

/////////////////////////////

// Q15. memo cache hit case 15
{
  function memoAdd() {
    const cache = {};
    return function (num) {
      if (cache[num]) return cache[num];
      cache[num] = num + 10;
      return cache[num];
    };
  }
  const add = memoAdd();

  // Input:
  add(5);

  // Answer:
  // 15
}

/////////////////////////////

// Q16. memo second call case 16
{
  function memoAdd() {
    const cache = {};
    return function (num) {
      if (cache[num]) return cache[num];
      cache[num] = num + 10;
      return cache[num];
    };
  }
  const add = memoAdd();
  add(5);

  // Input:
  add(5);

  // Answer:
  // 15
}

/////////////////////////////

// Q17. memo cache hit case 17
{
  function memoAdd() {
    const cache = {};
    return function (num) {
      if (cache[num]) return cache[num];
      cache[num] = num + 10;
      return cache[num];
    };
  }
  const add = memoAdd();

  // Input:
  add(5);

  // Answer:
  // 15
}

/////////////////////////////

// Q18. memo second call case 18
{
  function memoAdd() {
    const cache = {};
    return function (num) {
      if (cache[num]) return cache[num];
      cache[num] = num + 10;
      return cache[num];
    };
  }
  const add = memoAdd();
  add(5);

  // Input:
  add(5);

  // Answer:
  // 15
}

/////////////////////////////

// Q19. memo cache hit case 19
{
  function memoAdd() {
    const cache = {};
    return function (num) {
      if (cache[num]) return cache[num];
      cache[num] = num + 10;
      return cache[num];
    };
  }
  const add = memoAdd();

  // Input:
  add(5);

  // Answer:
  // 15
}

/////////////////////////////

// Q20. memo second call case 20
{
  function memoAdd() {
    const cache = {};
    return function (num) {
      if (cache[num]) return cache[num];
      cache[num] = num + 10;
      return cache[num];
    };
  }
  const add = memoAdd();
  add(5);

  // Input:
  add(5);

  // Answer:
  // 15
}

/////////////////////////////

// Q21. memo cache hit case 21
{
  function memoAdd() {
    const cache = {};
    return function (num) {
      if (cache[num]) return cache[num];
      cache[num] = num + 10;
      return cache[num];
    };
  }
  const add = memoAdd();

  // Input:
  add(5);

  // Answer:
  // 15
}

/////////////////////////////

// Q22. memo second call case 22
{
  function memoAdd() {
    const cache = {};
    return function (num) {
      if (cache[num]) return cache[num];
      cache[num] = num + 10;
      return cache[num];
    };
  }
  const add = memoAdd();
  add(5);

  // Input:
  add(5);

  // Answer:
  // 15
}

/////////////////////////////

// Q23. memo cache hit case 23
{
  function memoAdd() {
    const cache = {};
    return function (num) {
      if (cache[num]) return cache[num];
      cache[num] = num + 10;
      return cache[num];
    };
  }
  const add = memoAdd();

  // Input:
  add(5);

  // Answer:
  // 15
}

/////////////////////////////

// Q24. memo second call case 24
{
  function memoAdd() {
    const cache = {};
    return function (num) {
      if (cache[num]) return cache[num];
      cache[num] = num + 10;
      return cache[num];
    };
  }
  const add = memoAdd();
  add(5);

  // Input:
  add(5);

  // Answer:
  // 15
}

/////////////////////////////

// Q25. memo cache hit case 25
{
  function memoAdd() {
    const cache = {};
    return function (num) {
      if (cache[num]) return cache[num];
      cache[num] = num + 10;
      return cache[num];
    };
  }
  const add = memoAdd();

  // Input:
  add(5);

  // Answer:
  // 15
}

/////////////////////////////
