/*  
 *  
A Periodic Series
This challenge involves a series that can start with any string of digits. The next term in the series is found by adding the digits of the previous term, appending that sum to the previous term, and then truncating the leftmost digits so that the number of digits in the terms is always the same.

Let's start with "1234". The sum of the digits is 10. Appending gives us "123410", then truncating the left two digits results in "3410". The next three terms are "4108", "0813", "1312". The series becomes periodic when a term that previously appeared occurs again.

Example:

"124", "247", "713", "311", "115", "157", "713", "311" ...
This series becomes periodic at a length of 6 before "713" reappears.

Create a function whose argument is a digit string (the first term) and returns the length of the series when it first becomes periodic.

Examples
periodic("1") ➞ 1

periodic("3061") ➞ 7

periodic("02468") ➞ 178

periodic("314159265") ➞ 12210

*/






//#############################################################
//#                        MY SOLUTION                        #
//#############################################################


function periodic(n) {
    let seq = [], len = n.length, k = 0;
    while (!seq.includes(n)) {
        k++;
        seq.push(n);
        n = (n + [...n].reduce((a, c) => a + +c, 0)).slice(-len);
    }
    return k;
}





//#############################################################
//#                        MY SOLUTION                        #
//#############################################################


function periodic(n) {
    const add = v => String(v + v.split('').reduce((t, c) => t + Number(c), 0))
    let result = []
    while (!result.includes(n)) {
        result.push(n)
        n = add(n).slice(-n.length)
    }
    return result.length
}








/*


// Tests
Test.assertEquals(periodic("2"), 1)
Test.assertEquals(periodic("22"), 13)
Test.assertEquals(periodic("157"), 4)
Test.assertEquals(periodic("1234567"), 943)
Test.assertEquals(periodic("1818"), 1)
Test.assertEquals(periodic("0000001"), 778)


// Console output
Test Passed: Value == 1
Test Passed: Value == 13
Test Passed: Value == 4
Test Passed: Value == 943
Test Passed: Value == 1
Test Passed: Value == 778



*/