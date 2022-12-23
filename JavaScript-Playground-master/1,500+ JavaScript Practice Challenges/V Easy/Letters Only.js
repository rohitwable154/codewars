



/*


Letters Only
Write a function that removes any non-letters from a string, returning a well-known film title.

Examples
lettersOnly("R!=:~0o0./c&}9k`60=y") ➞ "Rocky"

lettersOnly("^,]%4B|@56a![0{2m>b1&4i4") ➞ "Bambi"

lettersOnly("^U)6$22>8p).") ➞ "Up"
Notes
See the Resources section for more information on JavaScript string methods.


*/






/*  Solution 1   */


function lettersOnly(str) {
	return str.replace(/[^a-z]/gi, '');
}


/*  Solution 2   */




function lettersOnly(str) {
	return str.match(/[a-z]/gi).join('')
}


/*  Solution 3   */

function lettersOnly(str) {
	const regex = /[A-Za-z]/g;
	
	return str.match(regex).join("");
}