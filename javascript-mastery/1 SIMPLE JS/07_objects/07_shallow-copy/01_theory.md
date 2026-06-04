# Shallow Copy

Path: `1 SIMPLE JS\07_objects\07_shallow-copy\01_theory.md`

## Simple Meaning

Shallow copy sirf first level copy karta hai.

## Real Use

Use it simple object/array clone ke liye.

## Small Example

```js
const a = { user: { name: "Amit" } };
const b = { ...a };
b.user.name = "Rahul";
console.log(a.user.name);
```

## Common Mistake

Nested object reference share hota hai.

## Interview Answer

Shallow Copy ka short interview answer: Shallow copy sirf first level copy karta hai. Saath me ek small example aur common mistake bol doge toh answer strong lagega.

