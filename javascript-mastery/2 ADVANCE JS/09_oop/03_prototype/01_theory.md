# Prototype

Path: `2 ADVANCE JS\09_oop\03_prototype\01_theory.md`

## Simple Meaning

Prototype shared methods/properties ka mechanism hai.

## Real Use

Use it inheritance aur class internals samajhne ke liye.

## Small Example

```js
function User(name) { this.name = name; }
User.prototype.sayHi = function () { return "Hi " + this.name; };
```

## Common Mistake

Class syntax bhi internally prototype use karta hai.

## Interview Answer

Prototype ka short interview answer: Prototype shared methods/properties ka mechanism hai. Saath me ek small example aur common mistake bol doge toh answer strong lagega.

