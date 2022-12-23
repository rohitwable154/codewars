/*  

Does the Triangle Fit into the Triangular Hole?

Create a function that takes the dimensions of two triangles (as arrays) and checks if the first triangle fits into the second one.

Examples
doesTriangleFit([1, 1, 1], [1, 1, 1]) ➞ true

doesTriangleFit([1, 1, 1], [2, 2, 2]) ➞ true

doesTriangleFit([1, 2, 3], [1, 2, 2]) ➞ false

doesTriangleFit([1, 2, 4], [1, 2, 6]) ➞ false


Notes
Triangle fits if it has the same or smaller size as the hole.
The function should return false if the triangle with that dimensions is not possible.

*/




//#############################################################
//#                        MY SOLUTION    1                   #
//#############################################################


function doesTriangleFit(brick, hole) {
    let [first, second, third] = brick;
    if (first + second <= third || first + third <= second || third + second <= first) {
        return false
    }
    [first, second, third] = hole;
    //if(first + second > 80) {
    //return true
    //}
    if (first + second <= third || first + third <= second || third + second <= first) {
        return false
    }
    return true;
}








//#############################################################
//#                        MY SOLUTION    2                   #
//#############################################################


function doesTriangleFit(brick, hole) {
    if (!Array.isArray(brick) || !Array.isArray(hole)) return;
    if (!checkIfTriangle(brick) || !checkIfTriangle(hole)) return false;
    const sumBrick = brick.reduce((acc, val) => acc += val, 0);
    const sumHole = hole.reduce((acc, val) => acc += val, 0);
    return sumBrick <= sumHole;
}

const checkIfTriangle = (arr) => {
    const side1 = arr[0];
    const side2 = arr[1];
    const side3 = arr[2];
    if (side1 + side2 < side3 || side1 + side3 < side2 || side2 + side3 < side1) return false;
    return true;
}







//#############################################################
//#                        MY SOLUTION    3                   #
//#############################################################



const tit = a => a[0] + a[1] > a[2] && a[0] + a[2] > a[1] && a[1] + a[2] > a[0] ? true : false;
const area = a => {
    const p = a.reduce((a, v) => a + v, 0) / 2;
    return Math.sqrt(p * a.map(v => p - v).reduce((a, v) => a * v));
}

function doesTriangleFit(brick, hole) {
    if (!tit(brick) || !tit(hole)) return false;
    return area(brick) <= area(hole);
}