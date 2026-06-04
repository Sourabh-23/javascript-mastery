# Callback Queue Interview Questions

Path: `2 ADVANCE JS\07_event-loop\03_callback-queue\03_interview-questions.md`

## Basic

1. What is Callback Queue?
Answer: this depends on how a function is called; call/apply/bind manually control it.

2. Why do we use Callback Queue?
Answer: We use it to make code behavior clear and predictable for this specific case.

3. Give a small example.

```js
const user = { name: "Amit" };
function getName() {
  return this.name;
}
console.log(getName.call(user));
```

## Intermediate

1. What is the common mistake?
Answer: The common mistake is memorizing the definition but not tracing the value line by line.

2. How do you debug Callback Queue?
Answer: Make a tiny example, log the input and output, then change one value and check what changed.

3. What should you mention in interview?
Answer: Mention behavior, mutation or non-mutation, return value, and one edge case.

## Advanced

1. Explain Callback Queue in runtime terms.
Answer: First identify what is created, then trace how JavaScript executes each line and what value is returned.

## One Line Revision

Callback Queue: this depends on how a function is called; call/apply/bind manually control it.
