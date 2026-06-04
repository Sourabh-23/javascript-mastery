# Async Errors

Path: `2 ADVANCE JS\08_error-handling\05_async-errors\01_theory.md`

## Simple Meaning

Error handling runtime problems ko gracefully handle karta hai.

## Real Use

Use it JSON parse, API, validation, file operations, async failures me.

## Small Example

```js
try {
  throw new Error("fail");
} catch (error) {
  console.log(error.message);
}
```

## Common Mistake

Async errors ko normal outer try-catch se catch nahi kar paoge unless await/promise handle ho.

## Interview Answer

Async Errors ka short interview answer: Error handling runtime problems ko gracefully handle karta hai. Saath me ek small example aur common mistake bol doge toh answer strong lagega.

