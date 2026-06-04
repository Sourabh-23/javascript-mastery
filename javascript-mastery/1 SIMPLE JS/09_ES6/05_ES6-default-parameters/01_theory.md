# ES6 Default Parameters

Path: `1 SIMPLE JS\09_ES6\05_ES6-default-parameters\01_theory.md`

## Simple Meaning

Default parameters function arguments missing ya undefined hone par fallback value dete hain.

## Real Use

Use it optional function inputs ke liye.

## Small Example

```js
function greet(name = "Guest") {
  return "Hello " + name;
}
console.log(greet());
```

## Common Mistake

null pass karne par default value apply nahi hoti, only undefined/missing par hoti hai.

## Interview Answer

ES6 Default Parameters ka short interview answer: Default parameters function arguments missing ya undefined hone par fallback value dete hain. Saath me ek small example aur common mistake bol doge toh answer strong lagega.

