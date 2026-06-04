"use strict";

/*
Path: 1 SIMPLE JS\03_operators\08_optional-chaining\04_coding-output-practice.js
Topic: 08_optional-chaining
Question bank: optional-chaining

How to study:
1. Read Q.
2. Hide Answer.
3. Predict output.
4. Then check Answer.
*/

// Q1. Missing address
{
  function getCity(user) {
    return user.address?.city;
  }

  // Input:
  getCity({ name: "Aman" });

  // Answer:
  // undefined
}

/////////////////////////////

// Q2. Existing address
{
  function getCity(user) {
    return user.address?.city;
  }

  // Input:
  getCity({ address: { city: "Delhi" } });

  // Answer:
  // "Delhi"
}

/////////////////////////////

// Q3. Fallback with optional
{
  function getCity(user) {
    return user.address?.city ?? "NA";
  }

  // Input:
  getCity({});

  // Answer:
  // "NA"
}

/////////////////////////////

// Q4. Optional method
{
  function callSave(obj) {
    return obj.save?.();
  }

  // Input:
  callSave({});

  // Answer:
  // undefined
}

/////////////////////////////

// Q5. Optional method exists
{
  function callSave(obj) {
    return obj.save?.();
  }

  // Input:
  callSave({ save() { return "saved"; } });

  // Answer:
  // "saved"
}

/////////////////////////////

// Q6. Nested user name
{
  function getName(data) {
    return data.user?.profile?.name;
  }

  // Input:
  getName({ user: {} });

  // Answer:
  // undefined
}

/////////////////////////////

// Q7. Nested fallback
{
  function getName(data) {
    return data.user?.profile?.name ?? "Guest";
  }

  // Input:
  getName({ user: {} });

  // Answer:
  // "Guest"
}

/////////////////////////////

// Q8. Array optional index
{
  function getFirst(items) {
    return items?.[0];
  }

  // Input:
  getFirst(null);

  // Answer:
  // undefined
}

/////////////////////////////

// Q9. Array optional index exists
{
  function getFirst(items) {
    return items?.[0];
  }

  // Input:
  getFirst([10]);

  // Answer:
  // 10
}

/////////////////////////////

// Q10. Optional callback
{
  function run(callback) {
    return callback?.();
  }

  // Input:
  run(undefined);

  // Answer:
  // undefined
}

/////////////////////////////

// Q11. Optional callback exists
{
  function run(callback) {
    return callback?.();
  }

  // Input:
  run(() => "done");

  // Answer:
  // "done"
}

/////////////////////////////

// Q12. API response data
{
  function getItems(response) {
    return response.data?.items ?? [];
  }

  // Input:
  getItems({ data: null });

  // Answer:
  // []
}

/////////////////////////////

// Q13. Settings theme
{
  function getTheme(settings) {
    return settings.ui?.theme ?? "light";
  }

  // Input:
  getTheme({});

  // Answer:
  // "light"
}

/////////////////////////////

// Q14. Product price
{
  function getPrice(product) {
    return product.details?.price;
  }

  // Input:
  getPrice({ details: { price: 100 } });

  // Answer:
  // 100
}

/////////////////////////////

// Q15. Missing product price
{
  function getPrice(product) {
    return product.details?.price ?? 0;
  }

  // Input:
  getPrice({});

  // Answer:
  // 0
}

/////////////////////////////

// Q16. Safe length
{
  function getLength(str) {
    return str?.length ?? 0;
  }

  // Input:
  getLength(null);

  // Answer:
  // 0
}

/////////////////////////////

// Q17. Safe uppercase
{
  function upper(str) {
    return str?.toUpperCase() ?? "";
  }

  // Input:
  upper(null);

  // Answer:
  // ""
}

/////////////////////////////

// Q18. Safe map
{
  function names(users) {
    return users?.map((u) => u.name) ?? [];
  }

  // Input:
  names(null);

  // Answer:
  // []
}

/////////////////////////////

// Q19. Safe find
{
  function findUser(users) {
    return users?.find((u) => u.id === 1);
  }

  // Input:
  findUser(undefined);

  // Answer:
  // undefined
}

/////////////////////////////

// Q20. Optional chaining with object
{
  function getRole(user) {
    return user?.role ?? "user";
  }

  // Input:
  getRole(null);

  // Answer:
  // "user"
}

/////////////////////////////

// Q21. Safe route params
{
  function getId(req) {
    return req.params?.id;
  }

  // Input:
  getId({});

  // Answer:
  // undefined
}

/////////////////////////////

// Q22. Safe error message
{
  function getError(error) {
    return error?.message ?? "Unknown";
  }

  // Input:
  getError(null);

  // Answer:
  // "Unknown"
}

/////////////////////////////

// Q23. Safe config
{
  function getBaseUrl(config) {
    return config.api?.baseUrl ?? "localhost";
  }

  // Input:
  getBaseUrl({ api: {} });

  // Answer:
  // "localhost"
}

/////////////////////////////

// Q24. Safe deeply nested
{
  function getPin(user) {
    return user.address?.location?.pin ?? "NA";
  }

  // Input:
  getPin({ address: {} });

  // Answer:
  // "NA"
}

/////////////////////////////

// Q25. No crash access
{
  function safe(user) {
    return user?.name;
  }

  // Input:
  safe(undefined);

  // Answer:
  // undefined
}

/////////////////////////////

