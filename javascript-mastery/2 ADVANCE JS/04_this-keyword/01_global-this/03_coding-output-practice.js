"use strict";

/*
Path: 2 ADVANCE JS\04_this-keyword\01_global-this\03_coding-output-practice.js
Topic: Global This
Question bank: Global This focused practice

How to study:
1. Read Q.
2. Hide Answer.
3. Predict output.
4. Then check Answer.
*/

// Q1. object this
{
  const user = {
    name: "Amit",
    getName() {
      return this.name;
    }
  };

  // Input:
  user.getName();

  // Answer:
  // "Amit"
}

/////////////////////////////

// Q2. call sets this
{
  const user = { name: "Amit" };
  function getName() {
    return this.name;
  }

  // Input:
  getName.call(user);

  // Answer:
  // "Amit"
}

/////////////////////////////

// Q3. bind returns function
{
  const user = { name: "Amit" };
  function getName() {
    return this.name;
  }
  const bound = getName.bind(user);

  // Input:
  bound();

  // Answer:
  // "Amit"
}

/////////////////////////////

// Q4. object this case 4
{
  const user = {
    name: "Amit",
    getName() {
      return this.name;
    }
  };

  // Input:
  user.getName();

  // Answer:
  // "Amit"
}

/////////////////////////////

// Q5. call sets this case 5
{
  const user = { name: "Amit" };
  function getName() {
    return this.name;
  }

  // Input:
  getName.call(user);

  // Answer:
  // "Amit"
}

/////////////////////////////

// Q6. bind returns function case 6
{
  const user = { name: "Amit" };
  function getName() {
    return this.name;
  }
  const bound = getName.bind(user);

  // Input:
  bound();

  // Answer:
  // "Amit"
}

/////////////////////////////

// Q7. object this case 7
{
  const user = {
    name: "Amit",
    getName() {
      return this.name;
    }
  };

  // Input:
  user.getName();

  // Answer:
  // "Amit"
}

/////////////////////////////

// Q8. call sets this case 8
{
  const user = { name: "Amit" };
  function getName() {
    return this.name;
  }

  // Input:
  getName.call(user);

  // Answer:
  // "Amit"
}

/////////////////////////////

// Q9. bind returns function case 9
{
  const user = { name: "Amit" };
  function getName() {
    return this.name;
  }
  const bound = getName.bind(user);

  // Input:
  bound();

  // Answer:
  // "Amit"
}

/////////////////////////////

// Q10. object this case 10
{
  const user = {
    name: "Amit",
    getName() {
      return this.name;
    }
  };

  // Input:
  user.getName();

  // Answer:
  // "Amit"
}

/////////////////////////////

// Q11. call sets this case 11
{
  const user = { name: "Amit" };
  function getName() {
    return this.name;
  }

  // Input:
  getName.call(user);

  // Answer:
  // "Amit"
}

/////////////////////////////

// Q12. bind returns function case 12
{
  const user = { name: "Amit" };
  function getName() {
    return this.name;
  }
  const bound = getName.bind(user);

  // Input:
  bound();

  // Answer:
  // "Amit"
}

/////////////////////////////

// Q13. object this case 13
{
  const user = {
    name: "Amit",
    getName() {
      return this.name;
    }
  };

  // Input:
  user.getName();

  // Answer:
  // "Amit"
}

/////////////////////////////

// Q14. call sets this case 14
{
  const user = { name: "Amit" };
  function getName() {
    return this.name;
  }

  // Input:
  getName.call(user);

  // Answer:
  // "Amit"
}

/////////////////////////////

// Q15. bind returns function case 15
{
  const user = { name: "Amit" };
  function getName() {
    return this.name;
  }
  const bound = getName.bind(user);

  // Input:
  bound();

  // Answer:
  // "Amit"
}

/////////////////////////////

// Q16. object this case 16
{
  const user = {
    name: "Amit",
    getName() {
      return this.name;
    }
  };

  // Input:
  user.getName();

  // Answer:
  // "Amit"
}

/////////////////////////////

// Q17. call sets this case 17
{
  const user = { name: "Amit" };
  function getName() {
    return this.name;
  }

  // Input:
  getName.call(user);

  // Answer:
  // "Amit"
}

