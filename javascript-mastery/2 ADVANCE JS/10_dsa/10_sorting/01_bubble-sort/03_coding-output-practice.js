"use strict";

/*
Path: 2 ADVANCE JS\10_dsa\10_sorting\01_bubble-sort\03_coding-output-practice.js
Topic: Bubble Sort
Question bank: Bubble Sort focused practice

How to study:
1. Read Q.
2. Hide Answer.
3. Predict output.
4. Then check Answer.
*/

// Q1. linear search
{
  function search(nums, target) {
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] === target) return i;
    }
    return -1;
  }

  // Input:
  search([1, 2, 3], 2);

  // Answer:
  // 1
}

/////////////////////////////

// Q2. hash lookup
{
  function hasDuplicate(nums) {
    const seen = new Set();
    for (const num of nums) {
      if (seen.has(num)) return true;
      seen.add(num);
    }
    return false;
  }

  // Input:
  hasDuplicate([1, 2, 1]);

  // Answer:
  // true
}

/////////////////////////////

// Q3. two pointer sum
{
  function hasPair(nums, target) {
    let l = 0;
    let r = nums.length - 1;
    while (l < r) {
      const sum = nums[l] + nums[r];
      if (sum === target) return true;
      if (sum < target) l++;
      else r--;
    }
    return false;
  }

  // Input:
  hasPair([1, 2, 4, 6], 8);

  // Answer:
  // true
}

/////////////////////////////

// Q4. linear search case 4
{
  function search(nums, target) {
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] === target) return i;
    }
    return -1;
  }

  // Input:
  search([1, 2, 3], 2);

  // Answer:
  // 1
}

/////////////////////////////

// Q5. hash lookup case 5
{
  function hasDuplicate(nums) {
    const seen = new Set();
    for (const num of nums) {
      if (seen.has(num)) return true;
      seen.add(num);
    }
    return false;
  }

  // Input:
  hasDuplicate([1, 2, 1]);

  // Answer:
  // true
}

/////////////////////////////

// Q6. two pointer sum case 6
{
  function hasPair(nums, target) {
    let l = 0;
    let r = nums.length - 1;
    while (l < r) {
      const sum = nums[l] + nums[r];
      if (sum === target) return true;
      if (sum < target) l++;
      else r--;
    }
    return false;
  }

  // Input:
  hasPair([1, 2, 4, 6], 8);

  // Answer:
  // true
}

/////////////////////////////

// Q7. linear search case 7
{
  function search(nums, target) {
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] === target) return i;
    }
    return -1;
  }

  // Input:
  search([1, 2, 3], 2);

  // Answer:
  // 1
}

/////////////////////////////

// Q8. hash lookup case 8
{
  function hasDuplicate(nums) {
    const seen = new Set();
    for (const num of nums) {
      if (seen.has(num)) return true;
      seen.add(num);
    }
    return false;
  }

  // Input:
  hasDuplicate([1, 2, 1]);

  // Answer:
  // true
}

/////////////////////////////

// Q9. two pointer sum case 9
{
  function hasPair(nums, target) {
    let l = 0;
    let r = nums.length - 1;
    while (l < r) {
      const sum = nums[l] + nums[r];
      if (sum === target) return true;
      if (sum < target) l++;
      else r--;
    }
    return false;
  }

  // Input:
  hasPair([1, 2, 4, 6], 8);

  // Answer:
  // true
}

/////////////////////////////

// Q10. linear search case 10
{
  function search(nums, target) {
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] === target) return i;
    }
    return -1;
  }

  // Input:
  search([1, 2, 3], 2);

  // Answer:
  // 1
}

/////////////////////////////

// Q11. hash lookup case 11
{
  function hasDuplicate(nums) {
    const seen = new Set();
    for (const num of nums) {
      if (seen.has(num)) return true;
      seen.add(num);
    }
    return false;
  }

  // Input:
  hasDuplicate([1, 2, 1]);

  // Answer:
  // true
}

/////////////////////////////

// Q12. two pointer sum case 12
{
  function hasPair(nums, target) {
    let l = 0;
    let r = nums.length - 1;
    while (l < r) {
      const sum = nums[l] + nums[r];
      if (sum === target) return true;
      if (sum < target) l++;
      else r--;
    }
    return false;
  }

  // Input:
  hasPair([1, 2, 4, 6], 8);

  // Answer:
  // true
}

/////////////////////////////

