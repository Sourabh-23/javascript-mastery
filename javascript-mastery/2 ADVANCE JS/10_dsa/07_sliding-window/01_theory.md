# Sliding Window

Path: `2 ADVANCE JS\10_dsa\07_sliding-window\01_theory.md`

## Simple Meaning

Sliding window continuous range problems ko efficient banata hai.

## Real Use

Use it max sum subarray, longest substring, fixed/variable window problems me.

## Small Example

```js
let sum = 0;
for (let i = 0; i < nums.length; i++) {
  sum += nums[i];
  if (i >= k) sum -= nums[i - k];
}
```

## Common Mistake

Window update karte time left/right pointer carefully manage karo.

## Interview Answer

Sliding Window ka short interview answer: Sliding window continuous range problems ko efficient banata hai. Saath me ek small example aur common mistake bol doge toh answer strong lagega.

