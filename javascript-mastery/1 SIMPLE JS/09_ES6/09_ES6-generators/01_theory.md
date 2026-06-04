# ES6 Generators

Path: `1 SIMPLE JS\09_ES6\09_ES6-generators\01_theory.md`

## Simple Meaning

Generator function pause aur resume ho sakta hai using yield.

## Real Use

Use it custom iteration, lazy values, controlled sequence generation me.

## Small Example

```js
function* ids() {
  yield 1;
  yield 2;
}
console.log(ids().next().value);
```

## Common Mistake

Generator call karne se code immediately run nahi hota; iterator object milta hai.

## Interview Answer

ES6 Generators ka short interview answer: Generator function pause aur resume ho sakta hai using yield. Saath me ek small example aur common mistake bol doge toh answer strong lagega.