// Q13. linear search case 13
{
  function search(nums, target) {
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] === target) return i;
    }
    return -1;
  }

  // Input:
  search([1, 2, 3], 2);

  // Answer:
  // 1
}

/////////////////////////////

// Q14. hash lookup case 14
{
  function hasDuplicate(nums) {
    const seen = new Set();
    for (const num of nums) {
      if (seen.has(num)) return true;
      seen.add(num);
    }
    return false;
  }

  // Input:
  hasDuplicate([1, 2, 1]);

  // Answer:
  // true
}

/////////////////////////////

// Q15. two pointer sum case 15
{
  function hasPair(nums, target) {
    let l = 0;
    let r = nums.length - 1;
    while (l < r) {
      const sum = nums[l] + nums[r];
      if (sum === target) return true;
      if (sum < target) l++;
      else r--;
    }
    return false;
  }

  // Input:
  hasPair([1, 2, 4, 6], 8);

  // Answer:
  // true
}

/////////////////////////////

// Q16. linear search case 16
{
  function search(nums, target) {
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] === target) return i;
    }
    return -1;
  }

  // Input:
  search([1, 2, 3], 2);

  // Answer:
  // 1
}

/////////////////////////////

// Q17. hash lookup case 17
{
  function hasDuplicate(nums) {
    const seen = new Set();
    for (const num of nums) {
      if (seen.has(num)) return true;
      seen.add(num);
    }
    return false;
  }

  // Input:
  hasDuplicate([1, 2, 1]);

  // Answer:
  // true
}

/////////////////////////////

// Q18. two pointer sum case 18
{
  function hasPair(nums, target) {
    let l = 0;
    let r = nums.length - 1;
    while (l < r) {
      const sum = nums[l] + nums[r];
      if (sum === target) return true;
      if (sum < target) l++;
      else r--;
    }
    return false;
  }

  // Input:
  hasPair([1, 2, 4, 6], 8);

  // Answer:
  // true
}

/////////////////////////////

// Q19. linear search case 19
{
  function search(nums, target) {
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] === target) return i;
    }
    return -1;
  }

  // Input:
  search([1, 2, 3], 2);

  // Answer:
  // 1
}

/////////////////////////////

// Q20. hash lookup case 20
{
  function hasDuplicate(nums) {
    const seen = new Set();
    for (const num of nums) {
      if (seen.has(num)) return true;
      seen.add(num);
    }
    return false;
  }

  // Input:
  hasDuplicate([1, 2, 1]);

  // Answer:
  // true
}

/////////////////////////////

// Q21. two pointer sum case 21
{
  function hasPair(nums, target) {
    let l = 0;
    let r = nums.length - 1;
    while (l < r) {
      const sum = nums[l] + nums[r];
      if (sum === target) return true;
      if (sum < target) l++;
      else r--;
    }
    return false;
  }

  // Input:
  hasPair([1, 2, 4, 6], 8);

  // Answer:
  // true
}

/////////////////////////////

// Q22. linear search case 22
{
  function search(nums, target) {
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] === target) return i;
    }
    return -1;
  }

  // Input:
  search([1, 2, 3], 2);

  // Answer:
  // 1
}

/////////////////////////////

// Q23. hash lookup case 23
{
  function hasDuplicate(nums) {
    const seen = new Set();
    for (const num of nums) {
      if (seen.has(num)) return true;
      seen.add(num);
    }
    return false;
  }

  // Input:
  hasDuplicate([1, 2, 1]);

  // Answer:
  // true
}

/////////////////////////////

// Q24. two pointer sum case 24
{
  function hasPair(nums, target) {
    let l = 0;
    let r = nums.length - 1;
    while (l < r) {
      const sum = nums[l] + nums[r];
      if (sum === target) return true;
      if (sum < target) l++;
      else r--;
    }
    return false;
  }

  // Input:
  hasPair([1, 2, 4, 6], 8);

  // Answer:
  // true
}

/////////////////////////////

// Q25. linear search case 25
{
  function search(nums, target) {
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] === target) return i;
    }
    return -1;
  }

  // Input:
  search([1, 2, 3], 2);

  // Answer:
  // 1
}

/////////////////////////////

// ================= PDF BASED PRACTICE =================

// PDF Q98. Write a function to sort characters in a string alphabetically.
{
  function sortCharactersInStringAlphabetically(items) {
    return [...items].sort((a, b) => a - b);
  }

  // Input:
  sortCharactersInStringAlphabetically([10, 2, 5]);

  // Answer:
  // [2, 5, 10]
}

/////////////////////////////

