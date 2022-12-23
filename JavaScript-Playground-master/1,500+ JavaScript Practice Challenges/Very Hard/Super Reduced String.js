/*  

Super Reduced String
Steve has a string of lowercase characters in range ascii[["a".."z"]]. He wants to reduce the string to its shortest length by doing a series of operations. In each operation, he selects a pair of adjacent lowercase letters that match, and he deletes them. For instance, the string aab could be shortened to b in one operation.

Steve’s task is to delete as many characters as possible using this method and print the resulting string. If the final string is empty, return "Empty String".

Case
superReducedString("aaabccddd") ➞ "abd"
Explanation:

"aaabccddd" -> "abccddd" -> "abddd" -> "abd"


Examples
superReducedString("cccxllyyy") ➞ "cxy"

superReducedString("aa") ➞ "Empty String"

superReducedString("baab") ➞ "Empty String"

superReducedString("fghiiijkllmnnno") ➞ "fghijkmno"

superReducedString("chklssstt") ➞ "chkls"

*/




//#############################################################
//#                        MY SOLUTION                        #
//#############################################################


function superReducedString(str) {
    let output = str.split("");
    for (let i = 0; i < output.length; i++) {
        if (output[i] === output[i + 1]) {
            output.splice(i, 2);
            i = -1;
        }
    }
    return output.length === 0 ? "Empty String" : output.join("");
}




//#############################################################
//#                        MY SOLUTION                        #
//#############################################################


const superReducedString = str =>
    /(\w)\1/g.test(str) ? superReducedString(str.replace(/(\w)\1/g, '')) :
    str ? str : 'Empty String'





/*  

//Tests
Test.assertEquals(superReducedString("zzzhhnnttti"), "zti")
Test.assertEquals(superReducedString("nnncqwerhhhou"), "ncqwerhou")
Test.assertEquals(superReducedString("abbccddfghiaklmno"), "afghiaklmno")
Test.assertEquals(superReducedString("bccddb"), "Empty String")
Test.assertEquals(superReducedString(""), "Empty String")
Test.assertEquals(superReducedString("qqq"), "q")
Test.assertEquals(superReducedString("rthiioouusss"), "rths")
Test.assertEquals(superReducedString("acdqglrfkqyuqfjkxyqvnrtysfrzrmzlygfveulqfpdbhlqdqrrqdqlhbdpfqluevfgylzmrzrfsytrnvqyxkjfquyqkfrlacdqj"), "acdqgacdqj")


//Console Output
Test Passed: Value == 'zti'
Test Passed: Value == 'ncqwerhou'
Test Passed: Value == 'afghiaklmno'
Test Passed: Value == 'Empty String'
Test Passed: Value == 'Empty String'
Test Passed: Value == 'q'
Test Passed: Value == 'rths'
Test Passed: Value == 'acdqgacdqj'

*/