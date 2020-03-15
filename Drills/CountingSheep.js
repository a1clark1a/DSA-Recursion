/*Write a recursive function that counts how many sheep jump over the fence. 
Your program should take a number as input. That number should be the number of sheep you have. 
The function should display the number along with the message 
"Another sheep jumps over the fence" until no more sheep are left. */

let input = 3;

const countingSheep = input => {
  if (input === 0) {
    return console.log(input, ": All sheep jumps over the fence");
  } else {
    console.log(input, ": Another sheep jumps over the fence");
    return countingSheep(input - 1);
  }
};

countingSheep(input);
