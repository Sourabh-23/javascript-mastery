"use strict";

/*
Path: 1 SIMPLE JS\05_arrays\05_filter\03_coding-output-practice.js
Topic: Filter
Question bank: Filter focused practice

How to study:
1. Read Q.
2. Hide Answer.
3. Predict output.
4. Then check Answer.
*/

// Q1. filter positives
{
  function run(nums) {
    return nums.filter((n) => n > 0);
  }

  // Input:
  run([-1, 2, 3]);

  // Answer:
  // [2, 3]
}

/////////////////////////////

// Q2. filter active
{
  function run(users) {
    return users.filter((user) => user.active).length;
  }

  // Input:
  run([{ active: true }, { active: false }]);

  // Answer:
  // 1
}

/////////////////////////////

// Q3. array length
{
  function run(items) {
    return items.length;
  }

  // Input:
  run([1, 2, 3]);

  // Answer:
  // 3
}

/////////////////////////////

// Q4. first item
{
  function run(items) {
    return items[0];
  }

  // Input:
  run(["a", "b"]);

  // Answer:
  // "a"
}

/////////////////////////////

// Q5. last item
{
  function run(items) {
    return items[items.length - 1];
  }

  // Input:
  run([1, 2, 3]);

  // Answer:
  // 3
}

/////////////////////////////

// Q6. copy with spread
{
  function run(items) {
    return [...items, 4];
  }

  // Input:
  run([1, 2, 3]);

  // Answer:
  // [1, 2, 3, 4]
}

/////////////////////////////

// Q7. loop sum
{
  function run(nums) {
    let total = 0;
    for (const n of nums) total += n;
    return total;
  }

  // Input:
  run([1, 2, 3]);

  // Answer:
  // 6
}

/////////////////////////////

// Q8. filter positives case 8
{
  function run(nums) {
    return nums.filter((n) => n > 0);
  }

  // Input:
  run([-1, 2, 3]);

  // Answer:
  // [2, 3]
}

/////////////////////////////

// Q9. filter active case 9
{
  function run(users) {
    return users.filter((user) => user.active).length;
  }

  // Input:
  run([{ active: true }, { active: false }]);

  // Answer:
  // 1
}

/////////////////////////////

// Q10. array length case 10
{
  function run(items) {
    return items.length;
  }

  // Input:
  run([1, 2, 3]);

  // Answer:
  // 3
}

/////////////////////////////

// Q11. first item case 11
{
  function run(items) {
    return items[0];
  }

  // Input:
  run(["a", "b"]);

  // Answer:
  // "a"
}

/////////////////////////////

// Q12. last item case 12
{
  function run(items) {
    return items[items.length - 1];
  }

  // Input:
  run([1, 2, 3]);

  // Answer:
  // 3
}

/////////////////////////////

// Q13. copy with spread case 13
{
  function run(items) {
    return [...items, 4];
  }

  // Input:
  run([1, 2, 3]);

  // Answer:
  // [1, 2, 3, 4]
}

/////////////////////////////

// Q14. loop sum case 14
{
  function run(nums) {
    let total = 0;
    for (const n of nums) total += n;
    return total;
  }

  // Input:
  run([1, 2, 3]);

  // Answer:
  // 6
}

/////////////////////////////

// Q15. filter positives case 15
{
  function run(nums) {
    return nums.filter((n) => n > 0);
  }

  // Input:
  run([-1, 2, 3]);

  // Answer:
  // [2, 3]
}

/////////////////////////////

// Q16. filter active case 16
{
  function run(users) {
    return users.filter((user) => user.active).length;
  }

  // Input:
  run([{ active: true }, { active: false }]);

  // Answer:
  // 1
}

/////////////////////////////

// Q17. array length case 17
{
  function run(items) {
    return items.length;
  }

  // Input:
  run([1, 2, 3]);

  // Answer:
  // 3
}

/////////////////////////////

// Q18. first item case 18
{
  function run(items) {
    return items[0];
  }

  // Input:
  run(["a", "b"]);

  // Answer:
  // "a"
}

/////////////////////////////

// Q19. last item case 19
{
  function run(items) {
    return items[items.length - 1];
  }

  // Input:
  run([1, 2, 3]);

  // Answer:
  // 3
}

/////////////////////////////

// Q20. copy with spread case 20
{
  function run(items) {
    return [...items, 4];
  }

  // Input:
  run([1, 2, 3]);

  // Answer:
  // [1, 2, 3, 4]
}

/////////////////////////////

// Q21. loop sum case 21
{
  function run(nums) {
    let total = 0;
    for (const n of nums) total += n;
    return total;
  }

  // Input:
  run([1, 2, 3]);

  // Answer:
  // 6
}

