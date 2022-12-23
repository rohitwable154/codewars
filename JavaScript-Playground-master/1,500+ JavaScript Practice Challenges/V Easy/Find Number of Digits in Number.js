



/*


Find Number of Digits in Number
Create a function that will return an integer number containing the amount of digits in the given integer num.

Examples
num_of_digits(1000) ➞ 4

num_of_digits(12) ➞ 2

num_of_digits(1305981031) ➞ 10

num_of_digits(0) ➞ 1
Notes
Try to solve this challenge without using strings!


*/






/*  Solution 1   */

const num_of_digits = num => String(Math.abs(num)).length;





/*  Solution 2   */

function num_of_digits(num) {
	return Math.abs(num).toString().length;
}



/*  Solution 3   */


function num_of_digits(num) {
    return Math.abs(num).toString().length;
  }