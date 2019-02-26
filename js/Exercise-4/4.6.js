function factorialize(num) {
    if (num < 0) 
          return -1;
    else if (num == 0) 
        return 1;
    else {
        return (num * factorialize(num - 1));
    }
  }
  factorialize(5);

console.log(factorialize(5));

/* Create a function factorial(a) that returns the factorial of a number.

That function must be recursive. */