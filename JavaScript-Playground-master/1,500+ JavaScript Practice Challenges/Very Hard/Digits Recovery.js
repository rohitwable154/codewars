/*  

Digits Recovery
Shuffled a given string of letters by mistake. Some letters in the input string are representing a digit (from zero to nine). Help him to recover all the digits.

Only consecutive letters can be used. "OTNE" cannot be recovered to 1.
Every letter has to start with an increasing index. "ONENO" results to 11, because E can be used two times.
You can ignore all letters in the string if they don't end-up in a digit.
If no digits can be found, return "No digits found"
Take care about the order! "ENOWT" will be recovered to 12 and not to 21.
The input string consists only UpperCase letters.


Examples
digitsRecovery("NEO") ➞ "1"

digitsRecovery("ONETWO") ➞ "12"

digitsRecovery("ZYX") ➞ "No digits found"

digitsRecovery("NEOTWONEINEIGHTOWSVEEN") ➞ "12219827"

*/




//#############################################################
//#                        MY SOLUTION                        #
//#############################################################


const D = ["EORZ", "ENO", "OTW", "EEHRT", "FORU", "EFIV", "ISX", "EENSV", "EGHIT", "EINN"];

function digitsRecovery(s) {
    let res = "";
    for (let i = 0; i < s.length - 2; i++) {
        const a = [3, 4, 5].map(j => [...s.substr(i, j)].sort().join(""));
        for (let j = 0; j < 10; j++) {
            if (a.includes(D[j])) {
                res += j;
                break;
            }
        }
    }
    return res || "No digits found";
}





/*  

//Tests
Test.assertEquals(digitsRecovery("NEO"), "1")
Test.assertEquals(digitsRecovery("ONETWO"), "12")
Test.assertEquals(digitsRecovery("TWWTONE"), "21")
Test.assertEquals(digitsRecovery("OTNE"), "No digits found")
Test.assertEquals(digitsRecovery("ZYX"), "No digits found")
Test.assertEquals(digitsRecovery("ONENO"), "11")
Test.assertEquals(digitsRecovery("ZERO"), "0")
Test.assertEquals(digitsRecovery("NEOTWONEINEIGHTOWSVEEN"), "12219827")
Test.assertEquals(digitsRecovery("FOURSEVENTHREENINETWOIOSNSIXNNEIGHTFIVEONEJFTHREE"), "4739926985113")


//Console Output
Test Passed: Value == '1'
Test Passed: Value == '12'
Test Passed: Value == '21'
Test Passed: Value == 'No digits found'
Test Passed: Value == 'No digits found'
Test Passed: Value == '11'
Test Passed: Value == '0'
Test Passed: Value == '12219827'
Test Passed: Value == '4739926985113'


*/