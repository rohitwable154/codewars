/*  

Simple Minesweeper
Given a 2D array of mines, replace the question mark with the number of mines that immediately surround it. This includes the diagonals, meaning it is possible for it to be surrounded by 8 mines maximum.

The key is as follows:

An empty space: "-"
A mine: "#"
Number showing number of mines surrounding it: "?"
Examples
minesweeper([
  ["-", "#", "-"],
  ["-", "?", "-"],
  ["-", "-", "-"]
]) ➞ [
  ["-", "#", "-"],
  ["-", "1", "-"],
  ["-", "-", "-"]
]

minesweeper([
  ["-", "#", "-"],
  ["#", "-", "?"],
  ["#", "#", "-"]
]) ➞ [
  ["-", "#", "-"],
  ["#", "-", "2"],
  ["#", "#", "-"]
]

minesweeper([
  ["-", "#", "#"],
  ["?", "#", ""],
  ["#", "?", "-"]
]) ➞ [
  ["-", "#", "#"],
  ["3", "#", ""],
  ["#", "2", "-"]
]

minesweeper([
  ["-", "-", "#"],
  ["?", "-", "-"],
  ["-", "-", "-"]
]) ➞ [
  ["-", "-", "#"],
  ["0", "-", "-"],
  ["-", "-", "-"]
]

Notes
You will only be given 3x3 grids.
The question mark is not limited to the centre (there may be multiple question marks).


*/






//#############################################################
//#                        MY SOLUTION    1                   #
//#############################################################


function countMine(grid, x, y) {
    let count = 0;
    for (let i = y - 1; i <= y + 1; i++)
        for (let j = x - 1; j <= x + 1; j++)
            if (grid[i] && grid[i][j] === "#")
                count++;
    return count;
}

function minesweeper(grid) {
    for (let i = 0; i < grid.length; i++)
        for (let j = 0; j < grid[i].length; j++)
            if (grid[i][j] === "?")
                grid[i][j] = countMine(grid, j, i).toString();
    return grid;
}





//#############################################################
//#                        MY SOLUTION    2                   #
//#############################################################


function minesweeper(grid) {
    let minesSurrounding = 0;
    const surroundingIndex = (i, index) => {
        let indexToCheck = [
            [i - 1, index - 1],
            [i - 1, index],
            [i - 1, index + 1],
            [i, index - 1],
            [i, index + 1],
            [i + 1, index - 1],
            [i + 1, index],
            [i + 1, index + 1],
        ];
        return indexToCheck.map(x => {
            if (x.find(a => a > 2)) return x = 0;
            if (x.find(a => a < 0)) return x = 0;
            return x;
        }).filter(x => x !== 0).flat(2);
    }

    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            if (grid[i][j] === '?') {
                let checks = surroundingIndex(i, j);
                for (let k = 0; k < checks.length; k += 2) {
                    if (grid[checks[k]][checks[k + 1]] === '#') { minesSurrounding++; }
                }
                grid[i][j] = minesSurrounding + '';
            }
            minesSurrounding = 0;
        }
    }
    return grid;
}




//#############################################################
//#                        MY SOLUTION    3                   #
//#############################################################


function minesweeper(grid) {

    for (let i = 0; i < grid.length; i++) {
        if (grid[i].includes("?"))
            for (let j = 0; j < grid[i].length; j++)
                if (grid[i][j] === "?") grid[i][j] = numOfMines(i, j, grid);
    }

    return grid;
}

const numOfMines = (i1, i2, arr) => {
    let count = 0;

    if (((arr[i1] || 0)[i2 + 1] || 0) === "#") count += 1;
    if (((arr[i1] || 0)[i2 - 1] || 0) === "#") count += 1;
    if (((arr[i1 - 1] || 0)[i2] || 0) === "#") count += 1;
    if (((arr[i1 + 1] || 0)[i2] || 0) === "#") count += 1;
    if (((arr[i1 - 1] || 0)[i2 + 1] || 0) === "#") count += 1;
    if (((arr[i1 - 1] || 0)[i2 - 1] || 0) === "#") count += 1;
    if (((arr[i1 + 1] || 0)[i2 + 1] || 0) === "#") count += 1;
    if (((arr[i1 + 1] || 0)[i2 - 1] || 0) === "#") count += 1;

    return count.toString();
}