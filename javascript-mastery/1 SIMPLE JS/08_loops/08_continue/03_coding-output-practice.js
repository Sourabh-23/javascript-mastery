"use strict";

/*
Path: 1 SIMPLE JS\08_loops\08_continue\03_coding-output-practice.js
Topic: 08_continue
Question bank: continue statement

How to study:
1. Read Q.
2. Hide Answer.
3. Predict output.
4. Then check Answer.
*/
// Q1. Skip number three
{
  function test() {
    const result = [];
    for (let i = 1; i <= 5; i++) {
      if (i === 3) continue;
      result.push(i);
    }
    return result;
  }

  // Input:
  test();

  // Answer:
  // [1, 2, 4, 5]
}

/////////////////////////////
// Q2. Skip negatives
{
  function positives(nums) {
    const result = [];
    for (const num of nums) {
      if (num < 0) continue;
      result.push(num);
    }
    return result;
  }

  // Input:
  positives([1, -2, 3]);

  // Answer:
  // [1, 3]
}

/////////////////////////////
// Q3. Sum positive only
{
  function sumPositive(nums) {
    let total = 0;
    for (const num of nums) {
      if (num < 0) continue;
      total += num;
    }
    return total;
  }

  // Input:
  sumPositive([1, -2, 3]);

  // Answer:
  // 4
}

/////////////////////////////
// Q4. Skip spaces
{
  function removeSpaces(str) {
    let result = "";
    for (const char of str) {
      if (char === " ") continue;
      result += char;
    }
    return result;
  }

  // Input:
  removeSpaces("a b c");

  // Answer:
  // "abc"
}

/////////////////////////////
// Q5. Continue in while
{
  function skipTwo() {
    const result = [];
    let i = 0;
    while (i < 4) {
      i++;
      if (i === 2) continue;
      result.push(i);
    }
    return result;
  }

  // Input:
  skipTwo();

  // Answer:
  // [1, 3, 4]
}

/////////////////////////////
// Q6. Continue skip zero
{
  function withoutZero(nums) {
    const result = [];
    for (const num of nums) {
      if (num === 0) continue;
      result.push(num);
    }
    return result;
  }

  // Input:
  withoutZero([1, 0, 2]);

  // Answer:
  // [1, 2]
}

/////////////////////////////
// Q7. Continue skip zero
{
  function withoutZero(nums) {
    const result = [];
    for (const num of nums) {
      if (num === 0) continue;
      result.push(num);
    }
    return result;
  }

  // Input:
  withoutZero([1, 0, 2]);

  // Answer:
  // [1, 2]
}

/////////////////////////////
// Q8. Continue skip zero
{
  function withoutZero(nums) {
    const result = [];
    for (const num of nums) {
      if (num === 0) continue;
      result.push(num);
    }
    return result;
  }

  // Input:
  withoutZero([1, 0, 2]);

  // Answer:
  // [1, 2]
}

/////////////////////////////
// Q9. Continue skip zero
{
  function withoutZero(nums) {
    const result = [];
    for (const num of nums) {
      if (num === 0) continue;
      result.push(num);
    }
    return result;
  }

  // Input:
  withoutZero([1, 0, 2]);

  // Answer:
  // [1, 2]
}

/////////////////////////////
// Q10. Continue skip zero
{
  function withoutZero(nums) {
    const result = [];
    for (const num of nums) {
      if (num === 0) continue;
      result.push(num);
    }
    return result;
  }

  // Input:
  withoutZero([1, 0, 2]);

  // Answer:
  // [1, 2]
}

/////////////////////////////
// Q11. Continue skip zero
{
  function withoutZero(nums) {
    const result = [];
    for (const num of nums) {
      if (num === 0) continue;
      result.push(num);
    }
    return result;
  }

  // Input:
  withoutZero([1, 0, 2]);

  // Answer:
  // [1, 2]
}

/////////////////////////////
// Q12. Continue skip zero
{
  function withoutZero(nums) {
    const result = [];
    for (const num of nums) {
      if (num === 0) continue;
      result.push(num);
    }
    return result;
  }

  // Input:
  withoutZero([1, 0, 2]);

  // Answer:
  // [1, 2]
}