/////////////////////////////

// Q18. bind returns function case 18
{
  const user = { name: "Amit" };
  function getName() {
    return this.name;
  }
  const bound = getName.bind(user);

  // Input:
  bound();

  // Answer:
  // "Amit"
}

/////////////////////////////

// Q19. object this case 19
{
  const user = {
    name: "Amit",
    getName() {
      return this.name;
    }
  };

  // Input:
  user.getName();

  // Answer:
  // "Amit"
}

/////////////////////////////

// Q20. call sets this case 20
{
  const user = { name: "Amit" };
  function getName() {
    return this.name;
  }

  // Input:
  getName.call(user);

  // Answer:
  // "Amit"
}

/////////////////////////////

// Q21. bind returns function case 21
{
  const user = { name: "Amit" };
  function getName() {
    return this.name;
  }
  const bound = getName.bind(user);

  // Input:
  bound();

  // Answer:
  // "Amit"
}

/////////////////////////////

// Q22. object this case 22
{
  const user = {
    name: "Amit",
    getName() {
      return this.name;
    }
  };

  // Input:
  user.getName();

  // Answer:
  // "Amit"
}

/////////////////////////////

// Q23. call sets this case 23
{
  const user = { name: "Amit" };
  function getName() {
    return this.name;
  }

  // Input:
  getName.call(user);

  // Answer:
  // "Amit"
}

/////////////////////////////

// Q24. bind returns function case 24
{
  const user = { name: "Amit" };
  function getName() {
    return this.name;
  }
  const bound = getName.bind(user);

  // Input:
  bound();

  // Answer:
  // "Amit"
}

/////////////////////////////

// Q25. object this case 25
{
  const user = {
    name: "Amit",
    getName() {
      return this.name;
    }
  };

  // Input:
  user.getName();

  // Answer:
  // "Amit"
}

/////////////////////////////

// ================= PDF BASED PRACTICE =================

// PDF Q805. Debug a broken JavaScript snippet related to arrow function this and rewrite it correctly.
{
  function arrowThisIt(name) {
    const user = {
      name,
      getName() { return this.name; }
    };
    return user.getName();
  }

  // Input:
  arrowThisIt('Amit');

  // Answer:
  // "Amit"
}

/////////////////////////////

// PDF Q815. Debug a broken JavaScript snippet related to arrow function this and rewrite it correctly.
{
  function arrowThisIt(name) {
    const user = {
      name,
      getName() { return this.name; }
    };
    return user.getName();
  }

  // Input:
  arrowThisIt('Amit');

  // Answer:
  // "Amit"
}

/////////////////////////////

// PDF Q825. Debug a broken JavaScript snippet related to arrow function this and rewrite it correctly.
{
  function arrowThisIt(name) {
    const user = {
      name,
      getName() { return this.name; }
    };
    return user.getName();
  }

  // Input:
  arrowThisIt('Amit');

  // Answer:
  // "Amit"
}

/////////////////////////////

// PDF Q835. Debug a broken JavaScript snippet related to arrow function this and rewrite it correctly.
{
  function arrowThisIt(name) {
    const user = {
      name,
      getName() { return this.name; }
    };
    return user.getName();
  }

  // Input:
  arrowThisIt('Amit');

  // Answer:
  // "Amit"
}

/////////////////////////////

// PDF Q845. Debug a broken JavaScript snippet related to arrow function this and rewrite it correctly.
{
  function arrowThisIt(name) {
    const user = {
      name,
      getName() { return this.name; }
    };
    return user.getName();
  }

  // Input:
  arrowThisIt('Amit');

  // Answer:
  // "Amit"
}

/////////////////////////////

// PDF Q855. Debug a broken JavaScript snippet related to bind and rewrite it correctly.
{
  function bindIt(name) {
    const user = {
      name,
      getName() { return this.name; }
    };
    return user.getName();
  }

  // Input:
  bindIt('Amit');

  // Answer:
  // "Amit"
}

/////////////////////////////

// PDF Q856. Write a JavaScript function for call and handle empty input.
{
  function call(name) {
    const user = {
      name,
      getName() { return this.name; }
    };
    return user.getName();
  }

  // Input:
  call('Amit');

  // Answer:
  // "Amit"
}

