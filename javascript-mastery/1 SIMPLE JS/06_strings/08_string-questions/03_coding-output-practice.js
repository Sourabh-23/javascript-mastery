"use strict";

/*
Path: 1 SIMPLE JS\06_strings\08_string-questions\03_coding-output-practice.js
Topic: String Questions
Question bank: String Questions focused practice

How to study:
1. Read Q.
2. Hide Answer.
3. Predict output.
4. Then check Answer.
*/

// Q1. string length
{
  function run(str) {
    return str.length;
  }

  // Input:
  run("hello");

  // Answer:
  // 5
}

/////////////////////////////

// Q2. uppercase
{
  function run(str) {
    return str.toUpperCase();
  }

  // Input:
  run("js");

  // Answer:
  // "JS"
}

/////////////////////////////

// Q3. includes text
{
  function run(str) {
    return str.includes("script");
  }

  // Input:
  run("javascript");

  // Answer:
  // true
}

/////////////////////////////

// Q4. slice text
{
  function run(str) {
    return str.slice(0, 4);
  }

  // Input:
  run("javascript");

  // Answer:
  // "java"
}

/////////////////////////////

// Q5. replace text
{
  function run(str) {
    return str.replace("old", "new");
  }

  // Input:
  run("old value");

  // Answer:
  // "new value"
}

/////////////////////////////

// Q6. split words
{
  function run(str) {
    return str.split(" ");
  }

  // Input:
  run("hello js");

  // Answer:
  // ["hello", "js"]
}

/////////////////////////////

// Q7. trim spaces
{
  function run(str) {
    return str.trim();
  }

  // Input:
  run(" hi ");

  // Answer:
  // "hi"
}

/////////////////////////////

// Q8. string length case 8
{
  function run(str) {
    return str.length;
  }

  // Input:
  run("hello");

  // Answer:
  // 5
}

/////////////////////////////

// Q9. uppercase case 9
{
  function run(str) {
    return str.toUpperCase();
  }

  // Input:
  run("js");

  // Answer:
  // "JS"
}

/////////////////////////////

// Q10. includes text case 10
{
  function run(str) {
    return str.includes("script");
  }

  // Input:
  run("javascript");

  // Answer:
  // true
}

/////////////////////////////

// Q11. slice text case 11
{
  function run(str) {
    return str.slice(0, 4);
  }

  // Input:
  run("javascript");

  // Answer:
  // "java"
}

/////////////////////////////

// Q12. replace text case 12
{
  function run(str) {
    return str.replace("old", "new");
  }

  // Input:
  run("old value");

  // Answer:
  // "new value"
}

/////////////////////////////

// Q13. split words case 13
{
  function run(str) {
    return str.split(" ");
  }

  // Input:
  run("hello js");

  // Answer:
  // ["hello", "js"]
}

/////////////////////////////

// Q14. trim spaces case 14
{
  function run(str) {
    return str.trim();
  }

  // Input:
  run(" hi ");

  // Answer:
  // "hi"
}

/////////////////////////////

// Q15. string length case 15
{
  function run(str) {
    return str.length;
  }

  // Input:
  run("hello");

  // Answer:
  // 5
}

/////////////////////////////

// Q16. uppercase case 16
{
  function run(str) {
    return str.toUpperCase();
  }

  // Input:
  run("js");

  // Answer:
  // "JS"
}

/////////////////////////////

// Q17. includes text case 17
{
  function run(str) {
    return str.includes("script");
  }

  // Input:
  run("javascript");

  // Answer:
  // true
}

/////////////////////////////

// Q18. slice text case 18
{
  function run(str) {
    return str.slice(0, 4);
  }

  // Input:
  run("javascript");

  // Answer:
  // "java"
}

/////////////////////////////

// Q19. replace text case 19
{
  function run(str) {
    return str.replace("old", "new");
  }

  // Input:
  run("old value");

  // Answer:
  // "new value"
}

/////////////////////////////

// Q20. split words case 20
{
  function run(str) {
    return str.split(" ");
  }

  // Input:
  run("hello js");

  // Answer:
  // ["hello", "js"]
}

/////////////////////////////

// Q21. trim spaces case 21
{
  function run(str) {
    return str.trim();
  }

  // Input:
  run(" hi ");

  // Answer:
  // "hi"
}

/////////////////////////////

// Q22. string length case 22
{
  function run(str) {
    return str.length;
  }

  // Input:
  run("hello");

  // Answer:
  // 5
}

/////////////////////////////

// Q23. uppercase case 23
{
  function run(str) {
    return str.toUpperCase();
  }

  // Input:
  run("js");

  // Answer:
  // "JS"
}

/////////////////////////////

// Q24. includes text case 24
{
  function run(str) {
    return str.includes("script");
  }

  // Input:
  run("javascript");

  // Answer:
  // true
}

/////////////////////////////

// Q25. slice text case 25
{
  function run(str) {
    return str.slice(0, 4);
  }

  // Input:
  run("javascript");

  // Answer:
  // "java"
}

/////////////////////////////

// ================= PDF BASED PRACTICE =================

// PDF Q2. Write a function to check whether a value is number, string, boolean, null, undefined, array or object.
{
  function checkWhetherValueIsNumber(obj, key) {
    return obj?.[key];
  }

  // Input:
  checkWhetherValueIsNumber({ name: 'Amit' }, 'name');

  // Answer:
  // "Amit"
}

/////////////////////////////

// PDF Q3. Write a function that converts a string number into an actual number without using Number().
{
  function convertsStringNumberIntoActual(str) {
    return String(str).trim().toLowerCase().replace(/s+/g, '-');
  }

  // Input:
  convertsStringNumberIntoActual(' Hello World ');

  // Answer:
  // "hello-world"
}

/////////////////////////////

// PDF Q28. Write the same calculator using switch-case.
{
  function sameCalculatorSwitchCase(str) {
    return String(str).trim().toLowerCase().replace(/s+/g, '-');
  }

  // Input:
  sameCalculatorSwitchCase(' Hello World ');

  // Answer:
  // "hello-world"
}

/////////////////////////////

// PDF Q32. Write a function to remove extra spaces from a sentence.
{
  function removeExtraSpacesFromSentence(str) {
    return String(str).trim().toLowerCase().replace(/s+/g, '-');
  }

  // Input:
  removeExtraSpacesFromSentence(' Hello World ');

  // Answer:
  // "hello-world"
}

/////////////////////////////

// PDF Q33. Write a function that checks whether a password length is at least 8 characters.
{
  function checksWhetherPasswordLengthIs(str) {
    return String(str).trim().toLowerCase().replace(/s+/g, '-');
  }

  // Input:
  checksWhetherPasswordLengthIs(' Hello World ');

  // Answer:
  // "hello-world"
}

/////////////////////////////

// PDF Q41. Write a function to check whether a variable contains empty string, null or undefined.
{
  function checkWhetherVariableContainsString(str) {
    return String(str).trim().toLowerCase().replace(/s+/g, '-');
  }

  // Input:
  checkWhetherVariableContainsString(' Hello World ');

  // Answer:
  // "hello-world"
}

/////////////////////////////

// PDF Q49. Write a function to check whether a character is uppercase or lowercase.
{
  function checkWhetherCharacterIsUppercase(str) {
    return String(str).trim().toLowerCase().replace(/s+/g, '-');
  }

  // Input:
  checkWhetherCharacterIsUppercase(' Hello World ');

  // Answer:
  // "hello-world"
}

/////////////////////////////

// PDF Q50. Write a function to check whether a character is vowel or consonant.
{
  function checkWhetherCharacterIsVowel(str) {
    return (String(str).match(/[aeiou]/gi) || []).length;
  }

  // Input:
  checkWhetherCharacterIsVowel('javascript');

  // Answer:
  // 3
}

/////////////////////////////

// PDF Q51. Write a function to reverse a string.
{
  function reverseString(str) {
    return String(str).split('').reverse().join('');
  }

  // Input:
  reverseString('hello');

  // Answer:
  // "olleh"
}

/////////////////////////////

// PDF Q52. Write a function to check whether a string is palindrome.
{
  function checkWhetherStringIsPalindrome(str) {
    const clean = String(str).toLowerCase().replace(/[^a-z0-9]/g, '');
    return clean === clean.split('').reverse().join('');
  }

  // Input:
  checkWhetherStringIsPalindrome('madam');

  // Answer:
  // true
}

