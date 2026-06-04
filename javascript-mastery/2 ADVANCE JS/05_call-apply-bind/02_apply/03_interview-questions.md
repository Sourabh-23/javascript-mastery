# Apply Interview Questions

Path: `2 ADVANCE JS\05_call-apply-bind\02_apply\03_interview-questions.md`

## Basic

1. What is Apply?
Answer: this depends on how a function is called; call/apply/bind manually control it.

2. Why do we use Apply?
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

2. How do you debug Apply?
Answer: Make a tiny example, log the input and output, then change one value and check what changed.

3. What should you mention in interview?
Answer: Mention behavior, mutation or non-mutation, return value, and one edge case.

## Advanced

1. Explain Apply in runtime terms.
Answer: First identify what is created, then trace how JavaScript executes each line and what value is returned.

## One Line Revision

Apply: this depends on how a function is called; call/apply/bind manually control it.
