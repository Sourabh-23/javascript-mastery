# For Of

Path: `1 SIMPLE JS\08_loops\05_ES6-for-of\01_ES6-theory.md`

## Simple Meaning

for-of loops over iterable values like arrays, strings, Sets, and Maps.

## Mental Model

When you read this topic, ask three things:

1. What value goes in?
2. What operation happens?
3. What value or side effect comes out?

## Real Use

You will use For Of while reading output questions, writing small interview examples, and debugging real code. The main goal is not memorizing the name. The main goal is understanding exactly what JavaScript does line by line.

## Small Example

```js
const skills = ["JS", "React"];
for (const skill of skills) {
  console.log(skill);
}
```

## Common Mistake

The common mistake is reading only the definition and skipping output prediction. Always run the snippet, then change one value and predict again.

## Interview Answer

For Of is useful because it controls how data is read, changed, compared, stored, or executed in JavaScript. In interviews, explain the behavior first, then give a tiny code example.

## How To Study

1. Read this file once.
2. Run `02_ES6-snippets.js`.
3. Predict every answer in `04_ES6-coding-output-practice.js`.
4. Speak answers from `03_ES6-interview-questions.md` out loud.
5. Write two small examples without looking.
