"use strict";

/*
Path: 2 ADVANCE JS\08_error-handling\01_try-catch\03_coding-output-practice.js
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

// ================= PDF BASED PRACTICE =================

// PDF Q7. Write a program to use nullish coalescing to assign a default value only for null or undefined.
{
  function useNullishCoalescingAssignDefault(items) {
    return Array.isArray(items) ? items.length : String(items).length;
  }

  // Input:
  useNullishCoalescingAssignDefault([1, 2, 3]);

  // Answer:
  // 3
}

/////////////////////////////

// PDF Q505. Debug a broken JavaScript snippet related to localStorage and rewrite it correctly.
{
  function localstorageIt(items) {
    return Array.isArray(items) ? items.length : String(items).length;
  }

  // Input:
  localstorageIt([1, 2, 3]);

  // Answer:
  // 3
}

/////////////////////////////

// PDF Q515. Debug a broken JavaScript snippet related to localStorage and rewrite it correctly.
{
  function localstorageIt(items) {
    return Array.isArray(items) ? items.length : String(items).length;
  }

  // Input:
  localstorageIt([1, 2, 3]);

  // Answer:
  // 3
}

/////////////////////////////

// PDF Q525. Debug a broken JavaScript snippet related to localStorage and rewrite it correctly.
{
  function localstorageIt(items) {
    return Array.isArray(items) ? items.length : String(items).length;
  }

  // Input:
  localstorageIt([1, 2, 3]);

  // Answer:
  // 3
}

/////////////////////////////

// PDF Q535. Debug a broken JavaScript snippet related to localStorage and rewrite it correctly.
{
  function localstorageIt(items) {
    return Array.isArray(items) ? items.length : String(items).length;
  }

  // Input:
  localstorageIt([1, 2, 3]);

  // Answer:
  // 3
}

/////////////////////////////

// PDF Q545. Debug a broken JavaScript snippet related to localStorage and rewrite it correctly.
{
  function localstorageIt(items) {
    return Array.isArray(items) ? items.length : String(items).length;
  }

  // Input:
  localstorageIt([1, 2, 3]);

  // Answer:
  // 3
}

/////////////////////////////

// PDF Q555. Debug a broken JavaScript snippet related to default parameter and rewrite it correctly.
{
  function defaultParameterIt(items) {
    return Array.isArray(items) ? items.length : String(items).length;
  }

  // Input:
  defaultParameterIt([1, 2, 3]);

  // Answer:
  // 3
}

/////////////////////////////

// PDF Q560. Debug a broken JavaScript snippet related to modules and rewrite it correctly.
{
  function modulesIt(items) {
    return Array.isArray(items) ? items.length : String(items).length;
  }

  // Input:
  modulesIt([1, 2, 3]);

  // Answer:
  // 3
}

/////////////////////////////

// PDF Q565. Debug a broken JavaScript snippet related to default parameter and rewrite it correctly.
{
  function defaultParameterIt(items) {
    return Array.isArray(items) ? items.length : String(items).length;
  }

  // Input:
  defaultParameterIt([1, 2, 3]);

  // Answer:
  // 3
}

/////////////////////////////

// PDF Q570. Debug a broken JavaScript snippet related to modules and rewrite it correctly.
{
  function modulesIt(items) {
    return Array.isArray(items) ? items.length : String(items).length;
  }

  // Input:
  modulesIt([1, 2, 3]);

  // Answer:
  // 3
}

/////////////////////////////

// PDF Q575. Debug a broken JavaScript snippet related to default parameter and rewrite it correctly.
{
  function defaultParameterIt(items) {
    return Array.isArray(items) ? items.length : String(items).length;
  }

  // Input:
  defaultParameterIt([1, 2, 3]);

  // Answer:
  // 3
}

/////////////////////////////

// PDF Q580. Debug a broken JavaScript snippet related to modules and rewrite it correctly.
{
  function modulesIt(items) {
    return Array.isArray(items) ? items.length : String(items).length;
  }

  // Input:
  modulesIt([1, 2, 3]);

  // Answer:
  // 3
}

/////////////////////////////

// PDF Q585. Debug a broken JavaScript snippet related to default parameter and rewrite it correctly.
{
  function defaultParameterIt(items) {
    return Array.isArray(items) ? items.length : String(items).length;
  }

  // Input:
  defaultParameterIt([1, 2, 3]);

  // Answer:
  // 3
}

/////////////////////////////

// PDF Q590. Debug a broken JavaScript snippet related to modules and rewrite it correctly.
{
  function modulesIt(items) {
    return Array.isArray(items) ? items.length : String(items).length;
  }

  // Input:
  modulesIt([1, 2, 3]);

  // Answer:
  // 3
}

/////////////////////////////

// PDF Q595. Debug a broken JavaScript snippet related to default parameter and rewrite it correctly.
{
  function defaultParameterIt(items) {
    return Array.isArray(items) ? items.length : String(items).length;
  }

  // Input:
  defaultParameterIt([1, 2, 3]);

  // Answer:
  // 3
}

/////////////////////////////

// PDF Q600. Debug a broken JavaScript snippet related to modules and rewrite it correctly.
{
  function modulesIt(items) {
    return Array.isArray(items) ? items.length : String(items).length;
  }

  // Input:
  modulesIt([1, 2, 3]);

  // Answer:
  // 3
}

/////////////////////////////

// PDF Q605. Debug a broken JavaScript snippet related to set operations and rewrite it correctly.
{
  function setOperationsIt(items) {
    return Array.isArray(items) ? items.length : String(items).length;
  }

  // Input:
  setOperationsIt([1, 2, 3]);

  // Answer:
  // 3
}

/////////////////////////////

// PDF Q610. Debug a broken JavaScript snippet related to LRU cache and rewrite it correctly.
{
  function lruCacheIt(items) {
    return Array.isArray(items) ? items.length : String(items).length;
  }

  // Input:
  lruCacheIt([1, 2, 3]);

  // Answer:
  // 3
}

/////////////////////////////

// PDF Q615. Debug a broken JavaScript snippet related to set operations and rewrite it correctly.
{
  function setOperationsIt(items) {
    return Array.isArray(items) ? items.length : String(items).length;
  }

  // Input:
  setOperationsIt([1, 2, 3]);

  // Answer:
  // 3
}

/////////////////////////////

// PDF Q620. Debug a broken JavaScript snippet related to LRU cache and rewrite it correctly.
{
  function lruCacheIt(items) {
    return Array.isArray(items) ? items.length : String(items).length;
  }

  // Input:
  lruCacheIt([1, 2, 3]);

  // Answer:
  // 3
}

/////////////////////////////

// PDF Q625. Debug a broken JavaScript snippet related to set operations and rewrite it correctly.
{
  function setOperationsIt(items) {
    return Array.isArray(items) ? items.length : String(items).length;
  }

  // Input:
  setOperationsIt([1, 2, 3]);

  // Answer:
  // 3
}

/////////////////////////////

// PDF Q630. Debug a broken JavaScript snippet related to LRU cache and rewrite it correctly.
{
  function lruCacheIt(items) {
    return Array.isArray(items) ? items.length : String(items).length;
  }

  // Input:
  lruCacheIt([1, 2, 3]);

  // Answer:
  // 3
}

/////////////////////////////

// PDF Q635. Debug a broken JavaScript snippet related to set operations and rewrite it correctly.
{
  function setOperationsIt(items) {
    return Array.isArray(items) ? items.length : String(items).length;
  }

  // Input:
  setOperationsIt([1, 2, 3]);

  // Answer:
  // 3
}

/////////////////////////////

// PDF Q640. Debug a broken JavaScript snippet related to LRU cache and rewrite it correctly.
{
  function lruCacheIt(items) {
    return Array.isArray(items) ? items.length : String(items).length;
  }

  // Input:
  lruCacheIt([1, 2, 3]);

  // Answer:
  // 3
}

/////////////////////////////

// PDF Q645. Debug a broken JavaScript snippet related to set operations and rewrite it correctly.
{
  function setOperationsIt(items) {
    return Array.isArray(items) ? items.length : String(items).length;
  }

  // Input:
  setOperationsIt([1, 2, 3]);

  // Answer:
  // 3
}

/////////////////////////////

// PDF Q650. Debug a broken JavaScript snippet related to LRU cache and rewrite it correctly.
{
  function lruCacheIt(items) {
    return Array.isArray(items) ? items.length : String(items).length;
  }

  // Input:
  lruCacheIt([1, 2, 3]);

  // Answer:
  // 3
}

/////////////////////////////

// PDF Q810. Debug a broken JavaScript snippet related to type coercion and rewrite it correctly.
{
  function typeCoercionIt(value) {
    if (Array.isArray(value)) return 'array';
    if (value === null) return 'null';
    return typeof value;
  }

  // Input:
  typeCoercionIt([1, 2]);

  // Answer:
  // "array"
}

/////////////////////////////

// PDF Q820. Debug a broken JavaScript snippet related to type coercion and rewrite it correctly.
{
  function typeCoercionIt(value) {
    if (Array.isArray(value)) return 'array';
    if (value === null) return 'null';
    return typeof value;
  }

  // Input:
  typeCoercionIt([1, 2]);

  // Answer:
  // "array"
}

/////////////////////////////

// PDF Q830. Debug a broken JavaScript snippet related to type coercion and rewrite it correctly.
{
  function typeCoercionIt(value) {
    if (Array.isArray(value)) return 'array';
    if (value === null) return 'null';
    return typeof value;
  }

  // Input:
  typeCoercionIt([1, 2]);

  // Answer:
  // "array"
}

/////////////////////////////

// PDF Q840. Debug a broken JavaScript snippet related to type coercion and rewrite it correctly.
{
  function typeCoercionIt(value) {
    if (Array.isArray(value)) return 'array';
    if (value === null) return 'null';
    return typeof value;
  }

  // Input:
  typeCoercionIt([1, 2]);

  // Answer:
  // "array"
}

/////////////////////////////

// PDF Q850. Debug a broken JavaScript snippet related to type coercion and rewrite it correctly.
{
  function typeCoercionIt(value) {
    if (Array.isArray(value)) return 'array';
    if (value === null) return 'null';
    return typeof value;
  }

  // Input:
  typeCoercionIt([1, 2]);

  // Answer:
  // "array"
}

/////////////////////////////

// PDF Q905. Debug a broken JavaScript snippet related to sanitize input and rewrite it correctly.
{
  function sanitizeIt(value) {
    return String(value).trim().replace(/[<>]/g, '');
  }

  // Input:
  sanitizeIt('  <script>  ');

  // Answer:
  // "script"
}

/////////////////////////////

// PDF Q910. Debug a broken JavaScript snippet related to format date and rewrite it correctly.
{
  function formatDateIt(date) {
    const d = new Date(date);
    const day = String(d.getDate()).padStart(2, '0');
    const month = String(d.getMonth() + 1).padStart(2, '0');
    return day + '/' + month + '/' + d.getFullYear();
  }

  // Input:
  formatDateIt('2026-06-04');

  // Answer:
  // "04/06/2026"
}

/////////////////////////////

// PDF Q915. Debug a broken JavaScript snippet related to sanitize input and rewrite it correctly.
{
  function sanitizeIt(value) {
    return String(value).trim().replace(/[<>]/g, '');
  }

  // Input:
  sanitizeIt('  <script>  ');

  // Answer:
  // "script"
}

/////////////////////////////

// PDF Q920. Debug a broken JavaScript snippet related to format date and rewrite it correctly.
{
  function formatDateIt(date) {
    const d = new Date(date);
    const day = String(d.getDate()).padStart(2, '0');
    const month = String(d.getMonth() + 1).padStart(2, '0');
    return day + '/' + month + '/' + d.getFullYear();
  }

  // Input:
  formatDateIt('2026-06-04');

  // Answer:
  // "04/06/2026"
}

/////////////////////////////

// PDF Q925. Debug a broken JavaScript snippet related to sanitize input and rewrite it correctly.
{
  function sanitizeIt(value) {
    return String(value).trim().replace(/[<>]/g, '');
  }

  // Input:
  sanitizeIt('  <script>  ');

  // Answer:
  // "script"
}

/////////////////////////////

// PDF Q930. Debug a broken JavaScript snippet related to format date and rewrite it correctly.
{
  function formatDateIt(date) {
    const d = new Date(date);
    const day = String(d.getDate()).padStart(2, '0');
    const month = String(d.getMonth() + 1).padStart(2, '0');
    return day + '/' + month + '/' + d.getFullYear();
  }

  // Input:
  formatDateIt('2026-06-04');

  // Answer:
  // "04/06/2026"
}

/////////////////////////////

// PDF Q935. Debug a broken JavaScript snippet related to sanitize input and rewrite it correctly.
{
  function sanitizeIt(value) {
    return String(value).trim().replace(/[<>]/g, '');
  }

  // Input:
  sanitizeIt('  <script>  ');

  // Answer:
  // "script"
}

/////////////////////////////

// PDF Q940. Debug a broken JavaScript snippet related to format date and rewrite it correctly.
{
  function formatDateIt(date) {
    const d = new Date(date);
    const day = String(d.getDate()).padStart(2, '0');
    const month = String(d.getMonth() + 1).padStart(2, '0');
    return day + '/' + month + '/' + d.getFullYear();
  }

  // Input:
  formatDateIt('2026-06-04');

  // Answer:
  // "04/06/2026"
}

/////////////////////////////

// PDF Q945. Debug a broken JavaScript snippet related to sanitize input and rewrite it correctly.
{
  function sanitizeIt(value) {
    return String(value).trim().replace(/[<>]/g, '');
  }

  // Input:
  sanitizeIt('  <script>  ');

  // Answer:
  // "script"
}

/////////////////////////////

// PDF Q950. Debug a broken JavaScript snippet related to format date and rewrite it correctly.
{
  function formatDateIt(date) {
    const d = new Date(date);
    const day = String(d.getDate()).padStart(2, '0');
    const month = String(d.getMonth() + 1).padStart(2, '0');
    return day + '/' + month + '/' + d.getFullYear();
  }

  // Input:
  formatDateIt('2026-06-04');

  // Answer:
  // "04/06/2026"
}

/////////////////////////////

// PDF Q952. Solve a coding problem using custom error without using unnecessary built-in shortcuts.
{
  function customErrorWithoutUnnecessaryBuilt(callback) {
    try {
      return callback();
    } catch (error) {
      return error.message;
    }
  }

  // Input:
  customErrorWithoutUnnecessaryBuilt(() => { throw new Error('fail'); });

  // Answer:
  // "fail"
}

/////////////////////////////

// PDF Q953. Write clean code for validate input and explain time complexity in comments.
{
  function forValidateExplainTimeComplexity(payload) {
    if (!payload || typeof payload !== 'object') return false;
    return typeof payload.name === 'string' && typeof payload.email === 'string';
  }

  // Input:
  forValidateExplainTimeComplexity({ name: 'Amit', email: 'a@test.com' });

  // Answer:
  // true
}

/////////////////////////////

// PDF Q956. Write a JavaScript function for log error and handle empty input.
{
  function forLogErrorHandleEmpty(error) {
    return { message: error.message, time: new Date().toISOString() };
  }

  // Input:
  forLogErrorHandleEmpty(new Error('failed')).message;

  // Answer:
  // "failed"
}

/////////////////////////////

// PDF Q957. Solve a coding problem using handle undefined without using unnecessary built-in shortcuts.
{
  function handleUndefinedWithoutUnnecessaryBuilt(value, fallback = 'N/A') {
    return value === undefined ? fallback : value;
  }

  // Input:
  handleUndefinedWithoutUnnecessaryBuilt(undefined, 'Guest');

  // Answer:
  // "Guest"
}

/////////////////////////////

// PDF Q958. Write clean code for guard clause and explain time complexity in comments.
{
  function forGuardClauseExplainTime(user) {
    if (!user) return 'missing user';
    if (!user.active) return 'inactive';
    return 'allowed';
  }

  // Input:
  forGuardClauseExplainTime({ active: true });

  // Answer:
  // "allowed"
}

/////////////////////////////

// PDF Q962. Solve a coding problem using custom error without using unnecessary built-in shortcuts.
{
  function customErrorWithoutUnnecessaryBuilt(callback) {
    try {
      return callback();
    } catch (error) {
      return error.message;
    }
  }

  // Input:
  customErrorWithoutUnnecessaryBuilt(() => { throw new Error('fail'); });

  // Answer:
  // "fail"
}

/////////////////////////////

// PDF Q963. Write clean code for validate input and explain time complexity in comments.
{
  function forValidateExplainTimeComplexity(payload) {
    if (!payload || typeof payload !== 'object') return false;
    return typeof payload.name === 'string' && typeof payload.email === 'string';
  }

  // Input:
  forValidateExplainTimeComplexity({ name: 'Amit', email: 'a@test.com' });

  // Answer:
  // true
}

/////////////////////////////

// PDF Q966. Write a JavaScript function for log error and handle empty input.
{
  function forLogErrorHandleEmpty(error) {
    return { message: error.message, time: new Date().toISOString() };
  }

  // Input:
  forLogErrorHandleEmpty(new Error('failed')).message;

  // Answer:
  // "failed"
}

/////////////////////////////

// PDF Q967. Solve a coding problem using handle undefined without using unnecessary built-in shortcuts.
{
  function handleUndefinedWithoutUnnecessaryBuilt(value, fallback = 'N/A') {
    return value === undefined ? fallback : value;
  }

  // Input:
  handleUndefinedWithoutUnnecessaryBuilt(undefined, 'Guest');

  // Answer:
  // "Guest"
}

/////////////////////////////

// PDF Q968. Write clean code for guard clause and explain time complexity in comments.
{
  function forGuardClauseExplainTime(user) {
    if (!user) return 'missing user';
    if (!user.active) return 'inactive';
    return 'allowed';
  }

  // Input:
  forGuardClauseExplainTime({ active: true });

  // Answer:
  // "allowed"
}

/////////////////////////////

// PDF Q972. Solve a coding problem using custom error without using unnecessary built-in shortcuts.
{
  function customErrorWithoutUnnecessaryBuilt(callback) {
    try {
      return callback();
    } catch (error) {
      return error.message;
    }
  }

  // Input:
  customErrorWithoutUnnecessaryBuilt(() => { throw new Error('fail'); });

  // Answer:
  // "fail"
}

/////////////////////////////

// PDF Q973. Write clean code for validate input and explain time complexity in comments.
{
  function forValidateExplainTimeComplexity(payload) {
    if (!payload || typeof payload !== 'object') return false;
    return typeof payload.name === 'string' && typeof payload.email === 'string';
  }

  // Input:
  forValidateExplainTimeComplexity({ name: 'Amit', email: 'a@test.com' });

  // Answer:
  // true
}

/////////////////////////////

// PDF Q976. Write a JavaScript function for log error and handle empty input.
{
  function forLogErrorHandleEmpty(error) {
    return { message: error.message, time: new Date().toISOString() };
  }

  // Input:
  forLogErrorHandleEmpty(new Error('failed')).message;

  // Answer:
  // "failed"
}

/////////////////////////////

// PDF Q977. Solve a coding problem using handle undefined without using unnecessary built-in shortcuts.
{
  function handleUndefinedWithoutUnnecessaryBuilt(value, fallback = 'N/A') {
    return value === undefined ? fallback : value;
  }

  // Input:
  handleUndefinedWithoutUnnecessaryBuilt(undefined, 'Guest');

  // Answer:
  // "Guest"
}

/////////////////////////////

// PDF Q978. Write clean code for guard clause and explain time complexity in comments.
{
  function forGuardClauseExplainTime(user) {
    if (!user) return 'missing user';
    if (!user.active) return 'inactive';
    return 'allowed';
  }

  // Input:
  forGuardClauseExplainTime({ active: true });

  // Answer:
  // "allowed"
}

/////////////////////////////

// PDF Q982. Solve a coding problem using custom error without using unnecessary built-in shortcuts.
{
  function customErrorWithoutUnnecessaryBuilt(callback) {
    try {
      return callback();
    } catch (error) {
      return error.message;
    }
  }

  // Input:
  customErrorWithoutUnnecessaryBuilt(() => { throw new Error('fail'); });

  // Answer:
  // "fail"
}

/////////////////////////////

// PDF Q983. Write clean code for validate input and explain time complexity in comments.
{
  function forValidateExplainTimeComplexity(payload) {
    if (!payload || typeof payload !== 'object') return false;
    return typeof payload.name === 'string' && typeof payload.email === 'string';
  }

  // Input:
  forValidateExplainTimeComplexity({ name: 'Amit', email: 'a@test.com' });

  // Answer:
  // true
}

/////////////////////////////

// PDF Q986. Write a JavaScript function for log error and handle empty input.
{
  function forLogErrorHandleEmpty(error) {
    return { message: error.message, time: new Date().toISOString() };
  }

  // Input:
  forLogErrorHandleEmpty(new Error('failed')).message;

  // Answer:
  // "failed"
}

/////////////////////////////

// PDF Q987. Solve a coding problem using handle undefined without using unnecessary built-in shortcuts.
{
  function handleUndefinedWithoutUnnecessaryBuilt(value, fallback = 'N/A') {
    return value === undefined ? fallback : value;
  }

  // Input:
  handleUndefinedWithoutUnnecessaryBuilt(undefined, 'Guest');

  // Answer:
  // "Guest"
}

/////////////////////////////

// PDF Q988. Write clean code for guard clause and explain time complexity in comments.
{
  function forGuardClauseExplainTime(user) {
    if (!user) return 'missing user';
    if (!user.active) return 'inactive';
    return 'allowed';
  }

  // Input:
  forGuardClauseExplainTime({ active: true });

  // Answer:
  // "allowed"
}

/////////////////////////////

// PDF Q992. Solve a coding problem using custom error without using unnecessary built-in shortcuts.
{
  function customErrorWithoutUnnecessaryBuilt(callback) {
    try {
      return callback();
    } catch (error) {
      return error.message;
    }
  }

  // Input:
  customErrorWithoutUnnecessaryBuilt(() => { throw new Error('fail'); });

  // Answer:
  // "fail"
}

/////////////////////////////

// PDF Q993. Write clean code for validate input and explain time complexity in comments.
{
  function forValidateExplainTimeComplexity(payload) {
    if (!payload || typeof payload !== 'object') return false;
    return typeof payload.name === 'string' && typeof payload.email === 'string';
  }

  // Input:
  forValidateExplainTimeComplexity({ name: 'Amit', email: 'a@test.com' });

  // Answer:
  // true
}

/////////////////////////////

// PDF Q996. Write a JavaScript function for log error and handle empty input.
{
  function forLogErrorHandleEmpty(error) {
    return { message: error.message, time: new Date().toISOString() };
  }

  // Input:
  forLogErrorHandleEmpty(new Error('failed')).message;

  // Answer:
  // "failed"
}

/////////////////////////////

// PDF Q997. Solve a coding problem using handle undefined without using unnecessary built-in shortcuts.
{
  function handleUndefinedWithoutUnnecessaryBuilt(value, fallback = 'N/A') {
    return value === undefined ? fallback : value;
  }

  // Input:
  handleUndefinedWithoutUnnecessaryBuilt(undefined, 'Guest');

  // Answer:
  // "Guest"
}

/////////////////////////////

// PDF Q998. Write clean code for guard clause and explain time complexity in comments.
{
  function forGuardClauseExplainTime(user) {
    if (!user) return 'missing user';
    if (!user.active) return 'inactive';
    return 'allowed';
  }

  // Input:
  forGuardClauseExplainTime({ active: true });

  // Answer:
  // "allowed"
}

/////////////////////////////