/////////////////////////////

// PDF Q53. Write a function to count vowels in a string.
{
  function countVowelsInString(str) {
    return (String(str).match(/[aeiou]/gi) || []).length;
  }

  // Input:
  countVowelsInString('javascript');

  // Answer:
  // 3
}

/////////////////////////////

// PDF Q54. Write a function to count consonants in a string.
{
  function countConsonantsInString(str) {
    return String(str).trim().toLowerCase().replace(/s+/g, '-');
  }

  // Input:
  countConsonantsInString(' Hello World ');

  // Answer:
  // "hello-world"
}

/////////////////////////////

// PDF Q55. Write a function to count words in a sentence.
{
  function countWordsInSentence(sentence) {
    return sentence.trim().split(/s+/).filter(Boolean).length;
  }

  // Input:
  countWordsInSentence('I love JS');

  // Answer:
  // 3
}

/////////////////////////////

// PDF Q56. Write a function to capitalize the first letter of every word.
{
  function capitalizeFirstLetterOfEvery(sentence) {
    return sentence.split(' ').map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(' ');
  }

  // Input:
  capitalizeFirstLetterOfEvery('hello world');

  // Answer:
  // "Hello World"
}

/////////////////////////////

// PDF Q57. Write a function to convert a sentence to title case.
{
  function convertSentenceTitleCase(sentence) {
    return sentence.split(' ').map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(' ');
  }

  // Input:
  convertSentenceTitleCase('hello world');

  // Answer:
  // "Hello World"
}

/////////////////////////////

// PDF Q58. Write a function to convert camelCase to snake_case.
{
  function convertCamelcaseSnakeCase(str) {
    return String(str).trim().toLowerCase().replace(/s+/g, '-');
  }

  // Input:
  convertCamelcaseSnakeCase(' Hello World ');

  // Answer:
  // "hello-world"
}

/////////////////////////////

// PDF Q59. Write a function to convert snake_case to camelCase.
{
  function convertSnakeCaseCamelcase(str) {
    return String(str).trim().toLowerCase().replace(/s+/g, '-');
  }

  // Input:
  convertSnakeCaseCamelcase(' Hello World ');

  // Answer:
  // "hello-world"
}

/////////////////////////////

// PDF Q60. Write a function to remove duplicate characters from a string.
{
  function removeDuplicateCharactersFromString(str) {
    return String(str).trim().toLowerCase().replace(/s+/g, '-');
  }

  // Input:
  removeDuplicateCharactersFromString(' Hello World ');

  // Answer:
  // "hello-world"
}

/////////////////////////////

// PDF Q61. Write a function to find the first non-repeating character.
{
  function findFirstNonRepeatingCharacter(str) {
    return String(str).trim().toLowerCase().replace(/s+/g, '-');
  }

  // Input:
  findFirstNonRepeatingCharacter(' Hello World ');

  // Answer:
  // "hello-world"
}

/////////////////////////////

// PDF Q62. Write a function to find the most frequent character in a string.
{
  function findMostFrequentCharacterIn(str) {
    return String(str).trim().toLowerCase().replace(/s+/g, '-');
  }

  // Input:
  findMostFrequentCharacterIn(' Hello World ');

  // Answer:
  // "hello-world"
}

/////////////////////////////

// PDF Q64. Write a function to check whether two strings are anagrams.
{
  function checkWhetherTwoStringsAre(a, b) {
    const sort = (str) => String(str).toLowerCase().split('').sort().join('');
    return sort(a) === sort(b);
  }

  // Input:
  checkWhetherTwoStringsAre('listen', 'silent');

  // Answer:
  // true
}

/////////////////////////////

// PDF Q65. Write a function to remove all spaces from a string.
{
  function removeAllSpacesFromString(str) {
    return String(str).trim().toLowerCase().replace(/s+/g, '-');
  }

  // Input:
  removeAllSpacesFromString(' Hello World ');

  // Answer:
  // "hello-world"
}

/////////////////////////////

// PDF Q66. Write a function to remove special characters from a string.
{
  function removeSpecialCharactersFromString(str) {
    return String(str).trim().toLowerCase().replace(/s+/g, '-');
  }

  // Input:
  removeSpecialCharactersFromString(' Hello World ');

  // Answer:
  // "hello-world"
}

/////////////////////////////

// PDF Q67. Write a function to check whether a string contains only digits.
{
  function checkWhetherStringContainsOnly(str) {
    return String(str).trim().toLowerCase().replace(/s+/g, '-');
  }

  // Input:
  checkWhetherStringContainsOnly(' Hello World ');

  // Answer:
  // "hello-world"
}

/////////////////////////////

// PDF Q68. Write a function to check whether a string contains only alphabets.
{
  function checkWhetherStringContainsOnly(str) {
    return String(str).trim().toLowerCase().replace(/s+/g, '-');
  }

  // Input:
  checkWhetherStringContainsOnly(' Hello World ');

  // Answer:
  // "hello-world"
}

/////////////////////////////

// PDF Q69. Write a function to truncate a string to a given length and add ...
{
  function truncateStringLengthAdd(str) {
    return String(str).trim().toLowerCase().replace(/s+/g, '-');
  }

  // Input:
  truncateStringLengthAdd(' Hello World ');

  // Answer:
  // "hello-world"
}

/////////////////////////////

// PDF Q70. Write a function to mask an email address.
{
  function maskEmailAddress(str) {
    return String(str).trim().toLowerCase().replace(/s+/g, '-');
  }

  // Input:
  maskEmailAddress(' Hello World ');

  // Answer:
  // "hello-world"
}

/////////////////////////////

// PDF Q71. Write a function to validate a basic email format.
{
  function validateBasicEmailFormat(str) {
    return String(str).trim().toLowerCase().replace(/s+/g, '-');
  }

  // Input:
  validateBasicEmailFormat(' Hello World ');

  // Answer:
  // "hello-world"
}

/////////////////////////////

// PDF Q72. Write a function to validate a 10-digit mobile number.
{
  function validate10DigitMobileNumber(str) {
    return String(str).trim().toLowerCase().replace(/s+/g, '-');
  }

  // Input:
  validate10DigitMobileNumber(' Hello World ');

  // Answer:
  // "hello-world"
}

/////////////////////////////

// PDF Q73. Write a function to count uppercase and lowercase letters.
{
  function countUppercaseLowercaseLetters(str) {
    return String(str).trim().toLowerCase().replace(/s+/g, '-');
  }

  // Input:
  countUppercaseLowercaseLetters(' Hello World ');

  // Answer:
  // "hello-world"
}

/////////////////////////////

// PDF Q74. Write a function to replace all occurrences of a word in a sentence.
{
  function replaceAllOccurrencesOfWord(str) {
    return String(str).trim().toLowerCase().replace(/s+/g, '-');
  }

  // Input:
  replaceAllOccurrencesOfWord(' Hello World ');

  // Answer:
  // "hello-world"
}

/////////////////////////////

// PDF Q75. Write a function to find the longest word in a sentence.
{
  function findLongestWordInSentence(str) {
    return String(str).trim().toLowerCase().replace(/s+/g, '-');
  }

  // Input:
  findLongestWordInSentence(' Hello World ');

  // Answer:
  // "hello-world"
}

/////////////////////////////

// PDF Q76. Write a function to find the shortest word in a sentence.
{
  function findShortestWordInSentence(str) {
    return String(str).trim().toLowerCase().replace(/s+/g, '-');
  }

  // Input:
  findShortestWordInSentence(' Hello World ');

  // Answer:
  // "hello-world"
}

/////////////////////////////

// PDF Q77. Write a function to reverse words in a sentence.
{
  function reverseWordsInSentence(str) {
    return String(str).trim().toLowerCase().replace(/s+/g, '-');
  }

  // Input:
  reverseWordsInSentence(' Hello World ');

  // Answer:
  // "hello-world"
}

/////////////////////////////

// PDF Q78. Write a function to reverse each word but keep word order same.
{
  function reverseEachWordButKeep(str) {
    return String(str).trim().toLowerCase().replace(/s+/g, '-');
  }

  // Input:
  reverseEachWordButKeep(' Hello World ');

  // Answer:
  // "hello-world"
}

