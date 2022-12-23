



/*

Fix the Error / Comparing Arrays (Part #2)
Create a function that returns true if two arrays sharing the same length have identical numerical values at every index, and false otherwise.

To solve this question, your friend initially wrote the following code (see this challenge):

function checkEquals(arr1, arr2) {
  if (arr1 === arr2) {
    return true
   } else {
    return false
   }
}
If you're unsure why the above code doesn't work, I recommend doing that challenge first.

Your friend did some more research and he fixed the code into the following:

function checkEquals(arr1, arr2) {
  if (arr1.join("") === arr2.join("")) {
    return true
   } else {
    return false
   }
}
It works in most cases, but on some cases it fails. This confuses him, can you spot the error and fix it?

Examples
checkEquals([1, 2], [1, 3]) ➞ false

checkEquals([1, 2], [1, 2]) ➞ true

checkEquals([4, 5, 6], [4, 5, 6]) ➞ true

checkEquals([4, 7, 6], [4, 5, 6]) ➞ false

checkEquals([1, 12], [11, 2]) ➞ false



*/






/*  Solution 1   */


function checkEquals(arr1, arr2) {
	return arr1.every((x, i) => x === arr2[i])
 	
}


/*  Solution 2   */

function checkEquals(arr1, arr2) {
	return (arr1.toString() === arr2.toString());
}



/*  Solution 3   */


const checkEquals = (arr1, arr2) =>   JSON.stringify(arr1) === JSON.stringify(arr2);



function checkEquals(arr1, arr2) {
	let strArr1 = arr1.sort((a, b) => a - b)
	let strArr2 = arr2.sort((a, b) => a - b)
	
	return strArr1.join("") === strArr2.join("") ? true : false
}