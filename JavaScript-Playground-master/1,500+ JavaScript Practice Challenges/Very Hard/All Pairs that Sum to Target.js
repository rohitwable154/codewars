/*  

All Pairs that Sum to Target
Create a function that returns all pairs of numbers in an array that sum to a target. Sort the pairs in ascending order with respect to the smaller number, then order each pair in this order: [smaller, larger].

Examples
allPairs([2, 4, 5, 3], 7) ➞ [[2, 5], [3, 4]]
// 2 + 5 = 7, 3 + 4 = 7

allPairs([5, 3, 9, 2, 1], 3) ➞ [[1, 2]]

allPairs([4, 5, 1, 3, 6, 8], 9) ➞ [[1, 8], [3, 6], [4, 5]]
// Sorted: 1 < 3 < 4; each pair is ordered [smaller, larger]


Notes
If no pairs are found, return an empty array [].
You are only allowed to use each number once in a pair.
See Comments for a hint.


*/





//#############################################################
//#                        MY SOLUTION    1                   #
//#############################################################


const allPairs = (arr, target) => {
    const results = [];

    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            const a = arr[i];
            const b = arr[j];

            if (a + b === target) results.push([Math.min(a, b), Math.max(a, b)]);
        }
    }

    return results.sort(([a], [b]) => a - b);
};





//#############################################################
//#                        MY SOLUTION    2                   #
//#############################################################


const allPairs = (arr, target) => (
    arr.sort((a, b) => a - b).reduce((pairs, num, ind, src) => [
        ...pairs,
        ...src.slice(ind + 1).filter(e => e + num === target).map(e => [num, e])
    ], [])
);




//#############################################################
//#                        MY SOLUTION    3                   #
//#############################################################

function allPairs(arr, target) {
    let combinations = [];

    arr.forEach((number, index) => {
        for (let i = 0; i < arr.length; i++) {
            if (i === index) continue;

            if (number + arr[i] === target) {
                number > arr[i] ?
                    combinations.push([arr[i], number]) :
                    combinations.push([number, arr[i]])
                break;
            }

        }
    })

    return combinations.sort().filter((subArr, index) => {
        if (index === combinations.length - 1) return true;
        return subArr.toString() !== combinations[index + 1].toString();
    })
}