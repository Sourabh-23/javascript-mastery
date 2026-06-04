"use strict";

/*
Path: 2 ADVANCE JS\10_dsa\07_sliding-window\03_coding-output-practice.js
Topic: Sliding Window
Question bank: Sliding Window focused practice

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

// PDF Q705. Debug a broken JavaScript snippet related to max profit and rewrite it correctly.
{
  function maxProfitIt(prices) {
    let minPrice = Infinity;
    let profit = 0;
    for (const price of prices) {
      minPrice = Math.min(minPrice, price);
      profit = Math.max(profit, price - minPrice);
    }
    return profit;
  }

  // Input:
  maxProfitIt([7, 1, 5, 3, 6, 4]);

  // Answer:
  // 5
}

/////////////////////////////

// PDF Q715. Debug a broken JavaScript snippet related to max profit and rewrite it correctly.
{
  function maxProfitIt(prices) {
    let minPrice = Infinity;
    let profit = 0;
    for (const price of prices) {
      minPrice = Math.min(minPrice, price);
      profit = Math.max(profit, price - minPrice);
    }
    return profit;
  }

  // Input:
  maxProfitIt([7, 1, 5, 3, 6, 4]);

  // Answer:
  // 5
}

/////////////////////////////

// PDF Q725. Debug a broken JavaScript snippet related to max profit and rewrite it correctly.
{
  function maxProfitIt(prices) {
    let minPrice = Infinity;
    let profit = 0;
    for (const price of prices) {
      minPrice = Math.min(minPrice, price);
      profit = Math.max(profit, price - minPrice);
    }
    return profit;
  }

  // Input:
  maxProfitIt([7, 1, 5, 3, 6, 4]);

  // Answer:
  // 5
}

/////////////////////////////

// PDF Q735. Debug a broken JavaScript snippet related to max profit and rewrite it correctly.
{
  function maxProfitIt(prices) {
    let minPrice = Infinity;
    let profit = 0;
    for (const price of prices) {
      minPrice = Math.min(minPrice, price);
      profit = Math.max(profit, price - minPrice);
    }
    return profit;
  }

  // Input:
  maxProfitIt([7, 1, 5, 3, 6, 4]);

  // Answer:
  // 5
}

/////////////////////////////

// PDF Q745. Debug a broken JavaScript snippet related to max profit and rewrite it correctly.
{
  function maxProfitIt(prices) {
    let minPrice = Infinity;
    let profit = 0;
    for (const price of prices) {
      minPrice = Math.min(minPrice, price);
      profit = Math.max(profit, price - minPrice);
    }
    return profit;
  }

  // Input:
  maxProfitIt([7, 1, 5, 3, 6, 4]);

  // Answer:
  // 5
}

/////////////////////////////

// PDF Q753. Write clean code for longest substring and explain time complexity in comments.
{
  function forLongestSubstringExplainTime(str) {
    const seen = new Map();
    let left = 0, best = 0;
    for (let right = 0; right < str.length; right++) {
      if (seen.has(str[right]) && seen.get(str[right]) >= left) left = seen.get(str[right]) + 1;
      seen.set(str[right], right);
      best = Math.max(best, right - left + 1);
    }
    return best;
  }

  // Input:
  forLongestSubstringExplainTime('abcabcbb');

  // Answer:
  // 3
}

/////////////////////////////

// PDF Q760. Debug a broken JavaScript snippet related to longest consecutive sequence and rewrite it correctly.
{
  function longestConsecutiveSequenceIt(nums) {
    const set = new Set(nums);
    let best = 0;
    for (const num of set) {
      if (!set.has(num - 1)) {
        let current = num;
        while (set.has(current)) current++;
        best = Math.max(best, current - num);
      }
    }
    return best;
  }

  // Input:
  longestConsecutiveSequenceIt([100, 4, 200, 1, 3, 2]);

  // Answer:
  // 4
}

/////////////////////////////

// PDF Q763. Write clean code for longest substring and explain time complexity in comments.
{
  function forLongestSubstringExplainTime(str) {
    const seen = new Map();
    let left = 0, best = 0;
    for (let right = 0; right < str.length; right++) {
      if (seen.has(str[right]) && seen.get(str[right]) >= left) left = seen.get(str[right]) + 1;
      seen.set(str[right], right);
      best = Math.max(best, right - left + 1);
    }
    return best;
  }

  // Input:
  forLongestSubstringExplainTime('abcabcbb');

  // Answer:
  // 3
}

/////////////////////////////

// PDF Q770. Debug a broken JavaScript snippet related to longest consecutive sequence and rewrite it correctly.
{
  function longestConsecutiveSequenceIt(nums) {
    const set = new Set(nums);
    let best = 0;
    for (const num of set) {
      if (!set.has(num - 1)) {
        let current = num;
        while (set.has(current)) current++;
        best = Math.max(best, current - num);
      }
    }
    return best;
  }

  // Input:
  longestConsecutiveSequenceIt([100, 4, 200, 1, 3, 2]);

  // Answer:
  // 4
}

/////////////////////////////

// PDF Q773. Write clean code for longest substring and explain time complexity in comments.
{
  function forLongestSubstringExplainTime(str) {
    const seen = new Map();
    let left = 0, best = 0;
    for (let right = 0; right < str.length; right++) {
      if (seen.has(str[right]) && seen.get(str[right]) >= left) left = seen.get(str[right]) + 1;
      seen.set(str[right], right);
      best = Math.max(best, right - left + 1);
    }
    return best;
  }

  // Input:
  forLongestSubstringExplainTime('abcabcbb');

  // Answer:
  // 3
}

/////////////////////////////

// PDF Q780. Debug a broken JavaScript snippet related to longest consecutive sequence and rewrite it correctly.
{
  function longestConsecutiveSequenceIt(nums) {
    const set = new Set(nums);
    let best = 0;
    for (const num of set) {
      if (!set.has(num - 1)) {
        let current = num;
        while (set.has(current)) current++;
        best = Math.max(best, current - num);
      }
    }
    return best;
  }

  // Input:
  longestConsecutiveSequenceIt([100, 4, 200, 1, 3, 2]);

  // Answer:
  // 4
}

/////////////////////////////

// PDF Q783. Write clean code for longest substring and explain time complexity in comments.
{
  function forLongestSubstringExplainTime(str) {
    const seen = new Map();
    let left = 0, best = 0;
    for (let right = 0; right < str.length; right++) {
      if (seen.has(str[right]) && seen.get(str[right]) >= left) left = seen.get(str[right]) + 1;
      seen.set(str[right], right);
      best = Math.max(best, right - left + 1);
    }
    return best;
  }

  // Input:
  forLongestSubstringExplainTime('abcabcbb');

  // Answer:
  // 3
}

/////////////////////////////

// PDF Q790. Debug a broken JavaScript snippet related to longest consecutive sequence and rewrite it correctly.
{
  function longestConsecutiveSequenceIt(nums) {
    const set = new Set(nums);
    let best = 0;
    for (const num of set) {
      if (!set.has(num - 1)) {
        let current = num;
        while (set.has(current)) current++;
        best = Math.max(best, current - num);
      }
    }
    return best;
  }

  // Input:
  longestConsecutiveSequenceIt([100, 4, 200, 1, 3, 2]);

  // Answer:
  // 4
}

/////////////////////////////

// PDF Q793. Write clean code for longest substring and explain time complexity in comments.
{
  function forLongestSubstringExplainTime(str) {
    const seen = new Map();
    let left = 0, best = 0;
    for (let right = 0; right < str.length; right++) {
      if (seen.has(str[right]) && seen.get(str[right]) >= left) left = seen.get(str[right]) + 1;
      seen.set(str[right], right);
      best = Math.max(best, right - left + 1);
    }
    return best;
  }

  // Input:
  forLongestSubstringExplainTime('abcabcbb');

  // Answer:
  // 3
}

/////////////////////////////

// PDF Q800. Debug a broken JavaScript snippet related to longest consecutive sequence and rewrite it correctly.
{
  function longestConsecutiveSequenceIt(nums) {
    const set = new Set(nums);
    let best = 0;
    for (const num of set) {
      if (!set.has(num - 1)) {
        let current = num;
        while (set.has(current)) current++;
        best = Math.max(best, current - num);
      }
    }
    return best;
  }

  // Input:
  longestConsecutiveSequenceIt([100, 4, 200, 1, 3, 2]);

  // Answer:
  // 4
}

/////////////////////////////

