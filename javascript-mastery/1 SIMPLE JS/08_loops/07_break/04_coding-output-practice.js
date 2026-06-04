"use strict";

/*
Path: 1 SIMPLE JS\08_loops\07_break\04_coding-output-practice.js
Topic: 07_break
Question bank: break statement

How to study:
1. Read Q.
2. Hide Answer.
3. Predict output.
4. Then check Answer.
*/
// Q1. Break at three
{
  function test() {
    const result = [];
    for (let i = 1; i <= 5; i++) {
      if (i === 3) break;
      result.push(i);
    }
    return result;
  }

  // Input:
  test();

  // Answer:
  // [1, 2]
}

/////////////////////////////
// Q2. First even with break
{
  function firstEven(nums) {
    let found = null;
    for (const num of nums) {
      if (num % 2 === 0) {
        found = num;
        break;
      }
    }
    return found;
  }

  // Input:
  firstEven([1, 5, 8, 10]);

  // Answer:
  // 8
}

/////////////////////////////
// Q3. Sum until negative
{
  function sumUntilNegative(nums) {
    let total = 0;
    for (const num of nums) {
      if (num < 0) break;
      total += num;
    }
    return total;
  }

  // Input:
  sumUntilNegative([2, 3, -1, 10]);

  // Answer:
  // 5
}

/////////////////////////////
// Q4. Break while
{
  function test() {
    let i = 0;
    while (true) {
      i++;
      if (i === 4) break;
    }
    return i;
  }

  // Input:
  test();

  // Answer:
  // 4
}

/////////////////////////////
// Q5. Break nested inner only
{
  function test() {
    let count = 0;
    for (let i = 1; i <= 2; i++) {
      for (let j = 1; j <= 3; j++) {
        if (j === 2) break;
        count++;
      }
    }
    return count;
  }

  // Input:
  test();

  // Answer:
  // 2
}

/////////////////////////////
// Q6. Break on stop value
{
  function takeUntilStop(items) {
    const result = [];
    for (const item of items) {
      if (item === "stop") break;
      result.push(item);
    }
    return result;
  }

  // Input:
  takeUntilStop(["a", "stop", "b"]);

  // Answer:
  // ["a"]
}

/////////////////////////////
// Q7. Break on stop value
{
  function takeUntilStop(items) {
    const result = [];
    for (const item of items) {
      if (item === "stop") break;
      result.push(item);
    }
    return result;
  }

  // Input:
  takeUntilStop(["a", "stop", "b"]);

  // Answer:
  // ["a"]
}

/////////////////////////////
// Q8. Break on stop value
{
  function takeUntilStop(items) {
    const result = [];
    for (const item of items) {
      if (item === "stop") break;
      result.push(item);
    }
    return result;
  }

  // Input:
  takeUntilStop(["a", "stop", "b"]);

  // Answer:
  // ["a"]
}

/////////////////////////////
// Q9. Break on stop value
{
  function takeUntilStop(items) {
    const result = [];
    for (const item of items) {
      if (item === "stop") break;
      result.push(item);
    }
    return result;
  }

  // Input:
  takeUntilStop(["a", "stop", "b"]);

  // Answer:
  // ["a"]
}

/////////////////////////////
// Q10. Break on stop value
{
  function takeUntilStop(items) {
    const result = [];
    for (const item of items) {
      if (item === "stop") break;
      result.push(item);
    }
    return result;
  }

  // Input:
  takeUntilStop(["a", "stop", "b"]);

  // Answer:
  // ["a"]
}

/////////////////////////////
// Q11. Break on stop value
{
  function takeUntilStop(items) {
    const result = [];
    for (const item of items) {
      if (item === "stop") break;
      result.push(item);
    }
    return result;
  }

  // Input:
  takeUntilStop(["a", "stop", "b"]);

  // Answer:
  // ["a"]
}

/////////////////////////////
// Q12. Break on stop value
{
  function takeUntilStop(items) {
    const result = [];
    for (const item of items) {
      if (item === "stop") break;
      result.push(item);
    }
    return result;
  }

  // Input:
  takeUntilStop(["a", "stop", "b"]);

  // Answer:
  // ["a"]
}

