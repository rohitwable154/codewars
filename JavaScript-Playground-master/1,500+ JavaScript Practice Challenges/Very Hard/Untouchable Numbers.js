/*  

Untouchable Numbers

A positive number greater than 1 can be defined untouchable when it's not equal to the sum of the proper divisors (called also aliquot sum) of any other positive number, in a range starting from 2 and ending with the square of the given number (bounds included).

Given an integer number, implement a function that returns:

true if the given number is untouchable.
An array containing the numbers whose proper divisors sum is equal to the number, if the given number is not untouchable.
A string "Invalid Input" if the given number is lower than 2.
Examples
isUntouchable(2) ➞ true
// Range: 2 to 4
// 2 = 1  |  3 = 1  |  4 = 1+2 = 3
// No sum is equal to the given number

isUntouchable(3) ➞ [4]
// Range: 2 to 9
// As in the example above, 4 = 1+2 = 3

isUntouchable(6) ➞ [6, 25]
// Range: 2 to 36
// 6 = 1+2+3 = 6  |  25 = 1+5 = 6

isUntouchable(1) ➞ "Invalid Input"
// The given number is lower than 2


Notes
The proper divisors of a number are, merely, all its divisors less the number itself.
More than a number can have a proper divisors sum equal to the given number, with given number included (see example #3).
Trivia: As far as we know, numbers 2 and 5 are the only two primes present in the sequence, with 5 being the only odd number present; by the way, these two assertions are still unproofed.

*/



//#############################################################
//#                        MY SOLUTION    1                   #
//#############################################################


function divisorSum(number) {
    let sum = 1;
    for (let i = 2; i <= number / 2; i++)
        if (number % i === 0) sum += i;
    return sum;
}

function isUntouchable(number) {
    if (number < 2) return "Invalid Input";

    let aliquot = [];
    for (let i = 2; i <= number ** 2; i++)
        if (divisorSum(i) === number) aliquot.push(i);
    return aliquot.length ? aliquot : true;
}







//#############################################################
//#                        MY SOLUTION    2                   #
//#############################################################


function isUntouchable(number) {
    if (number < 2) return "Invalid Input";
    let arr = [],
        max = Math.pow(number, 2);
    for (let i = 2; i <= max; i++) {
        let fac = [];
        for (let j = 1; j < i; j++) {
            if (i % j === 0) fac.push(j)
        }
        let sum = fac.reduce((a, b) => a + b, 0);
        if (sum === number) arr.push(i);
    }
    return arr.length > 0 ? arr : true;
}






//#############################################################
//#                        MY SOLUTION    3                   #
//#############################################################


const isUntouchable = (number) => {
    if (number < 2) return 'Invalid Input';

    const numbers = [];
    for (let i = number; i <= Math.pow(number, 2); i++) numbers.push(i);

    const divisors = numbers.map(x => {
        const arr = [];
        for (let i = 1; i < x; i++) {
            if (x % i === 0) arr.push(i);
        }
        return arr.reduce((t, v) => t + v, 0);
    });

    const untouchable = divisors.every(x => x !== number);
    return untouchable ? true : numbers.filter((x, i) => divisors[i] === number);
}




//#############################################################
//#                        MY SOLUTION    4                   #
//#############################################################




const isUntouchable = (number) => {
    if (number < 2) return 'Invalid Input';

    const numbers = [];
    for (let i = number; i <= Math.pow(number, 2); i++) numbers.push(i);

    const divisors = numbers.map(x => {
        const arr = [];
        for (let i = 1; i < x; i++) {
            if (x % i === 0) arr.push(i);
        }
        return arr.reduce((t, v) => t + v, 0);
    });

    const untouchable = divisors.every(x => x !== number);
    return untouchable ? true : numbers.filter((x, i) => divisors[i] === number);
}


/*  



//Tests
Test.assertEquals(isUntouchable(2), true, "Example #1")
Test.assertSimilar(isUntouchable(3), [4], "Example #2")
Test.assertSimilar(isUntouchable(6), [6, 25], "Example #3")
Test.assertEquals(isUntouchable(1), "Invalid Input", "Example #4")
Test.assertEquals(isUntouchable(5), true)
Test.assertSimilar(isUntouchable(8), [10, 49])
Test.assertEquals(isUntouchable(52), true)
Test.assertSimilar(isUntouchable(30), [841])
Test.assertEquals(isUntouchable(-10), "Invalid Input")
Test.assertEquals(isUntouchable(188), true)
Test.assertSimilar(isUntouchable(60), [3481])
Test.assertSimilar(isUntouchable(100), [124, 194])
Test.assertEquals(isUntouchable(120), true)
Test.assertSimilar(isUntouchable(121), [243,  791, 1199, 1391, 1751, 1919, 2231, 2759, 3071, 3239, 3431, 3551, 3599])
Test.assertEquals(isUntouchable(0), "Invalid Input")


//Console Output
Test Passed: Value == true
Test Passed: Value == '[4]'
Test Passed: Value == '[6, 25]'
Test Passed: Value == 'Invalid Input'
Test Passed: Value == true
Test Passed: Value == '[10, 49]'
Test Passed: Value == true
Test Passed: Value == '[841]'
Test Passed: Value == 'Invalid Input'
Test Passed: Value == true
Test Passed: Value == '[3481]'
Test Passed: Value == '[124, 194]'
Test Passed: Value == true
Test Passed: Value == '[243, 791, 1199, 1391, 1751, 1919, 2231, 2759, 3071, 3239, 3431, 3551, 3599]'
Test Passed: Value == 'Invalid Input'


*/