/////////////////////////////

// PDF Q79. Write a function to check whether a string starts with a given prefix without startsWith.
{
  function checkWhetherStringStartsPrefix(str) {
    return String(str).trim().toLowerCase().replace(/s+/g, '-');
  }

  // Input:
  checkWhetherStringStartsPrefix(' Hello World ');

  // Answer:
  // "hello-world"
}

/////////////////////////////

// PDF Q80. Write a function to check whether a string ends with a given suffix without endsWith.
{
  function checkWhetherStringEndsSuffix(str) {
    return String(str).trim().toLowerCase().replace(/s+/g, '-');
  }

  // Input:
  checkWhetherStringEndsSuffix(' Hello World ');

  // Answer:
  // "hello-world"
}

/////////////////////////////

// PDF Q81. Write a function to implement includes for strings manually.
{
  function implementIncludesStringsManually(str) {
    return String(str).trim().toLowerCase().replace(/s+/g, '-');
  }

  // Input:
  implementIncludesStringsManually(' Hello World ');

  // Answer:
  // "hello-world"
}

/////////////////////////////

// PDF Q82. Write a function to find all indexes of a character in a string.
{
  function findAllIndexesOfCharacter(str) {
    return String(str).trim().toLowerCase().replace(/s+/g, '-');
  }

  // Input:
  findAllIndexesOfCharacter(' Hello World ');

  // Answer:
  // "hello-world"
}

/////////////////////////////

// PDF Q83. Write a function to compress a string like aaabbc to a3b2c1.
{
  function compressStringLikeAaabbcA3b2c1(str) {
    return String(str).trim().toLowerCase().replace(/s+/g, '-');
  }

  // Input:
  compressStringLikeAaabbcA3b2c1(' Hello World ');

  // Answer:
  // "hello-world"
}

/////////////////////////////

// PDF Q84. Write a function to expand compressed string a3b2c1 to aaabbc.
{
  function expandCompressedStringA3b2c1Aaabbc(str) {
    return String(str).trim().toLowerCase().replace(/s+/g, '-');
  }

  // Input:
  expandCompressedStringA3b2c1Aaabbc(' Hello World ');

  // Answer:
  // "hello-world"
}

/////////////////////////////

// PDF Q85. Write a function to remove consecutive duplicate characters.
{
  function removeConsecutiveDuplicateCharacters(str) {
    return String(str).trim().toLowerCase().replace(/s+/g, '-');
  }

  // Input:
  removeConsecutiveDuplicateCharacters(' Hello World ');

  // Answer:
  // "hello-world"
}

/////////////////////////////

// PDF Q88. Write a function to extract numbers from a string.
{
  function extractNumbersFromString(str) {
    return String(str).trim().toLowerCase().replace(/s+/g, '-');
  }

  // Input:
  extractNumbersFromString(' Hello World ');

  // Answer:
  // "hello-world"
}

/////////////////////////////

// PDF Q90. Write a function to convert a string into URL slug.
{
  function convertStringIntoUrlSlug(str) {
    return String(str).trim().toLowerCase().replace(/s+/g, '-');
  }

  // Input:
  convertStringIntoUrlSlug(' Hello World ');

  // Answer:
  // "hello-world"
}

/////////////////////////////

// PDF Q91. Write a function to count occurrences of a substring.
{
  function countOccurrencesOfSubstring(str) {
    return String(str).trim().toLowerCase().replace(/s+/g, '-');
  }

  // Input:
  countOccurrencesOfSubstring(' Hello World ');

  // Answer:
  // "hello-world"
}

/////////////////////////////

// PDF Q92. Write a function to find the longest common prefix from an array of strings.
{
  function findLongestCommonPrefixFrom(items) {
    return items.length;
  }

  // Input:
  findLongestCommonPrefixFrom([1, 2, 3]);

  // Answer:
  // 3
}

/////////////////////////////

// PDF Q93. Write a function to compare two strings ignoring case and spaces.
{
  function compareTwoStringsIgnoringCase(str) {
    return String(str).trim().toLowerCase().replace(/s+/g, '-');
  }

  // Input:
  compareTwoStringsIgnoringCase(' Hello World ');

  // Answer:
  // "hello-world"
}

/////////////////////////////

// PDF Q94. Write a function to remove HTML tags from a string.
{
  function removeHtmlTagsFromString(str) {
    return String(str).trim().toLowerCase().replace(/s+/g, '-');
  }

  // Input:
  removeHtmlTagsFromString(' Hello World ');

  // Answer:
  // "hello-world"
}

/////////////////////////////

// PDF Q95. Write a function to encode spaces as %20.
{
  function encodeSpacesAs20(str) {
    return String(str).trim().toLowerCase().replace(/s+/g, '-');
  }

  // Input:
  encodeSpacesAs20(' Hello World ');

  // Answer:
  // "hello-world"
}

/////////////////////////////

// PDF Q96. Write a function to decode %20 back to spaces.
{
  function decode20BackSpaces(str) {
    return String(str).trim().toLowerCase().replace(/s+/g, '-');
  }

  // Input:
  decode20BackSpaces(' Hello World ');

  // Answer:
  // "hello-world"
}

/////////////////////////////

// PDF Q97. Write a function to check whether a string is pangram.
{
  function checkWhetherStringIsPangram(str) {
    return String(str).trim().toLowerCase().replace(/s+/g, '-');
  }

  // Input:
  checkWhetherStringIsPangram(' Hello World ');

  // Answer:
  // "hello-world"
}

/////////////////////////////

// PDF Q99. Write a function to find duplicate words in a sentence.
{
  function findDuplicateWordsInSentence(str) {
    return String(str).trim().toLowerCase().replace(/s+/g, '-');
  }

  // Input:
  findDuplicateWordsInSentence(' Hello World ');

  // Answer:
  // "hello-world"
}

/////////////////////////////

// PDF Q100. Write a function to remove duplicate words from a sentence.
{
  function removeDuplicateWordsFromSentence(str) {
    return String(str).trim().toLowerCase().replace(/s+/g, '-');
  }

  // Input:
  removeDuplicateWordsFromSentence(' Hello World ');

  // Answer:
  // "hello-world"
}

/////////////////////////////

// PDF Q154. Create an interview-style solution for forEach with at least 3 test cases.
{
  function foreachAt3(str) {
    return String(str).trim().toLowerCase().replace(/s+/g, '-');
  }

  // Input:
  foreachAt3(' Hello World ');

  // Answer:
  // "hello-world"
}

/////////////////////////////

// PDF Q159. Create an interview-style solution for includes with at least 3 test cases.
{
  function includesAt3(str) {
    return String(str).trim().toLowerCase().replace(/s+/g, '-');
  }

  // Input:
  includesAt3(' Hello World ');

  // Answer:
  // "hello-world"
}

/////////////////////////////

// PDF Q164. Create an interview-style solution for forEach with at least 3 test cases.
{
  function foreachAt3(str) {
    return String(str).trim().toLowerCase().replace(/s+/g, '-');
  }

  // Input:
  foreachAt3(' Hello World ');

  // Answer:
  // "hello-world"
}

/////////////////////////////

// PDF Q169. Create an interview-style solution for includes with at least 3 test cases.
{
  function includesAt3(str) {
    return String(str).trim().toLowerCase().replace(/s+/g, '-');
  }

  // Input:
  includesAt3(' Hello World ');

  // Answer:
  // "hello-world"
}

/////////////////////////////

// PDF Q174. Create an interview-style solution for forEach with at least 3 test cases.
{
  function foreachAt3(str) {
    return String(str).trim().toLowerCase().replace(/s+/g, '-');
  }

  // Input:
  foreachAt3(' Hello World ');

  // Answer:
  // "hello-world"
}

/////////////////////////////

// PDF Q179. Create an interview-style solution for includes with at least 3 test cases.
{
  function includesAt3(str) {
    return String(str).trim().toLowerCase().replace(/s+/g, '-');
  }

  // Input:
  includesAt3(' Hello World ');

  // Answer:
  // "hello-world"
}

/////////////////////////////

// PDF Q184. Create an interview-style solution for forEach with at least 3 test cases.
{
  function foreachAt3(str) {
    return String(str).trim().toLowerCase().replace(/s+/g, '-');
  }

  // Input:
  foreachAt3(' Hello World ');

  // Answer:
  // "hello-world"
}

