/* Write a recursive function that prints the Fibonacci sequence of a given number. 
The Fibonacci sequence is a series of numbers in which each number is 
the sum of the 2 preceding numbers. 
For example, the 7th Fibonacci number in a Fibonacci sequence is 13. 
The sequence looks as follows: 1, 1, 2, 3, 5, 8, 13. */

const fib = (n, a = 0, b = 1) => {
  if (n === 0) return a;
  if (n === 1) return b;
  else {
    console.log(a);
    return fib(n - 1, b, a + b);
  }
};

console.log(fib(9));
