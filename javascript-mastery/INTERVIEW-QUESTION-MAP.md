# Interview Question Map

Use this file when you are confused about which question belongs to which folder.

## How To Read Each Topic

In every topic folder, read files in this order:

1. `01_theory.md` / `01_ES6-theory.md`
2. `02_snippets.js` / `02_ES6-snippets.js`
3. `03_interview-questions.md` / `03_ES6-interview-questions.md`
4. `04_output-questions.js` / `04_ES6-output-questions.js`
5. `05_coding-questions.md` / `05_ES6-coding-questions.md`
6. `06_revision.md` / `06_ES6-revision.md`

## Common Interview Questions

| Question | Main Folder | Also Read |
| --- | --- | --- |
| Difference between `map` and `forEach` | `1 SIMPLE JS/05_arrays/04_map` | `1 SIMPLE JS/08_loops/06_foreach` |
| Difference between `setTimeout` and `setInterval` | `2 ADVANCE JS/06_async-javascript/06_settimeout-setinterval` | `2 ADVANCE JS/07_event-loop` |
| Difference between `var`, `let`, and `const` | `1 SIMPLE JS/01_variables/01_var`, `1 SIMPLE JS/01_variables/02_ES6-let`, `1 SIMPLE JS/01_variables/03_ES6-const` | `1 SIMPLE JS/09_ES6/01_ES6-let-const` |
| Difference between `==` and `===` | `1 SIMPLE JS/03_operators/04_equality` | `1 SIMPLE JS/02_data-types/13_type-coercion` |
| What is closure? | `2 ADVANCE JS/03_closures/01_basics` | `2 ADVANCE JS/03_closures/02_lexical-environment`, `2 ADVANCE JS/03_closures/05_counter-example` |
| What is destructuring? | `1 SIMPLE JS/09_ES6/03_ES6-destructuring` | `1 SIMPLE JS/07_objects/04_ES6-destructuring` |

## Fast Prep Plan For Telephonic Round

Day 1:
- `var`, `let`, `const`
- `==` vs `===`
- `map` vs `forEach`

Day 2:
- `setTimeout` vs `setInterval`
- event loop basics
- closure

Day 3:
- destructuring
- spread/rest
- promises basics

## Answer Format

For every answer, prepare like this:

1. Give a one-line definition.
2. Explain the difference.
3. Give one small code example.
4. Mention one real use case.

Example:

```js
const numbers = [1, 2, 3];

const doubled = numbers.map((num) => num * 2);

numbers.forEach((num) => console.log(num));
```

`map` returns a new array. `forEach` only loops and performs an action.
