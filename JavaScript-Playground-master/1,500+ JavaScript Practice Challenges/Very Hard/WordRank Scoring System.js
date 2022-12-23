/*  
WordRank Scoring System
Create a function that takes a string of words and returns the highest scoring word. Each letter of a word scores points according to it's position in the alphabet: a = 1, b = 2, c = 3, etc.

Examples
wordRank("The quick brown fox.") ➞ "brown"

wordRank("Nancy is very pretty.") ➞ "pretty"

wordRank("Check back tomorrow, man!") ➞ "tomorrow"

wordRank("Wednesday is hump day.") ➞ "Wednesday"


Notes
If two words score the same, return the word that appears first in the original string.
The returned string should only contain alphabetic characters (a-z).
Preserve case in the returned string (see 4th example above).

*/




//#############################################################
//#                        MY SOLUTION    1                   #
//#############################################################


const wordRank = str => {
    const words = str.split(/\W+/);
    const ranks = words.map(word =>
        word
        .toLowerCase()
        .split('')
        .reduce(
            (rank, char) => rank + char.charCodeAt(0) - 'a'.charCodeAt(0) + 1,
            0
        )
    );
    const max = Math.max(...ranks);

    return words[ranks.indexOf(max)];
};





//#############################################################
//#                        MY SOLUTION    2                   #
//#############################################################


const wordRank = s => {
    s = s.split(' ')
        .map(x => x.replace(/[^a-z]/gi, ''))
        .map(x => [
            [...x].reduce((y, z) => y + z.toLowerCase().charCodeAt(0) - 96, 0), x
        ])
        .sort((a, b) => b[0] - a[0])
    return s[0][1]
}



/*


// Tests
Test.assertEquals(wordRank("If the Easter Bunny and the Tooth Fairy had babies would they take your teeth and leave chocolate for you?"), "chocolate");
Test.assertEquals(wordRank("The memory we used to share is no longer coherent."), "memory");
Test.assertEquals(wordRank("He didn’t want to go to the dentist, yet he went anyway."), "dentist");
Test.assertEquals(wordRank("What was the person thinking when they discovered cow’s milk was fine for human consumption... and why did they do it in the first place!?"), "consumption");
Test.assertEquals(wordRank("Mary plays the piano."), "plays");
Test.assertEquals(wordRank("I hear that Nancy is very pretty."), "pretty");
Test.assertEquals(wordRank("If you like tuna and tomato sauce- try combining the two. It’s really not as bad as it sounds."), "sounds");
Test.assertEquals(wordRank("She works two jobs to make ends meet; at least, that was her reason for not having time to join us."), "works");
Test.assertEquals(wordRank("Wednesday is hump day, but has anyone asked the camel if he’s happy about it?"), "Wednesday");
Test.assertEquals(wordRank("The body may perhaps compensates for the loss of a true metaphysics."), "metaphysics");
Test.assertEquals(wordRank("The clock within this blog and the clock on my laptop are 1 hour different from each other."), "different");
Test.assertEquals(wordRank("Check back tomorrow; I will see if the book has arrived."), "tomorrow");



// Console output
Test Passed: Value == 'chocolate'
Test Passed: Value == 'memory'
Test Passed: Value == 'dentist'
Test Passed: Value == 'consumption'
Test Passed: Value == 'plays'
Test Passed: Value == 'pretty'
Test Passed: Value == 'sounds'
Test Passed: Value == 'works'
Test Passed: Value == 'Wednesday'
Test Passed: Value == 'metaphysics'
Test Passed: Value == 'different'
Test Passed: Value == 'tomorrow'



*/