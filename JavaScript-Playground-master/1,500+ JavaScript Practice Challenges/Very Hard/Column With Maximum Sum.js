/*  

Column With Maximum Sum

Given an array of numbers and a value for n, split the numbers into n-sized groups. If we imagine that these groups are stacked on top of each other (see below), return the column number that has the greatest sum. If two or more columns have the same sum, return the one with the smallest column number.

Example
nums = [4, 14, 12, 7, 14, 16, 5, 13, 7, 16, 11, 19]
n = 4
Gives the array:

[[4, 14, 12,  7],
[14, 16, 5, 13],
[7, 16, 11, 19]]

// 1, 2, 3, 4 (column)
// 25, 46, 28, 39 (sum)
You would return 2, as the 2nd column has the greatest sum.

Notes
Nums will always divide into equal-length groups.

*/


//#############################################################
//#                        MY SOLUTION    1                   #
//#############################################################


function colWithMaxSum(nums, n) {
    let cols = [...Array(n)].map((_, i) => nums.filter((_, e) => e % n === i).reduce((a, v) => a + v, 0));
    return cols.findIndex(v => v === Math.max(...cols)) + 1;
}





//#############################################################
//#                        MY SOLUTION    2                   #
//#############################################################


function colWithMaxSum(nums, n) {
    let newArr = [],
        sum = []
    while (nums.length >= n) {
        newArr.push(nums.splice(0, n))
    }
    for (let i = 0; i < n; i++) {
        sum.push(newArr.reduce((acc, v) => acc + v[i], 0))
    }
    return sum.indexOf(Math.max(...sum)) + 1
}




//#############################################################
//#                        MY SOLUTION    3                   #
//#############################################################


function colWithMaxSum(nums, n) {
    const zouba = [...nums]
    const arr = Array.from({ length: nums.length / n }, (el, index) => {
        return zouba.splice(0, n)
    })
    const map = arr.reduce((res, el) => {
        el.forEach((x, i) => {
            res.set(i, (res.get(i) || 0) + x)
        })
        return res
    }, new Map())
    return Array.from(map)
        .find(x => x[1] === Math.max(...Array.from(map).map(x => x[1])))[0] + 1
}




/*  


//Tests
Test.assertEquals(colWithMaxSum([14, 9, 19, 6, 13, 13, 3, 2, 12], 3), 3)
Test.assertEquals(colWithMaxSum([1, 13, 15, 5, 16, 1, 4, 9, 20], 3), 2)
Test.assertEquals(colWithMaxSum([15, 4, 6, 10, 6, 4], 2), 1)
Test.assertEquals(colWithMaxSum([7, 9, 13, 16, 17, 1, 10, 6, 3, 19, 6, 10, 8, 18, 20, 4], 8), 7)
Test.assertEquals(colWithMaxSum([4, 18, 14, 16, 7, 7, 20, 14, 9, 4, 8, 16, 1, 12, 18, 13], 2), 2)
Test.assertEquals(colWithMaxSum([5, 7, 2, 12, 20, 7, 1, 12, 8, 7, 12, 8], 3), 2)
Test.assertEquals(colWithMaxSum([18, 16, 6, 4, 18, 20, 9, 8, 1, 14, 20, 16], 4), 2)
Test.assertEquals(colWithMaxSum([5, 4, 20, 8, 8, 18], 2), 1)
Test.assertEquals(colWithMaxSum([2, 9, 12, 9, 17, 6, 8, 9, 8, 18, 2, 4], 2), 2)
Test.assertEquals(colWithMaxSum([15, 2, 16, 19, 3, 1, 15, 13, 19, 16, 2, 16], 3), 1)
Test.assertEquals(colWithMaxSum([4, 6, 18, 13, 19, 2, 7, 13, 19, 16, 12, 20, 17, 12, 4, 7], 8), 5)
Test.assertEquals(colWithMaxSum([10, 8, 6, 2, 2, 2, 18, 17, 17, 20, 17, 17], 6), 1)
Test.assertEquals(colWithMaxSum([3, 9, 14, 7, 6, 13, 9, 10, 1, 5, 10, 17, 16, 6, 3, 18], 4), 4)
Test.assertEquals(colWithMaxSum([2, 7, 8, 17, 15, 3], 3), 2)
Test.assertEquals(colWithMaxSum([8, 8, 6, 4, 8, 16, 4, 16, 18, 20, 20, 7], 2), 2)
Test.assertEquals(colWithMaxSum([19, 15, 1, 10, 2, 8], 6), 1)
Test.assertEquals(colWithMaxSum([5, 20, 8, 3, 5, 15], 3), 2)
Test.assertEquals(colWithMaxSum([10, 12, 15, 14, 17, 4, 18, 12, 17, 18, 18, 12], 4), 3)
Test.assertEquals(colWithMaxSum([5, 9, 12, 12, 7], 5), 3)
Test.assertEquals(colWithMaxSum([3, 18, 8, 15, 9, 15, 12, 8, 11, 5, 10, 8], 6), 2)



//Console Output
Test Passed: Value == 3
Test Passed: Value == 2
Test Passed: Value == 1
Test Passed: Value == 7
Test Passed: Value == 2
Test Passed: Value == 2
Test Passed: Value == 2
Test Passed: Value == 1
Test Passed: Value == 2
Test Passed: Value == 1
Test Passed: Value == 5
Test Passed: Value == 1
Test Passed: Value == 4
Test Passed: Value == 2
Test Passed: Value == 2
Test Passed: Value == 1
Test Passed: Value == 2
Test Passed: Value == 3
Test Passed: Value == 3
Test Passed: Value == 2


*/