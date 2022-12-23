/*  

Calculate Depth of Array

Given an array, write a function to calculate it's depth. Assume that a normal array has a depth of 1.

Examples
depth([1, 2, 3, 4]) ➞ 1

depth([1, [2, 3, 4]]) ➞ 2

depth([1, [2, [3, 4]]]) ➞ 3

depth([1, [2, [3, [4]]]]) ➞ 4

*/




//#############################################################
//#                        MY SOLUTION    1                   #
//#############################################################


const depth = (arr, t = 1) => arr.some(Array.isArray) ? depth(arr.flat(), t + 1) : t;




//#############################################################
//#                        MY SOLUTION    2                   #
//#############################################################


const depth = arr => Array.isArray(arr) ? 1 + Math.max(...arr.map(depth)) : 0;





//#############################################################
//#                        MY SOLUTION    3                   #
//#############################################################


const depth = (arr, count = 1) => (arr.filter(Array.isArray).length === 0) ? count : depth(arr.flat().filter(Array.isArray), ++count);





//#############################################################
//#                        MY SOLUTION    4                   #
//#############################################################



function depth(arr) {
    let maxDepth = 1;
    arr.reduce(function countDepth(acc, val) {
        if (acc > maxDepth) maxDepth = acc;
        if (Array.isArray(val))
            val.reduce(countDepth, acc + 1);
        return acc;
    }, 1);
    return maxDepth;
}





/*   


Test.assertEquals(depth([1, 2, 3, 4]), 1)
Test.assertEquals(depth([1, [2, 3, 4]]), 2)
Test.assertEquals(depth([1, [2, [3, 4]]]), 3)
Test.assertEquals(depth([1, [2, [3, [4]]]]), 4)
Test.assertEquals(depth([1, [2, [3, [4]]], 4]), 4)
Test.assertEquals(depth([1, [2], 3, [4], 5, [6]]), 2)
Test.assertEquals(depth([1, 2, 3, 4, [[5]], [6], 7]), 3)



Test Passed: Value == 1
Test Passed: Value == 2
Test Passed: Value == 3
Test Passed: Value == 4
Test Passed: Value == 4
Test Passed: Value == 2
Test Passed: Value == 3


*/