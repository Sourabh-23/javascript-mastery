"use strict";

/*
Path: 1 SIMPLE JS\07_objects\11_object-questions\03_coding-output-practice.js
Topic: Object Questions
Question bank: Object Questions focused practice

How to study:
1. Read Q.
2. Hide Answer.
3. Predict output.
4. Then check Answer.
*/

// Q1. read property
{
  function run(user) {
    return user.name;
  }

  // Input:
  run({ name: "Amit" });

  // Answer:
  // "Amit"
}

/////////////////////////////

// Q2. add property
{
  function run(user) {
    user.active = true;
    return user;
  }

  // Input:
  run({ name: "Amit" });

  // Answer:
  // { name: "Amit", active: true }
}

/////////////////////////////

// Q3. object keys
{
  function run(obj) {
    return Object.keys(obj);
  }

  // Input:
  run({ a: 1, b: 2 });

  // Answer:
  // ["a", "b"]
}

/////////////////////////////

// Q4. object values
{
  function run(obj) {
    return Object.values(obj);
  }

  // Input:
  run({ a: 1, b: 2 });

  // Answer:
  // [1, 2]
}

/////////////////////////////

// Q5. destructure
{
  function run(user) {
    const { name } = user;
    return name;
  }

  // Input:
  run({ name: "Amit" });

  // Answer:
  // "Amit"
}

/////////////////////////////

// Q6. spread copy
{
  function run(user) {
    return { ...user, role: "dev" };
  }

  // Input:
  run({ name: "Amit" });

  // Answer:
  // { name: "Amit", role: "dev" }
}

/////////////////////////////

// Q7. read property case 7
{
  function run(user) {
    return user.name;
  }

  // Input:
  run({ name: "Amit" });

  // Answer:
  // "Amit"
}

/////////////////////////////

// Q8. add property case 8
{
  function run(user) {
    user.active = true;
    return user;
  }

  // Input:
  run({ name: "Amit" });

  // Answer:
  // { name: "Amit", active: true }
}

/////////////////////////////

// Q9. object keys case 9
{
  function run(obj) {
    return Object.keys(obj);
  }

  // Input:
  run({ a: 1, b: 2 });

  // Answer:
  // ["a", "b"]
}

/////////////////////////////

// Q10. object values case 10
{
  function run(obj) {
    return Object.values(obj);
  }

  // Input:
  run({ a: 1, b: 2 });

  // Answer:
  // [1, 2]
}

/////////////////////////////

// Q11. destructure case 11
{
  function run(user) {
    const { name } = user;
    return name;
  }

  // Input:
  run({ name: "Amit" });

  // Answer:
  // "Amit"
}

/////////////////////////////

// Q12. spread copy case 12
{
  function run(user) {
    return { ...user, role: "dev" };
  }

  // Input:
  run({ name: "Amit" });

  // Answer:
  // { name: "Amit", role: "dev" }
}

/////////////////////////////

// Q13. read property case 13
{
  function run(user) {
    return user.name;
  }

  // Input:
  run({ name: "Amit" });

  // Answer:
  // "Amit"
}

/////////////////////////////

// Q14. add property case 14
{
  function run(user) {
    user.active = true;
    return user;
  }

  // Input:
  run({ name: "Amit" });

  // Answer:
  // { name: "Amit", active: true }
}

/////////////////////////////

// Q15. object keys case 15
{
  function run(obj) {
    return Object.keys(obj);
  }

  // Input:
  run({ a: 1, b: 2 });

  // Answer:
  // ["a", "b"]
}

/////////////////////////////

// Q16. object values case 16
{
  function run(obj) {
    return Object.values(obj);
  }

  // Input:
  run({ a: 1, b: 2 });

  // Answer:
  // [1, 2]
}

/////////////////////////////

// Q17. destructure case 17
{
  function run(user) {
    const { name } = user;
    return name;
  }

  // Input:
  run({ name: "Amit" });

  // Answer:
  // "Amit"
}

/////////////////////////////

// Q18. spread copy case 18
{
  function run(user) {
    return { ...user, role: "dev" };
  }

  // Input:
  run({ name: "Amit" });

  // Answer:
  // { name: "Amit", role: "dev" }
}

/////////////////////////////

