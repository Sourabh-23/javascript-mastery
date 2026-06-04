# Number

Path: `1 SIMPLE JS/02_data-types/02_number/01_theory.md`

## What Is Number?

In JavaScript, `number` is the data type used for numeric values.

It is used for:

- age
- price
- marks
- count
- calculation
- index
- rating
- percentage

Example:

```js
let age = 25;
let price = 499.99;
let marks = 87;
```

All of these are `number`.

```js
console.log(typeof age);   // "number"
console.log(typeof price); // "number"
```

## Important Point

JavaScript does not have separate types like `int`, `float`, or `double`.

In many languages:

```js
10       // integer
10.5     // float
```

But in JavaScript, both are simply `number`.

```js
console.log(typeof 10);   // "number"
console.log(typeof 10.5); // "number"
```

## Basic Operations

You can perform normal math operations with numbers.

```js
let a = 10;
let b = 3;

console.log(a + b); // 13
console.log(a - b); // 7
console.log(a * b); // 30
console.log(a / b); // 3.3333333333333335
console.log(a % b); // 1
```

## Special Number Values

JavaScript has some special numeric values.

### `NaN`

`NaN` means "Not a Number".

It happens when JavaScript tries to do a number operation but the result is not a valid number.

```js
console.log("hello" * 2); // NaN
console.log(typeof NaN);  // "number"
```

This is confusing but important: `NaN` belongs to the `number` type.

### `Infinity`

`Infinity` means a number bigger than JavaScript can normally represent.

```js
console.log(10 / 0); // Infinity
```

### `-Infinity`

```js
console.log(-10 / 0); // -Infinity
```

## Number Conversion

Sometimes data comes as a string, especially from forms, input fields, query params, or APIs.

```js
let price = "100";

console.log(typeof price); // "string"
```

To convert it into a number:

```js
let price = "100";
let convertedPrice = Number(price);

console.log(convertedPrice);        // 100
console.log(typeof convertedPrice); // "number"
```

If conversion is not possible:

```js
console.log(Number("abc")); // NaN
```

## Common Methods

### `Number()`

Converts a value into a number.

```js
console.log(Number("20")); // 20
```

### `parseInt()`

Converts to an integer.

```js
console.log(parseInt("20.75")); // 20
```

### `parseFloat()`

Keeps decimal values.

```js
console.log(parseFloat("20.75")); // 20.75
```

## Common Mistake

The biggest mistake is thinking this is numeric addition:

```js
console.log("10" + 5); // "105"
```

Here `"10"` is a string, so JavaScript joins the values instead of adding them.

Correct way:

```js
console.log(Number("10") + 5); // 15
```

## Real-Life Example

Imagine a user enters age in an input box.

Input values usually come as strings:

```js
let ageFromInput = "18";
```

If you want to compare or calculate, convert it first:

```js
let age = Number(ageFromInput);

if (age >= 18) {
  console.log("User can vote");
}
```

## Interview Answer

A `number` in JavaScript is a data type used to store numeric values like integers and decimals. JavaScript has only one number type, so both `10` and `10.5` are numbers. Special values like `NaN`, `Infinity`, and `-Infinity` are also part of the number type.

## How To Study This Topic

1. Understand what `number` means.
2. Run `02_snippets.js`.
3. Check `NaN`, `Infinity`, and string-to-number conversion.
4. Practice output questions.
