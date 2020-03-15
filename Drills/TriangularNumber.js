/* Calculate the nth triangular number. 
A triangular number counts the objects that can form an equilateral triangle. 
The nth triangular number is the number of dots composing a triangle with n dots on a side, 
and is equal to the sum of the n natural numbers from 1 to n. 
This is the Triangular Number Sequence: 1, 3, 6, 10, 15, 21, 28, 36, 45. */

let sum = 0;

const nTriangle = (n, sum = 0) => {
  if (n === 0) {
    console.log("when n is 0", sum);
    return sum;
  }
  console.log(sum);
  sum += n;
  return nTriangle(n - 1, sum);
};

console.log(nTriangle(7));
