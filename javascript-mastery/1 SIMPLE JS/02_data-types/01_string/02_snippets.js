"use strict";

/*
Path: 1 SIMPLE JS/02_data-types/01_string/02_snippets.js
Topic: String

How to study:
1. Read one method.
2. Predict output.
3. Run this file.
4. Change input and run again.

Run:
node "1 SIMPLE JS/02_data-types/01_string/02_snippets.js"
*/

function section(label) {
  console.log("\n--- " + label + " ---");
}

section("Topic");
console.log("String stores text. Most string methods return a new string.");

/////////////////////////////

section("Example 1: length");
{
  const name = "Aman";

  console.log(name.length); // 4
}

/////////////////////////////

section("Example 2: index access");
{
  const name = "Aman";

  console.log(name[0]); // A
  console.log(name[1]); // m
}

/////////////////////////////

section("Example 3: charAt()");
{
  const name = "Aman";

  console.log(name.charAt(0)); // A
  console.log(name.charAt(2)); // a
}

/////////////////////////////

section("Example 4: at()");
{
  const name = "Aman";

  console.log(name.at(0)); // A
  console.log(name.at(-1)); // n
}

/////////////////////////////

section("Example 5: toUpperCase()");
{
  const text = "javascript";

  console.log(text.toUpperCase()); // JAVASCRIPT
}

/////////////////////////////

section("Example 6: toLowerCase()");
{
  const text = "JAVASCRIPT";

  console.log(text.toLowerCase()); // javascript
}

/////////////////////////////

section("Example 7: trim()");
{
  const email = "  test@gmail.com  ";

  console.log(email.trim()); // test@gmail.com
}

/////////////////////////////

section("Example 8: trimStart() and trimEnd()");
{
  const text = "  hello  ";

  console.log(text.trimStart()); // "hello  "
  console.log(text.trimEnd()); // "  hello"
}

/////////////////////////////

section("Example 9: includes()");
{
  const sentence = "I am learning JavaScript";

  console.log(sentence.includes("JavaScript")); // true
  console.log(sentence.includes("Python")); // false
}

/////////////////////////////

section("Example 10: startsWith()");
{
  const fileName = "profile-photo.png";

  console.log(fileName.startsWith("profile")); // true
  console.log(fileName.startsWith("photo")); // false
}

/////////////////////////////

section("Example 11: endsWith()");
{
  const fileName = "profile-photo.png";

  console.log(fileName.endsWith(".png")); // true
  console.log(fileName.endsWith(".jpg")); // false
}

/////////////////////////////

section("Example 12: indexOf()");
{
  const sentence = "JavaScript is powerful";

  console.log(sentence.indexOf("Script")); // 4
  console.log(sentence.indexOf("Python")); // -1
}

/////////////////////////////

section("Example 13: lastIndexOf()");
{
  const text = "hello world hello";

  console.log(text.lastIndexOf("hello")); // 12
}

/////////////////////////////

section("Example 14: slice()");
{
  const text = "JavaScript";

  console.log(text.slice(0, 4)); // Java
  console.log(text.slice(4)); // Script
  console.log(text.slice(-6)); // Script
}

/////////////////////////////

section("Example 15: substring()");
{
  const text = "JavaScript";

  console.log(text.substring(0, 4)); // Java
  console.log(text.substring(4)); // Script
}

/////////////////////////////

section("Example 16: replace()");
{
  const message = "Hello user";

  console.log(message.replace("user", "Aman")); // Hello Aman
}

/////////////////////////////

section("Example 17: replaceAll()");
{
  const text = "red blue red";

  console.log(text.replaceAll("red", "green")); // green blue green
}

/////////////////////////////

section("Example 18: split()");
{
  const tags = "js,react,node";

  console.log(tags.split(",")); // ["js", "react", "node"]
}

/////////////////////////////

section("Example 19: join() after split()");
{
  const fullName = "Aman Sharma";
  const words = fullName.split(" ");

  console.log(words.join("-")); // Aman-Sharma
}

/////////////////////////////

section("Example 20: concat()");
{
  const firstName = "Aman";
  const lastName = "Sharma";

  console.log(firstName.concat(" ", lastName)); // Aman Sharma
}

/////////////////////////////

section("Example 21: repeat()");
{
  const star = "*";

  console.log(star.repeat(5)); // *****
}

/////////////////////////////

section("Example 22: padStart()");
{
  const orderId = "45";

  console.log(orderId.padStart(5, "0")); // 00045
}

/////////////////////////////

section("Example 23: padEnd()");
{
  const username = "aman";

  console.log(username.padEnd(8, "_")); // aman____
}

/////////////////////////////

section("Example 24: charCodeAt()");
{
  const letter = "A";

  console.log(letter.charCodeAt(0)); // 65
}

/////////////////////////////

section("Example 25: String.fromCharCode()");
{
  console.log(String.fromCharCode(65)); // A
}

/////////////////////////////

section("Example 26: match()");
{
  const text = "Order id is 12345";

  console.log(text.match(/\d+/)[0]); // 12345
}

/////////////////////////////

section("Example 27: search()");
{
  const text = "Contact: test@gmail.com";

  console.log(text.search("@")); // 13
}

/////////////////////////////

section("Example 28: localeCompare()");
{
  console.log("apple".localeCompare("banana")); // -1
  console.log("banana".localeCompare("apple")); // 1
}

/////////////////////////////

section("Example 29: Template literal");
{
  const name = "Aman";
  const score = 90;

  console.log(`${name} scored ${score} marks`); // Aman scored 90 marks
}

/////////////////////////////

section("Example 30: String immutability");
{
  const word = "node";
  const upperWord = word.toUpperCase();

  console.log(upperWord); // NODE
  console.log(word); // node
}

/////////////////////////////
