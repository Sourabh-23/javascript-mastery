# Microtask Queue

Path: `2 ADVANCE JS\07_event-loop\04_microtask-queue\01_theory.md`

## Simple Meaning

Event loop sync code, microtasks, timers aur callbacks ka execution order manage karta hai.

## Real Use

Use it promise vs setTimeout output questions samajhne ke liye.

## Small Example

```js
console.log("1");
setTimeout(() => console.log("2"), 0);
Promise.resolve().then(() => console.log("3"));
```

## Common Mistake

Promise microtasks timers se pehle run hote hain.

## Interview Answer

Microtask Queue ka short interview answer: Event loop sync code, microtasks, timers aur callbacks ka execution order manage karta hai. Saath me ek small example aur common mistake bol doge toh answer strong lagega.

