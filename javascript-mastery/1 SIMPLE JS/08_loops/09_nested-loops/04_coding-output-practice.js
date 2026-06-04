"use strict";

/*
Path: 1 SIMPLE JS\08_loops\09_nested-loops\04_coding-output-practice.js
Topic: 09_nested-loops
Question bank: nested loops

How to study:
1. Read Q.
2. Hide Answer.
3. Predict output.
4. Then check Answer.
*/
// Q1. Count pairs
{
  function countPairs(rows, cols) {
    let count = 0;
    for (let i = 1; i <= rows; i++) {
      for (let j = 1; j <= cols; j++) count++;
    }
    return count;
  }

  // Input:
  countPairs(2, 3);

  // Answer:
  // 6
}

/////////////////////////////
// Q2. Build pairs
{
  function pairs() {
    const result = [];
    for (let i = 1; i <= 2; i++) {
      for (let j = 1; j <= 2; j++) result.push([i, j]);
    }
    return result;
  }

  // Input:
  pairs();

  // Answer:
  // [[1, 1], [1, 2], [2, 1], [2, 2]]
}

/////////////////////////////
// Q3. Matrix sum
{
  function sum(matrix) {
    let total = 0;
    for (const row of matrix) {
      for (const num of row) total += num;
    }
    return total;
  }

  // Input:
  sum([[1, 2], [3, 4]]);

  // Answer:
  // 10
}

/////////////////////////////
// Q4. Flatten matrix
{
  function flatten(matrix) {
    const result = [];
    for (const row of matrix) {
      for (const item of row) result.push(item);
    }
    return result;
  }

  // Input:
  flatten([[1, 2], [3]]);

  // Answer:
  // [1, 2, 3]
}

/////////////////////////////
// Q5. Triangle pattern
{
  function triangle(n) {
    const result = [];
    for (let i = 1; i <= n; i++) {
      let row = "";
      for (let j = 1; j <= i; j++) row += "*";
      result.push(row);
    }
    return result;
  }

  // Input:
  triangle(3);

  // Answer:
  // ["*", "**", "***"]
}

/////////////////////////////
// Q6. Nested loop count
{
  function count(rows, cols) {
    let total = 0;
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) total++;
    }
    return total;
  }

  // Input:
  count(3, 2);

  // Answer:
  // 6
}

/////////////////////////////
// Q7. Nested loop count
{
  function count(rows, cols) {
    let total = 0;
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) total++;
    }
    return total;
  }

  // Input:
  count(3, 2);

  // Answer:
  // 6
}

/////////////////////////////
// Q8. Nested loop count
{
  function count(rows, cols) {
    let total = 0;
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) total++;
    }
    return total;
  }

  // Input:
  count(3, 2);

  // Answer:
  // 6
}

/////////////////////////////
// Q9. Nested loop count
{
  function count(rows, cols) {
    let total = 0;
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) total++;
    }
    return total;
  }

  // Input:
  count(3, 2);

  // Answer:
  // 6
}

/////////////////////////////
// Q10. Nested loop count
{
  function count(rows, cols) {
    let total = 0;
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) total++;
    }
    return total;
  }

  // Input:
  count(3, 2);

  // Answer:
  // 6
}

/////////////////////////////
// Q11. Nested loop count
{
  function count(rows, cols) {
    let total = 0;
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) total++;
    }
    return total;
  }

  // Input:
  count(3, 2);

  // Answer:
  // 6
}

/////////////////////////////
// Q12. Nested loop count
{
  function count(rows, cols) {
    let total = 0;
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) total++;
    }
    return total;
  }

  // Input:
  count(3, 2);

  // Answer:
  // 6
}

/////////////////////////////
// Q13. Nested loop count
{
  function count(rows, cols) {
    let total = 0;
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) total++;
    }
    return total;
  }

  // Input:
  count(3, 2);

  // Answer:
  // 6
}

/////////////////////////////
// Q14. Nested loop count
{
  function count(rows, cols) {
    let total = 0;
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) total++;
    }
    return total;
  }

  // Input:
  count(3, 2);

  // Answer:
  // 6
}

/////////////////////////////
// Q15. Nested loop count
{
  function count(rows, cols) {
    let total = 0;
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) total++;
    }
    return total;
  }

  // Input:
  count(3, 2);

  // Answer:
  // 6
}

/////////////////////////////
// Q16. Nested loop count
{
  function count(rows, cols) {
    let total = 0;
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) total++;
    }
    return total;
  }

  // Input:
  count(3, 2);

  // Answer:
  // 6
}

/////////////////////////////
// Q17. Nested loop count
{
  function count(rows, cols) {
    let total = 0;
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) total++;
    }
    return total;
  }

  // Input:
  count(3, 2);

  // Answer:
  // 6
}

/////////////////////////////
// Q18. Nested loop count
{
  function count(rows, cols) {
    let total = 0;
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) total++;
    }
    return total;
  }

  // Input:
  count(3, 2);

  // Answer:
  // 6
}

/////////////////////////////
// Q19. Nested loop count
{
  function count(rows, cols) {
    let total = 0;
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) total++;
    }
    return total;
  }

  // Input:
  count(3, 2);

  // Answer:
  // 6
}

/////////////////////////////
// Q20. Nested loop count
{
  function count(rows, cols) {
    let total = 0;
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) total++;
    }
    return total;
  }

  // Input:
  count(3, 2);

  // Answer:
  // 6
}

/////////////////////////////
// Q21. Nested loop count
{
  function count(rows, cols) {
    let total = 0;
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) total++;
    }
    return total;
  }

  // Input:
  count(3, 2);

  // Answer:
  // 6
}

/////////////////////////////
// Q22. Nested loop count
{
  function count(rows, cols) {
    let total = 0;
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) total++;
    }
    return total;
  }

  // Input:
  count(3, 2);

  // Answer:
  // 6
}

/////////////////////////////
// Q23. Nested loop count
{
  function count(rows, cols) {
    let total = 0;
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) total++;
    }
    return total;
  }

  // Input:
  count(3, 2);

  // Answer:
  // 6
}

/////////////////////////////
// Q24. Nested loop count
{
  function count(rows, cols) {
    let total = 0;
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) total++;
    }
    return total;
  }

  // Input:
  count(3, 2);

  // Answer:
  // 6
}

/////////////////////////////
// Q25. Nested loop count
{
  function count(rows, cols) {
    let total = 0;
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) total++;
    }
    return total;
  }

  // Input:
  count(3, 2);

  // Answer:
  // 6
}

/////////////////////////////
