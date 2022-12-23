/*  

Triplet Sum
Create a function that takes an unsorted list of numbers and returns the number of unique triplets whose sum is equal to the variable n.

Examples
tripletSum([1, 0, 2, 6, 3, 9, 3], n = 11) ➞ 2
// Since we found two unique triplets that equate to 11: 0+2+9 and 2+6+3

tripletSum([1, 2, 6, 3, 4, 5, 9, 10, 11], n = 20) ➞ 5

tripletSum([5, 2, 8], n = 2) ➞ 0

Notes
You should also expect lists with less than three elements.

*/



//#############################################################
//#                        MY SOLUTION                        #
//#############################################################


function tripletSum(arr, n) {
    let res = []
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            for (let k = j + 1; k < arr.length; k++) {
                if (arr[i] + arr[j] + arr[k] == n) res.push([arr[i], arr[j], arr[k]])
            }
        }
    }
    res = res.map(el => JSON.stringify(el))
    return Array.from(new Set(res)).map(el => eval(el)).filter(el => new Set(el).size == 3).length
}



//#############################################################
//#               Alternative SOLUTION                        #
//#############################################################


function tripletSum(arr, n) {
    return arr.length < 3 ? 0 : triplets(arr).filter(x => x.reduce((a, v) => a + v, 0) == n).length
}

function triplets(arr) {
    var res = []
    for (var i = 0; i < arr.length - 2; i++) {
        for (var j = i + 1; j < arr.length - 1; j++) {
            for (var k = j + 1; k < arr.length; k++) {
                res.push([arr[i], arr[j], arr[k]]);
            }
        }
    }
    var result = res.map(x => x.sort((a, b) => a - b))
    return result.map(JSON.stringify).reverse().filter(function(e, i, a) {
        return a.indexOf(e, i + 1) === -1;
    }).reverse().map(JSON.parse)
}





/*


// Tests
Test.assertEquals(tripletSum([1, 2, 6, 3, 4, 5, 9, 10, 11], n = 20), 5)
Test.assertEquals(tripletSum([6, 2, 6], n = 9), 0)
Test.assertEquals(tripletSum([6, 2, 6, 0, 9, 2, 5, 8], n = 15), 2)
Test.assertEquals(tripletSum([1, -2, 0, 6, 11, 15, 6, 2, 6, 0, 9, 2, 5, 8], n = 15), 9)
Test.assertEquals(tripletSum([1,15], n = 16), 0, "There are no triplets in a list of two elements.")
Test.assertEquals(tripletSum([], n = 0), 0, "There are no triplets in an empty list.")



// Console output
Test Passed: Value == 5
Test Passed: Value == 0
Test Passed: Value == 2
Test Passed: Value == 9
Test Passed: Value == 0
Test Passed: Value == 0



*/