/*  

Vowel Families
Write a function that selects all words that have all the same vowels (in any order and/or number) as the first word, including the first word.

Examples
sameVowelGroup(["toe", "ocelot", "maniac"]) ➞ ["toe", "ocelot"]

sameVowelGroup(["many", "carriage", "emit", "apricot", "animal"]) ➞ ["many"]

sameVowelGroup(["hoops", "chuff", "bot", "bottom"]) ➞ ["hoops", "bot", "bottom"]


Notes
Words will contain only lowercase letters, and may contain whitespaces.
Frequency does not matter (e.g. if the first word is "loopy", then you can include words with any number of o's, so long as they only contain o's, and not any other vowels).

*/




//#############################################################
//#                        MY SOLUTION                         #
//#############################################################


function sameVowelGroup(w) {
    let vow = [...w[0]].filter(val => ['a', 'e', 'i', 'o', 'u'].includes(val));
    return w.filter((val, i) => vow.every(ele => [...val].includes(ele)) && [...val].filter(ele => ['a', 'e', 'i', 'o', 'u'].filter(val => !vow.includes(val)).includes(ele)).length === 0);
}



//#############################################################
//#                        MY SOLUTION                        #
//#############################################################


function sameVowelGroup(w) {
    var keys = w[0].match(/[aouie]/gi).sort().join('') || [];
    return w.filter((word) => word.match(/[aouie]/gi).every((letter) => keys.indexOf(letter) != -1))
}






/*


// Tests
Test.assertSimilar(sameVowelGroup(["hoops", "chuff", "bot", "bottom"]), 
["hoops", "bot", "bottom"])
Test.assertSimilar(sameVowelGroup(["crop", "nomnom", "bolo", "yodeller"]), 
["crop", "nomnom", "bolo"])
Test.assertSimilar(sameVowelGroup(["semantic", "aimless", "beautiful", "meatless icecream"]), 
["semantic", "aimless", "meatless icecream"])
Test.assertSimilar(sameVowelGroup(["many", "carriage", "emit", "apricot", "animal"]), 
["many"])
Test.assertSimilar(sameVowelGroup(["toe", "ocelot", "maniac"]), ["toe", "ocelot"])
Test.assertSimilar(sameVowelGroup(["a", "apple", "flat", "map", "shark"]), ["a", "flat", "map", "shark"])
Test.assertSimilar(sameVowelGroup(["a", "aa", "ab", "abc", "aaac", "abe"]), ["a", "aa", "ab", "abc", "aaac"])



// Console output
Test Passed: Value == "['hoops', 'bot', 'bottom']"
Test Passed: Value == "['crop', 'nomnom', 'bolo']"
Test Passed: Value == "['semantic', 'aimless', 'meatless icecream']"
Test Passed: Value == "['many']"
Test Passed: Value == "['toe', 'ocelot']"
Test Passed: Value == "['a', 'flat', 'map', 'shark']"
Test Passed: Value == "['a', 'aa', 'ab', 'abc', 'aaac']"



*/