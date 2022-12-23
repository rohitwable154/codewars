/*  

Morse Alphabet
Given is a dict with the Morse alphabet, added a code for space between words. Write a function, which takes a string, either out of letters or out of Morse code from the hash. The function outputs an encrypted letter string of a decrypted Mmorse code.

Examples
morse("F Mueller") ➞ "..-. ..... -- ..- . .-.. .-.. . .-."

morse(".--- --- .... -. ..... ..-. ..... -.- . -. -. . -.. -.--") ➞ "JOHN F KENNEDY"

morse("Barack Obama") ➞ "-... .- .-. .- -.-. -.- ..... --- -... .- -- .-"


Notes
You can use capital or small letters, however Morse always returns capitals.
Use only letters and Morse codes from the hash.

*/




//#############################################################
//#                        MY SOLUTION                        #
//#############################################################



const d = {
    "A": ".-",
    "B": "-...",
    "C": "-.-.",
    "D": "-..",
    "E": ".",
    "F": "..-.",
    "G": "--.",
    "H": "....",
    "I": "..",
    "J": ".---",
    "K": "-.-",
    "L": ".-..",
    "M": "--",
    "N": "-.",
    "O": "---",
    "P": ".--.",
    "Q": "--.-",
    "R": ".-.",
    "S": "...",
    "T": "-",
    "U": "..-",
    "V": "...-",
    "W": ".--",
    "X": "-..-",
    "Y": "-.--",
    "Z": "--..",
    " ": "....."
};
const d2 = Object.fromEntries(Object.entries(d).map(([k, v]) => [v, k]));

const morse = str => {
    const encrypt = /\w/.test(str = str.toUpperCase());
    const div1 = encrypt ? '' : ' ';
    const div2 = encrypt ? ' ' : '';
    const fn = encrypt ? (w => w.replace(/./g, c => d[c])) : (c => d2[c]);
    return str.split(div1).map(fn).join(div2);
};



//#############################################################
//#                        MY SOLUTION                        #
//#############################################################


function morse(str) {
    const d = {
        "A": ".-",
        "B": "-...",
        "C": "-.-.",
        "D": "-..",
        "E": ".",
        "F": "..-.",
        "G": "--.",
        "H": "....",
        "I": "..",
        "J": ".---",
        "K": "-.-",
        "L": ".-..",
        "M": "--",
        "N": "-.",
        "O": "---",
        "P": ".--.",
        "Q": "--.-",
        "R": ".-.",
        "S": "...",
        "T": "-",
        "U": "..-",
        "V": "...-",
        "W": ".--",
        "X": "-..-",
        "Y": "-.--",
        "Z": "--..",
        " ": "....."
    };
    const toMorse = s => s.toUpperCase().split('').map(c => d[c]).join(' ');
    const fromMorse = s => s.split(' ').map(function(c) {
        for (let i in d) { if (d[i] === c) { return i; } }
    }).join('');
    if (/([A-Z])+/.test(str)) { return toMorse(str); }
    return fromMorse(str);


}




/*

// Tests
Test.assertEquals(morse("Barack Obama"), "-... .- .-. .- -.-. -.- ..... --- -... .- -- .-")
Test.assertEquals(morse("Bill Clinton"), "-... .. .-.. .-.. ..... -.-. .-.. .. -. - --- -.")
Test.assertEquals(morse("George Washington"), "--. . --- .-. --. . ..... .-- .- ... .... .. -. --. - --- -.")
Test.assertEquals(morse("Benjamin Franklin"), "-... . -. .--- .- -- .. -. ..... ..-. .-. .- -. -.- .-.. .. -.")
Test.assertEquals(morse("..-. .-. .. . -.. .-. .. -.-. .... ..... ... -.-. .... .. .-.. .-.. . .-."), "FRIEDRICH SCHILLER")
Test.assertEquals(morse(".--- --- .... .- -. -. ..... .-- --- .-.. ..-. --. .- -. --. ..... ...- --- -. ..... --. --- . - .... ."), "JOHANN WOLFGANG VON GOETHE")
Test.assertEquals(morse(".--. . - . .-. ..... .... .- -. -.. -.- ."), "PETER HANDKE")


// Console output
Test Passed: Value == '-... .- .-. .- -.-. -.- ..... --- -... .- -- .-'
Test Passed: Value == '-... .. .-.. .-.. ..... -.-. .-.. .. -. - --- -.'
Test Passed: Value == '--. . --- .-. --. . ..... .-- .- ... .... .. -. --. - --- -.'
Test Passed: Value == '-... . -. .--- .- -- .. -. ..... ..-. .-. .- -. -.- .-.. .. -.'
Test Passed: Value == 'FRIEDRICH SCHILLER'
Test Passed: Value == 'JOHANN WOLFGANG VON GOETHE'
Test Passed: Value == 'PETER HANDKE'

*/