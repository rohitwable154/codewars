



/*
Check String for Spaces
Create a function that returns true if a string contains any spaces.

Examples
hasSpaces("hello") ➞ false

hasSpaces("hello, world") ➞ true

hasSpaces(" ") ➞ true

hasSpaces("") ➞ false

hasSpaces(",./!@#") ➞ false
Notes
An empty string does not contain any spaces.
Try doing this without RegEx.
Don't forget to return the result.
If you get stuck on a challenge, find help in the Resources tab.
If you're really stuck, unlock solutions in the Solutions tab.




*/





/*  Solution 1   */

const hasSpaces = str => str.includes(" ");



/*  Solution 2   */



function hasSpaces(str) {
	return str.includes(' ')
}

/*  Solution 3   */

let hasSpaces = (str) => str.split(" ").length > 1


/*  Solution 5   */


function hasSpaces(str) {
	return str.includes(' ') ? true : false
}




function hasSpaces(str) {
	return str.indexOf(" ") !== -1
}