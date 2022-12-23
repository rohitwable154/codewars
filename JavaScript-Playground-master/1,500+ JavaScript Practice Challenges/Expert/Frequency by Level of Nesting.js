/*

Frequency by Level of Nesting

Create a function that takes in a nested array and an element and returns the frequency of that element by nested level.

Examples
freqCount([1, 4, 4, [1, 1, [1, 2, 1, 1]]], 1)
➞ [[0, 1], [1, 2], [2, 3]]
// The array has one 1 at level 0, 2 1's at level 1, and 3 1's at level 2.

freqCount([1, 5, 5, [5, [1, 2, 1, 1], 5, 5], 5, [5]], 5)
➞ [[0, 3], [1, 4], [2, 0]]

freqCount([1, [2], 1, [[2]], 1, [[[2]]], 1, [[[[2]]]]], 2)
➞ [[0, 0], [1, 1], [2, 1], [3, 1], [4, 1]]


Notes
Start the default nesting (an array with no nesting) at 0.
Output the nested levels in order (e.g. 0 first, then 1, then 2, etc.).
Output 0 for the frequency if that particular level has no instances of that element (see example #2).

*/




//#############################################################
//#    My SOLUTION 
//#############################################################

function freqCount(arr, el) {
    //global scope variables
    var depth = 0;
    var res = [];

    //define the walking function
    const walk = (depth, res, a, e) => {
        let freq = a.filter(x => x === e).length
        res.push([depth, freq]);
        a.forEach(x => { if (Array.isArray(x)) { walk(depth + 1, res, x, e) } });
    }

    //perform the walk
    walk(0, res, arr, el);

    //consolidate counts at like depths
    for (y = 0; y < res.length; y++) {
        if (res[y][0] < y) {
            let dupe = res.splice(y--, 1);
            res[dupe[0][0]][1] += dupe[0][1];
        }
    }
    return res;
}



//#############################################################
//#  Alternative possible SOLUTION 
//#############################################################


const freqCount = (arr, el, depth = 0) => !arr.length ? [] : [
    [depth, arr.filter(e => e === el).length],
    ...freqCount(arr.filter(Array.isArray).flat(), el, depth + 1)
];



/*

Test.assertSimilar(freqCount([1, 1, 1, 1], 1), [[0, 4]])
Test.assertSimilar(freqCount([1, 1, 2, 2], 1), [[0, 2]])
Test.assertSimilar(freqCount([1, 1, 2, [1]], 1), [[0, 2], [1, 1]])
Test.assertSimilar(freqCount([1, 1, 2, [[1]]], 1), [[0, 2], [1, 0], [2, 1]])
Test.assertSimilar(freqCount([[[1]]], 1), [[0, 0], [1, 0], [2, 1]])
Test.assertSimilar(freqCount([1, 4, 4, [1, 1, [1, 2, 1, 1]]], 1), [[0, 1], [1, 2], [2, 3]])
Test.assertSimilar(freqCount([1, 5, 5, [5, [1, 2, 1, 1], 5, 5], 5, [5]], 5), [[0, 3], [1, 4], [2, 0]])
Test.assertSimilar(freqCount([1, [2], 1, [[2]], 1, [[[2]]], 1, [[[[2]]]]], 2), [[0, 0], [1, 1], [2, 1], [3, 1], [4, 1]])


Test Passed: Value == '[[0, 4]]'
Test Passed: Value == '[[0, 2]]'
Test Passed: Value == '[[0, 2], [1, 1]]'
Test Passed: Value == '[[0, 2], [1, 0], [2, 1]]'
Test Passed: Value == '[[0, 0], [1, 0], [2, 1]]'
Test Passed: Value == '[[0, 1], [1, 2], [2, 3]]'
Test Passed: Value == '[[0, 3], [1, 4], [2, 0]]'
Test Passed: Value == '[[0, 0], [1, 1], [2, 1], [3, 1], [4, 1]]'

*/