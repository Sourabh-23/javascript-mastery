# Macrotask Queue

Path: `2 ADVANCE JS\07_event-loop\05_macrotask-queue\01_theory.md`

## Simple Meaning

the event loop coordinates the call stack, Web APIs, microtasks, and macrotasks.

## Mental Model

When you read this topic, ask three things:

1. What value goes in?
2. What operation happens?
3. What value or side effect comes out?

## Real Use

You will use Macrotask Queue while reading output questions, writing small interview examples, and debugging real code. The main goal is not memorizing the name. The main goal is understanding exactly what JavaScript does line by line.

## Small Example

```js
const value = "Macrotask Queue";
console.log(value);
```

## Common Mistake

The common mistake is reading only the definition and skipping output prediction. Always run the snippet, then change one value and predict again.

## Interview Answer

Macrotask Queue is useful because it controls how data is read, changed, compared, stored, or executed in JavaScript. In interviews, explain the behavior first, then give a tiny code example.

## How To Study

1. Read this file once.
2. Run `02_snippets.js`.
3. Predict every answer in `04_coding-output-practice.js`.
4. Speak answers from `03_interview-questions.md` out loud.
5. Write two small examples without looking.