/////////////////////////////

// Q22. filter positives case 22
{
  function run(nums) {
    return nums.filter((n) => n > 0);
  }

  // Input:
  run([-1, 2, 3]);

  // Answer:
  // [2, 3]
}

/////////////////////////////

// Q23. filter active case 23
{
  function run(users) {
    return users.filter((user) => user.active).length;
  }

  // Input:
  run([{ active: true }, { active: false }]);

  // Answer:
  // 1
}

/////////////////////////////

// Q24. array length case 24
{
  function run(items) {
    return items.length;
  }

  // Input:
  run([1, 2, 3]);

  // Answer:
  // 3
}

/////////////////////////////

// Q25. first item case 25
{
  function run(items) {
    return items[0];
  }

  // Input:
  run(["a", "b"]);

  // Answer:
  // "a"
}

/////////////////////////////

// ================= PDF BASED PRACTICE =================

// PDF Q14. Write a function that accepts mixed values and returns only valid numbers.
{
  function acceptsMixedValuesReturnsOnly(items) {
    return items.filter(Boolean).map((item) => item);
  }

  // Input:
  acceptsMixedValuesReturnsOnly([0, 'a', false, 'b']);

  // Answer:
  // ["a", "b"]
}

/////////////////////////////

// PDF Q152. Solve a coding problem using filter without using unnecessary built-in shortcuts.
{
  function filterWithoutUnnecessaryBuiltIn(items) {
    return items.filter(Boolean);
  }

  // Input:
  filterWithoutUnnecessaryBuiltIn([0, 'ok', false, 10]);

  // Answer:
  // ["ok", 10]
}

/////////////////////////////

// PDF Q162. Solve a coding problem using filter without using unnecessary built-in shortcuts.
{
  function filterWithoutUnnecessaryBuiltIn(items) {
    return items.filter(Boolean);
  }

  // Input:
  filterWithoutUnnecessaryBuiltIn([0, 'ok', false, 10]);

  // Answer:
  // ["ok", 10]
}

/////////////////////////////

// PDF Q172. Solve a coding problem using filter without using unnecessary built-in shortcuts.
{
  function filterWithoutUnnecessaryBuiltIn(items) {
    return items.filter(Boolean);
  }

  // Input:
  filterWithoutUnnecessaryBuiltIn([0, 'ok', false, 10]);

  // Answer:
  // ["ok", 10]
}

/////////////////////////////

// PDF Q182. Solve a coding problem using filter without using unnecessary built-in shortcuts.
{
  function filterWithoutUnnecessaryBuiltIn(items) {
    return items.filter(Boolean);
  }

  // Input:
  filterWithoutUnnecessaryBuiltIn([0, 'ok', false, 10]);

  // Answer:
  // ["ok", 10]
}

/////////////////////////////

// PDF Q192. Solve a coding problem using filter without using unnecessary built-in shortcuts.
{
  function filterWithoutUnnecessaryBuiltIn(items) {
    return items.filter(Boolean);
  }

  // Input:
  filterWithoutUnnecessaryBuiltIn([0, 'ok', false, 10]);

  // Answer:
  // ["ok", 10]
}

/////////////////////////////

// PDF Q510. Debug a broken JavaScript snippet related to search filter and rewrite it correctly.
{
  function searchFilterIt(items, search) {
    const query = search.toLowerCase();
    return items.filter((item) => item.toLowerCase().includes(query));
  }

  // Input:
  searchFilterIt(['React', 'Node', 'Next'], 'no');

  // Answer:
  // ["Node"]
}

/////////////////////////////

// PDF Q520. Debug a broken JavaScript snippet related to search filter and rewrite it correctly.
{
  function searchFilterIt(items, search) {
    const query = search.toLowerCase();
    return items.filter((item) => item.toLowerCase().includes(query));
  }

  // Input:
  searchFilterIt(['React', 'Node', 'Next'], 'no');

  // Answer:
  // ["Node"]
}

/////////////////////////////

// PDF Q530. Debug a broken JavaScript snippet related to search filter and rewrite it correctly.
{
  function searchFilterIt(items, search) {
    const query = search.toLowerCase();
    return items.filter((item) => item.toLowerCase().includes(query));
  }

  // Input:
  searchFilterIt(['React', 'Node', 'Next'], 'no');

  // Answer:
  // ["Node"]
}

/////////////////////////////

// PDF Q540. Debug a broken JavaScript snippet related to search filter and rewrite it correctly.
{
  function searchFilterIt(items, search) {
    const query = search.toLowerCase();
    return items.filter((item) => item.toLowerCase().includes(query));
  }

  // Input:
  searchFilterIt(['React', 'Node', 'Next'], 'no');

  // Answer:
  // ["Node"]
}

