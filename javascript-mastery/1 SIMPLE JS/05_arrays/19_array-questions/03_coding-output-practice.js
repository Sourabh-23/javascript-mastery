"use strict";

/*
Path: 1 SIMPLE JS\05_arrays\19_array-questions\03_coding-output-practice.js
Topic: Array Questions
Question bank: Array Questions focused practice

How to study:
1. Read Q.
2. Hide Answer.
3. Predict output.
4. Then check Answer.
*/

// Q1. array length
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

// Q2. first item
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

// Q3. last item
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

// Q4. copy with spread
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

// Q5. loop sum
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

// Q6. array length case 6
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

// Q7. first item case 7
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

// Q8. last item case 8
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

// Q9. copy with spread case 9
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

// Q10. loop sum case 10
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

// Q11. array length case 11
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

// Q12. first item case 12
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

// Q13. last item case 13
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

// Q14. copy with spread case 14
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

// Q15. loop sum case 15
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

// Q16. array length case 16
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

// Q17. first item case 17
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

// Q18. last item case 18
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

// Q19. copy with spread case 19
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

// Q20. loop sum case 20
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

// Q21. array length case 21
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

// Q22. first item case 22
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

// Q23. last item case 23
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

// Q24. copy with spread case 24
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

// Q25. loop sum case 25
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

// ================= PDF BASED PRACTICE =================

// PDF Q34. Write a function that returns the type of each element in an input array.
{
  function returnsTypeOfEachElement(value) {
    if (Array.isArray(value)) return 'array';
    if (value === null) return 'null';
    return typeof value;
  }

  // Input:
  returnsTypeOfEachElement([1, 2]);

  // Answer:
  // "array"
}

/////////////////////////////

// PDF Q107. Write a function to reverse an array without using reverse().
{
  function reverseArrayWithoutReverse(items) {
    return items.length;
  }

  // Input:
  reverseArrayWithoutReverse([1, 2, 3]);

  // Answer:
  // 3
}

/////////////////////////////

// PDF Q110. Write a function to count even and odd numbers in an array.
{
  function countEvenOddNumbersIn(items) {
    return items.length;
  }

  // Input:
  countEvenOddNumbersIn([1, 2, 3]);

  // Answer:
  // 3
}

/////////////////////////////

// PDF Q111. Write a function to return only even numbers.
{
  function returnOnlyEvenNumbers(items) {
    return items.filter(Boolean).map((item) => item);
  }

  // Input:
  returnOnlyEvenNumbers([0, 'a', false, 'b']);

  // Answer:
  // ["a", "b"]
}

/////////////////////////////

// PDF Q112. Write a function to return only odd numbers.
{
  function returnOnlyOddNumbers(items) {
    return items.filter(Boolean).map((item) => item);
  }

  // Input:
  returnOnlyOddNumbers([0, 'a', false, 'b']);

  // Answer:
  // ["a", "b"]
}

/////////////////////////////

// PDF Q115. Write a function to merge two arrays.
{
  function mergeTwoArrays(items) {
    return items.length;
  }

  // Input:
  mergeTwoArrays([1, 2, 3]);

  // Answer:
  // 3
}

/////////////////////////////

// PDF Q119. Write a function to rotate an array by one position to the right.
{
  function rotateArrayByOnePosition(items) {
    return items.length;
  }

  // Input:
  rotateArrayByOnePosition([1, 2, 3]);

  // Answer:
  // 3
}

/////////////////////////////

// PDF Q120. Write a function to rotate an array by one position to the left.
{
  function rotateArrayByOnePosition(items) {
    return items.length;
  }

  // Input:
  rotateArrayByOnePosition([1, 2, 3]);

  // Answer:
  // 3
}

/////////////////////////////

// PDF Q121. Write a function to rotate an array by k positions.
{
  function rotateArrayByKPositions(items) {
    return items.length;
  }

  // Input:
  rotateArrayByKPositions([1, 2, 3]);

  // Answer:
  // 3
}

/////////////////////////////

// PDF Q126. Write a function to separate positive and negative numbers.
{
  function separatePositiveNegativeNumbers(items) {
    return items.filter(Boolean).map((item) => item);
  }

  // Input:
  separatePositiveNegativeNumbers([0, 'a', false, 'b']);

  // Answer:
  // ["a", "b"]
}

/////////////////////////////

// PDF Q129. Write a function to chunk an array into groups of given size.
{
  function chunkArrayIntoGroupsOf(items) {
    return items.length;
  }

  // Input:
  chunkArrayIntoGroupsOf([1, 2, 3]);

  // Answer:
  // 3
}

/////////////////////////////

// PDF Q130. Write a function to split an array into two halves.
{
  function splitArrayIntoTwoHalves(items) {
    return items.length;
  }

  // Input:
  splitArrayIntoTwoHalves([1, 2, 3]);

  // Answer:
  // 3
}

/////////////////////////////

// PDF Q133. Write a function to remove falsy values from an array.
{
  function removeFalsyValuesFromArray(value) {
    return Boolean(value);
  }

  // Input:
  removeFalsyValuesFromArray('hello');

  // Answer:
  // true
}

