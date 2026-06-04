# Counter Example

Path: `2 ADVANCE JS\03_closures\05_counter-example\01_theory.md`

## Simple Meaning

Closure me inner function outer variables ko yaad rakhta hai even after outer function return.

## Real Use

Use it private variables, counters, memoization, function factories me.

## Small Example

```js
function counter() {
  let count = 0;
  return () => ++count;
}
const c = counter();
console.log(c());
```

## Common Mistake

Closure variable ki value remember karta hai, copy nahi.

## Interview Answer

Counter Example ka short interview answer: Closure me inner function outer variables ko yaad rakhta hai even after outer function return. Saath me ek small example aur common mistake bol doge toh answer strong lagega.

