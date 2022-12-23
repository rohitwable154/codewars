/*  

Dead End Number Sequence
This number sequence can start with any positive integer n. s is the sum of the individual digits in n. If s divides into n evenly then the next term of the series is n//s. Otherwise the next term is n*s. Eventually the series will reach a dead end with two numbers alternating: 58, 754, 12064, 928, 17632, 928, 17632. This series has a length of 5 with 17632 as the last term.

Compose a function that takes a positive integer and returns its series length and its last term.



Examples
deadEnd(5) ➞ [2, 1]

deadEnd(11) ➞ [7, 11440]

deadEnd(123456789) ➞ [2, 5555555505]

deadEnd(35161) ➞ [39, 154838313273413215779502672965210112000]

deadEnd(101) ➞ [9, 136804096]


*/






//#############################################################
//#                        MY SOLUTION                        #
//#############################################################


function deadEnd(n) {
    const arr = [n = BigInt(n)];

    while (true) {
        const sum = n.toString().split('').reduce((x, y) => x + BigInt(y), 0 n);
        n = (n % sum) ? n * sum : n / sum;

        if (arr.slice(Math.max(arr.length - 2, 0)).includes(n)) {
            return [arr.length, Number(arr.pop())];
        } else {
            arr.push(n)
        }
    }
}





//#############################################################
//#                        MY SOLUTION                        #
//#############################################################


const deadEnd = n => {
    const nums = [BigInt(n)];
    let sum = 0,
        next;
    while (true) {
        const current = BigInt(String(nums[nums.length - 1]));
        sum = [...String(current)].reduce((a, d) => a + BigInt(d), 0 n);
        next = current % sum === 0 n ? current / sum : current * sum;
        if (nums.includes(next)) break;
        nums.push(next);
    }
    return [nums.length, Number(nums.slice(-1)[0])];
}






/*


// Tests
Test.assertSimilar(deadEnd(1), [1, 1])
Test.assertSimilar(deadEnd(9), [2, 1])
Test.assertSimilar(deadEnd(1000), [1, 1000])
Test.assertSimilar(deadEnd(999), [3, 370])
Test.assertSimilar(deadEnd(38), [12, 174813842944])
Test.assertSimilar(deadEnd(93), [9, 217])
Test.assertSimilar(deadEnd(11615819), [74, 1354959139828966431926720346323206635520])
Test.assertSimilar(deadEnd(100000001), [15, 220258825732])


// Console output
Test Passed: Value == '[1, 1]'
Test Passed: Value == '[2, 1]'
Test Passed: Value == '[1, 1000]'
Test Passed: Value == '[3, 370]'
Test Passed: Value == '[12, 174813842944]'
Test Passed: Value == '[9, 217]'
Test Passed: Value == '[74, 1.3549591398289664e+39]'
Test Passed: Value == '[15, 220258825732]'


*/