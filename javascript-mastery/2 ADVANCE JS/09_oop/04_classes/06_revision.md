# Classes Revision

Path: `2 ADVANCE JS\09_oop\04_classes\06_revision.md`

## Must Remember

- OOP organizes code using objects, prototypes, classes, and reusable behavior.
- Always predict output before running code.
- Check whether the original value changes or a new value is returned.
- Practice one simple case and one edge case.

## Quick Example

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

## Study Order

1. Read `01_theory.md`.
2. Run `02_snippets.js`.
3. Predict answers in `04_coding-output-practice.js`.
4. Revise this file before interview.

## Interview Sentence

Classes means: OOP organizes code using objects, prototypes, classes, and reusable behavior.
