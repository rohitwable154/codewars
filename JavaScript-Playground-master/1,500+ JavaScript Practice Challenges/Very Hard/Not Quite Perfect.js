/*  



Not Quite Perfect

A perfect number is a number that is equal to the sum of all its proper (non-self) divisors. Take 6 for example:

6 = 1 + 2 + 3
A number that is equal to the sum of all its proper divisors -- provided that one of them is negative -- is not quite perfect, but admirable.

To illustrate. The proper divisors of 12 are 1, 2, 3, 4, 6, totalling 16. However, if 2 is negative, the total would be 12, the number itself. 12 is therefore an admirable number.

12 = 1 - 2 + 3 + 4 + 6
Create a function that takes a number n as input.

If n is perfect, return "Perfect".
If n is admirable, return the proper divisor that must be rendered negative to make the sum of the proper divisors equal to n.
If n is neither perfect nor admirable, return "Neither".


Examples
admirable(6) ➞ "Perfect"

admirable(12) ➞ 2

admirable(18) ➞ "Neither"

*/





//#############################################################
//#                        MY SOLUTION    1                   #
//#############################################################


function admirable(n) {
    const divisors = Array.from({ length: n - 1 }, (_, i) => i + 1).filter(num => n % num == 0);
    // Perfect
    if (divisors.reduce((acc, num) => acc + num, 0) == n) return 'Perfect';
    // Admirable
    for (let i = 0; i < divisors.length; i++) {
        if (divisors.reduce((acc, num, idx) => {
                return acc + num * (i == idx ? -1 : 1);
            }, 0) === n) return divisors[i];
    }
    return 'Neither';
}





//#############################################################
//#                        MY SOLUTION    2                   #
//#############################################################


const sum = arr => arr.reduce((total, num) => total + num, 0);

const getFactors = num => {
    const factors = [];
    for (let i = 1; i < num; i++)
        if (num % i === 0) factors.push(i);
    return factors;
};

const admirable = num => {
    const factors = getFactors(num);
    const factorsSum = sum(factors);

    if (factorsSum === num) return 'Perfect';

    const index = factors.map(n => n * 2).findIndex(n => factorsSum - n === num);

    return factors[index] || 'Neither';
};




//#############################################################
//#                        MY SOLUTION    3                   #
//#############################################################


function admirable(n) {
    const arr = []
    for (let i = 1; i <= n / 2; ++i) {
        if (!(n % i)) {
            arr.push(i)
        }
    }
    const sum = arr.reduce((ac, cv) => ac + cv)
    return sum === n ? "Perfect" : arr.find(num => sum - num * 2 === n) || "Neither"
}



/*  

// Tests
Test.assertEquals(admirable(6), 'Perfect')
Test.assertEquals(admirable(12), 2)
Test.assertEquals(admirable(18), 'Neither')
Test.assertEquals(admirable(496), 'Perfect')
Test.assertEquals(admirable(138), 6)
Test.assertEquals(admirable(612), 'Neither')
Test.assertEquals(admirable(1876), 28)
Test.assertEquals(admirable(5456), 496)

//Console
Test Passed: Value == 'Perfect'
Test Passed: Value == 2
Test Passed: Value == 'Neither'
Test Passed: Value == 'Perfect'
Test Passed: Value == 6
Test Passed: Value == 'Neither'
Test Passed: Value == 28
Test Passed: Value == 496

*/