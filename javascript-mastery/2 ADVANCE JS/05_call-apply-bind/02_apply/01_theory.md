# Apply

Path: `2 ADVANCE JS\05_call-apply-bind\02_apply\01_theory.md`

## Simple Meaning

call, apply, and bind let you control this while reusing functions with different objects.

## Mental Model

When you read this topic, ask three things:

1. What value goes in?
2. What operation happens?
3. What value or side effect comes out?

## Real Use

You will use Apply while reading output questions, writing small interview examples, and debugging real code. The main goal is not memorizing the name. The main goal is understanding exactly what JavaScript does line by line.

## Small Example

```js
const user = { name: "Amit" };
function greet() {
  return this.name;
}
console.log(greet.call(user));
```

## Common Mistake

The common mistake is reading only the definition and skipping output prediction. Always run the snippet, then change one value and predict again.

## Interview Answer

Apply is useful because it controls how data is read, changed, compared, stored, or executed in JavaScript. In interviews, explain the behavior first, then give a tiny code example.

## How To Study

1. Read this file once.
2. Run `02_snippets.js`.
3. Predict every answer in `03_coding-output-practice.js`.
4. Write two small examples without looking.
