/*

Land Perimeter
The function is given a map with 1 representing land, 0 representing water. A land cell can have four neighbors along its edges. Compute the total perimeter of shore-lines that are defined by land cells touching water or the outer edges of the map. Each cell edge has a length equal to 1. An isolated cell without neighbors has a total perimeter length of 4.

Examples
islandsPerimeter([
  [0, 1, 0, 0],
  [1, 1, 1, 0],
  [0, 1, 0, 0],
  [1, 1, 0, 0]
]) ➞ 16
islandsPerimeter([
  [1, 1, 1, 1, 1, 1],
  [1, 0, 0, 0, 0, 1],
  [1, 0, 1, 1, 0, 1],
  [1, 0, 0, 0, 0, 1],
  [1, 1, 1, 1, 1, 1],
]), 42)
islandsPerimeter([
  [1, 0]
]) ➞ 4

*/




//#############################################################
//#    My SOLUTION 
//#############################################################


function islandsPerimeter(grid) {
    const valid = (i, j) => {
        if (Math.min(i, j) < 0 || i > grid.length - 1 || j > grid[0].length - 1) {
            return true;
        }
        return grid[i][j] == 0;

    }
    const perimeter = (i, j) => {
        return [
            [i, j - 1],
            [i, j + 1],
            [i - 1, j],
            [i + 1, j]
        ].filter(x => valid(x[0], x[1])).length;
    }
    let p = 0;
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if (grid[i][j] == 1) {
                p += perimeter(i, j);
            }
        }
    }
    return p;
}




//#############################################################
//#  Alternative possible SOLUTION 
//#############################################################


function islandsPerimeter(grid) {
    let edges = 0;
    for (let i = 0; i < grid.length; i++)
        for (let j = 0; j < grid[i].length; j++)
            if (grid[i][j] === 1)
                for (let [di, dj] of[[-1, 0], [0, -1], [0, 1], [1, 0]])
                    if (!grid[i + di] || !grid[i + di][j + dj])
                        edges++;
    return edges;
}





/*



// Tests
area = [
    [0, 1, 0, 0],
    [1, 1, 1, 0],
    [0, 1, 0, 0],
    [1, 1, 0, 0]
]
Test.assertEquals(islandsPerimeter(area), 16)

area = [[1, 0]]
Test.assertEquals(islandsPerimeter(area), 4)

area = [
    [0, 1, 0, 0, 0, 0, 1, 1, 0, 1, 0, 0, 0, 0, 1, 0, 1, 1],
    [1, 1, 1, 0, 1, 0, 1, 1, 0, 1, 0, 1, 0, 0, 1, 0, 1, 1],
    [0, 1, 1, 0, 1, 0, 1, 1, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0],
    [0, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 1, 0, 0, 1, 0, 1, 0],
    [0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 1, 1, 1, 1],
    [0, 0, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 0, 0, 0, 1, 0, 0],
    [1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1],
    [0, 0, 1, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1]
]
Test.assertEquals(islandsPerimeter(area), 140)

area = [
    [1, 1, 1, 1, 1, 1],
    [1, 0, 0, 0, 0, 1],
    [1, 0, 1, 1, 0, 1],
    [1, 0, 0, 0, 0, 1],
    [1, 1, 1, 1, 1, 1],
]
Test.assertEquals(islandsPerimeter(area), 42)

area = [
    [0, 0, 1, 1, 0, 0],
    [0, 0, 0, 0, 0, 1],
    [1, 0, 1, 1, 1, 1],
    [1, 0, 1, 1, 0, 1],
    [1, 1, 1, 1, 1, 1],
]
Test.assertEquals(islandsPerimeter(area), 34)

area = [
    [0, 0, 0, 0, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 0, 0, 0, 0]
]
Test.assertEquals(islandsPerimeter(area), 24)



// Console output
Test Passed: Value == 16
Test Passed: Value == 4
Test Passed: Value == 140
Test Passed: Value == 42
Test Passed: Value == 34
Test Passed: Value == 24



*/