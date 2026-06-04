# Deep Copy

Path: `1 SIMPLE JS\07_objects\08_deep-copy\01_theory.md`

## Simple Meaning

Deep copy nested levels ko bhi separate copy banata hai.

## Real Use

Use it jab nested object modify karna ho without original change.

## Small Example

```js
const a = { user: { name: "Amit" } };
const b = structuredClone(a);
b.user.name = "Rahul";
console.log(a.user.name);
```

## Common Mistake

JSON copy functions/date/undefined handle nahi karta.

## Interview Answer

Deep Copy ka short interview answer: Deep copy nested levels ko bhi separate copy banata hai. Saath me ek small example aur common mistake bol doge toh answer strong lagega.