// Q19. read property case 19
{
  function run(user) {
    return user.name;
  }

  // Input:
  run({ name: "Amit" });

  // Answer:
  // "Amit"
}

/////////////////////////////

// Q20. add property case 20
{
  function run(user) {
    user.active = true;
    return user;
  }

  // Input:
  run({ name: "Amit" });

  // Answer:
  // { name: "Amit", active: true }
}

/////////////////////////////

// Q21. object keys case 21
{
  function run(obj) {
    return Object.keys(obj);
  }

  // Input:
  run({ a: 1, b: 2 });

  // Answer:
  // ["a", "b"]
}

/////////////////////////////

// Q22. object values case 22
{
  function run(obj) {
    return Object.values(obj);
  }

  // Input:
  run({ a: 1, b: 2 });

  // Answer:
  // [1, 2]
}

/////////////////////////////

// Q23. destructure case 23
{
  function run(user) {
    const { name } = user;
    return name;
  }

  // Input:
  run({ name: "Amit" });

  // Answer:
  // "Amit"
}

/////////////////////////////

// Q24. spread copy case 24
{
  function run(user) {
    return { ...user, role: "dev" };
  }

  // Input:
  run({ name: "Amit" });

  // Answer:
  // { name: "Amit", role: "dev" }
}

/////////////////////////////

// Q25. read property case 25
{
  function run(user) {
    return user.name;
  }

  // Input:
  run({ name: "Amit" });

  // Answer:
  // "Amit"
}

/////////////////////////////

// ================= PDF BASED PRACTICE =================

// PDF Q4. Write a function to check whether two values are strictly equal and loosely equal, and print the difference.
{
  function checkWhetherTwoValuesAre(obj) {
    return Object.keys(obj).reduce((copy, key) => {
      copy[key] = obj[key];
      return copy;
    }, {});
  }

  // Input:
  checkWhetherTwoValuesAre({ name: 'Amit' }).name;

  // Answer:
  // "Amit"
}

/////////////////////////////

// PDF Q6. Write a function that safely reads a deeply nested object property using optional chaining.
{
  function safelyReadsDeeplyNestedObject(obj, key) {
    return obj?.[key];
  }

  // Input:
  safelyReadsDeeplyNestedObject({ name: 'Amit' }, 'name');

  // Answer:
  // "Amit"
}

/////////////////////////////

// PDF Q25. Write a function to clone primitive values and prove changes do not affect original.
{
  function clonePrimitiveValuesProveChanges(obj) {
    return Object.keys(obj).reduce((copy, key) => {
      copy[key] = obj[key];
      return copy;
    }, {});
  }

  // Input:
  clonePrimitiveValuesProveChanges({ name: 'Amit' }).name;

  // Answer:
  // "Amit"
}

/////////////////////////////

// PDF Q26. Write a function to demonstrate reference behavior in objects.
{
  function demonstrateReferenceBehaviorInObjects(obj, key) {
    return obj?.[key];
  }

  // Input:
  demonstrateReferenceBehaviorInObjects({ name: 'Amit' }, 'name');

  // Answer:
  // "Amit"
}

/////////////////////////////

// PDF Q35. Write a function to check whether an input is a valid Date object.
{
  function checkWhetherIsValidDate(obj, key) {
    return obj?.[key];
  }

  // Input:
  checkWhetherIsValidDate({ name: 'Amit' }, 'name');

  // Answer:
  // "Amit"
}

/////////////////////////////

// PDF Q201. Write a JavaScript function for create object and handle empty input.
{
  function forObjectHandleEmpty(obj, key) {
    return obj?.[key];
  }

  // Input:
  forObjectHandleEmpty({ name: 'Amit' }, 'name');

  // Answer:
  // "Amit"
}

/////////////////////////////

// PDF Q202. Solve a coding problem using clone object without using unnecessary built-in shortcuts.
{
  function cloneObjectWithoutUnnecessaryBuilt(obj, key) {
    return obj?.[key];
  }

  // Input:
  cloneObjectWithoutUnnecessaryBuilt({ name: 'Amit' }, 'name');

  // Answer:
  // "Amit"
}

/////////////////////////////

// PDF Q203. Write clean code for merge objects and explain time complexity in comments.
{
  function forMergeObjectsExplainTime(obj, key) {
    return obj?.[key];
  }

  // Input:
  forMergeObjectsExplainTime({ name: 'Amit' }, 'name');

  // Answer:
  // "Amit"
}

