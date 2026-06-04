"use strict";

/*
Path: 1 SIMPLE JS\01_variables\06_ES6-tdz\04_ES6-coding-output-practice.js
Topic: Tdz
Question bank: Tdz focused practice

How to study:
1. Read Q.
2. Hide Answer.
3. Predict output.
4. Then check Answer.
*/

// Q1. Hoisted function declaration
{
  function run() {
    return greet();
    function greet() {
      return "hello";
    }
  }

  // Input:
  run();

  // Answer:
  // "hello"
}

/////////////////////////////

// Q2. Block scope result
{
  function run() {
    let value = 1;
    if (true) value = 2;
    return value;
  }

  // Input:
  run();

  // Answer:
  // 2
}

/////////////////////////////

// Q3. Scope lookup
{
  function run() {
    const outer = "global";
    function inner() {
      return outer;
    }
    return inner();
  }

  // Input:
  run();

  // Answer:
  // "global"
}

/////////////////////////////

// Q4. TDZ safe access after declaration
{
  function run() {
    let value = 10;
    return value;
  }

  // Input:
  run();

  // Answer:
  // 10
}

/////////////////////////////

// Q5. Shadowing
{
  function run() {
    const value = "outer";
    {
      const value = "inner";
      return value;
    }
  }

  // Input:
  run();

  // Answer:
  // "inner"
}

/////////////////////////////

// Q6. Hoisted function declaration case 6
{
  function run() {
    return greet();
    function greet() {
      return "hello";
    }
  }

  // Input:
  run();

  // Answer:
  // "hello"
}

/////////////////////////////

// Q7. Block scope result case 7
{
  function run() {
    let value = 1;
    if (true) value = 2;
    return value;
  }

  // Input:
  run();

  // Answer:
  // 2
}

/////////////////////////////

// Q8. Scope lookup case 8
{
  function run() {
    const outer = "global";
    function inner() {
      return outer;
    }
    return inner();
  }

  // Input:
  run();

  // Answer:
  // "global"
}

/////////////////////////////

// Q9. TDZ safe access after declaration case 9
{
  function run() {
    let value = 10;
    return value;
  }

  // Input:
  run();

  // Answer:
  // 10
}

/////////////////////////////

// Q10. Shadowing case 10
{
  function run() {
    const value = "outer";
    {
      const value = "inner";
      return value;
    }
  }

  // Input:
  run();

  // Answer:
  // "inner"
}

/////////////////////////////

// Q11. Hoisted function declaration case 11
{
  function run() {
    return greet();
    function greet() {
      return "hello";
    }
  }

  // Input:
  run();

  // Answer:
  // "hello"
}

/////////////////////////////

// Q12. Block scope result case 12
{
  function run() {
    let value = 1;
    if (true) value = 2;
    return value;
  }

  // Input:
  run();

  // Answer:
  // 2
}

/////////////////////////////

// Q13. Scope lookup case 13
{
  function run() {
    const outer = "global";
    function inner() {
      return outer;
    }
    return inner();
  }

  // Input:
  run();

  // Answer:
  // "global"
}

/////////////////////////////

// Q14. TDZ safe access after declaration case 14
{
  function run() {
    let value = 10;
    return value;
  }

  // Input:
  run();

  // Answer:
  // 10
}

/////////////////////////////

// Q15. Shadowing case 15
{
  function run() {
    const value = "outer";
    {
      const value = "inner";
      return value;
    }
  }

  // Input:
  run();

  // Answer:
  // "inner"
}

/////////////////////////////

// Q16. Hoisted function declaration case 16
{
  function run() {
    return greet();
    function greet() {
      return "hello";
    }
  }

  // Input:
  run();

  // Answer:
  // "hello"
}

/////////////////////////////

// Q17. Block scope result case 17
{
  function run() {
    let value = 1;
    if (true) value = 2;
    return value;
  }

  // Input:
  run();

  // Answer:
  // 2
}

/////////////////////////////

// Q18. Scope lookup case 18
{
  function run() {
    const outer = "global";
    function inner() {
      return outer;
    }
    return inner();
  }

  // Input:
  run();

  // Answer:
  // "global"
}

/////////////////////////////

// Q19. TDZ safe access after declaration case 19
{
  function run() {
    let value = 10;
    return value;
  }

  // Input:
  run();

  // Answer:
  // 10
}

/////////////////////////////

// Q20. Shadowing case 20
{
  function run() {
    const value = "outer";
    {
      const value = "inner";
      return value;
    }
  }

  // Input:
  run();

  // Answer:
  // "inner"
}

/////////////////////////////

// Q21. Hoisted function declaration case 21
{
  function run() {
    return greet();
    function greet() {
      return "hello";
    }
  }

  // Input:
  run();

  // Answer:
  // "hello"
}

/////////////////////////////

// Q22. Block scope result case 22
{
  function run() {
    let value = 1;
    if (true) value = 2;
    return value;
  }

  // Input:
  run();

  // Answer:
  // 2
}

/////////////////////////////

// Q23. Scope lookup case 23
{
  function run() {
    const outer = "global";
    function inner() {
      return outer;
    }
    return inner();
  }

  // Input:
  run();

  // Answer:
  // "global"
}

/////////////////////////////

// Q24. TDZ safe access after declaration case 24
{
  function run() {
    let value = 10;
    return value;
  }

  // Input:
  run();

  // Answer:
  // 10
}

/////////////////////////////

// Q25. Shadowing case 25
{
  function run() {
    const value = "outer";
    {
      const value = "inner";
      return value;
    }
  }

  // Input:
  run();

  // Answer:
  // "inner"
}

/////////////////////////////
