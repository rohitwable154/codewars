/*  

Advanced Array Sort

Create a function that takes in an array of numbers or strings and returns an array with the items from the original array stored in subarrays. Items of the same value should be in the same subarray.

Examples
advancedSort([2, 1, 2, 1]) ➞ [[2, 2], [1, 1]]

advancedSort([5, 4, 5, 5, 4, 3]) ➞ [[5, 5, 5], [4, 4], [3]]

advancedSort(["b", "a", "b", "a", "c"]) ➞ [["b", "b"], ["a", "a"], ["c"]]


Notes
The subarrays should be returned in the order of each element's first appearance in the given array.


*/




//#############################################################
//#                        MY SOLUTION    1                   #
//#############################################################


function advancedSort(arr) {
    return [...new Set(arr)].map(x => arr.filter(y => y == x))
}





//#############################################################
//#                        MY SOLUTION    2                   #
//#############################################################


function advancedSort(arr) {

    let sortedArr = [];
    let queue = [];

    arr.map((c, i, a) => {
        if (queue.indexOf(c) == -1) {
            sortedArr.push(a.filter(x => x == c))
        }
        queue.push(c)
    })


    return sortedArr;

}




//#############################################################
//#                        MY SOLUTION    3                   #
//#############################################################


const advancedSort = arr => [...new Set(arr)].map(v => [...Array(arr.sort().lastIndexOf(v) - arr.indexOf(v) + 1)].fill(v));