/////////////////////////////

// PDF Q205. Debug a broken JavaScript snippet related to invert object and rewrite it correctly.
{
  function invertObjectIt(obj, key) {
    return obj?.[key];
  }

  // Input:
  invertObjectIt({ name: 'Amit' }, 'name');

  // Answer:
  // "Amit"
}

/////////////////////////////

// PDF Q206. Write a JavaScript function for deep read and handle empty input.
{
  function deepRead(obj) {
    return Object.keys(obj).reduce((copy, key) => {
      copy[key] = obj[key];
      return copy;
    }, {});
  }

  // Input:
  deepRead({ name: 'Amit' }).name;

  // Answer:
  // "Amit"
}

/////////////////////////////

// PDF Q207. Solve a coding problem using deep clone without using unnecessary built-in shortcuts.
{
  function deepCloneIn(obj) {
    return Object.keys(obj).reduce((copy, key) => {
      copy[key] = obj[key];
      return copy;
    }, {});
  }

  // Input:
  deepCloneIn({ name: 'Amit' }).name;

  // Answer:
  // "Amit"
}

/////////////////////////////

// PDF Q208. Write clean code for group data and explain time complexity in comments.
{
  function groupDataIn(obj) {
    return Object.keys(obj).reduce((copy, key) => {
      copy[key] = obj[key];
      return copy;
    }, {});
  }

  // Input:
  groupDataIn({ name: 'Amit' }).name;

  // Answer:
  // "Amit"
}

/////////////////////////////

// PDF Q210. Debug a broken JavaScript snippet related to remove property and rewrite it correctly.
{
  function removePropertyIt(obj) {
    return Object.keys(obj).reduce((copy, key) => {
      copy[key] = obj[key];
      return copy;
    }, {});
  }

  // Input:
  removePropertyIt({ name: 'Amit' }).name;

  // Answer:
  // "Amit"
}

/////////////////////////////

// PDF Q211. Write a JavaScript function for create object and handle empty input.
{
  function forObjectHandleEmpty(obj, key) {
    return obj?.[key];
  }

  // Input:
  forObjectHandleEmpty({ name: 'Amit' }, 'name');

  // Answer:
  // "Amit"
}

/////////////////////////////

// PDF Q212. Solve a coding problem using clone object without using unnecessary built-in shortcuts.
{
  function cloneObjectWithoutUnnecessaryBuilt(obj, key) {
    return obj?.[key];
  }

  // Input:
  cloneObjectWithoutUnnecessaryBuilt({ name: 'Amit' }, 'name');

  // Answer:
  // "Amit"
}

/////////////////////////////

// PDF Q213. Write clean code for merge objects and explain time complexity in comments.
{
  function forMergeObjectsExplainTime(obj, key) {
    return obj?.[key];
  }

  // Input:
  forMergeObjectsExplainTime({ name: 'Amit' }, 'name');

  // Answer:
  // "Amit"
}

/////////////////////////////

// PDF Q215. Debug a broken JavaScript snippet related to invert object and rewrite it correctly.
{
  function invertObjectIt(obj, key) {
    return obj?.[key];
  }

  // Input:
  invertObjectIt({ name: 'Amit' }, 'name');

  // Answer:
  // "Amit"
}

/////////////////////////////

// PDF Q216. Write a JavaScript function for deep read and handle empty input.
{
  function deepRead(obj) {
    return Object.keys(obj).reduce((copy, key) => {
      copy[key] = obj[key];
      return copy;
    }, {});
  }

  // Input:
  deepRead({ name: 'Amit' }).name;

  // Answer:
  // "Amit"
}

/////////////////////////////

// PDF Q217. Solve a coding problem using deep clone without using unnecessary built-in shortcuts.
{
  function deepCloneIn(obj) {
    return Object.keys(obj).reduce((copy, key) => {
      copy[key] = obj[key];
      return copy;
    }, {});
  }

  // Input:
  deepCloneIn({ name: 'Amit' }).name;

  // Answer:
  // "Amit"
}

/////////////////////////////

