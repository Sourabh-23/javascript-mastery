# Strict Mode

Path: `2 ADVANCE JS\04_this-keyword\05_strict-mode\01_theory.md`

## Simple Meaning

this ka value function call kaise hua is par depend karta hai. Arrow function outer this use karta hai.

## Real Use

Use it methods, classes, call/apply/bind, interview output questions me.

## Small Example

```js
const user = { name: "Amit", getName() { return this.name; } };
console.log(user.getName());
```

## Common Mistake

this ko function definition se decide mat karo; call-site dekho.

## Interview Answer

Strict Mode ka short interview answer: this ka value function call kaise hua is par depend karta hai. Arrow function outer this use karta hai. Saath me ek small example aur common mistake bol doge toh answer strong lagega.

