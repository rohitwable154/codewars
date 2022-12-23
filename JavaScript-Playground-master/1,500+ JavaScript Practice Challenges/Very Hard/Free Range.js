/*  

Free Range
Create a function which converts an ordered number array into a array of ranges (represented as strings). Note how some arrays have some numbers missing.


Examples
numbersToRanges([1, 2, 3, 4, 5]) ➞ ["1-5"]
numbersToRanges([3, 4, 5, 10, 11, 12]) ➞ ["3-5", "10-12"]
numbersToRanges([1, 2, 3, 4, 99, 100]) ➞ ["1-4", "99-100"]
numbersToRanges([1, 3, 4, 5, 6, 7, 8]) ➞ ["1", "3-8"]


Notes
If there are no numbers consecutive to a number in the array, represent it as only the string version of that number (see example #4).
Return an empty array if the given array is empty.

*/




//#############################################################
//#                        MY SOLUTION    1                   #
//#############################################################


const numbersToRanges = arr => (
    arr.reduce((a, n, i) => ((
        (n - 1 === arr[i - 1]) ? a[a.length - 1].push(n) : a.push([n])
    ), a), []).map(e => (
        (e.length > 1) ? `${e[0]}-${e.pop()}` : `${e.pop()}`
    ))
);





//#############################################################
//#                        MY SOLUTION    2                   #
//#############################################################


function numbersToRanges(arr) {
    let res = [],
        range = [];
    for (let i = 0; i < arr.length; i++) {
        range.push(arr[i]);
        if (range.length > 1 && range[range.length - 1] - range[range.length - 2] !== 1) {
            res.push(range.length > 2 ? range[0] + "-" + range[range.length - 2] : String(range[0]));
            range = range.slice(-1);
        }
    }
    if (range.length)
        res.push(range.length > 1 ? range[0] + "-" + range[range.length - 1] : String(range[0]));
    return res;
}




//#############################################################
//#                        MY SOLUTION    3                   #
//#############################################################


function numbersToRanges(arr) {
    let result = []
    let temp = []
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === arr[i + 1] - 1) temp.push(arr[i])
        else {
            result.push([...temp, arr[i]])
            temp = []
        }
    }
    return result.map((x => {
        return x.length > 1 ? [x.shift(), x.pop()].join("-") : "" + x[0]
    }))
}