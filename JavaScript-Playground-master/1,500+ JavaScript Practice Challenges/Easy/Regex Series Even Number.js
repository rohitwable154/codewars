/*

Regex Series: Even Number?
Write a regular expression that matches only an even number. Numbers will be presented as strings.

Examples
"2341" ➞ false

"132" ➞ true

"29" ➞ false

"5578" ➞ true
Notes
This challenge is designed to use Regex only.

*/



//#############################################################
//#                        MY SOLUTIONS                       #
//#############################################################



/*  Solution 1   */


let x = /^\d*[02468]$/