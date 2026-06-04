# Call

Path: `2 ADVANCE JS\05_call-apply-bind\01_call\01_theory.md`

## Simple Meaning

call function ko immediately run karta hai aur this manually set karta hai.

## Real Use

Use it function borrowing aur explicit this binding me.

## Small Example

```js
function greet(city) { return this.name + " " + city; }
console.log(greet.call({ name: "Amit" }, "Pune"));
```

## Common Mistake

call arguments comma-separated leta hai.

## Interview Answer

Call ka short interview answer: call function ko immediately run karta hai aur this manually set karta hai. Saath me ek small example aur common mistake bol doge toh answer strong lagega.

