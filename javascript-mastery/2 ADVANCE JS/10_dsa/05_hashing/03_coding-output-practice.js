"use strict";

/*
Path: 2 ADVANCE JS\10_dsa\05_hashing\03_coding-output-practice.js
Topic: Hashing
Question bank: Hashing focused practice

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

// PDF Q63. Write a function to count frequency of each character.
{
  function countFrequencyOfEachCharacter(items) {
    const seen = new Set();
    const result = [];
    for (const item of items) {
      if (!seen.has(item)) {
        seen.add(item);
        result.push(item);
      }
    }
    return result;
  }

  // Input:
  countFrequencyOfEachCharacter([1, 1, 2, 3]);

  // Answer:
  // [1, 2, 3]
}

/////////////////////////////

// PDF Q89. Write a function to extract hashtags from a sentence.
{
  function extractHashtagsFromSentence(items) {
    const seen = new Set();
    const result = [];
    for (const item of items) {
      if (!seen.has(item)) {
        seen.add(item);
        result.push(item);
      }
    }
    return result;
  }

  // Input:
  extractHashtagsFromSentence([1, 1, 2, 3]);

  // Answer:
  // [1, 2, 3]
}

/////////////////////////////

// PDF Q113. Write a function to remove duplicate numbers from an array.
{
  function removeDuplicateNumbersFromArray(nums) {
    const seen = new Set();
    for (const num of nums) {
      if (seen.has(num)) return num;
      seen.add(num);
    }
    return null;
  }

  // Input:
  removeDuplicateNumbersFromArray([1, 3, 4, 2, 2]);

  // Answer:
  // 2
}

/////////////////////////////

// PDF Q114. Write a function to find duplicate numbers in an array.
{
  function findDuplicateNumbersInArray(nums) {
    const seen = new Set();
    for (const num of nums) {
      if (seen.has(num)) return num;
      seen.add(num);
    }
    return null;
  }

  // Input:
  findDuplicateNumbersInArray([1, 3, 4, 2, 2]);

  // Answer:
  // 2
}

/////////////////////////////

// PDF Q122. Write a function to find missing number from 1 to n.
{
  function findMissingNumberFrom1(nums) {
    const n = nums.length;
    const expected = n * (n + 1) / 2;
    const actual = nums.reduce((sum, num) => sum + num, 0);
    return expected - actual;
  }

  // Input:
  findMissingNumberFrom1([0, 1, 3]);

  // Answer:
  // 2
}

/////////////////////////////

// PDF Q123. Write a function to find multiple missing numbers from 1 to n.
{
  function findMultipleMissingNumbersFrom(nums) {
    const n = nums.length;
    const expected = n * (n + 1) / 2;
    const actual = nums.reduce((sum, num) => sum + num, 0);
    return expected - actual;
  }

  // Input:
  findMultipleMissingNumbersFrom([0, 1, 3]);

  // Answer:
  // 2
}

/////////////////////////////

// PDF Q131. Write a function to find frequency of each number.
{
  function findFrequencyOfEachNumber(items) {
    const seen = new Set();
    const result = [];
    for (const item of items) {
      if (!seen.has(item)) {
        seen.add(item);
        result.push(item);
      }
    }
    return result;
  }

  // Input:
  findFrequencyOfEachNumber([1, 1, 2, 3]);

  // Answer:
  // [1, 2, 3]
}

/////////////////////////////

// PDF Q604. Create an interview-style solution for hash map with at least 3 test cases.
{
  function forHashMapAt3(items) {
    return items.map((item) => item * 2);
  }

  // Input:
  forHashMapAt3([1, 2, 3]);

  // Answer:
  // [2, 4, 6]
}

/////////////////////////////

// PDF Q614. Create an interview-style solution for hash map with at least 3 test cases.
{
  function forHashMapAt3(items) {
    return items.map((item) => item * 2);
  }

  // Input:
  forHashMapAt3([1, 2, 3]);

  // Answer:
  // [2, 4, 6]
}

/////////////////////////////

// PDF Q624. Create an interview-style solution for hash map with at least 3 test cases.
{
  function forHashMapAt3(items) {
    return items.map((item) => item * 2);
  }

  // Input:
  forHashMapAt3([1, 2, 3]);

  // Answer:
  // [2, 4, 6]
}

/////////////////////////////

// PDF Q634. Create an interview-style solution for hash map with at least 3 test cases.
{
  function forHashMapAt3(items) {
    return items.map((item) => item * 2);
  }

  // Input:
  forHashMapAt3([1, 2, 3]);

  // Answer:
  // [2, 4, 6]
}

/////////////////////////////

// PDF Q644. Create an interview-style solution for hash map with at least 3 test cases.
{
  function forHashMapAt3(items) {
    return items.map((item) => item * 2);
  }

  // Input:
  forHashMapAt3([1, 2, 3]);

  // Answer:
  // [2, 4, 6]
}

/////////////////////////////

// PDF Q701. Write a JavaScript function for two sum and handle empty input.
{
  function forTwoSumHandleEmpty(nums, target) {
    const seen = new Map();
    for (let i = 0; i < nums.length; i++) {
      const need = target - nums[i];
      if (seen.has(need)) return [seen.get(need), i];
      seen.set(nums[i], i);
    }
    return [];
  }

  // Input:
  forTwoSumHandleEmpty([2, 7, 11, 15], 9);

  // Answer:
  // [0, 1]
}

/////////////////////////////

// PDF Q703. Write clean code for missing number and explain time complexity in comments.
{
  function forMissingNumberExplainTime(nums) {
    const n = nums.length;
    const expected = n * (n + 1) / 2;
    const actual = nums.reduce((sum, num) => sum + num, 0);
    return expected - actual;
  }

  // Input:
  forMissingNumberExplainTime([0, 1, 3]);

  // Answer:
  // 2
}

/////////////////////////////

// PDF Q704. Create an interview-style solution for duplicate number with at least 3 test cases.
{
  function forDuplicateNumberAt3(nums) {
    const seen = new Set();
    for (const num of nums) {
      if (seen.has(num)) return num;
      seen.add(num);
    }
    return null;
  }

  // Input:
  forDuplicateNumberAt3([1, 3, 4, 2, 2]);

  // Answer:
  // 2
}

/////////////////////////////

// PDF Q709. Create an interview-style solution for single number with at least 3 test cases.
{
  function forSingleNumberAt3(nums) {
    return nums.reduce((unique, num) => unique ^ num, 0);
  }

  // Input:
  forSingleNumberAt3([4, 1, 2, 1, 2]);

  // Answer:
  // 4
}

/////////////////////////////

// PDF Q710. Debug a broken JavaScript snippet related to majority element and rewrite it correctly.
{
  function majorityElementIt(nums) {
    let candidate = null, count = 0;
    for (const num of nums) {
      if (count === 0) candidate = num;
      count += num === candidate ? 1 : -1;
    }
    return candidate;
  }

  // Input:
  majorityElementIt([3, 2, 3]);

  // Answer:
  // 3
}

/////////////////////////////

// PDF Q711. Write a JavaScript function for two sum and handle empty input.
{
  function forTwoSumHandleEmpty(nums, target) {
    const seen = new Map();
    for (let i = 0; i < nums.length; i++) {
      const need = target - nums[i];
      if (seen.has(need)) return [seen.get(need), i];
      seen.set(nums[i], i);
    }
    return [];
  }

  // Input:
  forTwoSumHandleEmpty([2, 7, 11, 15], 9);

  // Answer:
  // [0, 1]
}

/////////////////////////////

// PDF Q713. Write clean code for missing number and explain time complexity in comments.
{
  function forMissingNumberExplainTime(nums) {
    const n = nums.length;
    const expected = n * (n + 1) / 2;
    const actual = nums.reduce((sum, num) => sum + num, 0);
    return expected - actual;
  }

  // Input:
  forMissingNumberExplainTime([0, 1, 3]);

  // Answer:
  // 2
}

/////////////////////////////

// PDF Q714. Create an interview-style solution for duplicate number with at least 3 test cases.
{
  function forDuplicateNumberAt3(nums) {
    const seen = new Set();
    for (const num of nums) {
      if (seen.has(num)) return num;
      seen.add(num);
    }
    return null;
  }

  // Input:
  forDuplicateNumberAt3([1, 3, 4, 2, 2]);

  // Answer:
  // 2
}

/////////////////////////////

// PDF Q719. Create an interview-style solution for single number with at least 3 test cases.
{
  function forSingleNumberAt3(nums) {
    return nums.reduce((unique, num) => unique ^ num, 0);
  }

  // Input:
  forSingleNumberAt3([4, 1, 2, 1, 2]);

  // Answer:
  // 4
}

/////////////////////////////

// PDF Q720. Debug a broken JavaScript snippet related to majority element and rewrite it correctly.
{
  function majorityElementIt(nums) {
    let candidate = null, count = 0;
    for (const num of nums) {
      if (count === 0) candidate = num;
      count += num === candidate ? 1 : -1;
    }
    return candidate;
  }

  // Input:
  majorityElementIt([3, 2, 3]);

  // Answer:
  // 3
}

/////////////////////////////

// PDF Q721. Write a JavaScript function for two sum and handle empty input.
{
  function forTwoSumHandleEmpty(nums, target) {
    const seen = new Map();
    for (let i = 0; i < nums.length; i++) {
      const need = target - nums[i];
      if (seen.has(need)) return [seen.get(need), i];
      seen.set(nums[i], i);
    }
    return [];
  }

  // Input:
  forTwoSumHandleEmpty([2, 7, 11, 15], 9);

  // Answer:
  // [0, 1]
}

/////////////////////////////

// PDF Q723. Write clean code for missing number and explain time complexity in comments.
{
  function forMissingNumberExplainTime(nums) {
    const n = nums.length;
    const expected = n * (n + 1) / 2;
    const actual = nums.reduce((sum, num) => sum + num, 0);
    return expected - actual;
  }

  // Input:
  forMissingNumberExplainTime([0, 1, 3]);

  // Answer:
  // 2
}

/////////////////////////////

// PDF Q724. Create an interview-style solution for duplicate number with at least 3 test cases.
{
  function forDuplicateNumberAt3(nums) {
    const seen = new Set();
    for (const num of nums) {
      if (seen.has(num)) return num;
      seen.add(num);
    }
    return null;
  }

  // Input:
  forDuplicateNumberAt3([1, 3, 4, 2, 2]);

  // Answer:
  // 2
}

/////////////////////////////

// PDF Q729. Create an interview-style solution for single number with at least 3 test cases.
{
  function forSingleNumberAt3(nums) {
    return nums.reduce((unique, num) => unique ^ num, 0);
  }

  // Input:
  forSingleNumberAt3([4, 1, 2, 1, 2]);

  // Answer:
  // 4
}

/////////////////////////////

// PDF Q730. Debug a broken JavaScript snippet related to majority element and rewrite it correctly.
{
  function majorityElementIt(nums) {
    let candidate = null, count = 0;
    for (const num of nums) {
      if (count === 0) candidate = num;
      count += num === candidate ? 1 : -1;
    }
    return candidate;
  }

  // Input:
  majorityElementIt([3, 2, 3]);

  // Answer:
  // 3
}

/////////////////////////////

// PDF Q731. Write a JavaScript function for two sum and handle empty input.
{
  function forTwoSumHandleEmpty(nums, target) {
    const seen = new Map();
    for (let i = 0; i < nums.length; i++) {
      const need = target - nums[i];
      if (seen.has(need)) return [seen.get(need), i];
      seen.set(nums[i], i);
    }
    return [];
  }

  // Input:
  forTwoSumHandleEmpty([2, 7, 11, 15], 9);

  // Answer:
  // [0, 1]
}

/////////////////////////////

// PDF Q733. Write clean code for missing number and explain time complexity in comments.
{
  function forMissingNumberExplainTime(nums) {
    const n = nums.length;
    const expected = n * (n + 1) / 2;
    const actual = nums.reduce((sum, num) => sum + num, 0);
    return expected - actual;
  }

  // Input:
  forMissingNumberExplainTime([0, 1, 3]);

  // Answer:
  // 2
}

/////////////////////////////

// PDF Q734. Create an interview-style solution for duplicate number with at least 3 test cases.
{
  function forDuplicateNumberAt3(nums) {
    const seen = new Set();
    for (const num of nums) {
      if (seen.has(num)) return num;
      seen.add(num);
    }
    return null;
  }

  // Input:
  forDuplicateNumberAt3([1, 3, 4, 2, 2]);

  // Answer:
  // 2
}

/////////////////////////////

// PDF Q739. Create an interview-style solution for single number with at least 3 test cases.
{
  function forSingleNumberAt3(nums) {
    return nums.reduce((unique, num) => unique ^ num, 0);
  }

  // Input:
  forSingleNumberAt3([4, 1, 2, 1, 2]);

  // Answer:
  // 4
}

/////////////////////////////

// PDF Q740. Debug a broken JavaScript snippet related to majority element and rewrite it correctly.
{
  function majorityElementIt(nums) {
    let candidate = null, count = 0;
    for (const num of nums) {
      if (count === 0) candidate = num;
      count += num === candidate ? 1 : -1;
    }
    return candidate;
  }

  // Input:
  majorityElementIt([3, 2, 3]);

  // Answer:
  // 3
}

/////////////////////////////

// PDF Q741. Write a JavaScript function for two sum and handle empty input.
{
  function forTwoSumHandleEmpty(nums, target) {
    const seen = new Map();
    for (let i = 0; i < nums.length; i++) {
      const need = target - nums[i];
      if (seen.has(need)) return [seen.get(need), i];
      seen.set(nums[i], i);
    }
    return [];
  }

  // Input:
  forTwoSumHandleEmpty([2, 7, 11, 15], 9);

  // Answer:
  // [0, 1]
}

/////////////////////////////

// PDF Q743. Write clean code for missing number and explain time complexity in comments.
{
  function forMissingNumberExplainTime(nums) {
    const n = nums.length;
    const expected = n * (n + 1) / 2;
    const actual = nums.reduce((sum, num) => sum + num, 0);
    return expected - actual;
  }

  // Input:
  forMissingNumberExplainTime([0, 1, 3]);

  // Answer:
  // 2
}

/////////////////////////////

// PDF Q744. Create an interview-style solution for duplicate number with at least 3 test cases.
{
  function forDuplicateNumberAt3(nums) {
    const seen = new Set();
    for (const num of nums) {
      if (seen.has(num)) return num;
      seen.add(num);
    }
    return null;
  }

  // Input:
  forDuplicateNumberAt3([1, 3, 4, 2, 2]);

  // Answer:
  // 2
}

/////////////////////////////

// PDF Q749. Create an interview-style solution for single number with at least 3 test cases.
{
  function forSingleNumberAt3(nums) {
    return nums.reduce((unique, num) => unique ^ num, 0);
  }

  // Input:
  forSingleNumberAt3([4, 1, 2, 1, 2]);

  // Answer:
  // 4
}

/////////////////////////////

// PDF Q750. Debug a broken JavaScript snippet related to majority element and rewrite it correctly.
{
  function majorityElementIt(nums) {
    let candidate = null, count = 0;
    for (const num of nums) {
      if (count === 0) candidate = num;
      count += num === candidate ? 1 : -1;
    }
    return candidate;
  }

  // Input:
  majorityElementIt([3, 2, 3]);

  // Answer:
  // 3
}

/////////////////////////////

// PDF Q754. Create an interview-style solution for group anagrams with at least 3 test cases.
{
  function forGroupAnagramsAt3(words) {
    const groups = new Map();
    for (const word of words) {
      const key = word.split('').sort().join('');
      if (!groups.has(key)) groups.set(key, []);
      groups.get(key).push(word);
    }
    return [...groups.values()];
  }

  // Input:
  forGroupAnagramsAt3(['eat', 'tea', 'tan', 'ate', 'nat', 'bat']);

  // Answer:
  // [ ["eat", "tea", "ate"], ["tan", "nat"], ["bat"] ]
}

/////////////////////////////

// PDF Q764. Create an interview-style solution for group anagrams with at least 3 test cases.
{
  function forGroupAnagramsAt3(words) {
    const groups = new Map();
    for (const word of words) {
      const key = word.split('').sort().join('');
      if (!groups.has(key)) groups.set(key, []);
      groups.get(key).push(word);
    }
    return [...groups.values()];
  }

  // Input:
  forGroupAnagramsAt3(['eat', 'tea', 'tan', 'ate', 'nat', 'bat']);

  // Answer:
  // [ ["eat", "tea", "ate"], ["tan", "nat"], ["bat"] ]
}

/////////////////////////////

// PDF Q774. Create an interview-style solution for group anagrams with at least 3 test cases.
{
  function forGroupAnagramsAt3(words) {
    const groups = new Map();
    for (const word of words) {
      const key = word.split('').sort().join('');
      if (!groups.has(key)) groups.set(key, []);
      groups.get(key).push(word);
    }
    return [...groups.values()];
  }

  // Input:
  forGroupAnagramsAt3(['eat', 'tea', 'tan', 'ate', 'nat', 'bat']);

  // Answer:
  // [ ["eat", "tea", "ate"], ["tan", "nat"], ["bat"] ]
}

/////////////////////////////

// PDF Q784. Create an interview-style solution for group anagrams with at least 3 test cases.
{
  function forGroupAnagramsAt3(words) {
    const groups = new Map();
    for (const word of words) {
      const key = word.split('').sort().join('');
      if (!groups.has(key)) groups.set(key, []);
      groups.get(key).push(word);
    }
    return [...groups.values()];
  }

  // Input:
  forGroupAnagramsAt3(['eat', 'tea', 'tan', 'ate', 'nat', 'bat']);

  // Answer:
  // [ ["eat", "tea", "ate"], ["tan", "nat"], ["bat"] ]
}

/////////////////////////////

// PDF Q794. Create an interview-style solution for group anagrams with at least 3 test cases.
{
  function forGroupAnagramsAt3(words) {
    const groups = new Map();
    for (const word of words) {
      const key = word.split('').sort().join('');
      if (!groups.has(key)) groups.set(key, []);
      groups.get(key).push(word);
    }
    return [...groups.values()];
  }

  // Input:
  forGroupAnagramsAt3(['eat', 'tea', 'tan', 'ate', 'nat', 'bat']);

  // Answer:
  // [ ["eat", "tea", "ate"], ["tan", "nat"], ["bat"] ]
}

/////////////////////////////

