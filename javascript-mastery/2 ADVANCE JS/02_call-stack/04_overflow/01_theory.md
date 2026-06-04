# Overflow

Path: `2 ADVANCE JS\02_call-stack\04_overflow\01_theory.md`

## Simple Meaning

Call stack function calls ko LIFO order me manage karta hai.

## Real Use

Use it nested calls aur recursion trace karne ke liye.

## Small Example

```js
function a() { b(); }
function b() { console.log("b"); }
a();
```

## Common Mistake

Async callback stack me tab aata hai jab stack empty hota hai.

## Interview Answer

Overflow ka short interview answer: Call stack function calls ko LIFO order me manage karta hai. Saath me ek small example aur common mistake bol doge toh answer strong lagega.

