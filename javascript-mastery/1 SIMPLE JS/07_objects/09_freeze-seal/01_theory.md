# Freeze Seal

Path: `1 SIMPLE JS\07_objects\09_freeze-seal\01_theory.md`

## Simple Meaning

freeze changes block karta hai; seal add/delete block karta hai.

## Real Use

Use it object modification control karne ke liye.

## Small Example

```js
const user = Object.freeze({ name: "Amit" });
console.log(user.name);
```

## Common Mistake

freeze shallow hota hai, nested object freeze nahi hota unless manually freeze karo.

## Interview Answer

Freeze Seal ka short interview answer: freeze changes block karta hai; seal add/delete block karta hai. Saath me ek small example aur common mistake bol doge toh answer strong lagega.

