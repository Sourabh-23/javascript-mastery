# Prototype Interview Questions

Path: `2 ADVANCE JS\09_oop\03_prototype\03_interview-questions.md`

## Basic

1. What is Prototype?
Answer: OOP organizes code using objects, prototypes, classes, and reusable behavior.

2. Why do we use Prototype?
Answer: We use it to make code behavior clear and predictable for this specific case.

3. Give a small example.

```js
class User {
  constructor(name) {
    this.name = name;
  }
  greet() {
    return "Hi " + this.name;
  }
}
console.log(new User("Amit").greet());
```

## Intermediate

1. What is the common mistake?
Answer: The common mistake is memorizing the definition but not tracing the value line by line.

2. How do you debug Prototype?
Answer: Make a tiny example, log the input and output, then change one value and check what changed.

3. What should you mention in interview?
Answer: Mention behavior, mutation or non-mutation, return value, and one edge case.

## Advanced

1. Explain Prototype in runtime terms.
Answer: First identify what is created, then trace how JavaScript executes each line and what value is returned.

## One Line Revision

Prototype: OOP organizes code using objects, prototypes, classes, and reusable behavior.
