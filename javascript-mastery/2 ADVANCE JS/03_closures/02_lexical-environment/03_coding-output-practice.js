"use strict";

/*
Path: 2 ADVANCE JS\03_closures\02_lexical-environment\03_coding-output-practice.js
Topic: Lexical Environment
Question bank: Lexical Environment focused practice

How to study:
1. Read Q.
2. Hide Answer.
3. Predict output.
4. Then check Answer.
*/

// Q1. closure remembers count
{
  function createCounter() {
    let count = 0;
    return function () {
      count++;
      return count;
    };
  }
  const counter = createCounter();

  // Input:
  counter();

  // Answer:
  // 1
}

/////////////////////////////

// Q2. closure second call
{
  function createCounter() {
    let count = 0;
    return function () {
      count++;
      return count;
    };
  }
  const counter = createCounter();
  counter();

  // Input:
  counter();

  // Answer:
  // 2
}

/////////////////////////////

// Q3. private variable
{
  function createUser() {
    let name = "Amit";
    return {
      getName() {
        return name;
      }
    };
  }

  // Input:
  createUser().getName();

  // Answer:
  // "Amit"
}

/////////////////////////////

// Q4. closure remembers count case 4
{
  function createCounter() {
    let count = 0;
    return function () {
      count++;
      return count;
    };
  }
  const counter = createCounter();

  // Input:
  counter();

  // Answer:
  // 1
}

/////////////////////////////

// Q5. closure second call case 5
{
  function createCounter() {
    let count = 0;
    return function () {
      count++;
      return count;
    };
  }
  const counter = createCounter();
  counter();

  // Input:
  counter();

  // Answer:
  // 2
}

/////////////////////////////

// Q6. private variable case 6
{
  function createUser() {
    let name = "Amit";
    return {
      getName() {
        return name;
      }
    };
  }

  // Input:
  createUser().getName();

  // Answer:
  // "Amit"
}

/////////////////////////////

// Q7. closure remembers count case 7
{
  function createCounter() {
    let count = 0;
    return function () {
      count++;
      return count;
    };
  }
  const counter = createCounter();

  // Input:
  counter();

  // Answer:
  // 1
}

/////////////////////////////

// Q8. closure second call case 8
{
  function createCounter() {
    let count = 0;
    return function () {
      count++;
      return count;
    };
  }
  const counter = createCounter();
  counter();

  // Input:
  counter();

  // Answer:
  // 2
}

/////////////////////////////

// Q9. private variable case 9
{
  function createUser() {
    let name = "Amit";
    return {
      getName() {
        return name;
      }
    };
  }

  // Input:
  createUser().getName();

  // Answer:
  // "Amit"
}

/////////////////////////////

// Q10. closure remembers count case 10
{
  function createCounter() {
    let count = 0;
    return function () {
      count++;
      return count;
    };
  }
  const counter = createCounter();

  // Input:
  counter();

  // Answer:
  // 1
}

/////////////////////////////

// Q11. closure second call case 11
{
  function createCounter() {
    let count = 0;
    return function () {
      count++;
      return count;
    };
  }
  const counter = createCounter();
  counter();

  // Input:
  counter();

  // Answer:
  // 2
}

/////////////////////////////

// Q12. private variable case 12
{
  function createUser() {
    let name = "Amit";
    return {
      getName() {
        return name;
      }
    };
  }

  // Input:
  createUser().getName();

  // Answer:
  // "Amit"
}

/////////////////////////////

// Q13. closure remembers count case 13
{
  function createCounter() {
    let count = 0;
    return function () {
      count++;
      return count;
    };
  }
  const counter = createCounter();

  // Input:
  counter();

  // Answer:
  // 1
}

/////////////////////////////

// Q14. closure second call case 14
{
  function createCounter() {
    let count = 0;
    return function () {
      count++;
      return count;
    };
  }
  const counter = createCounter();
  counter();

  // Input:
  counter();

  // Answer:
  // 2
}

/////////////////////////////

// Q15. private variable case 15
{
  function createUser() {
    let name = "Amit";
    return {
      getName() {
        return name;
      }
    };
  }

  // Input:
  createUser().getName();

  // Answer:
  // "Amit"
}

/////////////////////////////

// Q16. closure remembers count case 16
{
  function createCounter() {
    let count = 0;
    return function () {
      count++;
      return count;
    };
  }
  const counter = createCounter();

  // Input:
  counter();

  // Answer:
  // 1
}

/////////////////////////////

// Q17. closure second call case 17
{
  function createCounter() {
    let count = 0;
    return function () {
      count++;
      return count;
    };
  }
  const counter = createCounter();
  counter();

  // Input:
  counter();

  // Answer:
  // 2
}

/////////////////////////////

// Q18. private variable case 18
{
  function createUser() {
    let name = "Amit";
    return {
      getName() {
        return name;
      }
    };
  }

  // Input:
  createUser().getName();

  // Answer:
  // "Amit"
}

/////////////////////////////

// Q19. closure remembers count case 19
{
  function createCounter() {
    let count = 0;
    return function () {
      count++;
      return count;
    };
  }
  const counter = createCounter();

  // Input:
  counter();

  // Answer:
  // 1
}

/////////////////////////////

// Q20. closure second call case 20
{
  function createCounter() {
    let count = 0;
    return function () {
      count++;
      return count;
    };
  }
  const counter = createCounter();
  counter();

  // Input:
  counter();

  // Answer:
  // 2
}

/////////////////////////////

// Q21. private variable case 21
{
  function createUser() {
    let name = "Amit";
    return {
      getName() {
        return name;
      }
    };
  }

  // Input:
  createUser().getName();

  // Answer:
  // "Amit"
}

/////////////////////////////

// Q22. closure remembers count case 22
{
  function createCounter() {
    let count = 0;
    return function () {
      count++;
      return count;
    };
  }
  const counter = createCounter();

  // Input:
  counter();

  // Answer:
  // 1
}

/////////////////////////////

// Q23. closure second call case 23
{
  function createCounter() {
    let count = 0;
    return function () {
      count++;
      return count;
    };
  }
  const counter = createCounter();
  counter();

  // Input:
  counter();

  // Answer:
  // 2
}

/////////////////////////////

// Q24. private variable case 24
{
  function createUser() {
    let name = "Amit";
    return {
      getName() {
        return name;
      }
    };
  }

  // Input:
  createUser().getName();

  // Answer:
  // "Amit"
}

/////////////////////////////

// Q25. closure remembers count case 25
{
  function createCounter() {
    let count = 0;
    return function () {
      count++;
      return count;
    };
  }
  const counter = createCounter();

  // Input:
  counter();

  // Answer:
  // 1
}

/////////////////////////////
