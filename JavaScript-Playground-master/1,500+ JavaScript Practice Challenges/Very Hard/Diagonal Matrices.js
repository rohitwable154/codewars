/*  

Diagonal Matrices

Write a function that diagonally orders numbers in a n x n matrix, depending on which of the four corners you originate from: upper-left (ul), upper-right (ur), lower-left (ll), lower-right (lr).

Examples
diagonalize(3, "ul") ➞ [
  [0, 1, 2],
  [1, 2, 3],
  [2, 3, 4]
]

diagonalize(4, "ur") ➞ [
  [3, 2, 1, 0],
  [4, 3, 2, 1],
  [5, 4, 3, 2],
  [6, 5, 4, 3]
]

diagonalize(3, "ll") ➞ [
  [2, 3, 4],
  [1, 2, 3],
  [0, 1, 2]
]

diagonalize(5, "lr") ➞ [
  [8, 7, 6, 5, 4],
  [7, 6, 5, 4, 3],
  [6, 5, 4, 3, 2],
  [5, 4, 3, 2, 1],
  [4, 3, 2, 1, 0]
]

*/





//#############################################################
//#                        MY SOLUTION    1                   #
//#############################################################


const diags = {
    ul: n => Array.from({ length: n }, (_, row) => (
        Array.from({ length: n }, (_, col) => row + col)
    )),
    ur(n) {
        return this.ul(n).map(rowArr => rowArr.reverse())
    },
    ll(n) {
        return this.ul(n).reverse()
    },
    lr(n) {
        return this.ur(n).reverse()
    },
};

const diagonalize = (n, dir) => diags[dir](n);





//#############################################################
//#                        MY SOLUTION    2                   #
//#############################################################


const diagonalize = (n, dir) => {
    let arr = Array(n).fill(Array(n).fill(0)).map((r, i) => r.map((c, j) => i + j));

    if (dir === 'ur') arr.map(r => r.reverse());

    if (dir === 'll') {
        arr.map(r => r.reverse());
        arr = Object.keys(arr[0]).map(c => arr.map(r => r[c]));
    }

    if (dir === 'lr') {
        arr.map(r => r.reverse());
        arr = Object.keys(arr[0]).map(c => arr.map(r => r[c]));
        arr.map(r => r.reverse());
    }

    return arr;
}




//#############################################################
//#                        MY SOLUTION    3                   #
//#############################################################


const rotateCW = matrix =>
    matrix[0].map((_, x) => matrix.map(row => row[x]).reverse());

const diagonalize = (length, dir) => {
    const matrix = Array.from({ length }, (_, y) =>
        Array.from({ length }, (_, x) => y + x)
    );

    switch (dir) {
        case 'ul':
            return matrix;
        case 'ur':
            return rotateCW(matrix);
        case 'lr':
            return rotateCW(rotateCW(matrix));
        default:
            return rotateCW(rotateCW(rotateCW(matrix)));
    }
};






//###############################################################


/*  

//Tests
Test.assertSimilar(diagonalize(3, 'ul'), [
	[0, 1, 2],
	[1, 2, 3],
	[2, 3, 4]
], "It should work for the upper left corner.")

Test.assertSimilar(diagonalize(4, 'ur'), [
	[3, 2, 1, 0],
	[4, 3, 2, 1],
	[5, 4, 3, 2],
	[6, 5, 4, 3]
], "It should work for the upper right corner.")

Test.assertSimilar(diagonalize(3, 'll'), [
	[2, 3, 4],
	[1, 2, 3],
	[0, 1, 2]
], "It should work for the lower left corner.")

Test.assertSimilar(diagonalize(5, 'lr'), [
	[8, 7, 6, 5, 4],
	[7, 6, 5, 4, 3],
	[6, 5, 4, 3, 2],
	[5, 4, 3, 2, 1],
	[4, 3, 2, 1, 0]
], "It should work for the lower right corner.")





//Console Output
Test Passed: Value == '[[0, 1, 2], [1, 2, 3], [2, 3, 4]]'
Test Passed: Value == '[[3, 2, 1, 0], [4, 3, 2, 1], [5, 4, 3, 2], [6, 5, 4, 3]]'
Test Passed: Value == '[[2, 3, 4], [1, 2, 3], [0, 1, 2]]'
Test Passed: Value == '[[8, 7, 6, 5, 4], [7, 6, 5, 4, 3], [6, 5, 4, 3, 2], [5, 4, 3, 2, 1], [4, 3, 2, 1, 0]]'


*/