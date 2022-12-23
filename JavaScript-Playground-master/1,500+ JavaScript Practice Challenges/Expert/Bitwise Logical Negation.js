/*

Bitwise Logical Negation
Given a number (positive, negative, or 0), return the logical negation (as a 1 or 0) of that number. Do so using only bitwise operators:

~, &, |, ^, >>, <<, +
Any of these characters / constructs are not allowed:

if, do, while, for, switch, -, ?, :, !, ||, &&, <, >, == , [,], functions
Examples
bitwiseLogicalNegation(1) ➞ 0

bitwiseLogicalNegation(5) ➞ 0

bitwiseLogicalNegation(0) ➞ 1

bitwiseLogicalNegation(3) ➞ 0

Notes
Use as few operators as possible for more of a challenge.

*/






//#############################################################
//#    My SOLUTION 
//#############################################################


bitwiseLogicalNegation = x =>
    (
        x |= x >> 1,
        x |= x >> 2,
        x |= x >> 4,
        x |= x >> 8,
        1 & ~x
    )



//#############################################################
//#  Alternative possible SOLUTION 
//#############################################################



const bitwiseLogicalNegation = x => 1 + ((x | (1 + ~x)) >> 31)



/*

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