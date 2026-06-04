# API Calls

Path: `2 ADVANCE JS\06_async-javascript\07_api-calls\01_theory.md`

## Simple Meaning

API call server se data lene ya bhejne wali async request hoti hai.

## Real Use

Use it backend/frontend communication, fetch data, submit forms me.

## Small Example

```js
async function getUser() {
  const res = await fetch("/user");
  return res.json();
}
```

## Common Mistake

API response immediately available nahi hota; await/then use karna padta hai.

## Interview Answer

API Calls ka short interview answer: API call server se data lene ya bhejne wali async request hoti hai. Saath me ek small example aur common mistake bol doge toh answer strong lagega.

