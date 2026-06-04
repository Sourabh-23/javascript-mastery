# Dynamic Programming

Path: `2 ADVANCE JS\10_dsa\16_dynamic-programming\01_theory.md`

## Simple Meaning

Dynamic programming repeated subproblems ke answers store karta hai.

## Real Use

Use it Fibonacci, knapsack, grid paths, optimization problems me.

## Small Example

```js
const dp = [0, 1];
for (let i = 2; i <= 5; i++) dp[i] = dp[i - 1] + dp[i - 2];
console.log(dp[5]);
```

## Common Mistake

DP tabhi useful hai jab overlapping subproblems ho.

## Interview Answer

Dynamic Programming ka short interview answer: Dynamic programming repeated subproblems ke answers store karta hai. Saath me ek small example aur common mistake bol doge toh answer strong lagega.

