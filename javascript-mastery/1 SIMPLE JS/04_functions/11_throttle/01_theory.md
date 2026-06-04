# Throttle

Path: `1 SIMPLE JS\04_functions\11_throttle\01_theory.md`

## Simple Meaning

Throttle function ko fixed interval me limited baar run karta hai.

## Real Use

Use it scroll, mousemove, resize repeated events me.

## Small Example

```js
function throttle(fn, delay) {
  let waiting = false;
  return (...args) => {
    if (waiting) return;
    fn(...args);
    waiting = true;
    setTimeout(() => waiting = false, delay);
  };
}
```

## Common Mistake

Throttle aur debounce ka use case alag hai.

## Interview Answer

Throttle ka short interview answer: Throttle function ko fixed interval me limited baar run karta hai. Saath me ek small example aur common mistake bol doge toh answer strong lagega.

