/*

Distance to Nearest Vowel
Write a function that takes in a string and for each character, returns the distance to the nearest vowel in the string. If the character is a vowel itself, return 0.

Examples
distanceToNearestVowel("aaaaa") ➞ [0, 0, 0, 0, 0]

distanceToNearestVowel("babbb") ➞ [1, 0, 1, 2, 3]

distanceToNearestVowel("abcdabcd") ➞ [0, 1, 2, 1, 0, 1, 2, 3]

distanceToNearestVowel("shopper") ➞ [2, 1, 0, 1, 1, 0, 1]


Notes
All input strings will contain at least one vowel.
Strings will be lowercased.
Vowels are: a, e, i, o, u.

*/



//#############################################################
//#    My SOLUTION                                            #  
//#############################################################


function distanceToNearestVowel(str) {
    let vowels = [...str].map((v, i) => /[aeiou]/.test(v) ? i : -1).filter(v => v >= 0);
    return [...str].map((_, i) => Math.min(...vowels.map(v => Math.abs(i - v))));
}



//#############################################################
//#  Alternative possible SOLUTION                            #  
//#############################################################



distanceToNearestVowel = s => [...s].map((l, li) => Math.min(...[...s].map((v, vi) => Math.abs(/[aeiou]/.test(v) ? vi - li : s.length))))


//map over letters, for each letter run a new map that tests if the letter is a vowel or not, if so we want the distance so run vowel index - letter index
//if the letter isn't a vowel we give the array length so it will never get through the Math.min test. Then we run Math.abs to get the absolute number for 
//distance and then the Math.min to get the shortest distance for each.





/*


Test.assertSimilar(distanceToNearestVowel("aaaaa"), [0, 0, 0, 0, 0])
Test.assertSimilar(distanceToNearestVowel("bba"), [2, 1, 0])
Test.assertSimilar(distanceToNearestVowel("abbb"), [0, 1, 2, 3])
Test.assertSimilar(distanceToNearestVowel("abab"), [0, 1, 0, 1])
Test.assertSimilar(distanceToNearestVowel("babbb"), [1, 0, 1, 2, 3])
Test.assertSimilar(distanceToNearestVowel("baaab"), [1, 0, 0, 0, 1])
Test.assertSimilar(distanceToNearestVowel("abcdabcd"), [0, 1, 2, 1, 0, 1, 2, 3])
Test.assertSimilar(distanceToNearestVowel("abbaaaaba"), [0, 1, 1, 0, 0, 0, 0, 1, 0])
Test.assertSimilar(distanceToNearestVowel("treesandflowers"), [2, 1, 0, 0, 1, 0, 1, 2, 2, 1, 0, 1, 0, 1, 2])
Test.assertSimilar(distanceToNearestVowel("pokerface"), [1, 0, 1, 0, 1, 1, 0, 1, 0])
Test.assertSimilar(distanceToNearestVowel("beautiful"), [1, 0, 0, 0, 1, 0, 1, 0, 1])
Test.assertSimilar(distanceToNearestVowel("rythmandblues"), [5, 4, 3, 2, 1, 0, 1, 2, 2, 1, 0, 0, 1])
Test.assertSimilar(distanceToNearestVowel("shopper"), [2, 1, 0, 1, 1, 0, 1])
Test.assertSimilar(distanceToNearestVowel("singingintherain"), [1, 0, 1, 1, 0, 1, 1, 0, 1, 2, 1, 0, 1, 0, 0, 1])
Test.assertSimilar(distanceToNearestVowel("sugarandspice"), [1, 0, 1, 0, 1, 0, 1, 2, 2, 1, 0, 1, 0])
Test.assertSimilar(distanceToNearestVowel("totally"), [1, 0, 1, 0, 1, 2, 3])



Test Passed: Value == '[0, 0, 0, 0, 0]'
Test Passed: Value == '[2, 1, 0]'
Test Passed: Value == '[0, 1, 2, 3]'
Test Passed: Value == '[0, 1, 0, 1]'
Test Passed: Value == '[1, 0, 1, 2, 3]'
Test Passed: Value == '[1, 0, 0, 0, 1]'
Test Passed: Value == '[0, 1, 2, 1, 0, 1, 2, 3]'
Test Passed: Value == '[0, 1, 1, 0, 0, 0, 0, 1, 0]'
Test Passed: Value == '[2, 1, 0, 0, 1, 0, 1, 2, 2, 1, 0, 1, 0, 1, 2]'
Test Passed: Value == '[1, 0, 1, 0, 1, 1, 0, 1, 0]'
Test Passed: Value == '[1, 0, 0, 0, 1, 0, 1, 0, 1]'
Test Passed: Value == '[5, 4, 3, 2, 1, 0, 1, 2, 2, 1, 0, 0, 1]'
Test Passed: Value == '[2, 1, 0, 1, 1, 0, 1]'
Test Passed: Value == '[1, 0, 1, 1, 0, 1, 1, 0, 1, 2, 1, 0, 1, 0, 0, 1]'
Test Passed: Value == '[1, 0, 1, 0, 1, 0, 1, 2, 2, 1, 0, 1, 0]'
Test Passed: Value == '[1, 0, 1, 0, 1, 2, 3]'



*/