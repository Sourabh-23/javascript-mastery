# Optional Chaining

Path: `1 SIMPLE JS\03_operators\08_optional-chaining\01_theory.md`

## Simple Meaning

optional chaining ?. safely reads nested values without throwing when something is null or undefined.

## Mental Model

When you read this topic, ask three things:

1. What value goes in?
2. What operation happens?
3. What value or side effect comes out?

## Real Use

You will use Optional Chaining while reading output questions, writing small interview examples, and debugging real code. The main goal is not memorizing the name. The main goal is understanding exactly what JavaScript does line by line.

## Small Example

```js
const total = 100;
const isValid = total >= 50 && total <= 200;
console.log(isValid);
```

## Common Mistake

The common mistake is reading only the definition and skipping output prediction. Always run the snippet, then change one value and predict again.

## Interview Answer

Optional Chaining is useful because it controls how data is read, changed, compared, stored, or executed in JavaScript. In interviews, explain the behavior first, then give a tiny code example.

## How To Study

1. Read this file once.
2. Run `02_snippets.js`.
3. Predict every answer in `04_coding-output-practice.js`.
4. Speak answers from `03_interview-questions.md` out loud.
5. Write two small examples without looking.
