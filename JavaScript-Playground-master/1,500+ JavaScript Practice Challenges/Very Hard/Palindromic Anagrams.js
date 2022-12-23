/*  

Palindromic Anagrams
Given a word, create a function which returns whether or not it's possible to create a palindrome by rearranging the letters in the word.

Examples
isPalindromePossible("rearcac") ➞ true
// You can make "racecar"

isPalindromePossible("suhbeusheff") ➞ true
// You can make "sfuehbheufs" (not a real word but still a palindrome)

isPalindromePossible("palindrome") ➞ false
// It's impossible


Notes
Trivially, words which are already palindromes return true.
Words are given in all lowercase.

*/




//#############################################################
//#                        MY SOLUTION    1                   #
//#############################################################


const isPalindromePossible = s => [...s]
    .sort().join ``.replace(/(.)\1/g, '').length < 2




//#############################################################
//#                        MY SOLUTION    2                   #
//#############################################################


function isPalindromePossible(str) {
    return [...str]
        .sort()
        .join("")
        .replace(/(.)\1/g, "")
        .length < 2
}




/*


// Tests
Test.assertEquals(isPalindromePossible("rearcac"), true)
Test.assertEquals(isPalindromePossible("suhbeusheff"), true)
Test.assertEquals(isPalindromePossible("palindrome"), false)
Test.assertEquals(isPalindromePossible("yagnx"), false)
Test.assertEquals(isPalindromePossible("zgzqxljjp"), false)
Test.assertEquals(isPalindromePossible("tgmqkpdhnhatoco"), false)
Test.assertEquals(isPalindromePossible("akyka"), true)
Test.assertEquals(isPalindromePossible("kjyyrftnbsbq"), false)
Test.assertEquals(isPalindromePossible("jynmynqhcy"), false)
Test.assertEquals(isPalindromePossible("hfe"), false)
Test.assertEquals(isPalindromePossible("noon"), true)
Test.assertEquals(isPalindromePossible("azmkallbanpu"), false)
Test.assertEquals(isPalindromePossible("drrede"), true)
Test.assertEquals(isPalindromePossible("xmhwcocldjdnqvv"), false)
Test.assertEquals(isPalindromePossible("reparpe"), true)
Test.assertEquals(isPalindromePossible("jnavz"), false)
Test.assertEquals(isPalindromePossible("orort"), true)
Test.assertEquals(isPalindromePossible("mel"), false)
Test.assertEquals(isPalindromePossible("jdxknf"), false)
Test.assertEquals(isPalindromePossible("qo"), false)
Test.assertEquals(isPalindromePossible("neett"), true)
Test.assertEquals(isPalindromePossible("wow"), true)
Test.assertEquals(isPalindromePossible("avkkiaapiusuapspiip"), true)
Test.assertEquals(isPalindromePossible("aann"), true)
Test.assertEquals(isPalindromePossible("iivcc"), true)
Test.assertEquals(isPalindromePossible("akyka"), true)
Test.assertEquals(isPalindromePossible("eelvl"), true)
Test.assertEquals(isPalindromePossible("damam"), true)
Test.assertEquals(isPalindromePossible("mmo"), true)
Test.assertEquals(isPalindromePossible("ge"), false)
Test.assertEquals(isPalindromePossible("arrad"), true)
Test.assertEquals(isPalindromePossible("bq"), false)
Test.assertEquals(isPalindromePossible("djufyllynldw"), false)
Test.assertEquals(isPalindromePossible("reparpe"), true)
Test.assertEquals(isPalindromePossible("ttraoor"), true)
Test.assertEquals(isPalindromePossible("orort"), true)
Test.assertEquals(isPalindromePossible("asgas"), true)
Test.assertEquals(isPalindromePossible("t"), true)
Test.assertEquals(isPalindromePossible("tstsa"), true)
Test.assertEquals(isPalindromePossible("neett"), true)
Test.assertEquals(isPalindromePossible("wndnwrkpkihup"), false)



// Console output
Test Passed: Value == true
Test Passed: Value == true
Test Passed: Value == false
Test Passed: Value == false
Test Passed: Value == false
Test Passed: Value == false
Test Passed: Value == true
Test Passed: Value == false
Test Passed: Value == false
Test Passed: Value == false
Test Passed: Value == true
Test Passed: Value == false
Test Passed: Value == true
Test Passed: Value == false
Test Passed: Value == true
Test Passed: Value == false
Test Passed: Value == true
Test Passed: Value == false
Test Passed: Value == false
Test Passed: Value == false
Test Passed: Value == true
Test Passed: Value == true
Test Passed: Value == true
Test Passed: Value == true
Test Passed: Value == true
Test Passed: Value == true
Test Passed: Value == true
Test Passed: Value == true
Test Passed: Value == true
Test Passed: Value == false
Test Passed: Value == true
Test Passed: Value == false
Test Passed: Value == false
Test Passed: Value == true
Test Passed: Value == true
Test Passed: Value == true
Test Passed: Value == true
Test Passed: Value == true
Test Passed: Value == true
Test Passed: Value == true
Test Passed: Value == false



*/