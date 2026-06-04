# Recursion

Path: `2 ADVANCE JS\10_dsa\06_recursion\01_theory.md`

## Simple Meaning

Recursion me function khud ko call karta hai until base condition.

## Real Use

Use it tree, nested data, factorial, fibonacci jaisi problems me.

## Small Example

```js
function factorial(n) {
  if (n <= 1) return 1;
  return n * factorial(n - 1);
}
console.log(factorial(5));
```

## Common Mistake

Base condition missing hui toh stack overflow ho sakta hai.

## Interview Answer

Recursion ka short interview answer: Recursion me function khud ko call karta hai until base condition. Saath me ek small example aur common mistake bol doge toh answer strong lagega.

