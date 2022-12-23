/*  

Find the Most Frequent Element in an Array

Create a function that takes an array and returns the most frequently occurring element contained within it.



Examples
findFrequent([3, 7, 3]) ➞ 3

findFrequent([null, "hello", true, null]) ➞ null

findFrequent([false, "up", "down", "left", "right", true, false]) ➞ false


*/




//#############################################################
//#                        MY SOLUTION    1                   #
//#############################################################


function findFrequent(arr) {
    return arr.reduce((a, b) => (
        arr.filter(i => i === a).length >= arr.filter(i => i === b).length ? a : b
    ))
}





//#############################################################
//#                        MY SOLUTION    2                   #
//#############################################################


findFrequent = a =>
    a.sort().reduce((r, x, i, v) =>
        (c = v.lastIndexOf(x) - i) > r[0] ? [c, x] : r, [0])[1]




//#############################################################
//#                        MY SOLUTION    3                   #
//#############################################################


const findFrequent = arr => {

    let result = []
    let counter = 0

    arr.forEach((v, i, a) => {
        let innerArr = []
        a.forEach(val => {
            if (v === val) {
                innerArr.push(v)
            }
        })
        result = [...innerArr]
            .find(v => v === null ? v = 'null' : v === false ? v = 'false' : v)
    })

    return result
}