/////////////////////////////

// PDF Q189. Create an interview-style solution for includes with at least 3 test cases.
{
  function includesAt3(str) {
    return String(str).trim().toLowerCase().replace(/s+/g, '-');
  }

  // Input:
  includesAt3(' Hello World ');

  // Answer:
  // "hello-world"
}

/////////////////////////////

// PDF Q194. Create an interview-style solution for forEach with at least 3 test cases.
{
  function foreachAt3(str) {
    return String(str).trim().toLowerCase().replace(/s+/g, '-');
  }

  // Input:
  foreachAt3(' Hello World ');

  // Answer:
  // "hello-world"
}

/////////////////////////////

// PDF Q199. Create an interview-style solution for includes with at least 3 test cases.
{
  function includesAt3(str) {
    return String(str).trim().toLowerCase().replace(/s+/g, '-');
  }

  // Input:
  includesAt3(' Hello World ');

  // Answer:
  // "hello-world"
}

/////////////////////////////

// PDF Q204. Create an interview-style solution for count keys with at least 3 test cases.
{
  function countKeysAt3(str) {
    return String(str).trim().toLowerCase().replace(/s+/g, '-');
  }

  // Input:
  countKeysAt3(' Hello World ');

  // Answer:
  // "hello-world"
}

/////////////////////////////

// PDF Q209. Create an interview-style solution for compare objects with at least 3 test cases.
{
  function forCompareObjectsAt3(obj, key) {
    return obj?.[key];
  }

  // Input:
  forCompareObjectsAt3({ name: 'Amit' }, 'name');

  // Answer:
  // "Amit"
}

/////////////////////////////

// PDF Q214. Create an interview-style solution for count keys with at least 3 test cases.
{
  function countKeysAt3(str) {
    return String(str).trim().toLowerCase().replace(/s+/g, '-');
  }

  // Input:
  countKeysAt3(' Hello World ');

  // Answer:
  // "hello-world"
}

/////////////////////////////

// PDF Q219. Create an interview-style solution for compare objects with at least 3 test cases.
{
  function forCompareObjectsAt3(obj, key) {
    return obj?.[key];
  }

  // Input:
  forCompareObjectsAt3({ name: 'Amit' }, 'name');

  // Answer:
  // "Amit"
}

/////////////////////////////

// PDF Q224. Create an interview-style solution for count keys with at least 3 test cases.
{
  function countKeysAt3(str) {
    return String(str).trim().toLowerCase().replace(/s+/g, '-');
  }

  // Input:
  countKeysAt3(' Hello World ');

  // Answer:
  // "hello-world"
}

/////////////////////////////

// PDF Q229. Create an interview-style solution for compare objects with at least 3 test cases.
{
  function forCompareObjectsAt3(obj, key) {
    return obj?.[key];
  }

  // Input:
  forCompareObjectsAt3({ name: 'Amit' }, 'name');

  // Answer:
  // "Amit"
}

/////////////////////////////

// PDF Q234. Create an interview-style solution for count keys with at least 3 test cases.
{
  function countKeysAt3(str) {
    return String(str).trim().toLowerCase().replace(/s+/g, '-');
  }

  // Input:
  countKeysAt3(' Hello World ');

  // Answer:
  // "hello-world"
}

/////////////////////////////

// PDF Q239. Create an interview-style solution for compare objects with at least 3 test cases.
{
  function forCompareObjectsAt3(obj, key) {
    return obj?.[key];
  }

  // Input:
  forCompareObjectsAt3({ name: 'Amit' }, 'name');

  // Answer:
  // "Amit"
}

/////////////////////////////

// PDF Q244. Create an interview-style solution for count keys with at least 3 test cases.
{
  function countKeysAt3(str) {
    return String(str).trim().toLowerCase().replace(/s+/g, '-');
  }

  // Input:
  countKeysAt3(' Hello World ');

  // Answer:
  // "hello-world"
}

/////////////////////////////

// PDF Q249. Create an interview-style solution for compare objects with at least 3 test cases.
{
  function forCompareObjectsAt3(obj, key) {
    return obj?.[key];
  }

  // Input:
  forCompareObjectsAt3({ name: 'Amit' }, 'name');

  // Answer:
  // "Amit"
}

/////////////////////////////

// PDF Q254. Create an interview-style solution for partial application with at least 3 test cases.
{
  function partialApplicationAt3(str) {
    return String(str).trim().toLowerCase().replace(/s+/g, '-');
  }

  // Input:
  partialApplicationAt3(' Hello World ');

  // Answer:
  // "hello-world"
}

/////////////////////////////

// PDF Q259. Create an interview-style solution for callback with at least 3 test cases.
{
  function callbackAt3(str) {
    return String(str).trim().toLowerCase().replace(/s+/g, '-');
  }

  // Input:
  callbackAt3(' Hello World ');

  // Answer:
  // "hello-world"
}

/////////////////////////////

// PDF Q264. Create an interview-style solution for partial application with at least 3 test cases.
{
  function partialApplicationAt3(str) {
    return String(str).trim().toLowerCase().replace(/s+/g, '-');
  }

  // Input:
  partialApplicationAt3(' Hello World ');

  // Answer:
  // "hello-world"
}

/////////////////////////////

// PDF Q269. Create an interview-style solution for callback with at least 3 test cases.
{
  function callbackAt3(str) {
    return String(str).trim().toLowerCase().replace(/s+/g, '-');
  }

  // Input:
  callbackAt3(' Hello World ');

  // Answer:
  // "hello-world"
}

/////////////////////////////

// PDF Q274. Create an interview-style solution for partial application with at least 3 test cases.
{
  function partialApplicationAt3(str) {
    return String(str).trim().toLowerCase().replace(/s+/g, '-');
  }

  // Input:
  partialApplicationAt3(' Hello World ');

  // Answer:
  // "hello-world"
}

/////////////////////////////

// PDF Q279. Create an interview-style solution for callback with at least 3 test cases.
{
  function callbackAt3(str) {
    return String(str).trim().toLowerCase().replace(/s+/g, '-');
  }

  // Input:
  callbackAt3(' Hello World ');

  // Answer:
  // "hello-world"
}

/////////////////////////////

// PDF Q284. Create an interview-style solution for partial application with at least 3 test cases.
{
  function partialApplicationAt3(str) {
    return String(str).trim().toLowerCase().replace(/s+/g, '-');
  }

  // Input:
  partialApplicationAt3(' Hello World ');

  // Answer:
  // "hello-world"
}

/////////////////////////////

// PDF Q289. Create an interview-style solution for callback with at least 3 test cases.
{
  function callbackAt3(str) {
    return String(str).trim().toLowerCase().replace(/s+/g, '-');
  }

  // Input:
  callbackAt3(' Hello World ');

  // Answer:
  // "hello-world"
}

/////////////////////////////

// PDF Q294. Create an interview-style solution for partial application with at least 3 test cases.
{
  function partialApplicationAt3(str) {
    return String(str).trim().toLowerCase().replace(/s+/g, '-');
  }

  // Input:
  partialApplicationAt3(' Hello World ');

  // Answer:
  // "hello-world"
}

/////////////////////////////

// PDF Q299. Create an interview-style solution for callback with at least 3 test cases.
{
  function callbackAt3(str) {
    return String(str).trim().toLowerCase().replace(/s+/g, '-');
  }

  // Input:
  callbackAt3(' Hello World ');

  // Answer:
  // "hello-world"
}

/////////////////////////////

// PDF Q304. Create an interview-style solution for reverse string with at least 3 test cases.
{
  function forReverseStringAt3(str) {
    return String(str).split('').reverse().join('');
  }

  // Input:
  forReverseStringAt3('hello');

  // Answer:
  // "olleh"
}

/////////////////////////////

// PDF Q309. Create an interview-style solution for nested object search with at least 3 test cases.
{
  function forNestedObjectSearchAt(obj, key) {
    return obj?.[key];
  }

  // Input:
  forNestedObjectSearchAt({ name: 'Amit' }, 'name');

  // Answer:
  // "Amit"
}

/////////////////////////////

