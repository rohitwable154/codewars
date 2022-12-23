/*  

Remove the Last Vowel
Write a function that removes the last vowel in each word in a sentence.

Examples
removeLastVowel("Those who dare to fail miserably can achieve greatly.")
➞ "Thos wh dar t fal miserbly cn achiev gretly."

removeLastVowel("Love is a serious mental disease.")
➞ "Lov s  serios mentl diseas"

removeLastVowel("Get busy living or get busy dying.")
➞ "Gt bsy livng r gt bsy dyng"


Notes
Vowels are: a, e, i, o, u (both upper and lowercase).

*/



//#############################################################
//#                        MY SOLUTION    1                   #
//#############################################################


const removeLastVowel = str =>
    str.replace(/([aeiou])([^aeiou]*)(\s|\.)/ig, "" + `$2` + `$3`)



//#############################################################
//#                        MY SOLUTION    2                   #
//#############################################################


function removeLastVowel(str) {
    let vowels = ["a", "e", "i", "o", "u"];
    str = str.split(' ').map(s => {
        for (var i = s.length; i >= 0; i--) {
            if (("aeiouAEIOU").indexOf(s[i]) !== -1) {
                return s.substring(0, i) + s.substring(i + 1);
            }
        }
    });
    return str.join(' ');
}



//#############################################################
//#                        MY SOLUTION    3                   #
//#############################################################


function removeLastVowel(val) {
    return val.split(" ").map(el => {
        const arr = el.split('');
        arr.splice(getLastVovelIndex(el), 1);
        return arr.join('');
    }).join(" ");
}

function getLastVovelIndex(val) {
    const vovels = ['a', 'e', 'i', 'o', 'u'];
    const indexes = [];
    vovels.forEach(el => {
        indexes.push(val.toLowerCase().lastIndexOf(el))
    })
    return Math.max(...indexes)
}