/////////////////////////////
// Q13. Break on stop value
{
  function takeUntilStop(items) {
    const result = [];
    for (const item of items) {
      if (item === "stop") break;
      result.push(item);
    }
    return result;
  }

  // Input:
  takeUntilStop(["a", "stop", "b"]);

  // Answer:
  // ["a"]
}

/////////////////////////////
// Q14. Break on stop value
{
  function takeUntilStop(items) {
    const result = [];
    for (const item of items) {
      if (item === "stop") break;
      result.push(item);
    }
    return result;
  }

  // Input:
  takeUntilStop(["a", "stop", "b"]);

  // Answer:
  // ["a"]
}

/////////////////////////////
// Q15. Break on stop value
{
  function takeUntilStop(items) {
    const result = [];
    for (const item of items) {
      if (item === "stop") break;
      result.push(item);
    }
    return result;
  }

  // Input:
  takeUntilStop(["a", "stop", "b"]);

  // Answer:
  // ["a"]
}

/////////////////////////////
// Q16. Break on stop value
{
  function takeUntilStop(items) {
    const result = [];
    for (const item of items) {
      if (item === "stop") break;
      result.push(item);
    }
    return result;
  }

  // Input:
  takeUntilStop(["a", "stop", "b"]);

  // Answer:
  // ["a"]
}

/////////////////////////////
// Q17. Break on stop value
{
  function takeUntilStop(items) {
    const result = [];
    for (const item of items) {
      if (item === "stop") break;
      result.push(item);
    }
    return result;
  }

  // Input:
  takeUntilStop(["a", "stop", "b"]);

  // Answer:
  // ["a"]
}

/////////////////////////////
// Q18. Break on stop value
{
  function takeUntilStop(items) {
    const result = [];
    for (const item of items) {
      if (item === "stop") break;
      result.push(item);
    }
    return result;
  }

  // Input:
  takeUntilStop(["a", "stop", "b"]);

  // Answer:
  // ["a"]
}

/////////////////////////////
// Q19. Break on stop value
{
  function takeUntilStop(items) {
    const result = [];
    for (const item of items) {
      if (item === "stop") break;
      result.push(item);
    }
    return result;
  }

  // Input:
  takeUntilStop(["a", "stop", "b"]);

  // Answer:
  // ["a"]
}

/////////////////////////////
// Q20. Break on stop value
{
  function takeUntilStop(items) {
    const result = [];
    for (const item of items) {
      if (item === "stop") break;
      result.push(item);
    }
    return result;
  }

  // Input:
  takeUntilStop(["a", "stop", "b"]);

  // Answer:
  // ["a"]
}

/////////////////////////////
// Q21. Break on stop value
{
  function takeUntilStop(items) {
    const result = [];
    for (const item of items) {
      if (item === "stop") break;
      result.push(item);
    }
    return result;
  }

  // Input:
  takeUntilStop(["a", "stop", "b"]);

  // Answer:
  // ["a"]
}

/////////////////////////////
// Q22. Break on stop value
{
  function takeUntilStop(items) {
    const result = [];
    for (const item of items) {
      if (item === "stop") break;
      result.push(item);
    }
    return result;
  }

  // Input:
  takeUntilStop(["a", "stop", "b"]);

  // Answer:
  // ["a"]
}

/////////////////////////////
// Q23. Break on stop value
{
  function takeUntilStop(items) {
    const result = [];
    for (const item of items) {
      if (item === "stop") break;
      result.push(item);
    }
    return result;
  }

  // Input:
  takeUntilStop(["a", "stop", "b"]);

  // Answer:
  // ["a"]
}

/////////////////////////////
// Q24. Break on stop value
{
  function takeUntilStop(items) {
    const result = [];
    for (const item of items) {
      if (item === "stop") break;
      result.push(item);
    }
    return result;
  }

  // Input:
  takeUntilStop(["a", "stop", "b"]);

  // Answer:
  // ["a"]
}

/////////////////////////////
// Q25. Break on stop value
{
  function takeUntilStop(items) {
    const result = [];
    for (const item of items) {
      if (item === "stop") break;
      result.push(item);
    }
    return result;
  }

  // Input:
  takeUntilStop(["a", "stop", "b"]);

  // Answer:
  // ["a"]
}

/////////////////////////////
