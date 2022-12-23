/*

Secret Agent Password
Mubashir is going on a secret mission. He needs your help but you have to learn how to encode a secret password to communicate safely with other agents. Create a function that takes an argument message and returns the encoded password.

There are some variations on the rules of encipherment. One version of the cipher rules are outlined below:

secretPassword("mubashirh") ➞ "hsajsi13u2"
Step 1: Message length should be of nine characters containing only lowercase letters from 'a' to 'z'. If the argument doesn't meet this requirement you must return "BANG! BANG! BANG!" (Remember, there are no second chances in the spy world!)

Step 2: Divide the string into three equal parts of three characters each:

1 - mub
2 - ash
3 - irh
Step 3: Convert the first and third letter to the corresponding number, according to the English alphabets (ex. a = 1, b = 2, c = 3 ... z = 26, etc).

mub = 13u2
Step 4: Reverse the fourth, fifth, and sixth letters:

ash = hsa
Step 5: Replace seventh, eighth, and ninth letter with next letter (z will be substituted with a).

irh = jsi
Step 6: Return the string in the following order: "Part_2+Part_3+Part_1"

"hsajsi13u2"
See the below examples for a better understanding:

Examples
secretPassword("mubashirh") ➞ "hsajsi13u2"

secretPassword("mattedabi") ➞ "detbcj13a20"

secretPassword("HeLen-eda") ➞ "BANG! BANG! BANG!"
// Length is not equal to 9
// Contains characters other than lower alphabets


*/






//#############################################################
//#    My SOLUTION 
//#############################################################


function secretPassword(msg) {
    if (msg.length != 9) return "BANG! BANG! BANG!";
    for (var i = 0; i < 9; i++) {
        var t = msg.charCodeAt(i);
        if (t < 96 || t > 122) return "BANG! BANG! BANG!";
    }
    var s1 = (msg.charCodeAt(0) - 96).toString() + msg[1] +
        (msg.charCodeAt(2) - 96).toString();
    var s2 = "";
    var s3 = "";
    for (var i = 0; i < 3; i++) {
        s2 += msg.substr(5 - i, 1);
        s3 += String.fromCharCode((msg.charCodeAt(6 + i) - 97 + 1) % 26 + 97);
    }
    return s2 + s3 + s1;
}




//#############################################################
//#  Alternative possible SOLUTION 
//#############################################################


function secretPassword(input) {

    let returnString = ""
    let dictionary = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
    if (input.length != 9) {
        returnString = "BANG! BANG! BANG!"
    } else {
        for (let i of input) {
            if (!dictionary.includes(i)) {
                returnString = "BANG! BANG! BANG!"
            }
        }
        if (returnString != "BANG! BANG! BANG!") {
            let chunks = input.match(/.{1,3}/g)
            chunks[0] = (dictionary.indexOf(chunks[0][0]) + 1) + chunks[0][1] + (dictionary.indexOf(chunks[0][2]) + 1)

            chunks[1] = chunks[1].split("").reverse().join("")

            let tempString = "";
            for (let letter of chunks[2]) {
                tempString += dictionary[(dictionary.indexOf(letter) + 1) % 26]
            }
            chunks[2] = tempString
            returnString = chunks[1] + chunks[2] + chunks[0]
        }
    }

    return returnString
}


/*

Test.assertEquals(secretPassword("mubashirh"), "hsajsi13u2")
Test.assertEquals(secretPassword("mattedabi"), "detbcj13a20")
Test.assertEquals(secretPassword("HeLen-eda"), "BANG! BANG! BANG!")
Test.assertEquals(secretPassword("pakistani"), "tsiboj16a11")
Test.assertEquals(secretPassword("airforce1"), "BANG! BANG! BANG!")
Test.assertEquals(secretPassword("airforces"), "rofdft1i18")
Test.assertEquals(secretPassword("Airforcee"), "BANG! BANG! BANG!")
Test.assertEquals(secretPassword("pilotmuba"), "mtovcb16i12")
Test.assertEquals(secretPassword("a_rforcee"), "BANG! BANG! BANG!")
Test.assertEquals(secretPassword("iloveherh"), "hevfsi9l15")
Test.assertEquals(secretPassword("airforcess"), "BANG! BANG! BANG!")
Test.assertEquals(secretPassword("edabit"), "BANG! BANG! BANG!")


Test Passed: Value == 'hsajsi13u2'
Test Passed: Value == 'detbcj13a20'
Test Passed: Value == 'BANG! BANG! BANG!'
Test Passed: Value == 'tsiboj16a11'
Test Passed: Value == 'BANG! BANG! BANG!'
Test Passed: Value == 'rofdft1i18'
Test Passed: Value == 'BANG! BANG! BANG!'
Test Passed: Value == 'mtovcb16i12'
Test Passed: Value == 'BANG! BANG! BANG!'
Test Passed: Value == 'hevfsi9l15'
Test Passed: Value == 'BANG! BANG! BANG!'
Test Passed: Value == 'BANG! BANG! BANG!'

*/