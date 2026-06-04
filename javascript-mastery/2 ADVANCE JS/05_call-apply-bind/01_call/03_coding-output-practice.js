"use strict";

/*
Path: 2 ADVANCE JS\05_call-apply-bind\01_call\03_coding-output-practice.js
Topic: Call
Question bank: Call focused practice

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