/////////////////////////////
// Q13. Continue skip zero
{
  function withoutZero(nums) {
    const result = [];
    for (const num of nums) {
      if (num === 0) continue;
      result.push(num);
    }
    return result;
  }

  // Input:
  withoutZero([1, 0, 2]);

  // Answer:
  // [1, 2]
}

/////////////////////////////
// Q14. Continue skip zero
{
  function withoutZero(nums) {
    const result = [];
    for (const num of nums) {
      if (num === 0) continue;
      result.push(num);
    }
    return result;
  }

  // Input:
  withoutZero([1, 0, 2]);

  // Answer:
  // [1, 2]
}

/////////////////////////////
// Q15. Continue skip zero
{
  function withoutZero(nums) {
    const result = [];
    for (const num of nums) {
      if (num === 0) continue;
      result.push(num);
    }
    return result;
  }

  // Input:
  withoutZero([1, 0, 2]);

  // Answer:
  // [1, 2]
}

/////////////////////////////
// Q16. Continue skip zero
{
  function withoutZero(nums) {
    const result = [];
    for (const num of nums) {
      if (num === 0) continue;
      result.push(num);
    }
    return result;
  }

  // Input:
  withoutZero([1, 0, 2]);

  // Answer:
  // [1, 2]
}

/////////////////////////////
// Q17. Continue skip zero
{
  function withoutZero(nums) {
    const result = [];
    for (const num of nums) {
      if (num === 0) continue;
      result.push(num);
    }
    return result;
  }

  // Input:
  withoutZero([1, 0, 2]);

  // Answer:
  // [1, 2]
}

/////////////////////////////
// Q18. Continue skip zero
{
  function withoutZero(nums) {
    const result = [];
    for (const num of nums) {
      if (num === 0) continue;
      result.push(num);
    }
    return result;
  }

  // Input:
  withoutZero([1, 0, 2]);

  // Answer:
  // [1, 2]
}

/////////////////////////////
// Q19. Continue skip zero
{
  function withoutZero(nums) {
    const result = [];
    for (const num of nums) {
      if (num === 0) continue;
      result.push(num);
    }
    return result;
  }

  // Input:
  withoutZero([1, 0, 2]);

  // Answer:
  // [1, 2]
}

/////////////////////////////
// Q20. Continue skip zero
{
  function withoutZero(nums) {
    const result = [];
    for (const num of nums) {
      if (num === 0) continue;
      result.push(num);
    }
    return result;
  }

  // Input:
  withoutZero([1, 0, 2]);

  // Answer:
  // [1, 2]
}

/////////////////////////////
// Q21. Continue skip zero
{
  function withoutZero(nums) {
    const result = [];
    for (const num of nums) {
      if (num === 0) continue;
      result.push(num);
    }
    return result;
  }

  // Input:
  withoutZero([1, 0, 2]);

  // Answer:
  // [1, 2]
}

/////////////////////////////
// Q22. Continue skip zero
{
  function withoutZero(nums) {
    const result = [];
    for (const num of nums) {
      if (num === 0) continue;
      result.push(num);
    }
    return result;
  }

  // Input:
  withoutZero([1, 0, 2]);

  // Answer:
  // [1, 2]
}

/////////////////////////////
// Q23. Continue skip zero
{
  function withoutZero(nums) {
    const result = [];
    for (const num of nums) {
      if (num === 0) continue;
      result.push(num);
    }
    return result;
  }

  // Input:
  withoutZero([1, 0, 2]);

  // Answer:
  // [1, 2]
}

/////////////////////////////
// Q24. Continue skip zero
{
  function withoutZero(nums) {
    const result = [];
    for (const num of nums) {
      if (num === 0) continue;
      result.push(num);
    }
    return result;
  }

  // Input:
  withoutZero([1, 0, 2]);

  // Answer:
  // [1, 2]
}

/////////////////////////////
// Q25. Continue skip zero
{
  function withoutZero(nums) {
    const result = [];
    for (const num of nums) {
      if (num === 0) continue;
      result.push(num);
    }
    return result;
  }

  // Input:
  withoutZero([1, 0, 2]);

  // Answer:
  // [1, 2]
}

/////////////////////////////
