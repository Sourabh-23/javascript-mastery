# Memoization

Path: `2 ADVANCE JS\03_closures\06_memoization\01_theory.md`

## Simple Meaning

Memoization previous result cache karta hai.

## Real Use

Use it expensive repeated calculations me.

## Small Example

```js
const cache = {};
function square(n) {
  if (cache[n]) return cache[n];
  cache[n] = n * n;
  return cache[n];
}
```

## Common Mistake

Cache key galat banane se wrong result aa sakta hai.

## Interview Answer

Memoization ka short interview answer: Memoization previous result cache karta hai. Saath me ek small example aur common mistake bol doge toh answer strong lagega.

