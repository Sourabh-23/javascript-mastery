# Encapsulation

Path: `2 ADVANCE JS\09_oop\06_encapsulation\01_theory.md`

## Simple Meaning

Encapsulation data aur methods ko ek unit me rakhta hai aur direct access control karta hai.

## Real Use

Use it private state protect karne ke liye.

## Small Example

```js
class Account {
  #balance = 0;
  deposit(amount) { this.#balance += amount; }
}
```

## Common Mistake

All data public rakhna encapsulation break karta hai.

## Interview Answer

Encapsulation ka short interview answer: Encapsulation data aur methods ko ek unit me rakhta hai aur direct access control karta hai. Saath me ek small example aur common mistake bol doge toh answer strong lagega.