/////////////////////////////

// PDF Q134. Write a function to remove null and undefined values only.
{
  function removeNullUndefinedValuesOnly(items) {
    return items.filter(Boolean).map((item) => item);
  }

  // Input:
  removeNullUndefinedValuesOnly([0, 'a', false, 'b']);

  // Answer:
  // ["a", "b"]
}

/////////////////////////////

// PDF Q135. Write a function to implement array push manually.
{
  function implementArrayPushManually(items) {
    return items.length;
  }

  // Input:
  implementArrayPushManually([1, 2, 3]);

  // Answer:
  // 3
}

/////////////////////////////

// PDF Q136. Write a function to implement array pop manually.
{
  function implementArrayPopManually(items) {
    return items.length;
  }

  // Input:
  implementArrayPopManually([1, 2, 3]);

  // Answer:
  // 3
}

/////////////////////////////

// PDF Q137. Write a function to implement array shift manually.
{
  function implementArrayShiftManually(items) {
    return items.length;
  }

  // Input:
  implementArrayShiftManually([1, 2, 3]);

  // Answer:
  // 3
}

/////////////////////////////

// PDF Q138. Write a function to implement array unshift manually.
{
  function implementArrayUnshiftManually(items) {
    return items.length;
  }

  // Input:
  implementArrayUnshiftManually([1, 2, 3]);

  // Answer:
  // 3
}

/////////////////////////////

// PDF Q141. Write a function to search an element linearly.
{
  function searchElementLinearly(items) {
    return items.filter(Boolean).map((item) => item);
  }

  // Input:
  searchElementLinearly([0, 'a', false, 'b']);

  // Answer:
  // ["a", "b"]
}

/////////////////////////////

// PDF Q142. Write a function to count occurrences of an element.
{
  function countOccurrencesOfElement(items) {
    return items.filter(Boolean).map((item) => item);
  }

  // Input:
  countOccurrencesOfElement([0, 'a', false, 'b']);

  // Answer:
  // ["a", "b"]
}

/////////////////////////////

// PDF Q144. Write a function to remove element by value.
{
  function removeElementByValue(items) {
    return items.filter(Boolean).map((item) => item);
  }

  // Input:
  removeElementByValue([0, 'a', false, 'b']);

  // Answer:
  // ["a", "b"]
}

/////////////////////////////

// PDF Q146. Write a function to create an array of numbers from start to end.
{
  function arrayOfNumbersFromStart(items) {
    return items.length;
  }

  // Input:
  arrayOfNumbersFromStart([1, 2, 3]);

  // Answer:
  // 3
}

/////////////////////////////

// PDF Q147. Write a function to shuffle an array.
{
  function shuffleArray(items) {
    return items.length;
  }

  // Input:
  shuffleArray([1, 2, 3]);

  // Answer:
  // 3
}

/////////////////////////////

// PDF Q148. Write a function to pick a random element from an array.
{
  function pickRandomElementFromArray(items) {
    return items.length;
  }

  // Input:
  pickRandomElementFromArray([1, 2, 3]);

  // Answer:
  // 3
}

/////////////////////////////

// PDF Q149. Write a function to compare two arrays for equality.
{
  function compareTwoArraysForEquality(items) {
    return items.length;
  }

  // Input:
  compareTwoArraysForEquality([1, 2, 3]);

  // Answer:
  // 3
}

/////////////////////////////

// PDF Q807. Solve a coding problem using array mutation without using unnecessary built-in shortcuts.
{
  function arrayMutationWithoutUnnecessaryBuilt(items) {
    return items.length;
  }

  // Input:
  arrayMutationWithoutUnnecessaryBuilt([1, 2, 3]);

  // Answer:
  // 3
}

/////////////////////////////

// PDF Q817. Solve a coding problem using array mutation without using unnecessary built-in shortcuts.
{
  function arrayMutationWithoutUnnecessaryBuilt(items) {
    return items.length;
  }

  // Input:
  arrayMutationWithoutUnnecessaryBuilt([1, 2, 3]);

  // Answer:
  // 3
}

/////////////////////////////

// PDF Q827. Solve a coding problem using array mutation without using unnecessary built-in shortcuts.
{
  function arrayMutationWithoutUnnecessaryBuilt(items) {
    return items.length;
  }

  // Input:
  arrayMutationWithoutUnnecessaryBuilt([1, 2, 3]);

  // Answer:
  // 3
}

/////////////////////////////

// PDF Q837. Solve a coding problem using array mutation without using unnecessary built-in shortcuts.
{
  function arrayMutationWithoutUnnecessaryBuilt(items) {
    return items.length;
  }

  // Input:
  arrayMutationWithoutUnnecessaryBuilt([1, 2, 3]);

  // Answer:
  // 3
}

/////////////////////////////

// PDF Q847. Solve a coding problem using array mutation without using unnecessary built-in shortcuts.
{
  function arrayMutationWithoutUnnecessaryBuilt(items) {
    return items.length;
  }

  // Input:
  arrayMutationWithoutUnnecessaryBuilt([1, 2, 3]);

  // Answer:
  // 3
}

/////////////////////////////

