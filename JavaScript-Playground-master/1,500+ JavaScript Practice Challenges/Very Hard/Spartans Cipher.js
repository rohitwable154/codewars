/*  

Spartans Cipher
In Spartans Cipher, encoding is done by writing the text horizontally, across the strap in the plaintext word of a message. In ancient times, Spartans and Greeks invented an interesting way of encryption called Scytale.

The ancient Greeks, and the Spartans in particular, are said to have used this cipher to communicate during military campaigns.

Create a function that takes two arguments, a number of slides nSlide and a string message, and returns the encoded message.

There are some variations on the rules of encipherment. One version of the cipher rules are outlined below:

message = "Mubashir Scytale Code"
nSlide = 6

spartansCipher(message, nSlide) ➞ "Ms t euhSaC biclo aryed"



Step 1: Imagine this Scytale:



Step 2: You can write the given message on a 6 slide Scytale like this:

| M | u | b | a |
| s | h | i | r |
|   | S | c | y |
| t | a | l | e |
|   | C | o | d |
| e |   |   |   |
Step 3: Encode the message column-wise:

"Ms t euhSaC biclo aryed "
Step 4: Trim all spaces at the end and return the final encoded message:

"Ms t euhSaC biclo aryed"
See the below examples for a better understanding:

Examples
spartansCipher("Mubashir Scytale Code", 6) ➞ "Ms t euhSaC biclo aryed"

spartansCipher("Matt and Edabit are amazing", 8) ➞ "M  baai aaEirmn tndteag tda  z"

spartansCipher("", 99) ➞ ""


*/






//#############################################################
//#                        MY SOLUTION                        #
//#############################################################


const spartansCipher = (m, n) => (c = Math.ceil(m.length / n), a = Array(c).fill(''), [...m].forEach((l, i) => (a[i % c] += l || ' ')), a.map(p => p.padEnd(n)).join ``.trim())





//#############################################################
//#                        MY SOLUTION                        #
//#############################################################


function chunck(a, n) {
    var arrays = []
    while (a.length > 0) arrays.push(a.splice(0, n))
    return arrays
}

function spartansCipher(message, nSlide) {
    const makeTranspose = arr => arr[0].map((x, i) => arr.map(x => x[i]))
    return message == '' ? '' : makeTranspose(chunck([...(message + ' '.repeat(Math.ceil(message.length / nSlide) * nSlide - message.length))], Math.ceil(message.length / nSlide))).flat().join('').trim()
}






/*


// Tests
Test.assertEquals(spartansCipher("Mubashir Scytale Code", 6), "Ms t euhSaC biclo aryed")
Test.assertEquals(spartansCipher("Matt and Edabit are amazing", 8), "M  baai aaEirmn tndteag tda  z")
Test.assertEquals(spartansCipher("Evgeny SH will make decipher of this challenge", 8), "E lepf evSl h cngH dethge merhaenwac il yikiosl")
Test.assertEquals(spartansCipher("HELPMEIAMUNDERATTACK", 4), "HENTEIDTLAEAPMRCMUAK")
Test.assertEquals(spartansCipher("", 99), "")
Test.assertEquals(spartansCipher("TheQuickBrownFoxJumpsOverTheLazyDog.", 6), "TcnmrzhkFpTyeBoshDQrxOeouoJvLgiwuea.")



// Console output
Test Passed: Value == 'Ms t euhSaC biclo aryed'
Test Passed: Value == 'M  baai aaEirmn tndteag tda  z'
Test Passed: Value == 'E lepf evSl h cngH dethge merhaenwac il yikiosl'
Test Passed: Value == 'HENTEIDTLAEAPMRCMUAK'
Test Passed: Value == ''
Test Passed: Value == 'TcnmrzhkFpTyeBoshDQrxOeouoJvLgiwuea.'



*/