// PDF Q218. Write clean code for group data and explain time complexity in comments.
{
  function groupDataIn(obj) {
    return Object.keys(obj).reduce((copy, key) => {
      copy[key] = obj[key];
      return copy;
    }, {});
  }

  // Input:
  groupDataIn({ name: 'Amit' }).name;

  // Answer:
  // "Amit"
}

/////////////////////////////

// PDF Q220. Debug a broken JavaScript snippet related to remove property and rewrite it correctly.
{
  function removePropertyIt(obj) {
    return Object.keys(obj).reduce((copy, key) => {
      copy[key] = obj[key];
      return copy;
    }, {});
  }

  // Input:
  removePropertyIt({ name: 'Amit' }).name;

  // Answer:
  // "Amit"
}

/////////////////////////////

// PDF Q221. Write a JavaScript function for create object and handle empty input.
{
  function forObjectHandleEmpty(obj, key) {
    return obj?.[key];
  }

  // Input:
  forObjectHandleEmpty({ name: 'Amit' }, 'name');

  // Answer:
  // "Amit"
}

/////////////////////////////

// PDF Q222. Solve a coding problem using clone object without using unnecessary built-in shortcuts.
{
  function cloneObjectWithoutUnnecessaryBuilt(obj, key) {
    return obj?.[key];
  }

  // Input:
  cloneObjectWithoutUnnecessaryBuilt({ name: 'Amit' }, 'name');

  // Answer:
  // "Amit"
}

/////////////////////////////

// PDF Q223. Write clean code for merge objects and explain time complexity in comments.
{
  function forMergeObjectsExplainTime(obj, key) {
    return obj?.[key];
  }

  // Input:
  forMergeObjectsExplainTime({ name: 'Amit' }, 'name');

  // Answer:
  // "Amit"
}

/////////////////////////////

// PDF Q225. Debug a broken JavaScript snippet related to invert object and rewrite it correctly.
{
  function invertObjectIt(obj, key) {
    return obj?.[key];
  }

  // Input:
  invertObjectIt({ name: 'Amit' }, 'name');

  // Answer:
  // "Amit"
}

/////////////////////////////

// PDF Q226. Write a JavaScript function for deep read and handle empty input.
{
  function deepRead(obj) {
    return Object.keys(obj).reduce((copy, key) => {
      copy[key] = obj[key];
      return copy;
    }, {});
  }

  // Input:
  deepRead({ name: 'Amit' }).name;

  // Answer:
  // "Amit"
}

/////////////////////////////

// PDF Q227. Solve a coding problem using deep clone without using unnecessary built-in shortcuts.
{
  function deepCloneIn(obj) {
    return Object.keys(obj).reduce((copy, key) => {
      copy[key] = obj[key];
      return copy;
    }, {});
  }

  // Input:
  deepCloneIn({ name: 'Amit' }).name;

  // Answer:
  // "Amit"
}

/////////////////////////////

// PDF Q228. Write clean code for group data and explain time complexity in comments.
{
  function groupDataIn(obj) {
    return Object.keys(obj).reduce((copy, key) => {
      copy[key] = obj[key];
      return copy;
    }, {});
  }

  // Input:
  groupDataIn({ name: 'Amit' }).name;

  // Answer:
  // "Amit"
}

/////////////////////////////

// PDF Q230. Debug a broken JavaScript snippet related to remove property and rewrite it correctly.
{
  function removePropertyIt(obj) {
    return Object.keys(obj).reduce((copy, key) => {
      copy[key] = obj[key];
      return copy;
    }, {});
  }

  // Input:
  removePropertyIt({ name: 'Amit' }).name;

  // Answer:
  // "Amit"
}

/////////////////////////////

// PDF Q231. Write a JavaScript function for create object and handle empty input.
{
  function forObjectHandleEmpty(obj, key) {
    return obj?.[key];
  }

  // Input:
  forObjectHandleEmpty({ name: 'Amit' }, 'name');

  // Answer:
  // "Amit"
}

/////////////////////////////

// PDF Q232. Solve a coding problem using clone object without using unnecessary built-in shortcuts.
{
  function cloneObjectWithoutUnnecessaryBuilt(obj, key) {
    return obj?.[key];
  }

  // Input:
  cloneObjectWithoutUnnecessaryBuilt({ name: 'Amit' }, 'name');

  // Answer:
  // "Amit"
}

/////////////////////////////

