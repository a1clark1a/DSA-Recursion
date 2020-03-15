/*Write a recursive function that prints out the binary representation of a given number.
 For example, the program should take 3 as an input and print 11 as output, or 25 as an input and print 11001 as an output. 
 Note that the binary representation of 0 should be 0. */

const toBinary = num => {
  let binary = [];
  if (num === 0) {
    return binary;
  }

  if (num % 2 === 1) {
    binary = toBinary((num - 1) / 2);
    binary.push(1);
  } else {
    binary = toBinary(num / 2);
    binary.push(0);
  }

  return binary;
};

console.log(toBinary(19).join(""));
