/*  

Sum of Factors of Factors
Create a function that takes a number and returns the sum of factors of factors of the given number.

Examples
sumFF(69) ➞ 3, 23 ➞ 0
// Both 3 and 23 are prime numbers and have no factors
// other than 1 and themselves so the result is 0.

sumFF(12) ➞ 2, 3, 4, 6 ➞ (0) + (0) + (2) + (2+3) ➞ 7

sumFF(420) ➞ 2,4, 6, 10, 12 ... ➞ (2) + (2+3) + (2+5) + (2+3+4+6) ... ➞ 1175

sumFF(619) ➞ ___ ➞ 0
// 619 doesn't have any factors (other than 1 and 619).


Notes
The number will always be greater than 0.
Factors that are equal to the number or 1, don't count (see example #1).

*/




//#############################################################
//#                        MY SOLUTION    1                   #
//#############################################################


function factors(n) {
    let f = [];
    for (let i = 2; i <= n / 2; i++)
        if (!(n % i))
            f.push(i);
    return f;
}

function sumFF(a) {
    return factors(a).map(factors).flat().reduce((s, c) => s + c, 0);
}




//#############################################################
//#                        MY SOLUTION    2                   #
//#############################################################


function sumFF(a, n = 1) {
    l = []
    for (i = 2; i < a; i++) {
        a % i ? '' : l.push(i)
    }
    return l.reduce((a, b) => a + (n == 2 ? b : sumFF(b, n + 1)), 0)
}




/*


// Tests
Test.assertEquals(sumFF(98), 16)
Test.assertEquals(sumFF(435), 74)
Test.assertEquals(sumFF(534), 188)
Test.assertEquals(sumFF(3123), 353)
Test.assertEquals(sumFF(1232), 1931)
Test.assertEquals(sumFF(12), 7)
Test.assertEquals(sumFF(31232), 32630)
Test.assertEquals(sumFF(4234), 208)
Test.assertEquals(sumFF(655), 0)
Test.assertEquals(sumFF(432), 1240)
Test.assertEquals(sumFF(2343), 170)



// Console output
Test Passed: Value == 16
Test Passed: Value == 74
Test Passed: Value == 188
Test Passed: Value == 353
Test Passed: Value == 1931
Test Passed: Value == 7
Test Passed: Value == 32630
Test Passed: Value == 208
Test Passed: Value == 0
Test Passed: Value == 1240
Test Passed: Value == 170



*/