"use strict";

/*
Path: 01-variables/let/snippets.js
Topic: Let

How to study:
1. Read one example.
2. Predict output.
3. Run this file.
4. Change one line and run again.

Run:
node 01-variables/let/snippets.js
*/

function section(label) {
  console.log("\n--- " + label + " ---");
}

section("Topic");
console.log("let is block scoped and can be reassigned after declaration.");

section("Example 1: Reassignment");
{
  let count = 1; //VARIABLE DECLARATION
  count = 2;    //REASSIGNMENT
  console.log(count); //output: 2
}

/////////////////////////////

section("Example 2: Block scope");
{
  if (true) {   // This block creates a new scope
    let role = "admin"; // role is only accessible within this block
    console.log(role); // output: admin
  }
  try {
    console.log(role); // This will throw an error because role is not defined outside the block
  } catch (error) { // Catch the error and log its name
    console.log(error.name);// ReferenceError
  }
}

/////////////////////////////

section("Example 3: No redeclaration in same scope");
{
  let score = 10; // VARIABLE DECLARATION
  score += 5;    // REASSIGNMENT
  console.log(score); // output: 15
}


// DIFFERENCE BETWEEN LET AND CONST
// answer: The main difference between let and const is that let allows you to reassign a variable after
//  it has been declared, while const does not allow reassignment. 
// However, both let and const are block scoped, 
// meaning they are only accessible within the block they are defined in. 
// Additionally, if a variable is declared with const and holds an object or array, 
// you can still modify the properties of the object or the elements of the array,
//  but you cannot reassign the variable to a new value.




//1. let — reassignment allowed ✅
let age = 25; // pehle value assign ki 
age = 26; // dobara assign kar sakte ho — no error 
console.log(age); // 26

//2. const — reassignment not allowed ❌
const name = "Sourabh"; //
 name = "Rahul"; // ❌ TypeError: Assignment to constant variable // const ko dobara assign nahi kar sakte


 //3. const with object — properties change kar sakte ho ✅
const user = { name: "Sourabh", age: 25 }; user.age = 26; // ✅ allowed — property change kar rahe ho, variable nahi console.log(user); 
// // { name: "Sourabh", age: 26 } user = { name: "Rahul" }; // ❌ TypeError — poora object replace nahi kar sakte


//4. const with array — elements change kar sakte ho ✅
const fruits = ["apple", "mango"];
 fruits.push("banana"); // ✅ allowed — array modify kar rahe ho console.log(fruits); 
// // ["apple", "mango", "banana"] fruits = ["grapes"]; // ❌ TypeError — naya array assign nahi kar sakte

//5. dono block scoped hain — {} ke bahar accessible nahi
// { let x = 10; const y = 20; console.log(x, y); // 10 20 } console.log(x); 
// // ❌ ReferenceError: x is not defined console.log(y);
//  // ❌ ReferenceError: y is not defined // block ke bahar dono accessible nahi

/////////////////////////////
