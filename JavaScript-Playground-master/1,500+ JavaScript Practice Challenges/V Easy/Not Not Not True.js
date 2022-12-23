



/*


Not Not Not True
Something which is not true is false, but something which is not not true is true! Create a function where given n number of "not", evaluate whether it's true or false.

Examples
notNotNot(1, true) ➞ false
// Not true

notNotNot(2, false) ➞ false
// Not not false

notNotNot(6, true) ➞ true
// Not not not not not not true
Notes
Even though this challenge can be easily solved through the use of an if | else block, you might want to solve it through the use of a Boolean Logic Operator or a Bitwise Operator, taking the opportunity to become acquainted with these methods (check the Resources tab to find specific links).


*/






/*  Solution 1   */


function notNotNot(n, bool) {
	return n % 2 == 1 ? !bool : bool;
}


/*  Solution 2   */

const notNotNot = (n, bool) => !(n % 2) === bool;

notNotNot=(a,b)=>!!(a%2>>b)

const notNotNot = (n, bool) => n % 2 === 0 ? bool : !bool;


const notNotNot = (n, bool) => n % 2 ? !bool : bool;



/*  Solution 3   */


function notNotNot(n, bool) {
	return n % 2 == 0 ? bool : !bool;
}