// PDF Q108. Write a function to check whether an array is sorted ascending.
{
  function checkWhetherArrayIsSorted(items) {
    return [...items].sort((a, b) => a - b);
  }

  // Input:
  checkWhetherArrayIsSorted([10, 2, 5]);

  // Answer:
  // [2, 5, 10]
}

/////////////////////////////

// PDF Q109. Write a function to check whether an array is sorted descending.
{
  function checkWhetherArrayIsSorted(items) {
    return [...items].sort((a, b) => a - b);
  }

  // Input:
  checkWhetherArrayIsSorted([10, 2, 5]);

  // Answer:
  // [2, 5, 10]
}

/////////////////////////////

// PDF Q160. Debug a broken JavaScript snippet related to sort and rewrite it correctly.
{
  function sortIt(items) {
    return [...items].sort((a, b) => a - b);
  }

  // Input:
  sortIt([10, 2, 5]);

  // Answer:
  // [2, 5, 10]
}

/////////////////////////////

// PDF Q170. Debug a broken JavaScript snippet related to sort and rewrite it correctly.
{
  function sortIt(items) {
    return [...items].sort((a, b) => a - b);
  }

  // Input:
  sortIt([10, 2, 5]);

  // Answer:
  // [2, 5, 10]
}

/////////////////////////////

// PDF Q180. Debug a broken JavaScript snippet related to sort and rewrite it correctly.
{
  function sortIt(items) {
    return [...items].sort((a, b) => a - b);
  }

  // Input:
  sortIt([10, 2, 5]);

  // Answer:
  // [2, 5, 10]
}

/////////////////////////////

// PDF Q190. Debug a broken JavaScript snippet related to sort and rewrite it correctly.
{
  function sortIt(items) {
    return [...items].sort((a, b) => a - b);
  }

  // Input:
  sortIt([10, 2, 5]);

  // Answer:
  // [2, 5, 10]
}

/////////////////////////////

// PDF Q200. Debug a broken JavaScript snippet related to sort and rewrite it correctly.
{
  function sortIt(items) {
    return [...items].sort((a, b) => a - b);
  }

  // Input:
  sortIt([10, 2, 5]);

  // Answer:
  // [2, 5, 10]
}

/////////////////////////////

// PDF Q903. Write clean code for sort table and explain time complexity in comments.
{
  function forSortTableExplainTime(rows, key) {
    return [...rows].sort((a, b) => String(a[key]).localeCompare(String(b[key])));
  }

  // Input:
  forSortTableExplainTime([{name:'Zoya'}, {name:'Amit'}], 'name');

  // Answer:
  // [{ name: "Amit" }, { name: "Zoya" }]
}

/////////////////////////////

// PDF Q913. Write clean code for sort table and explain time complexity in comments.
{
  function forSortTableExplainTime(rows, key) {
    return [...rows].sort((a, b) => String(a[key]).localeCompare(String(b[key])));
  }

  // Input:
  forSortTableExplainTime([{name:'Zoya'}, {name:'Amit'}], 'name');

  // Answer:
  // [{ name: "Amit" }, { name: "Zoya" }]
}

/////////////////////////////

// PDF Q923. Write clean code for sort table and explain time complexity in comments.
{
  function forSortTableExplainTime(rows, key) {
    return [...rows].sort((a, b) => String(a[key]).localeCompare(String(b[key])));
  }

  // Input:
  forSortTableExplainTime([{name:'Zoya'}, {name:'Amit'}], 'name');

  // Answer:
  // [{ name: "Amit" }, { name: "Zoya" }]
}

/////////////////////////////

// PDF Q933. Write clean code for sort table and explain time complexity in comments.
{
  function forSortTableExplainTime(rows, key) {
    return [...rows].sort((a, b) => String(a[key]).localeCompare(String(b[key])));
  }

  // Input:
  forSortTableExplainTime([{name:'Zoya'}, {name:'Amit'}], 'name');

  // Answer:
  // [{ name: "Amit" }, { name: "Zoya" }]
}

/////////////////////////////

// PDF Q943. Write clean code for sort table and explain time complexity in comments.
{
  function forSortTableExplainTime(rows, key) {
    return [...rows].sort((a, b) => String(a[key]).localeCompare(String(b[key])));
  }

  // Input:
  forSortTableExplainTime([{name:'Zoya'}, {name:'Amit'}], 'name');

  // Answer:
  // [{ name: "Amit" }, { name: "Zoya" }]
}

/////////////////////////////