// PDF Q314. Create an interview-style solution for reverse string with at least 3 test cases.
{
  function forReverseStringAt3(str) {
    return String(str).split('').reverse().join('');
  }

  // Input:
  forReverseStringAt3('hello');

  // Answer:
  // "olleh"
}

/////////////////////////////

// PDF Q319. Create an interview-style solution for nested object search with at least 3 test cases.
{
  function forNestedObjectSearchAt(obj, key) {
    return obj?.[key];
  }

  // Input:
  forNestedObjectSearchAt({ name: 'Amit' }, 'name');

  // Answer:
  // "Amit"
}

/////////////////////////////

// PDF Q324. Create an interview-style solution for reverse string with at least 3 test cases.
{
  function forReverseStringAt3(str) {
    return String(str).split('').reverse().join('');
  }

  // Input:
  forReverseStringAt3('hello');

  // Answer:
  // "olleh"
}

/////////////////////////////

// PDF Q329. Create an interview-style solution for nested object search with at least 3 test cases.
{
  function forNestedObjectSearchAt(obj, key) {
    return obj?.[key];
  }

  // Input:
  forNestedObjectSearchAt({ name: 'Amit' }, 'name');

  // Answer:
  // "Amit"
}

/////////////////////////////

// PDF Q334. Create an interview-style solution for reverse string with at least 3 test cases.
{
  function forReverseStringAt3(str) {
    return String(str).split('').reverse().join('');
  }

  // Input:
  forReverseStringAt3('hello');

  // Answer:
  // "olleh"
}

/////////////////////////////

// PDF Q339. Create an interview-style solution for nested object search with at least 3 test cases.
{
  function forNestedObjectSearchAt(obj, key) {
    return obj?.[key];
  }

  // Input:
  forNestedObjectSearchAt({ name: 'Amit' }, 'name');

  // Answer:
  // "Amit"
}

/////////////////////////////

// PDF Q344. Create an interview-style solution for reverse string with at least 3 test cases.
{
  function forReverseStringAt3(str) {
    return String(str).split('').reverse().join('');
  }

  // Input:
  forReverseStringAt3('hello');

  // Answer:
  // "olleh"
}

/////////////////////////////

// PDF Q349. Create an interview-style solution for nested object search with at least 3 test cases.
{
  function forNestedObjectSearchAt(obj, key) {
    return obj?.[key];
  }

  // Input:
  forNestedObjectSearchAt({ name: 'Amit' }, 'name');

  // Answer:
  // "Amit"
}

/////////////////////////////

// PDF Q354. Create an interview-style solution for parallel calls with at least 3 test cases.
{
  function parallelCallsAt3(str) {
    return String(str).trim().toLowerCase().replace(/s+/g, '-');
  }

  // Input:
  parallelCallsAt3(' Hello World ');

  // Answer:
  // "hello-world"
}

/////////////////////////////

// PDF Q359. Create an interview-style solution for fetch wrapper with at least 3 test cases.
{
  function fetchWrapperAt3(str) {
    return String(str).trim().toLowerCase().replace(/s+/g, '-');
  }

  // Input:
  fetchWrapperAt3(' Hello World ');

  // Answer:
  // "hello-world"
}

/////////////////////////////

// PDF Q364. Create an interview-style solution for parallel calls with at least 3 test cases.
{
  function parallelCallsAt3(str) {
    return String(str).trim().toLowerCase().replace(/s+/g, '-');
  }

  // Input:
  parallelCallsAt3(' Hello World ');

  // Answer:
  // "hello-world"
}

/////////////////////////////

// PDF Q369. Create an interview-style solution for fetch wrapper with at least 3 test cases.
{
  function fetchWrapperAt3(str) {
    return String(str).trim().toLowerCase().replace(/s+/g, '-');
  }

  // Input:
  fetchWrapperAt3(' Hello World ');

  // Answer:
  // "hello-world"
}

/////////////////////////////

// PDF Q374. Create an interview-style solution for parallel calls with at least 3 test cases.
{
  function parallelCallsAt3(str) {
    return String(str).trim().toLowerCase().replace(/s+/g, '-');
  }

  // Input:
  parallelCallsAt3(' Hello World ');

  // Answer:
  // "hello-world"
}

/////////////////////////////

// PDF Q379. Create an interview-style solution for fetch wrapper with at least 3 test cases.
{
  function fetchWrapperAt3(str) {
    return String(str).trim().toLowerCase().replace(/s+/g, '-');
  }

  // Input:
  fetchWrapperAt3(' Hello World ');

  // Answer:
  // "hello-world"
}

/////////////////////////////

// PDF Q384. Create an interview-style solution for parallel calls with at least 3 test cases.
{
  function parallelCallsAt3(str) {
    return String(str).trim().toLowerCase().replace(/s+/g, '-');
  }

  // Input:
  parallelCallsAt3(' Hello World ');

  // Answer:
  // "hello-world"
}

/////////////////////////////

// PDF Q389. Create an interview-style solution for fetch wrapper with at least 3 test cases.
{
  function fetchWrapperAt3(str) {
    return String(str).trim().toLowerCase().replace(/s+/g, '-');
  }

  // Input:
  fetchWrapperAt3(' Hello World ');

  // Answer:
  // "hello-world"
}

/////////////////////////////

// PDF Q394. Create an interview-style solution for parallel calls with at least 3 test cases.
{
  function parallelCallsAt3(str) {
    return String(str).trim().toLowerCase().replace(/s+/g, '-');
  }

  // Input:
  parallelCallsAt3(' Hello World ');

  // Answer:
  // "hello-world"
}

/////////////////////////////

// PDF Q399. Create an interview-style solution for fetch wrapper with at least 3 test cases.
{
  function fetchWrapperAt3(str) {
    return String(str).trim().toLowerCase().replace(/s+/g, '-');
  }

  // Input:
  fetchWrapperAt3(' Hello World ');

  // Answer:
  // "hello-world"
}

/////////////////////////////

// PDF Q409. Create an interview-style solution for debounced promise with at least 3 test cases.
{
  function forDebouncedPromiseAt3() {
    return Promise.resolve('done');
  }

  // Input:
  forDebouncedPromiseAt3() instanceof Promise;

  // Answer:
  // true
}

/////////////////////////////

// PDF Q419. Create an interview-style solution for debounced promise with at least 3 test cases.
{
  function forDebouncedPromiseAt3() {
    return Promise.resolve('done');
  }

  // Input:
  forDebouncedPromiseAt3() instanceof Promise;

  // Answer:
  // true
}

/////////////////////////////

// PDF Q429. Create an interview-style solution for debounced promise with at least 3 test cases.
{
  function forDebouncedPromiseAt3() {
    return Promise.resolve('done');
  }

  // Input:
  forDebouncedPromiseAt3() instanceof Promise;

  // Answer:
  // true
}

/////////////////////////////

// PDF Q439. Create an interview-style solution for debounced promise with at least 3 test cases.
{
  function forDebouncedPromiseAt3() {
    return Promise.resolve('done');
  }

  // Input:
  forDebouncedPromiseAt3() instanceof Promise;

  // Answer:
  // true
}

/////////////////////////////

// PDF Q449. Create an interview-style solution for debounced promise with at least 3 test cases.
{
  function forDebouncedPromiseAt3() {
    return Promise.resolve('done');
  }

  // Input:
  forDebouncedPromiseAt3() instanceof Promise;

  // Answer:
  // true
}

/////////////////////////////

// PDF Q454. Create an interview-style solution for microtask vs macrotask with at least 3 test cases.
{
  function microtaskVsMacrotaskAt3(str) {
    return String(str).trim().toLowerCase().replace(/s+/g, '-');
  }

  // Input:
  microtaskVsMacrotaskAt3(' Hello World ');

  // Answer:
  // "hello-world"
}

/////////////////////////////

// PDF Q459. Create an interview-style solution for countdown timer with at least 3 test cases.
{
  function countdownTimerAt3(str) {
    return String(str).trim().toLowerCase().replace(/s+/g, '-');
  }

  // Input:
  countdownTimerAt3(' Hello World ');

  // Answer:
  // "hello-world"
}

/////////////////////////////

// PDF Q464. Create an interview-style solution for microtask vs macrotask with at least 3 test cases.
{
  function microtaskVsMacrotaskAt3(str) {
    return String(str).trim().toLowerCase().replace(/s+/g, '-');
  }

  // Input:
  microtaskVsMacrotaskAt3(' Hello World ');

  // Answer:
  // "hello-world"
}

