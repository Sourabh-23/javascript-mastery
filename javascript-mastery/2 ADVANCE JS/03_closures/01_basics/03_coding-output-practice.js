"use strict";

/*
Path: 2 ADVANCE JS\03_closures\01_basics\03_coding-output-practice.js
Topic: Basics
Question bank: Basics focused practice

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

// ================= PDF BASED PRACTICE =================

// PDF Q251. Write a JavaScript function for closure counter and handle empty input.
{
  function forClosureCounterHandleEmpty() {
    let count = 0;
    return function () {
      count++;
      return count;
    };
  }
  const counter = forClosureCounterHandleEmpty();

  // Input:
  counter();

  // Answer:
  // 1
}

/////////////////////////////

// PDF Q252. Solve a coding problem using private variable without using unnecessary built-in shortcuts.
{
  function privateVariableIn() {
    let value = 0;
    return {
      increment() { value++; return value; },
      get() { return value; }
    };
  }
  const store = privateVariableIn();

  // Input:
  store.increment();

  // Answer:
  // 1
}

/////////////////////////////

// PDF Q253. Write clean code for currying and explain time complexity in comments.
{
  function curryingIn() {
    let value = 0;
    return {
      increment() { value++; return value; },
      get() { return value; }
    };
  }
  const store = curryingIn();

  // Input:
  store.increment();

  // Answer:
  // 1
}

/////////////////////////////

// PDF Q255. Debug a broken JavaScript snippet related to memoization and rewrite it correctly.
{
  function memoizationIt() {
    let value = 0;
    return {
      increment() { value++; return value; },
      get() { return value; }
    };
  }
  const store = memoizationIt();

  // Input:
  store.increment();

  // Answer:
  // 1
}

/////////////////////////////

// PDF Q256. Write a JavaScript function for once function and handle empty input.
{
  function once() {
    let value = 0;
    return {
      increment() { value++; return value; },
      get() { return value; }
    };
  }
  const store = once();

  // Input:
  store.increment();

  // Answer:
  // 1
}

/////////////////////////////

// PDF Q257. Solve a coding problem using compose without using unnecessary built-in shortcuts.
{
  function composeIn() {
    let value = 0;
    return {
      increment() { value++; return value; },
      get() { return value; }
    };
  }
  const store = composeIn();

  // Input:
  store.increment();

  // Answer:
  // 1
}

/////////////////////////////

// PDF Q258. Write clean code for pipe and explain time complexity in comments.
{
  function pipeIn() {
    let value = 0;
    return {
      increment() { value++; return value; },
      get() { return value; }
    };
  }
  const store = pipeIn();

  // Input:
  store.increment();

  // Answer:
  // 1
}

/////////////////////////////

// PDF Q260. Debug a broken JavaScript snippet related to higher order function and rewrite it correctly.
{
  function higherOrderIt() {
    let value = 0;
    return {
      increment() { value++; return value; },
      get() { return value; }
    };
  }
  const store = higherOrderIt();

  // Input:
  store.increment();

  // Answer:
  // 1
}

/////////////////////////////

// PDF Q261. Write a JavaScript function for closure counter and handle empty input.
{
  function forClosureCounterHandleEmpty() {
    let count = 0;
    return function () {
      count++;
      return count;
    };
  }
  const counter = forClosureCounterHandleEmpty();

  // Input:
  counter();

  // Answer:
  // 1
}

/////////////////////////////

// PDF Q262. Solve a coding problem using private variable without using unnecessary built-in shortcuts.
{
  function privateVariableIn() {
    let value = 0;
    return {
      increment() { value++; return value; },
      get() { return value; }
    };
  }
  const store = privateVariableIn();

  // Input:
  store.increment();

  // Answer:
  // 1
}

/////////////////////////////

// PDF Q263. Write clean code for currying and explain time complexity in comments.
{
  function curryingIn() {
    let value = 0;
    return {
      increment() { value++; return value; },
      get() { return value; }
    };
  }
  const store = curryingIn();

  // Input:
  store.increment();

  // Answer:
  // 1
}

/////////////////////////////

// PDF Q265. Debug a broken JavaScript snippet related to memoization and rewrite it correctly.
{
  function memoizationIt() {
    let value = 0;
    return {
      increment() { value++; return value; },
      get() { return value; }
    };
  }
  const store = memoizationIt();

  // Input:
  store.increment();

  // Answer:
  // 1
}

/////////////////////////////

// PDF Q266. Write a JavaScript function for once function and handle empty input.
{
  function once() {
    let value = 0;
    return {
      increment() { value++; return value; },
      get() { return value; }
    };
  }
  const store = once();

  // Input:
  store.increment();

  // Answer:
  // 1
}

/////////////////////////////

// PDF Q267. Solve a coding problem using compose without using unnecessary built-in shortcuts.
{
  function composeIn() {
    let value = 0;
    return {
      increment() { value++; return value; },
      get() { return value; }
    };
  }
  const store = composeIn();

  // Input:
  store.increment();

  // Answer:
  // 1
}

/////////////////////////////

// PDF Q268. Write clean code for pipe and explain time complexity in comments.
{
  function pipeIn() {
    let value = 0;
    return {
      increment() { value++; return value; },
      get() { return value; }
    };
  }
  const store = pipeIn();

  // Input:
  store.increment();

  // Answer:
  // 1
}

/////////////////////////////

// PDF Q270. Debug a broken JavaScript snippet related to higher order function and rewrite it correctly.
{
  function higherOrderIt() {
    let value = 0;
    return {
      increment() { value++; return value; },
      get() { return value; }
    };
  }
  const store = higherOrderIt();

  // Input:
  store.increment();

  // Answer:
  // 1
}

/////////////////////////////

// PDF Q271. Write a JavaScript function for closure counter and handle empty input.
{
  function forClosureCounterHandleEmpty() {
    let count = 0;
    return function () {
      count++;
      return count;
    };
  }
  const counter = forClosureCounterHandleEmpty();

  // Input:
  counter();

  // Answer:
  // 1
}

/////////////////////////////

// PDF Q272. Solve a coding problem using private variable without using unnecessary built-in shortcuts.
{
  function privateVariableIn() {
    let value = 0;
    return {
      increment() { value++; return value; },
      get() { return value; }
    };
  }
  const store = privateVariableIn();

  // Input:
  store.increment();

  // Answer:
  // 1
}

/////////////////////////////

// PDF Q273. Write clean code for currying and explain time complexity in comments.
{
  function curryingIn() {
    let value = 0;
    return {
      increment() { value++; return value; },
      get() { return value; }
    };
  }
  const store = curryingIn();

  // Input:
  store.increment();

  // Answer:
  // 1
}

/////////////////////////////

// PDF Q275. Debug a broken JavaScript snippet related to memoization and rewrite it correctly.
{
  function memoizationIt() {
    let value = 0;
    return {
      increment() { value++; return value; },
      get() { return value; }
    };
  }
  const store = memoizationIt();

  // Input:
  store.increment();

  // Answer:
  // 1
}

/////////////////////////////

// PDF Q276. Write a JavaScript function for once function and handle empty input.
{
  function once() {
    let value = 0;
    return {
      increment() { value++; return value; },
      get() { return value; }
    };
  }
  const store = once();

  // Input:
  store.increment();

  // Answer:
  // 1
}

/////////////////////////////

// PDF Q277. Solve a coding problem using compose without using unnecessary built-in shortcuts.
{
  function composeIn() {
    let value = 0;
    return {
      increment() { value++; return value; },
      get() { return value; }
    };
  }
  const store = composeIn();

  // Input:
  store.increment();

  // Answer:
  // 1
}

/////////////////////////////

// PDF Q278. Write clean code for pipe and explain time complexity in comments.
{
  function pipeIn() {
    let value = 0;
    return {
      increment() { value++; return value; },
      get() { return value; }
    };
  }
  const store = pipeIn();

  // Input:
  store.increment();

  // Answer:
  // 1
}

/////////////////////////////

// PDF Q280. Debug a broken JavaScript snippet related to higher order function and rewrite it correctly.
{
  function higherOrderIt() {
    let value = 0;
    return {
      increment() { value++; return value; },
      get() { return value; }
    };
  }
  const store = higherOrderIt();

  // Input:
  store.increment();

  // Answer:
  // 1
}

/////////////////////////////

// PDF Q281. Write a JavaScript function for closure counter and handle empty input.
{
  function forClosureCounterHandleEmpty() {
    let count = 0;
    return function () {
      count++;
      return count;
    };
  }
  const counter = forClosureCounterHandleEmpty();

  // Input:
  counter();

  // Answer:
  // 1
}

/////////////////////////////

// PDF Q282. Solve a coding problem using private variable without using unnecessary built-in shortcuts.
{
  function privateVariableIn() {
    let value = 0;
    return {
      increment() { value++; return value; },
      get() { return value; }
    };
  }
  const store = privateVariableIn();

  // Input:
  store.increment();

  // Answer:
  // 1
}

/////////////////////////////

// PDF Q283. Write clean code for currying and explain time complexity in comments.
{
  function curryingIn() {
    let value = 0;
    return {
      increment() { value++; return value; },
      get() { return value; }
    };
  }
  const store = curryingIn();

  // Input:
  store.increment();

  // Answer:
  // 1
}

/////////////////////////////

// PDF Q285. Debug a broken JavaScript snippet related to memoization and rewrite it correctly.
{
  function memoizationIt() {
    let value = 0;
    return {
      increment() { value++; return value; },
      get() { return value; }
    };
  }
  const store = memoizationIt();

  // Input:
  store.increment();

  // Answer:
  // 1
}

/////////////////////////////

// PDF Q286. Write a JavaScript function for once function and handle empty input.
{
  function once() {
    let value = 0;
    return {
      increment() { value++; return value; },
      get() { return value; }
    };
  }
  const store = once();

  // Input:
  store.increment();

  // Answer:
  // 1
}

/////////////////////////////

// PDF Q287. Solve a coding problem using compose without using unnecessary built-in shortcuts.
{
  function composeIn() {
    let value = 0;
    return {
      increment() { value++; return value; },
      get() { return value; }
    };
  }
  const store = composeIn();

  // Input:
  store.increment();

  // Answer:
  // 1
}

/////////////////////////////

// PDF Q288. Write clean code for pipe and explain time complexity in comments.
{
  function pipeIn() {
    let value = 0;
    return {
      increment() { value++; return value; },
      get() { return value; }
    };
  }
  const store = pipeIn();

  // Input:
  store.increment();

  // Answer:
  // 1
}

/////////////////////////////

// PDF Q290. Debug a broken JavaScript snippet related to higher order function and rewrite it correctly.
{
  function higherOrderIt() {
    let value = 0;
    return {
      increment() { value++; return value; },
      get() { return value; }
    };
  }
  const store = higherOrderIt();

  // Input:
  store.increment();

  // Answer:
  // 1
}

/////////////////////////////

// PDF Q291. Write a JavaScript function for closure counter and handle empty input.
{
  function forClosureCounterHandleEmpty() {
    let count = 0;
    return function () {
      count++;
      return count;
    };
  }
  const counter = forClosureCounterHandleEmpty();

  // Input:
  counter();

  // Answer:
  // 1
}

/////////////////////////////

// PDF Q292. Solve a coding problem using private variable without using unnecessary built-in shortcuts.
{
  function privateVariableIn() {
    let value = 0;
    return {
      increment() { value++; return value; },
      get() { return value; }
    };
  }
  const store = privateVariableIn();

  // Input:
  store.increment();

  // Answer:
  // 1
}

/////////////////////////////

// PDF Q293. Write clean code for currying and explain time complexity in comments.
{
  function curryingIn() {
    let value = 0;
    return {
      increment() { value++; return value; },
      get() { return value; }
    };
  }
  const store = curryingIn();

  // Input:
  store.increment();

  // Answer:
  // 1
}

/////////////////////////////

// PDF Q295. Debug a broken JavaScript snippet related to memoization and rewrite it correctly.
{
  function memoizationIt() {
    let value = 0;
    return {
      increment() { value++; return value; },
      get() { return value; }
    };
  }
  const store = memoizationIt();

  // Input:
  store.increment();

  // Answer:
  // 1
}

/////////////////////////////

// PDF Q296. Write a JavaScript function for once function and handle empty input.
{
  function once() {
    let value = 0;
    return {
      increment() { value++; return value; },
      get() { return value; }
    };
  }
  const store = once();

  // Input:
  store.increment();

  // Answer:
  // 1
}

/////////////////////////////

// PDF Q297. Solve a coding problem using compose without using unnecessary built-in shortcuts.
{
  function composeIn() {
    let value = 0;
    return {
      increment() { value++; return value; },
      get() { return value; }
    };
  }
  const store = composeIn();

  // Input:
  store.increment();

  // Answer:
  // 1
}

/////////////////////////////

// PDF Q298. Write clean code for pipe and explain time complexity in comments.
{
  function pipeIn() {
    let value = 0;
    return {
      increment() { value++; return value; },
      get() { return value; }
    };
  }
  const store = pipeIn();

  // Input:
  store.increment();

  // Answer:
  // 1
}

/////////////////////////////

// PDF Q300. Debug a broken JavaScript snippet related to higher order function and rewrite it correctly.
{
  function higherOrderIt() {
    let value = 0;
    return {
      increment() { value++; return value; },
      get() { return value; }
    };
  }
  const store = higherOrderIt();

  // Input:
  store.increment();

  // Answer:
  // 1
}

/////////////////////////////

// PDF Q803. Write clean code for fix closure loop bug and explain time complexity in comments.
{
  function forFixClosureLoopBug() {
    let count = 0;
    return function () {
      count++;
      return count;
    };
  }
  const counter = forFixClosureLoopBug();

  // Input:
  counter();

  // Answer:
  // 1
}

/////////////////////////////

// PDF Q813. Write clean code for fix closure loop bug and explain time complexity in comments.
{
  function forFixClosureLoopBug() {
    let count = 0;
    return function () {
      count++;
      return count;
    };
  }
  const counter = forFixClosureLoopBug();

  // Input:
  counter();

  // Answer:
  // 1
}

/////////////////////////////

// PDF Q823. Write clean code for fix closure loop bug and explain time complexity in comments.
{
  function forFixClosureLoopBug() {
    let count = 0;
    return function () {
      count++;
      return count;
    };
  }
  const counter = forFixClosureLoopBug();

  // Input:
  counter();

  // Answer:
  // 1
}

/////////////////////////////

// PDF Q833. Write clean code for fix closure loop bug and explain time complexity in comments.
{
  function forFixClosureLoopBug() {
    let count = 0;
    return function () {
      count++;
      return count;
    };
  }
  const counter = forFixClosureLoopBug();

  // Input:
  counter();

  // Answer:
  // 1
}

/////////////////////////////

// PDF Q843. Write clean code for fix closure loop bug and explain time complexity in comments.
{
  function forFixClosureLoopBug() {
    let count = 0;
    return function () {
      count++;
      return count;
    };
  }
  const counter = forFixClosureLoopBug();

  // Input:
  counter();

  // Answer:
  // 1
}

/////////////////////////////

