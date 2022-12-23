/*

Syllabification
The syllabic structure of the Persian language is CV(C)(C). C stands for Consonants and V stands for Vowels. The CV(C)(C) means that there are three types of syllables in Persian:

CV
CVC
CVCC
Write a function that takes the phonetic transcription of a Persian word as an argument and returns the syllabified word based on the syllabic structure. In other words, put a period between syllables.

Examples
syllabification("kAr") ➞ "kAr"

syllabification("bArAn") ➞ "bA.rAn"

syllabification("tA") ➞ "tA"

syllabification("deraxt") ➞ "de.raxt"

syllabification("pust") ➞ "pust"

syllabification("lAjevard") ➞ "lA.je.vard"


Notes
Mono-syllabic words don't need syllabification.
Persian has six vowels: a, A, e, i, o, u
Persian has 23 consonants: p, b, t, d, k, g, G, ?, f, v, s, z, S, Z, x, h, c, j, m, n, r, l, y
Try to solve the problem by using RegEx.


Hint
Since each syllable has only one vowel, it's not necessary to know the consonants. Just knowing that there is only one consonant before the vowel and 0 to 2 consonants after the vowel is enough to solve the challenge.

*/






//#############################################################
//#    My SOLUTION 
//#############################################################


function syllabification(word) {
    const syllables = [...word]
        .reverse()
        .join('')
        .match(/([^Aaeiou]{1,2}[Aaeiou][^Aaeiou])|([Aaeiou][^Aaeiou])/g);
    return syllables
        .join('.')
        .split('')
        .reverse()
        .join('');
}




//#############################################################
//#  Alternative possible SOLUTION 
//#############################################################


const syllabification = (word) =>
    (word.match(/([^auioe][auioe]([^auioe]*(?![auioe])))/gi) || []).join('.');





/*


Test.assertEquals(syllabification("kAr"), "kAr", "example #1")
Test.assertEquals(syllabification("bArAn"), "bA.rAn", "example #2")
Test.assertEquals(syllabification("tA"), "tA", "example #3")
Test.assertEquals(syllabification("deraxt"), "de.raxt", "example #4")
Test.assertEquals(syllabification("pust"), "pust", "example #5")
Test.assertEquals(syllabification("lAjevard"), "lA.je.vard", "example #6")
Test.assertEquals(syllabification("barAbar"), "ba.rA.bar")
Test.assertEquals(syllabification("panjare"), "pan.ja.re")
Test.assertEquals(syllabification("?eZdehA"), "?eZ.de.hA")
Test.assertEquals(syllabification("?Aheste"), "?A.hes.te")


Test Passed: Value == 'kAr'
Test Passed: Value == 'bA.rAn'
Test Passed: Value == 'tA'
Test Passed: Value == 'de.raxt'
Test Passed: Value == 'pust'
Test Passed: Value == 'lA.je.vard'
Test Passed: Value == 'ba.rA.bar'
Test Passed: Value == 'pan.ja.re'
Test Passed: Value == '?eZ.de.hA'
Test Passed: Value == '?A.hes.te'


*/