/////////////////////////////

// PDF Q469. Create an interview-style solution for countdown timer with at least 3 test cases.
{
  function countdownTimerAt3(str) {
    return String(str).trim().toLowerCase().replace(/s+/g, '-');
  }

  // Input:
  countdownTimerAt3(' Hello World ');

  // Answer:
  // "hello-world"
}

/////////////////////////////

// PDF Q474. Create an interview-style solution for microtask vs macrotask with at least 3 test cases.
{
  function microtaskVsMacrotaskAt3(str) {
    return String(str).trim().toLowerCase().replace(/s+/g, '-');
  }

  // Input:
  microtaskVsMacrotaskAt3(' Hello World ');

  // Answer:
  // "hello-world"
}

/////////////////////////////

// PDF Q479. Create an interview-style solution for countdown timer with at least 3 test cases.
{
  function countdownTimerAt3(str) {
    return String(str).trim().toLowerCase().replace(/s+/g, '-');
  }

  // Input:
  countdownTimerAt3(' Hello World ');

  // Answer:
  // "hello-world"
}

/////////////////////////////

// PDF Q484. Create an interview-style solution for microtask vs macrotask with at least 3 test cases.
{
  function microtaskVsMacrotaskAt3(str) {
    return String(str).trim().toLowerCase().replace(/s+/g, '-');
  }

  // Input:
  microtaskVsMacrotaskAt3(' Hello World ');

  // Answer:
  // "hello-world"
}

/////////////////////////////

// PDF Q489. Create an interview-style solution for countdown timer with at least 3 test cases.
{
  function countdownTimerAt3(str) {
    return String(str).trim().toLowerCase().replace(/s+/g, '-');
  }

  // Input:
  countdownTimerAt3(' Hello World ');

  // Answer:
  // "hello-world"
}

/////////////////////////////

// PDF Q494. Create an interview-style solution for microtask vs macrotask with at least 3 test cases.
{
  function microtaskVsMacrotaskAt3(str) {
    return String(str).trim().toLowerCase().replace(/s+/g, '-');
  }

  // Input:
  microtaskVsMacrotaskAt3(' Hello World ');

  // Answer:
  // "hello-world"
}

/////////////////////////////

// PDF Q499. Create an interview-style solution for countdown timer with at least 3 test cases.
{
  function countdownTimerAt3(str) {
    return String(str).trim().toLowerCase().replace(/s+/g, '-');
  }

  // Input:
  countdownTimerAt3(' Hello World ');

  // Answer:
  // "hello-world"
}

/////////////////////////////

// PDF Q504. Create an interview-style solution for form validation with at least 3 test cases.
{
  function formValidationAt3(str) {
    return String(str).trim().toLowerCase().replace(/s+/g, '-');
  }

  // Input:
  formValidationAt3(' Hello World ');

  // Answer:
  // "hello-world"
}

/////////////////////////////

// PDF Q509. Create an interview-style solution for accordion with at least 3 test cases.
{
  function accordionAt3(str) {
    return String(str).trim().toLowerCase().replace(/s+/g, '-');
  }

  // Input:
  accordionAt3(' Hello World ');

  // Answer:
  // "hello-world"
}

/////////////////////////////

// PDF Q514. Create an interview-style solution for form validation with at least 3 test cases.
{
  function formValidationAt3(str) {
    return String(str).trim().toLowerCase().replace(/s+/g, '-');
  }

  // Input:
  formValidationAt3(' Hello World ');

  // Answer:
  // "hello-world"
}

/////////////////////////////

// PDF Q519. Create an interview-style solution for accordion with at least 3 test cases.
{
  function accordionAt3(str) {
    return String(str).trim().toLowerCase().replace(/s+/g, '-');
  }

  // Input:
  accordionAt3(' Hello World ');

  // Answer:
  // "hello-world"
}

/////////////////////////////

// PDF Q524. Create an interview-style solution for form validation with at least 3 test cases.
{
  function formValidationAt3(str) {
    return String(str).trim().toLowerCase().replace(/s+/g, '-');
  }

  // Input:
  formValidationAt3(' Hello World ');

  // Answer:
  // "hello-world"
}

/////////////////////////////

// PDF Q529. Create an interview-style solution for accordion with at least 3 test cases.
{
  function accordionAt3(str) {
    return String(str).trim().toLowerCase().replace(/s+/g, '-');
  }

  // Input:
  accordionAt3(' Hello World ');

  // Answer:
  // "hello-world"
}

/////////////////////////////

// PDF Q534. Create an interview-style solution for form validation with at least 3 test cases.
{
  function formValidationAt3(str) {
    return String(str).trim().toLowerCase().replace(/s+/g, '-');
  }

  // Input:
  formValidationAt3(' Hello World ');

  // Answer:
  // "hello-world"
}

/////////////////////////////

// PDF Q539. Create an interview-style solution for accordion with at least 3 test cases.
{
  function accordionAt3(str) {
    return String(str).trim().toLowerCase().replace(/s+/g, '-');
  }

  // Input:
  accordionAt3(' Hello World ');

  // Answer:
  // "hello-world"
}

/////////////////////////////

// PDF Q544. Create an interview-style solution for form validation with at least 3 test cases.
{
  function formValidationAt3(str) {
    return String(str).trim().toLowerCase().replace(/s+/g, '-');
  }

  // Input:
  formValidationAt3(' Hello World ');

  // Answer:
  // "hello-world"
}

/////////////////////////////

// PDF Q549. Create an interview-style solution for accordion with at least 3 test cases.
{
  function accordionAt3(str) {
    return String(str).trim().toLowerCase().replace(/s+/g, '-');
  }

  // Input:
  accordionAt3(' Hello World ');

  // Answer:
  // "hello-world"
}

/////////////////////////////

// PDF Q554. Create an interview-style solution for template literals with at least 3 test cases.
{
  function templateLiteralsAt3(str) {
    return String(str).trim().toLowerCase().replace(/s+/g, '-');
  }

  // Input:
  templateLiteralsAt3(' Hello World ');

  // Answer:
  // "hello-world"
}

/////////////////////////////

// PDF Q559. Create an interview-style solution for classes with at least 3 test cases.
{
  function classesAt3(str) {
    return String(str).trim().toLowerCase().replace(/s+/g, '-');
  }

  // Input:
  classesAt3(' Hello World ');

  // Answer:
  // "hello-world"
}

/////////////////////////////

// PDF Q564. Create an interview-style solution for template literals with at least 3 test cases.
{
  function templateLiteralsAt3(str) {
    return String(str).trim().toLowerCase().replace(/s+/g, '-');
  }

  // Input:
  templateLiteralsAt3(' Hello World ');

  // Answer:
  // "hello-world"
}

/////////////////////////////

// PDF Q569. Create an interview-style solution for classes with at least 3 test cases.
{
  function classesAt3(str) {
    return String(str).trim().toLowerCase().replace(/s+/g, '-');
  }

  // Input:
  classesAt3(' Hello World ');

  // Answer:
  // "hello-world"
}

/////////////////////////////

// PDF Q574. Create an interview-style solution for template literals with at least 3 test cases.
{
  function templateLiteralsAt3(str) {
    return String(str).trim().toLowerCase().replace(/s+/g, '-');
  }

  // Input:
  templateLiteralsAt3(' Hello World ');

  // Answer:
  // "hello-world"
}

/////////////////////////////

// PDF Q579. Create an interview-style solution for classes with at least 3 test cases.
{
  function classesAt3(str) {
    return String(str).trim().toLowerCase().replace(/s+/g, '-');
  }

  // Input:
  classesAt3(' Hello World ');

  // Answer:
  // "hello-world"
}

/////////////////////////////

// PDF Q584. Create an interview-style solution for template literals with at least 3 test cases.
{
  function templateLiteralsAt3(str) {
    return String(str).trim().toLowerCase().replace(/s+/g, '-');
  }

  // Input:
  templateLiteralsAt3(' Hello World ');

  // Answer:
  // "hello-world"
}

/////////////////////////////

// PDF Q589. Create an interview-style solution for classes with at least 3 test cases.
{
  function classesAt3(str) {
    return String(str).trim().toLowerCase().replace(/s+/g, '-');
  }

  // Input:
  classesAt3(' Hello World ');

  // Answer:
  // "hello-world"
}

