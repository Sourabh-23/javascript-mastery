"use strict";

/*
Path: 2 ADVANCE JS\08_error-handling\01_try-catch\04_coding-output-practice.js
Topic: Try Catch
Question bank: Try Catch focused practice

How to study:
1. Read Q.
2. Hide Answer.
3. Predict output.
4. Then check Answer.
*/

// Q1. try catch catches error
{
  function run() {
    try {
      throw new Error("fail");
    } catch (error) {
      return error.message;
    }
  }

  // Input:
  run();

  // Answer:
  // "fail"
}

/////////////////////////////

// Q2. finally runs
{
  function run() {
    const logs = [];
    try {
      logs.push("try");
    } finally {
      logs.push("finally");
    }
    return logs;
  }

  // Input:
  run();

  // Answer:
  // ["try", "finally"]
}

/////////////////////////////

// Q3. custom error
{
  class AppError extends Error {}
  const error = new AppError("bad");

  // Input:
  error instanceof Error;

  // Answer:
  // true
}

/////////////////////////////

// Q4. try catch catches error case 4
{
  function run() {
    try {
      throw new Error("fail");
    } catch (error) {
      return error.message;
    }
  }

  // Input:
  run();

  // Answer:
  // "fail"
}

/////////////////////////////

// Q5. finally runs case 5
{
  function run() {
    const logs = [];
    try {
      logs.push("try");
    } finally {
      logs.push("finally");
    }
    return logs;
  }

  // Input:
  run();

  // Answer:
  // ["try", "finally"]
}

/////////////////////////////

// Q6. custom error case 6
{
  class AppError extends Error {}
  const error = new AppError("bad");

  // Input:
  error instanceof Error;

  // Answer:
  // true
}

/////////////////////////////

// Q7. try catch catches error case 7
{
  function run() {
    try {
      throw new Error("fail");
    } catch (error) {
      return error.message;
    }
  }

  // Input:
  run();

  // Answer:
  // "fail"
}

/////////////////////////////

// Q8. finally runs case 8
{
  function run() {
    const logs = [];
    try {
      logs.push("try");
    } finally {
      logs.push("finally");
    }
    return logs;
  }

  // Input:
  run();

  // Answer:
  // ["try", "finally"]
}

/////////////////////////////

// Q9. custom error case 9
{
  class AppError extends Error {}
  const error = new AppError("bad");

  // Input:
  error instanceof Error;

  // Answer:
  // true
}

/////////////////////////////

// Q10. try catch catches error case 10
{
  function run() {
    try {
      throw new Error("fail");
    } catch (error) {
      return error.message;
    }
  }

  // Input:
  run();

  // Answer:
  // "fail"
}

/////////////////////////////

// Q11. finally runs case 11
{
  function run() {
    const logs = [];
    try {
      logs.push("try");
    } finally {
      logs.push("finally");
    }
    return logs;
  }

  // Input:
  run();

  // Answer:
  // ["try", "finally"]
}

/////////////////////////////

// Q12. custom error case 12
{
  class AppError extends Error {}
  const error = new AppError("bad");

  // Input:
  error instanceof Error;

  // Answer:
  // true
}

/////////////////////////////

// Q13. try catch catches error case 13
{
  function run() {
    try {
      throw new Error("fail");
    } catch (error) {
      return error.message;
    }
  }

  // Input:
  run();

  // Answer:
  // "fail"
}

/////////////////////////////

// Q14. finally runs case 14
{
  function run() {
    const logs = [];
    try {
      logs.push("try");
    } finally {
      logs.push("finally");
    }
    return logs;
  }

  // Input:
  run();

  // Answer:
  // ["try", "finally"]
}

/////////////////////////////

// Q15. custom error case 15
{
  class AppError extends Error {}
  const error = new AppError("bad");

  // Input:
  error instanceof Error;

  // Answer:
  // true
}

/////////////////////////////

// Q16. try catch catches error case 16
{
  function run() {
    try {
      throw new Error("fail");
    } catch (error) {
      return error.message;
    }
  }

  // Input:
  run();

  // Answer:
  // "fail"
}

/////////////////////////////

// Q17. finally runs case 17
{
  function run() {
    const logs = [];
    try {
      logs.push("try");
    } finally {
      logs.push("finally");
    }
    return logs;
  }

  // Input:
  run();

  // Answer:
  // ["try", "finally"]
}

/////////////////////////////

// Q18. custom error case 18
{
  class AppError extends Error {}
  const error = new AppError("bad");

  // Input:
  error instanceof Error;

  // Answer:
  // true
}

/////////////////////////////

// Q19. try catch catches error case 19
{
  function run() {
    try {
      throw new Error("fail");
    } catch (error) {
      return error.message;
    }
  }

  // Input:
  run();

  // Answer:
  // "fail"
}

/////////////////////////////

// Q20. finally runs case 20
{
  function run() {
    const logs = [];
    try {
      logs.push("try");
    } finally {
      logs.push("finally");
    }
    return logs;
  }

  // Input:
  run();

  // Answer:
  // ["try", "finally"]
}

/////////////////////////////

// Q21. custom error case 21
{
  class AppError extends Error {}
  const error = new AppError("bad");

  // Input:
  error instanceof Error;

  // Answer:
  // true
}

/////////////////////////////

// Q22. try catch catches error case 22
{
  function run() {
    try {
      throw new Error("fail");
    } catch (error) {
      return error.message;
    }
  }

  // Input:
  run();

  // Answer:
  // "fail"
}

/////////////////////////////

// Q23. finally runs case 23
{
  function run() {
    const logs = [];
    try {
      logs.push("try");
    } finally {
      logs.push("finally");
    }
    return logs;
  }

  // Input:
  run();

  // Answer:
  // ["try", "finally"]
}

/////////////////////////////

// Q24. custom error case 24
{
  class AppError extends Error {}
  const error = new AppError("bad");

  // Input:
  error instanceof Error;

  // Answer:
  // true
}

/////////////////////////////

// Q25. try catch catches error case 25
{
  function run() {
    try {
      throw new Error("fail");
    } catch (error) {
      return error.message;
    }
  }

  // Input:
  run();

  // Answer:
  // "fail"
}

/////////////////////////////
