# ES6 Iterators

Path: `1 SIMPLE JS\09_ES6\10_ES6-iterators\01_theory.md`

## Simple Meaning

Iterator object next() method se sequence ka next value deta hai.

## Real Use

Use it for-of loop aur custom iterable behavior samajhne ke liye.

## Small Example

```js
const nums = [1, 2];
const iterator = nums[Symbol.iterator]();
console.log(iterator.next().value);
```

## Common Mistake

Iterator aur iterable same nahi hote; iterable iterator create kar sakta hai.

## Interview Answer

ES6 Iterators ka short interview answer: Iterator object next() method se sequence ka next value deta hai. Saath me ek small example aur common mistake bol doge toh answer strong lagega.

