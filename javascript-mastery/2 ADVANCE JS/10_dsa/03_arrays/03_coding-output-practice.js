"use strict";

/*
Path: 2 ADVANCE JS\10_dsa\03_arrays\03_coding-output-practice.js
Topic: Arrays
Question bank: Arrays focused practice

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

// PDF Q116. Write a function to merge two arrays and remove duplicates.
{
  function mergeTwoArraysRemoveDuplicates(items) {
    const result = [];
    for (const item of items) {
      if (!result.includes(item)) result.push(item);
    }
    return result;
  }

  // Input:
  mergeTwoArraysRemoveDuplicates([1, 1, 2, 3]);

  // Answer:
  // [1, 2, 3]
}

/////////////////////////////

// PDF Q702. Solve a coding problem using valid palindrome without using unnecessary built-in shortcuts.
{
  function validPalindromeWithoutUnnecessaryBuilt(str) {
    const clean = String(str).toLowerCase().replace(/[^a-z0-9]/g, '');
    return clean === clean.split('').reverse().join('');
  }

  // Input:
  validPalindromeWithoutUnnecessaryBuilt('madam');

  // Answer:
  // true
}

/////////////////////////////

// PDF Q707. Solve a coding problem using merge sorted arrays without using unnecessary built-in shortcuts.
{
  function mergeSortedArraysWithoutUnnecessary(a, b) {
    const result = [];
    let i = 0, j = 0;
    while (i < a.length && j < b.length) result.push(a[i] <= b[j] ? a[i++] : b[j++]);
    return result.concat(a.slice(i), b.slice(j));
  }

  // Input:
  mergeSortedArraysWithoutUnnecessary([1, 3], [2, 4]);

  // Answer:
  // [1, 2, 3, 4]
}

/////////////////////////////

// PDF Q708. Write clean code for remove duplicates and explain time complexity in comments.
{
  function forRemoveDuplicatesExplainTime(items) {
    const result = [];
    for (const item of items) {
      if (!result.includes(item)) result.push(item);
    }
    return result;
  }

  // Input:
  forRemoveDuplicatesExplainTime([1, 1, 2, 3]);

  // Answer:
  // [1, 2, 3]
}

/////////////////////////////

// PDF Q712. Solve a coding problem using valid palindrome without using unnecessary built-in shortcuts.
{
  function validPalindromeWithoutUnnecessaryBuilt(str) {
    const clean = String(str).toLowerCase().replace(/[^a-z0-9]/g, '');
    return clean === clean.split('').reverse().join('');
  }

  // Input:
  validPalindromeWithoutUnnecessaryBuilt('madam');

  // Answer:
  // true
}

/////////////////////////////

// PDF Q717. Solve a coding problem using merge sorted arrays without using unnecessary built-in shortcuts.
{
  function mergeSortedArraysWithoutUnnecessary(a, b) {
    const result = [];
    let i = 0, j = 0;
    while (i < a.length && j < b.length) result.push(a[i] <= b[j] ? a[i++] : b[j++]);
    return result.concat(a.slice(i), b.slice(j));
  }

  // Input:
  mergeSortedArraysWithoutUnnecessary([1, 3], [2, 4]);

  // Answer:
  // [1, 2, 3, 4]
}

/////////////////////////////

// PDF Q718. Write clean code for remove duplicates and explain time complexity in comments.
{
  function forRemoveDuplicatesExplainTime(items) {
    const result = [];
    for (const item of items) {
      if (!result.includes(item)) result.push(item);
    }
    return result;
  }

  // Input:
  forRemoveDuplicatesExplainTime([1, 1, 2, 3]);

  // Answer:
  // [1, 2, 3]
}

/////////////////////////////

// PDF Q722. Solve a coding problem using valid palindrome without using unnecessary built-in shortcuts.
{
  function validPalindromeWithoutUnnecessaryBuilt(str) {
    const clean = String(str).toLowerCase().replace(/[^a-z0-9]/g, '');
    return clean === clean.split('').reverse().join('');
  }

  // Input:
  validPalindromeWithoutUnnecessaryBuilt('madam');

  // Answer:
  // true
}

/////////////////////////////

// PDF Q727. Solve a coding problem using merge sorted arrays without using unnecessary built-in shortcuts.
{
  function mergeSortedArraysWithoutUnnecessary(a, b) {
    const result = [];
    let i = 0, j = 0;
    while (i < a.length && j < b.length) result.push(a[i] <= b[j] ? a[i++] : b[j++]);
    return result.concat(a.slice(i), b.slice(j));
  }

  // Input:
  mergeSortedArraysWithoutUnnecessary([1, 3], [2, 4]);

  // Answer:
  // [1, 2, 3, 4]
}

/////////////////////////////

// PDF Q728. Write clean code for remove duplicates and explain time complexity in comments.
{
  function forRemoveDuplicatesExplainTime(items) {
    const result = [];
    for (const item of items) {
      if (!result.includes(item)) result.push(item);
    }
    return result;
  }

  // Input:
  forRemoveDuplicatesExplainTime([1, 1, 2, 3]);

  // Answer:
  // [1, 2, 3]
}

/////////////////////////////

// PDF Q732. Solve a coding problem using valid palindrome without using unnecessary built-in shortcuts.
{
  function validPalindromeWithoutUnnecessaryBuilt(str) {
    const clean = String(str).toLowerCase().replace(/[^a-z0-9]/g, '');
    return clean === clean.split('').reverse().join('');
  }

  // Input:
  validPalindromeWithoutUnnecessaryBuilt('madam');

  // Answer:
  // true
}

/////////////////////////////

// PDF Q737. Solve a coding problem using merge sorted arrays without using unnecessary built-in shortcuts.
{
  function mergeSortedArraysWithoutUnnecessary(a, b) {
    const result = [];
    let i = 0, j = 0;
    while (i < a.length && j < b.length) result.push(a[i] <= b[j] ? a[i++] : b[j++]);
    return result.concat(a.slice(i), b.slice(j));
  }

  // Input:
  mergeSortedArraysWithoutUnnecessary([1, 3], [2, 4]);

  // Answer:
  // [1, 2, 3, 4]
}

/////////////////////////////

// PDF Q738. Write clean code for remove duplicates and explain time complexity in comments.
{
  function forRemoveDuplicatesExplainTime(items) {
    const result = [];
    for (const item of items) {
      if (!result.includes(item)) result.push(item);
    }
    return result;
  }

  // Input:
  forRemoveDuplicatesExplainTime([1, 1, 2, 3]);

  // Answer:
  // [1, 2, 3]
}

/////////////////////////////

// PDF Q742. Solve a coding problem using valid palindrome without using unnecessary built-in shortcuts.
{
  function validPalindromeWithoutUnnecessaryBuilt(str) {
    const clean = String(str).toLowerCase().replace(/[^a-z0-9]/g, '');
    return clean === clean.split('').reverse().join('');
  }

  // Input:
  validPalindromeWithoutUnnecessaryBuilt('madam');

  // Answer:
  // true
}

/////////////////////////////

// PDF Q747. Solve a coding problem using merge sorted arrays without using unnecessary built-in shortcuts.
{
  function mergeSortedArraysWithoutUnnecessary(a, b) {
    const result = [];
    let i = 0, j = 0;
    while (i < a.length && j < b.length) result.push(a[i] <= b[j] ? a[i++] : b[j++]);
    return result.concat(a.slice(i), b.slice(j));
  }

  // Input:
  mergeSortedArraysWithoutUnnecessary([1, 3], [2, 4]);

  // Answer:
  // [1, 2, 3, 4]
}

/////////////////////////////

// PDF Q748. Write clean code for remove duplicates and explain time complexity in comments.
{
  function forRemoveDuplicatesExplainTime(items) {
    const result = [];
    for (const item of items) {
      if (!result.includes(item)) result.push(item);
    }
    return result;
  }

  // Input:
  forRemoveDuplicatesExplainTime([1, 1, 2, 3]);

  // Answer:
  // [1, 2, 3]
}

/////////////////////////////

// PDF Q751. Write a JavaScript function for three sum and handle empty input.
{
  function forThreeSumHandleEmpty(nums) {
    nums.sort((a, b) => a - b);
    const result = [];
    for (let i = 0; i < nums.length - 2; i++) {
      if (i > 0 && nums[i] === nums[i - 1]) continue;
      let left = i + 1, right = nums.length - 1;
      while (left < right) {
        const sum = nums[i] + nums[left] + nums[right];
        if (sum === 0) {
          result.push([nums[i], nums[left], nums[right]]);
          while (nums[left] === nums[left + 1]) left++;
          while (nums[right] === nums[right - 1]) right--;
          left++; right--;
        } else if (sum < 0) left++;
        else right--;
      }
    }
    return result;
  }

  // Input:
  forThreeSumHandleEmpty([-1, 0, 1, 2, -1, -4]);

  // Answer:
  // [[-1, -1, 2], [-1, 0, 1]]
}

/////////////////////////////

// PDF Q752. Solve a coding problem using subarray sum without using unnecessary built-in shortcuts.
{
  function subarraySumWithoutUnnecessaryBuilt(nums, target) {
    let sum = 0;
    const seen = new Map([[0, -1]]);
    for (let i = 0; i < nums.length; i++) {
      sum += nums[i];
      if (seen.has(sum - target)) return [seen.get(sum - target) + 1, i];
      seen.set(sum, i);
    }
    return [];
  }

  // Input:
  subarraySumWithoutUnnecessaryBuilt([1, 2, 3, 4], 5);

  // Answer:
  // [1, 2]
}

/////////////////////////////

// PDF Q755. Debug a broken JavaScript snippet related to product except self and rewrite it correctly.
{
  function productExceptSelfIt(nums) {
    const result = Array(nums.length).fill(1);
    let left = 1;
    for (let i = 0; i < nums.length; i++) { result[i] *= left; left *= nums[i]; }
    let right = 1;
    for (let i = nums.length - 1; i >= 0; i--) { result[i] *= right; right *= nums[i]; }
    return result;
  }

  // Input:
  productExceptSelfIt([1, 2, 3, 4]);

  // Answer:
  // [24, 12, 8, 6]
}

/////////////////////////////

// PDF Q756. Write a JavaScript function for spiral matrix and handle empty input.
{
  function forSpiralMatrixHandleEmpty(matrix) {
    const result = [];
    let top = 0, bottom = matrix.length - 1, left = 0, right = matrix[0].length - 1;
    while (top <= bottom && left <= right) {
      for (let i = left; i <= right; i++) result.push(matrix[top][i]);
      top++;
      for (let i = top; i <= bottom; i++) result.push(matrix[i][right]);
      right--;
      if (top <= bottom) for (let i = right; i >= left; i--) result.push(matrix[bottom][i]);
      bottom--;
      if (left <= right) for (let i = bottom; i >= top; i--) result.push(matrix[i][left]);
      left++;
    }
    return result;
  }

  // Input:
  forSpiralMatrixHandleEmpty([[1,2,3],[4,5,6],[7,8,9]]);

  // Answer:
  // [1, 2, 3, 6, 9, 8, 7, 4, 5]
}

/////////////////////////////

// PDF Q757. Solve a coding problem using merge intervals without using unnecessary built-in shortcuts.
{
  function mergeIntervalsWithoutUnnecessaryBuilt(intervals) {
    intervals.sort((a, b) => a[0] - b[0]);
    const result = [];
    for (const current of intervals) {
      const last = result[result.length - 1];
      if (!last || current[0] > last[1]) result.push(current);
      else last[1] = Math.max(last[1], current[1]);
    }
    return result;
  }

  // Input:
  mergeIntervalsWithoutUnnecessaryBuilt([[1,3],[2,6],[8,10]]);

  // Answer:
  // [[1, 6], [8, 10]]
}

/////////////////////////////

// PDF Q758. Write clean code for rotate matrix and explain time complexity in comments.
{
  function forRotateMatrixExplainTime(matrix) {
    const n = matrix.length;
    for (let row = 0; row < n; row++) {
      for (let col = row + 1; col < n; col++) [matrix[row][col], matrix[col][row]] = [matrix[col][row], matrix[row][col]];
    }
    for (const row of matrix) row.reverse();
    return matrix;
  }

  // Input:
  forRotateMatrixExplainTime([[1,2],[3,4]]);

  // Answer:
  // [[3, 1], [4, 2]]
}

/////////////////////////////

// PDF Q759. Create an interview-style solution for set matrix zeroes with at least 3 test cases.
{
  function forSetMatrixZeroesAt(matrix) {
    const rows = new Set(), cols = new Set();
    for (let r = 0; r < matrix.length; r++) for (let c = 0; c < matrix[r].length; c++) if (matrix[r][c] === 0) { rows.add(r); cols.add(c); }
    for (let r = 0; r < matrix.length; r++) for (let c = 0; c < matrix[r].length; c++) if (rows.has(r) || cols.has(c)) matrix[r][c] = 0;
    return matrix;
  }

  // Input:
  forSetMatrixZeroesAt([[1,1,1],[1,0,1],[1,1,1]]);

  // Answer:
  // [[1, 0, 1], [0, 0, 0], [1, 0, 1]]
}

/////////////////////////////

// PDF Q761. Write a JavaScript function for three sum and handle empty input.
{
  function forThreeSumHandleEmpty(nums) {
    nums.sort((a, b) => a - b);
    const result = [];
    for (let i = 0; i < nums.length - 2; i++) {
      if (i > 0 && nums[i] === nums[i - 1]) continue;
      let left = i + 1, right = nums.length - 1;
      while (left < right) {
        const sum = nums[i] + nums[left] + nums[right];
        if (sum === 0) {
          result.push([nums[i], nums[left], nums[right]]);
          while (nums[left] === nums[left + 1]) left++;
          while (nums[right] === nums[right - 1]) right--;
          left++; right--;
        } else if (sum < 0) left++;
        else right--;
      }
    }
    return result;
  }

  // Input:
  forThreeSumHandleEmpty([-1, 0, 1, 2, -1, -4]);

  // Answer:
  // [[-1, -1, 2], [-1, 0, 1]]
}

/////////////////////////////

// PDF Q762. Solve a coding problem using subarray sum without using unnecessary built-in shortcuts.
{
  function subarraySumWithoutUnnecessaryBuilt(nums, target) {
    let sum = 0;
    const seen = new Map([[0, -1]]);
    for (let i = 0; i < nums.length; i++) {
      sum += nums[i];
      if (seen.has(sum - target)) return [seen.get(sum - target) + 1, i];
      seen.set(sum, i);
    }
    return [];
  }

  // Input:
  subarraySumWithoutUnnecessaryBuilt([1, 2, 3, 4], 5);

  // Answer:
  // [1, 2]
}

/////////////////////////////

// PDF Q765. Debug a broken JavaScript snippet related to product except self and rewrite it correctly.
{
  function productExceptSelfIt(nums) {
    const result = Array(nums.length).fill(1);
    let left = 1;
    for (let i = 0; i < nums.length; i++) { result[i] *= left; left *= nums[i]; }
    let right = 1;
    for (let i = nums.length - 1; i >= 0; i--) { result[i] *= right; right *= nums[i]; }
    return result;
  }

  // Input:
  productExceptSelfIt([1, 2, 3, 4]);

  // Answer:
  // [24, 12, 8, 6]
}

/////////////////////////////

// PDF Q766. Write a JavaScript function for spiral matrix and handle empty input.
{
  function forSpiralMatrixHandleEmpty(matrix) {
    const result = [];
    let top = 0, bottom = matrix.length - 1, left = 0, right = matrix[0].length - 1;
    while (top <= bottom && left <= right) {
      for (let i = left; i <= right; i++) result.push(matrix[top][i]);
      top++;
      for (let i = top; i <= bottom; i++) result.push(matrix[i][right]);
      right--;
      if (top <= bottom) for (let i = right; i >= left; i--) result.push(matrix[bottom][i]);
      bottom--;
      if (left <= right) for (let i = bottom; i >= top; i--) result.push(matrix[i][left]);
      left++;
    }
    return result;
  }

  // Input:
  forSpiralMatrixHandleEmpty([[1,2,3],[4,5,6],[7,8,9]]);

  // Answer:
  // [1, 2, 3, 6, 9, 8, 7, 4, 5]
}

/////////////////////////////

// PDF Q767. Solve a coding problem using merge intervals without using unnecessary built-in shortcuts.
{
  function mergeIntervalsWithoutUnnecessaryBuilt(intervals) {
    intervals.sort((a, b) => a[0] - b[0]);
    const result = [];
    for (const current of intervals) {
      const last = result[result.length - 1];
      if (!last || current[0] > last[1]) result.push(current);
      else last[1] = Math.max(last[1], current[1]);
    }
    return result;
  }

  // Input:
  mergeIntervalsWithoutUnnecessaryBuilt([[1,3],[2,6],[8,10]]);

  // Answer:
  // [[1, 6], [8, 10]]
}

/////////////////////////////

// PDF Q768. Write clean code for rotate matrix and explain time complexity in comments.
{
  function forRotateMatrixExplainTime(matrix) {
    const n = matrix.length;
    for (let row = 0; row < n; row++) {
      for (let col = row + 1; col < n; col++) [matrix[row][col], matrix[col][row]] = [matrix[col][row], matrix[row][col]];
    }
    for (const row of matrix) row.reverse();
    return matrix;
  }

  // Input:
  forRotateMatrixExplainTime([[1,2],[3,4]]);

  // Answer:
  // [[3, 1], [4, 2]]
}

/////////////////////////////

// PDF Q769. Create an interview-style solution for set matrix zeroes with at least 3 test cases.
{
  function forSetMatrixZeroesAt(matrix) {
    const rows = new Set(), cols = new Set();
    for (let r = 0; r < matrix.length; r++) for (let c = 0; c < matrix[r].length; c++) if (matrix[r][c] === 0) { rows.add(r); cols.add(c); }
    for (let r = 0; r < matrix.length; r++) for (let c = 0; c < matrix[r].length; c++) if (rows.has(r) || cols.has(c)) matrix[r][c] = 0;
    return matrix;
  }

  // Input:
  forSetMatrixZeroesAt([[1,1,1],[1,0,1],[1,1,1]]);

  // Answer:
  // [[1, 0, 1], [0, 0, 0], [1, 0, 1]]
}

/////////////////////////////

// PDF Q771. Write a JavaScript function for three sum and handle empty input.
{
  function forThreeSumHandleEmpty(nums) {
    nums.sort((a, b) => a - b);
    const result = [];
    for (let i = 0; i < nums.length - 2; i++) {
      if (i > 0 && nums[i] === nums[i - 1]) continue;
      let left = i + 1, right = nums.length - 1;
      while (left < right) {
        const sum = nums[i] + nums[left] + nums[right];
        if (sum === 0) {
          result.push([nums[i], nums[left], nums[right]]);
          while (nums[left] === nums[left + 1]) left++;
          while (nums[right] === nums[right - 1]) right--;
          left++; right--;
        } else if (sum < 0) left++;
        else right--;
      }
    }
    return result;
  }

  // Input:
  forThreeSumHandleEmpty([-1, 0, 1, 2, -1, -4]);

  // Answer:
  // [[-1, -1, 2], [-1, 0, 1]]
}

/////////////////////////////

// PDF Q772. Solve a coding problem using subarray sum without using unnecessary built-in shortcuts.
{
  function subarraySumWithoutUnnecessaryBuilt(nums, target) {
    let sum = 0;
    const seen = new Map([[0, -1]]);
    for (let i = 0; i < nums.length; i++) {
      sum += nums[i];
      if (seen.has(sum - target)) return [seen.get(sum - target) + 1, i];
      seen.set(sum, i);
    }
    return [];
  }

  // Input:
  subarraySumWithoutUnnecessaryBuilt([1, 2, 3, 4], 5);

  // Answer:
  // [1, 2]
}

/////////////////////////////

// PDF Q775. Debug a broken JavaScript snippet related to product except self and rewrite it correctly.
{
  function productExceptSelfIt(nums) {
    const result = Array(nums.length).fill(1);
    let left = 1;
    for (let i = 0; i < nums.length; i++) { result[i] *= left; left *= nums[i]; }
    let right = 1;
    for (let i = nums.length - 1; i >= 0; i--) { result[i] *= right; right *= nums[i]; }
    return result;
  }

  // Input:
  productExceptSelfIt([1, 2, 3, 4]);

  // Answer:
  // [24, 12, 8, 6]
}

/////////////////////////////

// PDF Q776. Write a JavaScript function for spiral matrix and handle empty input.
{
  function forSpiralMatrixHandleEmpty(matrix) {
    const result = [];
    let top = 0, bottom = matrix.length - 1, left = 0, right = matrix[0].length - 1;
    while (top <= bottom && left <= right) {
      for (let i = left; i <= right; i++) result.push(matrix[top][i]);
      top++;
      for (let i = top; i <= bottom; i++) result.push(matrix[i][right]);
      right--;
      if (top <= bottom) for (let i = right; i >= left; i--) result.push(matrix[bottom][i]);
      bottom--;
      if (left <= right) for (let i = bottom; i >= top; i--) result.push(matrix[i][left]);
      left++;
    }
    return result;
  }

  // Input:
  forSpiralMatrixHandleEmpty([[1,2,3],[4,5,6],[7,8,9]]);

  // Answer:
  // [1, 2, 3, 6, 9, 8, 7, 4, 5]
}

/////////////////////////////

// PDF Q777. Solve a coding problem using merge intervals without using unnecessary built-in shortcuts.
{
  function mergeIntervalsWithoutUnnecessaryBuilt(intervals) {
    intervals.sort((a, b) => a[0] - b[0]);
    const result = [];
    for (const current of intervals) {
      const last = result[result.length - 1];
      if (!last || current[0] > last[1]) result.push(current);
      else last[1] = Math.max(last[1], current[1]);
    }
    return result;
  }

  // Input:
  mergeIntervalsWithoutUnnecessaryBuilt([[1,3],[2,6],[8,10]]);

  // Answer:
  // [[1, 6], [8, 10]]
}

/////////////////////////////

// PDF Q778. Write clean code for rotate matrix and explain time complexity in comments.
{
  function forRotateMatrixExplainTime(matrix) {
    const n = matrix.length;
    for (let row = 0; row < n; row++) {
      for (let col = row + 1; col < n; col++) [matrix[row][col], matrix[col][row]] = [matrix[col][row], matrix[row][col]];
    }
    for (const row of matrix) row.reverse();
    return matrix;
  }

  // Input:
  forRotateMatrixExplainTime([[1,2],[3,4]]);

  // Answer:
  // [[3, 1], [4, 2]]
}

/////////////////////////////

// PDF Q779. Create an interview-style solution for set matrix zeroes with at least 3 test cases.
{
  function forSetMatrixZeroesAt(matrix) {
    const rows = new Set(), cols = new Set();
    for (let r = 0; r < matrix.length; r++) for (let c = 0; c < matrix[r].length; c++) if (matrix[r][c] === 0) { rows.add(r); cols.add(c); }
    for (let r = 0; r < matrix.length; r++) for (let c = 0; c < matrix[r].length; c++) if (rows.has(r) || cols.has(c)) matrix[r][c] = 0;
    return matrix;
  }

  // Input:
  forSetMatrixZeroesAt([[1,1,1],[1,0,1],[1,1,1]]);

  // Answer:
  // [[1, 0, 1], [0, 0, 0], [1, 0, 1]]
}

/////////////////////////////

// PDF Q781. Write a JavaScript function for three sum and handle empty input.
{
  function forThreeSumHandleEmpty(nums) {
    nums.sort((a, b) => a - b);
    const result = [];
    for (let i = 0; i < nums.length - 2; i++) {
      if (i > 0 && nums[i] === nums[i - 1]) continue;
      let left = i + 1, right = nums.length - 1;
      while (left < right) {
        const sum = nums[i] + nums[left] + nums[right];
        if (sum === 0) {
          result.push([nums[i], nums[left], nums[right]]);
          while (nums[left] === nums[left + 1]) left++;
          while (nums[right] === nums[right - 1]) right--;
          left++; right--;
        } else if (sum < 0) left++;
        else right--;
      }
    }
    return result;
  }

  // Input:
  forThreeSumHandleEmpty([-1, 0, 1, 2, -1, -4]);

  // Answer:
  // [[-1, -1, 2], [-1, 0, 1]]
}

/////////////////////////////

// PDF Q782. Solve a coding problem using subarray sum without using unnecessary built-in shortcuts.
{
  function subarraySumWithoutUnnecessaryBuilt(nums, target) {
    let sum = 0;
    const seen = new Map([[0, -1]]);
    for (let i = 0; i < nums.length; i++) {
      sum += nums[i];
      if (seen.has(sum - target)) return [seen.get(sum - target) + 1, i];
      seen.set(sum, i);
    }
    return [];
  }

  // Input:
  subarraySumWithoutUnnecessaryBuilt([1, 2, 3, 4], 5);

  // Answer:
  // [1, 2]
}

/////////////////////////////

// PDF Q785. Debug a broken JavaScript snippet related to product except self and rewrite it correctly.
{
  function productExceptSelfIt(nums) {
    const result = Array(nums.length).fill(1);
    let left = 1;
    for (let i = 0; i < nums.length; i++) { result[i] *= left; left *= nums[i]; }
    let right = 1;
    for (let i = nums.length - 1; i >= 0; i--) { result[i] *= right; right *= nums[i]; }
    return result;
  }

  // Input:
  productExceptSelfIt([1, 2, 3, 4]);

  // Answer:
  // [24, 12, 8, 6]
}

/////////////////////////////

// PDF Q786. Write a JavaScript function for spiral matrix and handle empty input.
{
  function forSpiralMatrixHandleEmpty(matrix) {
    const result = [];
    let top = 0, bottom = matrix.length - 1, left = 0, right = matrix[0].length - 1;
    while (top <= bottom && left <= right) {
      for (let i = left; i <= right; i++) result.push(matrix[top][i]);
      top++;
      for (let i = top; i <= bottom; i++) result.push(matrix[i][right]);
      right--;
      if (top <= bottom) for (let i = right; i >= left; i--) result.push(matrix[bottom][i]);
      bottom--;
      if (left <= right) for (let i = bottom; i >= top; i--) result.push(matrix[i][left]);
      left++;
    }
    return result;
  }

  // Input:
  forSpiralMatrixHandleEmpty([[1,2,3],[4,5,6],[7,8,9]]);

  // Answer:
  // [1, 2, 3, 6, 9, 8, 7, 4, 5]
}

/////////////////////////////

// PDF Q787. Solve a coding problem using merge intervals without using unnecessary built-in shortcuts.
{
  function mergeIntervalsWithoutUnnecessaryBuilt(intervals) {
    intervals.sort((a, b) => a[0] - b[0]);
    const result = [];
    for (const current of intervals) {
      const last = result[result.length - 1];
      if (!last || current[0] > last[1]) result.push(current);
      else last[1] = Math.max(last[1], current[1]);
    }
    return result;
  }

  // Input:
  mergeIntervalsWithoutUnnecessaryBuilt([[1,3],[2,6],[8,10]]);

  // Answer:
  // [[1, 6], [8, 10]]
}

/////////////////////////////

// PDF Q788. Write clean code for rotate matrix and explain time complexity in comments.
{
  function forRotateMatrixExplainTime(matrix) {
    const n = matrix.length;
    for (let row = 0; row < n; row++) {
      for (let col = row + 1; col < n; col++) [matrix[row][col], matrix[col][row]] = [matrix[col][row], matrix[row][col]];
    }
    for (const row of matrix) row.reverse();
    return matrix;
  }

  // Input:
  forRotateMatrixExplainTime([[1,2],[3,4]]);

  // Answer:
  // [[3, 1], [4, 2]]
}

/////////////////////////////

// PDF Q789. Create an interview-style solution for set matrix zeroes with at least 3 test cases.
{
  function forSetMatrixZeroesAt(matrix) {
    const rows = new Set(), cols = new Set();
    for (let r = 0; r < matrix.length; r++) for (let c = 0; c < matrix[r].length; c++) if (matrix[r][c] === 0) { rows.add(r); cols.add(c); }
    for (let r = 0; r < matrix.length; r++) for (let c = 0; c < matrix[r].length; c++) if (rows.has(r) || cols.has(c)) matrix[r][c] = 0;
    return matrix;
  }

  // Input:
  forSetMatrixZeroesAt([[1,1,1],[1,0,1],[1,1,1]]);

  // Answer:
  // [[1, 0, 1], [0, 0, 0], [1, 0, 1]]
}

/////////////////////////////

// PDF Q791. Write a JavaScript function for three sum and handle empty input.
{
  function forThreeSumHandleEmpty(nums) {
    nums.sort((a, b) => a - b);
    const result = [];
    for (let i = 0; i < nums.length - 2; i++) {
      if (i > 0 && nums[i] === nums[i - 1]) continue;
      let left = i + 1, right = nums.length - 1;
      while (left < right) {
        const sum = nums[i] + nums[left] + nums[right];
        if (sum === 0) {
          result.push([nums[i], nums[left], nums[right]]);
          while (nums[left] === nums[left + 1]) left++;
          while (nums[right] === nums[right - 1]) right--;
          left++; right--;
        } else if (sum < 0) left++;
        else right--;
      }
    }
    return result;
  }

  // Input:
  forThreeSumHandleEmpty([-1, 0, 1, 2, -1, -4]);

  // Answer:
  // [[-1, -1, 2], [-1, 0, 1]]
}

/////////////////////////////

// PDF Q792. Solve a coding problem using subarray sum without using unnecessary built-in shortcuts.
{
  function subarraySumWithoutUnnecessaryBuilt(nums, target) {
    let sum = 0;
    const seen = new Map([[0, -1]]);
    for (let i = 0; i < nums.length; i++) {
      sum += nums[i];
      if (seen.has(sum - target)) return [seen.get(sum - target) + 1, i];
      seen.set(sum, i);
    }
    return [];
  }

  // Input:
  subarraySumWithoutUnnecessaryBuilt([1, 2, 3, 4], 5);

  // Answer:
  // [1, 2]
}

/////////////////////////////

// PDF Q795. Debug a broken JavaScript snippet related to product except self and rewrite it correctly.
{
  function productExceptSelfIt(nums) {
    const result = Array(nums.length).fill(1);
    let left = 1;
    for (let i = 0; i < nums.length; i++) { result[i] *= left; left *= nums[i]; }
    let right = 1;
    for (let i = nums.length - 1; i >= 0; i--) { result[i] *= right; right *= nums[i]; }
    return result;
  }

  // Input:
  productExceptSelfIt([1, 2, 3, 4]);

  // Answer:
  // [24, 12, 8, 6]
}

/////////////////////////////

// PDF Q796. Write a JavaScript function for spiral matrix and handle empty input.
{
  function forSpiralMatrixHandleEmpty(matrix) {
    const result = [];
    let top = 0, bottom = matrix.length - 1, left = 0, right = matrix[0].length - 1;
    while (top <= bottom && left <= right) {
      for (let i = left; i <= right; i++) result.push(matrix[top][i]);
      top++;
      for (let i = top; i <= bottom; i++) result.push(matrix[i][right]);
      right--;
      if (top <= bottom) for (let i = right; i >= left; i--) result.push(matrix[bottom][i]);
      bottom--;
      if (left <= right) for (let i = bottom; i >= top; i--) result.push(matrix[i][left]);
      left++;
    }
    return result;
  }

  // Input:
  forSpiralMatrixHandleEmpty([[1,2,3],[4,5,6],[7,8,9]]);

  // Answer:
  // [1, 2, 3, 6, 9, 8, 7, 4, 5]
}

/////////////////////////////

// PDF Q797. Solve a coding problem using merge intervals without using unnecessary built-in shortcuts.
{
  function mergeIntervalsWithoutUnnecessaryBuilt(intervals) {
    intervals.sort((a, b) => a[0] - b[0]);
    const result = [];
    for (const current of intervals) {
      const last = result[result.length - 1];
      if (!last || current[0] > last[1]) result.push(current);
      else last[1] = Math.max(last[1], current[1]);
    }
    return result;
  }

  // Input:
  mergeIntervalsWithoutUnnecessaryBuilt([[1,3],[2,6],[8,10]]);

  // Answer:
  // [[1, 6], [8, 10]]
}

/////////////////////////////

// PDF Q798. Write clean code for rotate matrix and explain time complexity in comments.
{
  function forRotateMatrixExplainTime(matrix) {
    const n = matrix.length;
    for (let row = 0; row < n; row++) {
      for (let col = row + 1; col < n; col++) [matrix[row][col], matrix[col][row]] = [matrix[col][row], matrix[row][col]];
    }
    for (const row of matrix) row.reverse();
    return matrix;
  }

  // Input:
  forRotateMatrixExplainTime([[1,2],[3,4]]);

  // Answer:
  // [[3, 1], [4, 2]]
}

/////////////////////////////

// PDF Q799. Create an interview-style solution for set matrix zeroes with at least 3 test cases.
{
  function forSetMatrixZeroesAt(matrix) {
    const rows = new Set(), cols = new Set();
    for (let r = 0; r < matrix.length; r++) for (let c = 0; c < matrix[r].length; c++) if (matrix[r][c] === 0) { rows.add(r); cols.add(c); }
    for (let r = 0; r < matrix.length; r++) for (let c = 0; c < matrix[r].length; c++) if (rows.has(r) || cols.has(c)) matrix[r][c] = 0;
    return matrix;
  }

  // Input:
  forSetMatrixZeroesAt([[1,1,1],[1,0,1],[1,1,1]]);

  // Answer:
  // [[1, 0, 1], [0, 0, 0], [1, 0, 1]]
}

/////////////////////////////

