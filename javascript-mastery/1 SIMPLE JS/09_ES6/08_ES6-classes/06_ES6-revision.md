# Classes Revision

Path: `1 SIMPLE JS\09_ES6\08_ES6-classes\06_ES6-revision.md`

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
2. Run `02_ES6-snippets.js`.
3. Predict answers in `04_ES6-coding-output-practice.js`.
4. Revise this file before interview.

## Interview Sentence

Classes means: OOP organizes code using objects, prototypes, classes, and reusable behavior.
