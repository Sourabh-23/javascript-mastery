# ES6 Symbol

Path: `1 SIMPLE JS\02_data-types\07_ES6-symbol\01_theory.md`

## Simple Meaning

Symbol unique identifier banata hai, mostly unique object keys ke liye.

## Real Use

Use it jab object key collision avoid karni ho.

## Small Example

```js
const id = Symbol("id");
const user = { [id]: 1 };
console.log(user[id]);
```

## Common Mistake

Do same description wale Symbols equal nahi hote.

## Interview Answer

ES6 Symbol ka short interview answer: Symbol unique identifier banata hai, mostly unique object keys ke liye. Saath me ek small example aur common mistake bol doge toh answer strong lagega.