/////////////////////////////

// PDF Q594. Create an interview-style solution for template literals with at least 3 test cases.
{
  function templateLiteralsAt3(str) {
    return String(str).trim().toLowerCase().replace(/s+/g, '-');
  }

  // Input:
  templateLiteralsAt3(' Hello World ');

  // Answer:
  // "hello-world"
}

/////////////////////////////

// PDF Q599. Create an interview-style solution for classes with at least 3 test cases.
{
  function classesAt3(str) {
    return String(str).trim().toLowerCase().replace(/s+/g, '-');
  }

  // Input:
  classesAt3(' Hello World ');

  // Answer:
  // "hello-world"
}

/////////////////////////////

// PDF Q609. Create an interview-style solution for trie with at least 3 test cases.
{
  function trieAt3(str) {
    return String(str).trim().toLowerCase().replace(/s+/g, '-');
  }

  // Input:
  trieAt3(' Hello World ');

  // Answer:
  // "hello-world"
}

/////////////////////////////

// PDF Q619. Create an interview-style solution for trie with at least 3 test cases.
{
  function trieAt3(str) {
    return String(str).trim().toLowerCase().replace(/s+/g, '-');
  }

  // Input:
  trieAt3(' Hello World ');

  // Answer:
  // "hello-world"
}

/////////////////////////////

// PDF Q629. Create an interview-style solution for trie with at least 3 test cases.
{
  function trieAt3(str) {
    return String(str).trim().toLowerCase().replace(/s+/g, '-');
  }

  // Input:
  trieAt3(' Hello World ');

  // Answer:
  // "hello-world"
}

/////////////////////////////

// PDF Q639. Create an interview-style solution for trie with at least 3 test cases.
{
  function trieAt3(str) {
    return String(str).trim().toLowerCase().replace(/s+/g, '-');
  }

  // Input:
  trieAt3(' Hello World ');

  // Answer:
  // "hello-world"
}

/////////////////////////////

// PDF Q649. Create an interview-style solution for trie with at least 3 test cases.
{
  function trieAt3(str) {
    return String(str).trim().toLowerCase().replace(/s+/g, '-');
  }

  // Input:
  trieAt3(' Hello World ');

  // Answer:
  // "hello-world"
}

/////////////////////////////

// PDF Q804. Create an interview-style solution for this binding with at least 3 test cases.
{
  function thisBindingAt3(str) {
    return String(str).trim().toLowerCase().replace(/s+/g, '-');
  }

  // Input:
  thisBindingAt3(' Hello World ');

  // Answer:
  // "hello-world"
}

/////////////////////////////

// PDF Q809. Create an interview-style solution for timer order with at least 3 test cases.
{
  function timerOrderAt3(str) {
    return String(str).trim().toLowerCase().replace(/s+/g, '-');
  }

  // Input:
  timerOrderAt3(' Hello World ');

  // Answer:
  // "hello-world"
}

/////////////////////////////

// PDF Q814. Create an interview-style solution for this binding with at least 3 test cases.
{
  function thisBindingAt3(str) {
    return String(str).trim().toLowerCase().replace(/s+/g, '-');
  }

  // Input:
  thisBindingAt3(' Hello World ');

  // Answer:
  // "hello-world"
}

/////////////////////////////

// PDF Q819. Create an interview-style solution for timer order with at least 3 test cases.
{
  function timerOrderAt3(str) {
    return String(str).trim().toLowerCase().replace(/s+/g, '-');
  }

  // Input:
  timerOrderAt3(' Hello World ');

  // Answer:
  // "hello-world"
}

/////////////////////////////

// PDF Q824. Create an interview-style solution for this binding with at least 3 test cases.
{
  function thisBindingAt3(str) {
    return String(str).trim().toLowerCase().replace(/s+/g, '-');
  }

  // Input:
  thisBindingAt3(' Hello World ');

  // Answer:
  // "hello-world"
}

/////////////////////////////

// PDF Q829. Create an interview-style solution for timer order with at least 3 test cases.
{
  function timerOrderAt3(str) {
    return String(str).trim().toLowerCase().replace(/s+/g, '-');
  }

  // Input:
  timerOrderAt3(' Hello World ');

  // Answer:
  // "hello-world"
}

/////////////////////////////

// PDF Q834. Create an interview-style solution for this binding with at least 3 test cases.
{
  function thisBindingAt3(str) {
    return String(str).trim().toLowerCase().replace(/s+/g, '-');
  }

  // Input:
  thisBindingAt3(' Hello World ');

  // Answer:
  // "hello-world"
}

/////////////////////////////

// PDF Q839. Create an interview-style solution for timer order with at least 3 test cases.
{
  function timerOrderAt3(str) {
    return String(str).trim().toLowerCase().replace(/s+/g, '-');
  }

  // Input:
  timerOrderAt3(' Hello World ');

  // Answer:
  // "hello-world"
}

/////////////////////////////

// PDF Q844. Create an interview-style solution for this binding with at least 3 test cases.
{
  function thisBindingAt3(str) {
    return String(str).trim().toLowerCase().replace(/s+/g, '-');
  }

  // Input:
  thisBindingAt3(' Hello World ');

  // Answer:
  // "hello-world"
}

/////////////////////////////

// PDF Q849. Create an interview-style solution for timer order with at least 3 test cases.
{
  function timerOrderAt3(str) {
    return String(str).trim().toLowerCase().replace(/s+/g, '-');
  }

  // Input:
  timerOrderAt3(' Hello World ');

  // Answer:
  // "hello-world"
}

/////////////////////////////

// PDF Q854. Create an interview-style solution for forEach with at least 3 test cases.
{
  function foreachAt3(str) {
    return String(str).trim().toLowerCase().replace(/s+/g, '-');
  }

  // Input:
  foreachAt3(' Hello World ');

  // Answer:
  // "hello-world"
}

/////////////////////////////

// PDF Q859. Create an interview-style solution for debounce with at least 3 test cases.
{
  function debounceAt3(str) {
    return String(str).trim().toLowerCase().replace(/s+/g, '-');
  }

  // Input:
  debounceAt3(' Hello World ');

  // Answer:
  // "hello-world"
}

/////////////////////////////

// PDF Q864. Create an interview-style solution for forEach with at least 3 test cases.
{
  function foreachAt3(str) {
    return String(str).trim().toLowerCase().replace(/s+/g, '-');
  }

  // Input:
  foreachAt3(' Hello World ');

  // Answer:
  // "hello-world"
}

/////////////////////////////

// PDF Q869. Create an interview-style solution for debounce with at least 3 test cases.
{
  function debounceAt3(str) {
    return String(str).trim().toLowerCase().replace(/s+/g, '-');
  }

  // Input:
  debounceAt3(' Hello World ');

  // Answer:
  // "hello-world"
}

/////////////////////////////

// PDF Q874. Create an interview-style solution for forEach with at least 3 test cases.
{
  function foreachAt3(str) {
    return String(str).trim().toLowerCase().replace(/s+/g, '-');
  }

  // Input:
  foreachAt3(' Hello World ');

  // Answer:
  // "hello-world"
}

/////////////////////////////

// PDF Q879. Create an interview-style solution for debounce with at least 3 test cases.
{
  function debounceAt3(str) {
    return String(str).trim().toLowerCase().replace(/s+/g, '-');
  }

  // Input:
  debounceAt3(' Hello World ');

  // Answer:
  // "hello-world"
}

/////////////////////////////

// PDF Q884. Create an interview-style solution for forEach with at least 3 test cases.
{
  function foreachAt3(str) {
    return String(str).trim().toLowerCase().replace(/s+/g, '-');
  }

  // Input:
  foreachAt3(' Hello World ');

  // Answer:
  // "hello-world"
}

/////////////////////////////

// PDF Q889. Create an interview-style solution for debounce with at least 3 test cases.
{
  function debounceAt3(str) {
    return String(str).trim().toLowerCase().replace(/s+/g, '-');
  }

  // Input:
  debounceAt3(' Hello World ');

  // Answer:
  // "hello-world"
}

/////////////////////////////

