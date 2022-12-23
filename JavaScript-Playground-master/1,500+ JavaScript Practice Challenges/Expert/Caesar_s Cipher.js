/*

Caesar's Cipher
Julius Caesar protected his confidential information by encrypting it using a cipher. Caesar's cipher (check Resources tab for more info) shifts each letter by a number of letters. If the shift takes you past the end of the alphabet, just rotate back to the front of the alphabet. In the case of a rotation by 3, w, x, y and z would map to z, a, b and c.

Create a function that takes a string s (text to be encrypted) and an integer k (the rotation factor). It should return an encrypted string.

Examples
caesarCipher("middle-Outz", 2) ➞ "okffng-Qwvb"

// m -> o
// i -> k
// d -> f
// d -> f
// l -> n
// e -> g
// -    -
// O -> Q
// u -> w
// t -> v
// z -> b

caesarCipher("Always-Look-on-the-Bright-Side-of-Life", 5)
➞ "Fqbfdx-Qttp-ts-ymj-Gwnlmy-Xnij-tk-Qnkj"

caesarCipher("A friend in need is a friend indeed", 20)
➞ "U zlcyhx ch hyyx cm u zlcyhx chxyyx"


Notes
All test input will be a valid ASCII string.

*/



//#############################################################
//#    My SOLUTION 
//#############################################################


function caesarCipher(s, k) {
    return s.replace(/[a-z]/gi, m => {
        const c = m < "a" ? 65 : 97;
        return String.fromCharCode((m.charCodeAt(0) - c + k) % 26 + c)
    });
}




//#############################################################
//#  Alternative possible SOLUTION 
//#############################################################


function caesarCipher(s, k) {
    var ret = ""
    k = k % 26
    for (var i = 0; i < s.length; i++) {
        let orgCode = s.charCodeAt(i)
            //A-Z => 65 - 91
        if (orgCode >= 65 && orgCode <= 91) {
            orgCode += k
            if (orgCode > 91)
                orgCode -= 26
        }
        //a-z => 96 - 122
        else if (orgCode >= 96 && orgCode <= 122) {
            orgCode += k
            if (orgCode > 122)
                orgCode -= 26
        }
        ret += String.fromCharCode(orgCode);
    }
    return ret;
}





/*


// Tests
Test.assertEquals(caesarCipher("middle-Outz", 2), "okffng-Qwvb")
Test.assertEquals(caesarCipher("Always-Look-on-the-Bright-Side-of-Life", 5), "Fqbfdx-Qttp-ts-ymj-Gwnlmy-Xnij-tk-Qnkj")
Test.assertEquals(caesarCipher("A friend in need is a friend indeed", 20), "U zlcyhx ch hyyx cm u zlcyhx chxyyx")
Test.assertEquals(caesarCipher("A Fool and His Money Are Soon Parted.", 27), "B Gppm boe Ijt Npofz Bsf Tppo Qbsufe.")
Test.assertEquals(caesarCipher("One should not worry over things that have already happened and that cannot be changed.", 49), "Lkb pelria klq tloov lsbo qefkdp qexq exsb xiobxav exmmbkba xka qexq zxkklq yb zexkdba.")
Test.assertEquals(caesarCipher("Back to Square One is a popular saying that means a person has to start over, similar to: back to the drawing board.", 126), "Xwyg pk Omqwna Kja eo w lklqhwn owuejc pdwp iawjo w lanokj dwo pk opwnp kran, oeiehwn pk: xwyg pk pda znwsejc xkwnz.")



//Console Output
Test Passed: Value == 'okffng-Qwvb'
Test Passed: Value == 'Fqbfdx-Qttp-ts-ymj-Gwnlmy-Xnij-tk-Qnkj'
Test Passed: Value == 'U zlcyhx ch hyyx cm u zlcyhx chxyyx'
Test Passed: Value == 'B Gppm boe Ijt Npofz Bsf Tppo Qbsufe.'
Test Passed: Value == 'Lkb pelria klq tloov lsbo qefkdp qexq exsb xiobxav exmmbkba xka qexq zxkklq yb zexkdba.'
Test Passed: Value == 'Xwyg pk Omqwna Kja eo w lklqhwn owuejc pdwp iawjo w lanokj dwo pk opwnp kran, oeiehwn pk: xwyg pk pda znwsejc xkwnz.'



*/