// PDF Q233. Write clean code for merge objects and explain time complexity in comments.
{
  function forMergeObjectsExplainTime(obj, key) {
    return obj?.[key];
  }

  // Input:
  forMergeObjectsExplainTime({ name: 'Amit' }, 'name');

  // Answer:
  // "Amit"
}

/////////////////////////////

// PDF Q235. Debug a broken JavaScript snippet related to invert object and rewrite it correctly.
{
  function invertObjectIt(obj, key) {
    return obj?.[key];
  }

  // Input:
  invertObjectIt({ name: 'Amit' }, 'name');

  // Answer:
  // "Amit"
}

/////////////////////////////

// PDF Q236. Write a JavaScript function for deep read and handle empty input.
{
  function deepRead(obj) {
    return Object.keys(obj).reduce((copy, key) => {
      copy[key] = obj[key];
      return copy;
    }, {});
  }

  // Input:
  deepRead({ name: 'Amit' }).name;

  // Answer:
  // "Amit"
}

/////////////////////////////

// PDF Q237. Solve a coding problem using deep clone without using unnecessary built-in shortcuts.
{
  function deepCloneIn(obj) {
    return Object.keys(obj).reduce((copy, key) => {
      copy[key] = obj[key];
      return copy;
    }, {});
  }

  // Input:
  deepCloneIn({ name: 'Amit' }).name;

  // Answer:
  // "Amit"
}

/////////////////////////////

// PDF Q238. Write clean code for group data and explain time complexity in comments.
{
  function groupDataIn(obj) {
    return Object.keys(obj).reduce((copy, key) => {
      copy[key] = obj[key];
      return copy;
    }, {});
  }

  // Input:
  groupDataIn({ name: 'Amit' }).name;

  // Answer:
  // "Amit"
}

/////////////////////////////

// PDF Q240. Debug a broken JavaScript snippet related to remove property and rewrite it correctly.
{
  function removePropertyIt(obj) {
    return Object.keys(obj).reduce((copy, key) => {
      copy[key] = obj[key];
      return copy;
    }, {});
  }

  // Input:
  removePropertyIt({ name: 'Amit' }).name;

  // Answer:
  // "Amit"
}

/////////////////////////////

// PDF Q241. Write a JavaScript function for create object and handle empty input.
{
  function forObjectHandleEmpty(obj, key) {
    return obj?.[key];
  }

  // Input:
  forObjectHandleEmpty({ name: 'Amit' }, 'name');

  // Answer:
  // "Amit"
}

/////////////////////////////

// PDF Q242. Solve a coding problem using clone object without using unnecessary built-in shortcuts.
{
  function cloneObjectWithoutUnnecessaryBuilt(obj, key) {
    return obj?.[key];
  }

  // Input:
  cloneObjectWithoutUnnecessaryBuilt({ name: 'Amit' }, 'name');

  // Answer:
  // "Amit"
}

/////////////////////////////

// PDF Q243. Write clean code for merge objects and explain time complexity in comments.
{
  function forMergeObjectsExplainTime(obj, key) {
    return obj?.[key];
  }

  // Input:
  forMergeObjectsExplainTime({ name: 'Amit' }, 'name');

  // Answer:
  // "Amit"
}

/////////////////////////////

// PDF Q245. Debug a broken JavaScript snippet related to invert object and rewrite it correctly.
{
  function invertObjectIt(obj, key) {
    return obj?.[key];
  }

  // Input:
  invertObjectIt({ name: 'Amit' }, 'name');

  // Answer:
  // "Amit"
}

/////////////////////////////

// PDF Q246. Write a JavaScript function for deep read and handle empty input.
{
  function deepRead(obj) {
    return Object.keys(obj).reduce((copy, key) => {
      copy[key] = obj[key];
      return copy;
    }, {});
  }

  // Input:
  deepRead({ name: 'Amit' }).name;

  // Answer:
  // "Amit"
}

/////////////////////////////

// PDF Q247. Solve a coding problem using deep clone without using unnecessary built-in shortcuts.
{
  function deepCloneIn(obj) {
    return Object.keys(obj).reduce((copy, key) => {
      copy[key] = obj[key];
      return copy;
    }, {});
  }

  // Input:
  deepCloneIn({ name: 'Amit' }).name;

  // Answer:
  // "Amit"
}

/////////////////////////////

