/*
Description:
I'm sure you're familiar with factorials – that is, the product of an integer and all the integers below it.

For example, 5! = 120, as 5 * 4 * 3 * 2 * 1 = 120

Your challenge is to create a function that takes any number and returns the number that it is a factorial of. So, if your function receives 120, it should return "5!" (as a string).

Of course, not every number is a factorial of another. In this case, your function would return "None" (as a string).

Examples
120 will return "5!"
24 will return "4!"
150 will return "None"
*/

function reverseFactorial(num) {
  let answ;
  for (let i = 1; ; i++) {
    if (factorial(i) === num) {
      answ = `${i}!`;
      break;
    }
    if (factorial(i) > num) {
      answ = `None`;
      break;
    }
  }
  return answ;
}

function factorial(n) {
  let arr = [];
  for (let i = 1; i <= n; i++) arr.push(i);
  return arr.reduce((a, b) => a * b, 1);
}