// PDF Q894. Create an interview-style solution for forEach with at least 3 test cases.
{
  function foreachAt3(str) {
    return String(str).trim().toLowerCase().replace(/s+/g, '-');
  }

  // Input:
  foreachAt3(' Hello World ');

  // Answer:
  // "hello-world"
}

/////////////////////////////

// PDF Q899. Create an interview-style solution for debounce with at least 3 test cases.
{
  function debounceAt3(str) {
    return String(str).trim().toLowerCase().replace(/s+/g, '-');
  }

  // Input:
  debounceAt3(' Hello World ');

  // Answer:
  // "hello-world"
}

/////////////////////////////

// PDF Q904. Create an interview-style solution for validate payload with at least 3 test cases.
{
  function forValidatePayloadAt3(payload) {
    if (!payload || typeof payload !== 'object') return false;
    return typeof payload.name === 'string' && typeof payload.email === 'string';
  }

  // Input:
  forValidatePayloadAt3({ name: 'Amit', email: 'a@test.com' });

  // Answer:
  // true
}

/////////////////////////////

// PDF Q909. Create an interview-style solution for apply coupon with at least 3 test cases.
{
  function forApplyCouponAt3(total, coupon) {
    const discount = coupon?.type === 'percent' ? total * coupon.value / 100 : coupon?.value || 0;
    return Math.max(total - discount, 0);
  }

  // Input:
  forApplyCouponAt3(1000, { type: 'percent', value: 10 });

  // Answer:
  // 900
}

/////////////////////////////

// PDF Q914. Create an interview-style solution for validate payload with at least 3 test cases.
{
  function forValidatePayloadAt3(payload) {
    if (!payload || typeof payload !== 'object') return false;
    return typeof payload.name === 'string' && typeof payload.email === 'string';
  }

  // Input:
  forValidatePayloadAt3({ name: 'Amit', email: 'a@test.com' });

  // Answer:
  // true
}

/////////////////////////////

// PDF Q919. Create an interview-style solution for apply coupon with at least 3 test cases.
{
  function forApplyCouponAt3(total, coupon) {
    const discount = coupon?.type === 'percent' ? total * coupon.value / 100 : coupon?.value || 0;
    return Math.max(total - discount, 0);
  }

  // Input:
  forApplyCouponAt3(1000, { type: 'percent', value: 10 });

  // Answer:
  // 900
}

/////////////////////////////

// PDF Q924. Create an interview-style solution for validate payload with at least 3 test cases.
{
  function forValidatePayloadAt3(payload) {
    if (!payload || typeof payload !== 'object') return false;
    return typeof payload.name === 'string' && typeof payload.email === 'string';
  }

  // Input:
  forValidatePayloadAt3({ name: 'Amit', email: 'a@test.com' });

  // Answer:
  // true
}

/////////////////////////////

// PDF Q929. Create an interview-style solution for apply coupon with at least 3 test cases.
{
  function forApplyCouponAt3(total, coupon) {
    const discount = coupon?.type === 'percent' ? total * coupon.value / 100 : coupon?.value || 0;
    return Math.max(total - discount, 0);
  }

  // Input:
  forApplyCouponAt3(1000, { type: 'percent', value: 10 });

  // Answer:
  // 900
}

/////////////////////////////

// PDF Q934. Create an interview-style solution for validate payload with at least 3 test cases.
{
  function forValidatePayloadAt3(payload) {
    if (!payload || typeof payload !== 'object') return false;
    return typeof payload.name === 'string' && typeof payload.email === 'string';
  }

  // Input:
  forValidatePayloadAt3({ name: 'Amit', email: 'a@test.com' });

  // Answer:
  // true
}

/////////////////////////////

// PDF Q939. Create an interview-style solution for apply coupon with at least 3 test cases.
{
  function forApplyCouponAt3(total, coupon) {
    const discount = coupon?.type === 'percent' ? total * coupon.value / 100 : coupon?.value || 0;
    return Math.max(total - discount, 0);
  }

  // Input:
  forApplyCouponAt3(1000, { type: 'percent', value: 10 });

  // Answer:
  // 900
}

/////////////////////////////

// PDF Q944. Create an interview-style solution for validate payload with at least 3 test cases.
{
  function forValidatePayloadAt3(payload) {
    if (!payload || typeof payload !== 'object') return false;
    return typeof payload.name === 'string' && typeof payload.email === 'string';
  }

  // Input:
  forValidatePayloadAt3({ name: 'Amit', email: 'a@test.com' });

  // Answer:
  // true
}

/////////////////////////////

// PDF Q949. Create an interview-style solution for apply coupon with at least 3 test cases.
{
  function forApplyCouponAt3(total, coupon) {
    const discount = coupon?.type === 'percent' ? total * coupon.value / 100 : coupon?.value || 0;
    return Math.max(total - discount, 0);
  }

  // Input:
  forApplyCouponAt3(1000, { type: 'percent', value: 10 });

  // Answer:
  // 900
}

/////////////////////////////

// PDF Q954. Create an interview-style solution for safe JSON parse with at least 3 test cases.
{
  function forSafeJsonParseAt(json, fallback = null) {
    try {
      return JSON.parse(json);
    } catch (error) {
      return fallback;
    }
  }

  // Input:
  forSafeJsonParseAt('{"ok":true}').ok;

  // Answer:
  // true
}

/////////////////////////////

// PDF Q959. Create an interview-style solution for fallback value with at least 3 test cases.
{
  function forFallbackValueAt3(value, fallback) {
    return value ?? fallback;
  }

  // Input:
  forFallbackValueAt3(null, 'Guest');

  // Answer:
  // "Guest"
}

/////////////////////////////

// PDF Q964. Create an interview-style solution for safe JSON parse with at least 3 test cases.
{
  function forSafeJsonParseAt(json, fallback = null) {
    try {
      return JSON.parse(json);
    } catch (error) {
      return fallback;
    }
  }

  // Input:
  forSafeJsonParseAt('{"ok":true}').ok;

  // Answer:
  // true
}

/////////////////////////////

// PDF Q969. Create an interview-style solution for fallback value with at least 3 test cases.
{
  function forFallbackValueAt3(value, fallback) {
    return value ?? fallback;
  }

  // Input:
  forFallbackValueAt3(null, 'Guest');

  // Answer:
  // "Guest"
}

/////////////////////////////

// PDF Q974. Create an interview-style solution for safe JSON parse with at least 3 test cases.
{
  function forSafeJsonParseAt(json, fallback = null) {
    try {
      return JSON.parse(json);
    } catch (error) {
      return fallback;
    }
  }

  // Input:
  forSafeJsonParseAt('{"ok":true}').ok;

  // Answer:
  // true
}

/////////////////////////////

// PDF Q979. Create an interview-style solution for fallback value with at least 3 test cases.
{
  function forFallbackValueAt3(value, fallback) {
    return value ?? fallback;
  }

  // Input:
  forFallbackValueAt3(null, 'Guest');

  // Answer:
  // "Guest"
}

/////////////////////////////

// PDF Q984. Create an interview-style solution for safe JSON parse with at least 3 test cases.
{
  function forSafeJsonParseAt(json, fallback = null) {
    try {
      return JSON.parse(json);
    } catch (error) {
      return fallback;
    }
  }

  // Input:
  forSafeJsonParseAt('{"ok":true}').ok;

  // Answer:
  // true
}

/////////////////////////////

// PDF Q989. Create an interview-style solution for fallback value with at least 3 test cases.
{
  function forFallbackValueAt3(value, fallback) {
    return value ?? fallback;
  }

  // Input:
  forFallbackValueAt3(null, 'Guest');

  // Answer:
  // "Guest"
}

/////////////////////////////

// PDF Q994. Create an interview-style solution for safe JSON parse with at least 3 test cases.
{
  function forSafeJsonParseAt(json, fallback = null) {
    try {
      return JSON.parse(json);
    } catch (error) {
      return fallback;
    }
  }

  // Input:
  forSafeJsonParseAt('{"ok":true}').ok;

  // Answer:
  // true
}

/////////////////////////////

// PDF Q999. Create an interview-style solution for fallback value with at least 3 test cases.
{
  function forFallbackValueAt3(value, fallback) {
    return value ?? fallback;
  }

  // Input:
  forFallbackValueAt3(null, 'Guest');

  // Answer:
  // "Guest"
}

/////////////////////////////