// PDF Q248. Write clean code for group data and explain time complexity in comments.
{
  function groupDataIn(obj) {
    return Object.keys(obj).reduce((copy, key) => {
      copy[key] = obj[key];
      return copy;
    }, {});
  }

  // Input:
  groupDataIn({ name: 'Amit' }).name;

  // Answer:
  // "Amit"
}

/////////////////////////////

// PDF Q250. Debug a broken JavaScript snippet related to remove property and rewrite it correctly.
{
  function removePropertyIt(obj) {
    return Object.keys(obj).reduce((copy, key) => {
      copy[key] = obj[key];
      return copy;
    }, {});
  }

  // Input:
  removePropertyIt({ name: 'Amit' }).name;

  // Answer:
  // "Amit"
}

/////////////////////////////

// PDF Q306. Write a JavaScript function for deep count and handle empty input.
{
  function deepCount(obj) {
    return Object.keys(obj).reduce((copy, key) => {
      copy[key] = obj[key];
      return copy;
    }, {});
  }

  // Input:
  deepCount({ name: 'Amit' }).name;

  // Answer:
  // "Amit"
}

/////////////////////////////

// PDF Q316. Write a JavaScript function for deep count and handle empty input.
{
  function deepCount(obj) {
    return Object.keys(obj).reduce((copy, key) => {
      copy[key] = obj[key];
      return copy;
    }, {});
  }

  // Input:
  deepCount({ name: 'Amit' }).name;

  // Answer:
  // "Amit"
}

/////////////////////////////

// PDF Q326. Write a JavaScript function for deep count and handle empty input.
{
  function deepCount(obj) {
    return Object.keys(obj).reduce((copy, key) => {
      copy[key] = obj[key];
      return copy;
    }, {});
  }

  // Input:
  deepCount({ name: 'Amit' }).name;

  // Answer:
  // "Amit"
}

/////////////////////////////

// PDF Q336. Write a JavaScript function for deep count and handle empty input.
{
  function deepCount(obj) {
    return Object.keys(obj).reduce((copy, key) => {
      copy[key] = obj[key];
      return copy;
    }, {});
  }

  // Input:
  deepCount({ name: 'Amit' }).name;

  // Answer:
  // "Amit"
}

/////////////////////////////

// PDF Q346. Write a JavaScript function for deep count and handle empty input.
{
  function deepCount(obj) {
    return Object.keys(obj).reduce((copy, key) => {
      copy[key] = obj[key];
      return copy;
    }, {});
  }

  // Input:
  deepCount({ name: 'Amit' }).name;

  // Answer:
  // "Amit"
}

/////////////////////////////

// PDF Q806. Write a JavaScript function for object reference and handle empty input.
{
  function forObjectReferenceHandleEmpty(obj, key) {
    return obj?.[key];
  }

  // Input:
  forObjectReferenceHandleEmpty({ name: 'Amit' }, 'name');

  // Answer:
  // "Amit"
}

/////////////////////////////

// PDF Q816. Write a JavaScript function for object reference and handle empty input.
{
  function forObjectReferenceHandleEmpty(obj, key) {
    return obj?.[key];
  }

  // Input:
  forObjectReferenceHandleEmpty({ name: 'Amit' }, 'name');

  // Answer:
  // "Amit"
}

/////////////////////////////

// PDF Q826. Write a JavaScript function for object reference and handle empty input.
{
  function forObjectReferenceHandleEmpty(obj, key) {
    return obj?.[key];
  }

  // Input:
  forObjectReferenceHandleEmpty({ name: 'Amit' }, 'name');

  // Answer:
  // "Amit"
}

/////////////////////////////

// PDF Q836. Write a JavaScript function for object reference and handle empty input.
{
  function forObjectReferenceHandleEmpty(obj, key) {
    return obj?.[key];
  }

  // Input:
  forObjectReferenceHandleEmpty({ name: 'Amit' }, 'name');

  // Answer:
  // "Amit"
}

/////////////////////////////

// PDF Q846. Write a JavaScript function for object reference and handle empty input.
{
  function forObjectReferenceHandleEmpty(obj, key) {
    return obj?.[key];
  }

  // Input:
  forObjectReferenceHandleEmpty({ name: 'Amit' }, 'name');

  // Answer:
  // "Amit"
}

/////////////////////////////

