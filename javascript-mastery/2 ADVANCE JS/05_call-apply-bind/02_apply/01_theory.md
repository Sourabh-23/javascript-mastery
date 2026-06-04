# Apply

Path: `2 ADVANCE JS\05_call-apply-bind\02_apply\01_theory.md`

## Simple Meaning

apply call jaisa hai but arguments array me leta hai.

## Real Use

Use it jab arguments already array form me hon.

## Small Example

```js
function add(a, b) { return this.base + a + b; }
console.log(add.apply({ base: 10 }, [1, 2]));
```

## Common Mistake

apply aur call ka main difference argument passing hai.

## Interview Answer

Apply ka short interview answer: apply call jaisa hai but arguments array me leta hai. Saath me ek small example aur common mistake bol doge toh answer strong lagega.

