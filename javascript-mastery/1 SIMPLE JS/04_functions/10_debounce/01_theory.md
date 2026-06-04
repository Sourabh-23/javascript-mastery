# Debounce

Path: `1 SIMPLE JS\04_functions\10_debounce\01_theory.md`

## Simple Meaning

Debounce function ko tab run karta hai jab action kuch time tak ruk jaye.

## Real Use

Use it search input, resize, typing events me.

## Small Example

```js
function debounce(fn, delay) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), delay);
  };
}
```

## Common Mistake

Debounce immediate repeated calls ko delay/cancel karta hai.

## Interview Answer

Debounce ka short interview answer: Debounce function ko tab run karta hai jab action kuch time tak ruk jaye. Saath me ek small example aur common mistake bol doge toh answer strong lagega.

