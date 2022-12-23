/*

Three Sum Problem

Write a function that returns all sets of three elements that sum to 0.

Examples
threeSum([0, 1, -1, -1, 2]) ➞ [[0, 1, -1], [-1, -1, 2]]

threeSum([0, 0, 0, 5, -5]) ➞ [[0, 0, 0], [0, 5, -5]]

threeSum([1, 2, 3]) ➞ []

threeSum([1]) ➞ []


Notes
The original array may contain duplicate numbers.
Each three-element subarray in your output should be distinct.
Subarrays should be ordered by the first element of the subarray.
Subarrays themselves should be ordered the same as the original array.
Return an empty array if no three elements sum to zero.
Return an empty array if there are fewer than three elements.

*/




//#############################################################
//#    My SOLUTION 
//#############################################################


const sum = arr => arr.reduce((total, num) => total + num, 0);

const threeSum = arr => {
    const result = [];

    for (let i = 0; i < arr.length - 2; i++) {
        for (let j = i + 1; j < arr.length - 1; j++) {
            for (let k = j + 1; k < arr.length; k++) {
                const set = [arr[i], arr[j], arr[k]];
                const jsonSet = JSON.stringify(set);

                if (sum(set) === 0 && !result.includes(jsonSet)) result.push(jsonSet);
            }
        }
    }

    return result.map(JSON.parse);
};



//#############################################################
//#  Alternative possible SOLUTION 
//#############################################################


function threeSum(arr) {
    if (arr.length < 3)
        return []
    if (arr.length == 3 && arr.reduce((a, b) => a + b, 0) == 0)
        return [arr]
    let d = []
    for (let i = 0; i < arr.length - 2; i++) {
        for (let j = 1; j < arr.length - 1; j++) {
            for (let k = 2; k < arr.length; k++) {
                if (i < j && j < k && arr[i] + arr[j] + arr[k] == 0)
                    d.push([arr[i], arr[j], arr[k]])
            }
        }
    }
    return d.filter((x, i) => !d.some((y, j) => j < i && y.join('') == x.join('')))
}





/*


Test.assertSimilar(threeSum([0, 1, -1, -1, 2]), [[0, 1, -1], [-1, -1, 2]])
Test.assertSimilar(threeSum([0, 0, 0, 5, -5]), [[0, 0, 0], [0, 5, -5]])
Test.assertSimilar(threeSum([0, -1, 1, 0, -1, 1]), [[0, -1, 1], [0, 1, -1], [-1, 1, 0], [-1, 0, 1], [1, 0, -1]])
Test.assertSimilar(threeSum([0, 5, 5, 0, 0]), [[0, 0, 0]])
Test.assertSimilar(threeSum([0, 5, -5, 0, 0]), [[0, 5, -5], [0, 0, 0], [5, -5, 0]])
Test.assertSimilar(threeSum([1, 2, 3, -5, 8, 9, -9, 0]), [[1, 8, -9], [2, 3, -5], [9, -9, 0]])
Test.assertSimilar(threeSum([0, 0, 0]), [[0, 0, 0]])
Test.assertSimilar(threeSum([1, 5, 5, 2]), [])
Test.assertSimilar(threeSum([1, 1]), [])
Test.assertSimilar(threeSum([]), [])


Test Passed: Value == '[[0, 1, -1], [-1, -1, 2]]'
Test Passed: Value == '[[0, 0, 0], [0, 5, -5]]'
Test Passed: Value == '[[0, -1, 1], [0, 1, -1], [-1, 1, 0], [-1, 0, 1], [1, 0, -1]]'
Test Passed: Value == '[[0, 0, 0]]'
Test Passed: Value == '[[0, 5, -5], [0, 0, 0], [5, -5, 0]]'
Test Passed: Value == '[[1, 8, -9], [2, 3, -5], [9, -9, 0]]'
Test Passed: Value == '[[0, 0, 0]]'
Test Passed: Value == '[]'
Test Passed: Value == '[]'
Test Passed: Value == '[]'

*/