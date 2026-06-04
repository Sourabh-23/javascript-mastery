# Classes Interview Questions

Path: `1 SIMPLE JS\09_ES6\08_ES6-classes\03_ES6-interview-questions.md`

## Basic

1. What is Classes?
Answer: OOP organizes code using objects, prototypes, classes, and reusable behavior.

2. Why do we use Classes?
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

2. How do you debug Classes?
Answer: Make a tiny example, log the input and output, then change one value and check what changed.

3. What should you mention in interview?
Answer: Mention behavior, mutation or non-mutation, return value, and one edge case.

## Advanced

1. Explain Classes in runtime terms.
Answer: First identify what is created, then trace how JavaScript executes each line and what value is returned.

## One Line Revision

Classes: OOP organizes code using objects, prototypes, classes, and reusable behavior.