/////////////////////////////

// PDF Q857. Solve a coding problem using apply without using unnecessary built-in shortcuts.
{
  function applyIn(name) {
    const user = {
      name,
      getName() { return this.name; }
    };
    return user.getName();
  }

  // Input:
  applyIn('Amit');

  // Answer:
  // "Amit"
}

/////////////////////////////

// PDF Q865. Debug a broken JavaScript snippet related to bind and rewrite it correctly.
{
  function bindIt(name) {
    const user = {
      name,
      getName() { return this.name; }
    };
    return user.getName();
  }

  // Input:
  bindIt('Amit');

  // Answer:
  // "Amit"
}

/////////////////////////////

// PDF Q866. Write a JavaScript function for call and handle empty input.
{
  function call(name) {
    const user = {
      name,
      getName() { return this.name; }
    };
    return user.getName();
  }

  // Input:
  call('Amit');

  // Answer:
  // "Amit"
}

/////////////////////////////

// PDF Q867. Solve a coding problem using apply without using unnecessary built-in shortcuts.
{
  function applyIn(name) {
    const user = {
      name,
      getName() { return this.name; }
    };
    return user.getName();
  }

  // Input:
  applyIn('Amit');

  // Answer:
  // "Amit"
}

/////////////////////////////

// PDF Q875. Debug a broken JavaScript snippet related to bind and rewrite it correctly.
{
  function bindIt(name) {
    const user = {
      name,
      getName() { return this.name; }
    };
    return user.getName();
  }

  // Input:
  bindIt('Amit');

  // Answer:
  // "Amit"
}

/////////////////////////////

// PDF Q876. Write a JavaScript function for call and handle empty input.
{
  function call(name) {
    const user = {
      name,
      getName() { return this.name; }
    };
    return user.getName();
  }

  // Input:
  call('Amit');

  // Answer:
  // "Amit"
}

/////////////////////////////

// PDF Q877. Solve a coding problem using apply without using unnecessary built-in shortcuts.
{
  function applyIn(name) {
    const user = {
      name,
      getName() { return this.name; }
    };
    return user.getName();
  }

  // Input:
  applyIn('Amit');

  // Answer:
  // "Amit"
}

/////////////////////////////

// PDF Q885. Debug a broken JavaScript snippet related to bind and rewrite it correctly.
{
  function bindIt(name) {
    const user = {
      name,
      getName() { return this.name; }
    };
    return user.getName();
  }

  // Input:
  bindIt('Amit');

  // Answer:
  // "Amit"
}

/////////////////////////////

// PDF Q886. Write a JavaScript function for call and handle empty input.
{
  function call(name) {
    const user = {
      name,
      getName() { return this.name; }
    };
    return user.getName();
  }

  // Input:
  call('Amit');

  // Answer:
  // "Amit"
}

/////////////////////////////

// PDF Q887. Solve a coding problem using apply without using unnecessary built-in shortcuts.
{
  function applyIn(name) {
    const user = {
      name,
      getName() { return this.name; }
    };
    return user.getName();
  }

  // Input:
  applyIn('Amit');

  // Answer:
  // "Amit"
}

/////////////////////////////

// PDF Q895. Debug a broken JavaScript snippet related to bind and rewrite it correctly.
{
  function bindIt(name) {
    const user = {
      name,
      getName() { return this.name; }
    };
    return user.getName();
  }

  // Input:
  bindIt('Amit');

  // Answer:
  // "Amit"
}

/////////////////////////////

// PDF Q896. Write a JavaScript function for call and handle empty input.
{
  function call(name) {
    const user = {
      name,
      getName() { return this.name; }
    };
    return user.getName();
  }

  // Input:
  call('Amit');

  // Answer:
  // "Amit"
}

/////////////////////////////

// PDF Q897. Solve a coding problem using apply without using unnecessary built-in shortcuts.
{
  function applyIn(name) {
    const user = {
      name,
      getName() { return this.name; }
    };
    return user.getName();
  }

  // Input:
  applyIn('Amit');

  // Answer:
  // "Amit"
}

/////////////////////////////

