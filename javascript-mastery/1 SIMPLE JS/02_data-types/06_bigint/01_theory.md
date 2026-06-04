# Bigint

Path: `1 SIMPLE JS\02_data-types\06_bigint\01_theory.md`

## Simple Meaning

BigInt stores very large integers that normal number cannot safely handle.

## Understand It Like This

Use BigInt when integer precision matters for very large values.

## Why We Use It

Large IDs, cryptography, and high precision integer calculations can use BigInt.

## Small Example

```js
const big = 9007199254740993n;
console.log(big);
```

## Common Mistake

You cannot directly mix BigInt and Number in arithmetic.

## Interview Answer

BigInt is a primitive type for integers larger than Number.MAX_SAFE_INTEGER.

## How To Study

1. Read this theory slowly.
2. Open `02_snippets.js` and run each example.
3. Predict output before checking the answer.
4. Read `03_coding-output-practice.js` for spoken interview answers.
5. Practice `03_coding-output-practice.js` for confidence.