/////////////////////////////

// PDF Q550. Debug a broken JavaScript snippet related to search filter and rewrite it correctly.
{
  function searchFilterIt(items, search) {
    const query = search.toLowerCase();
    return items.filter((item) => item.toLowerCase().includes(query));
  }

  // Input:
  searchFilterIt(['React', 'Node', 'Next'], 'no');

  // Answer:
  // ["Node"]
}

/////////////////////////////

// PDF Q852. Solve a coding problem using filter without using unnecessary built-in shortcuts.
{
  function filterWithoutUnnecessaryBuiltIn(items) {
    return items.filter(Boolean);
  }

  // Input:
  filterWithoutUnnecessaryBuiltIn([0, 'ok', false, 10]);

  // Answer:
  // ["ok", 10]
}

/////////////////////////////

// PDF Q862. Solve a coding problem using filter without using unnecessary built-in shortcuts.
{
  function filterWithoutUnnecessaryBuiltIn(items) {
    return items.filter(Boolean);
  }

  // Input:
  filterWithoutUnnecessaryBuiltIn([0, 'ok', false, 10]);

  // Answer:
  // ["ok", 10]
}

/////////////////////////////

// PDF Q872. Solve a coding problem using filter without using unnecessary built-in shortcuts.
{
  function filterWithoutUnnecessaryBuiltIn(items) {
    return items.filter(Boolean);
  }

  // Input:
  filterWithoutUnnecessaryBuiltIn([0, 'ok', false, 10]);

  // Answer:
  // ["ok", 10]
}

/////////////////////////////

// PDF Q882. Solve a coding problem using filter without using unnecessary built-in shortcuts.
{
  function filterWithoutUnnecessaryBuiltIn(items) {
    return items.filter(Boolean);
  }

  // Input:
  filterWithoutUnnecessaryBuiltIn([0, 'ok', false, 10]);

  // Answer:
  // ["ok", 10]
}

/////////////////////////////

// PDF Q892. Solve a coding problem using filter without using unnecessary built-in shortcuts.
{
  function filterWithoutUnnecessaryBuiltIn(items) {
    return items.filter(Boolean);
  }

  // Input:
  filterWithoutUnnecessaryBuiltIn([0, 'ok', false, 10]);

  // Answer:
  // ["ok", 10]
}

/////////////////////////////

// PDF Q902. Solve a coding problem using search filter without using unnecessary built-in shortcuts.
{
  function searchFilterWithoutUnnecessaryBuilt(items, search) {
    const query = search.toLowerCase();
    return items.filter((item) => item.toLowerCase().includes(query));
  }

  // Input:
  searchFilterWithoutUnnecessaryBuilt(['React', 'Node', 'Next'], 'no');

  // Answer:
  // ["Node"]
}

/////////////////////////////

// PDF Q912. Solve a coding problem using search filter without using unnecessary built-in shortcuts.
{
  function searchFilterWithoutUnnecessaryBuilt(items, search) {
    const query = search.toLowerCase();
    return items.filter((item) => item.toLowerCase().includes(query));
  }

  // Input:
  searchFilterWithoutUnnecessaryBuilt(['React', 'Node', 'Next'], 'no');

  // Answer:
  // ["Node"]
}

/////////////////////////////

// PDF Q922. Solve a coding problem using search filter without using unnecessary built-in shortcuts.
{
  function searchFilterWithoutUnnecessaryBuilt(items, search) {
    const query = search.toLowerCase();
    return items.filter((item) => item.toLowerCase().includes(query));
  }

  // Input:
  searchFilterWithoutUnnecessaryBuilt(['React', 'Node', 'Next'], 'no');

  // Answer:
  // ["Node"]
}

/////////////////////////////

// PDF Q932. Solve a coding problem using search filter without using unnecessary built-in shortcuts.
{
  function searchFilterWithoutUnnecessaryBuilt(items, search) {
    const query = search.toLowerCase();
    return items.filter((item) => item.toLowerCase().includes(query));
  }

  // Input:
  searchFilterWithoutUnnecessaryBuilt(['React', 'Node', 'Next'], 'no');

  // Answer:
  // ["Node"]
}

/////////////////////////////

// PDF Q942. Solve a coding problem using search filter without using unnecessary built-in shortcuts.
{
  function searchFilterWithoutUnnecessaryBuilt(items, search) {
    const query = search.toLowerCase();
    return items.filter((item) => item.toLowerCase().includes(query));
  }

  // Input:
  searchFilterWithoutUnnecessaryBuilt(['React', 'Node', 'Next'], 'no');

  // Answer:
  // ["Node"]
}

/////////////////////////////

