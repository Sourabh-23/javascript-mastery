# ES6 Rest

Path: `1 SIMPLE JS\03_operators\10_ES6-rest\01_theory.md`

## Simple Meaning

Rest ... multiple values ko ek array/object me collect karta hai.

## Real Use

Use it variable arguments aur remaining properties ke liye.

## Small Example

```js
function sum(...nums) {
  return nums.reduce((a, b) => a + b, 0);
}
console.log(sum(1, 2, 3));
```

## Common Mistake

Rest parameter function parameters me last hona chahiye.

## Interview Answer

ES6 Rest ka short interview answer: Rest ... multiple values ko ek array/object me collect karta hai. Saath me ek small example aur common mistake bol doge toh answer strong lagega.

