/*  

Underscore-Hash Staircase

Create a function that will build a staircase using the underscore _ and hash # symbols. A positive value denotes the staircase's upward direction and downwards for a negative value.

Examples
staircase(3) ➞ "__#\n_##\n###"
__#
_##
###

staircase(7) ➞ "______#\n_____##\n____###\n___####\n__#####\n_######\n#######"
______#
_____##
____###
___####
__#####
_######
#######

staircase(2) ➞ "_#\n##"
_#
##

staircase(-8) ➞ "########\n_#######\n__######\n___#####\n____####\n_____###\n______##\n_______#"
########
_#######
__######
___#####
____####
_____###
______##
_______#


Notes

All inputs are either positive or negative values.
The string to be returned is adjoined with the newline character (\n).
A recursive version of this challenge can be found here.

*/






//#############################################################
//#                        MY SOLUTION    1                   #
//#############################################################


function staircase(n) {
    let arr = [...Array(Math.abs(n)).keys()].map((_, i) => "_".repeat(Math.abs(n) - i - 1) + "#".repeat(i + 1))

    return (n > 0 ? arr : arr.reverse()).join("\n")
}





//#############################################################
//#                        MY SOLUTION    2                   #
//#############################################################


function staircase(n) {
    const num = Math.abs(n);
    const arr = [...Array(num)];
    return n < 0 ?
        arr.map((_, i) => `${"_".repeat(i)}${"#".repeat(num - i)}`).join("\n") :
        arr
        .map((_, i) => `${"_".repeat(num - (i + 1))}${"#".repeat(i + 1)}`)
        .join("\n");
}




//#############################################################
//#                        MY SOLUTION    3                   #
//#############################################################



const staircase = s => (d = s < 0, s = Math.abs(s), Array(s).fill(1).map((rw, i) => '_'.repeat(d ? i : s - i - 1) + (d ? '#'.repeat(s - i) : '#'.repeat(i + 1))).join('\n'))







//########################################################################


/*  

//Tests
Test.assertEquals(staircase(3), "__#\n_##\n###")
Test.assertEquals(staircase(7), "______#\n_____##\n____###\n___####\n__#####\n_######\n#######")
Test.assertEquals(staircase(2), "_#\n##")
Test.assertEquals(staircase(-8), "########\n_#######\n__######\n___#####\n____####\n_____###\n______##\n_______#")
Test.assertEquals(staircase(4), "___#\n__##\n_###\n####")
Test.assertEquals(staircase(-12), "############\n_###########\n__##########\n___#########\n____########\n_____#######\n______######\n_______#####\n________####\n_________###\n__________##\n___________#")
Test.assertEquals(staircase(11), "__________#\n_________##\n________###\n_______####\n______#####\n_____######\n____#######\n___########\n__#########\n_##########\n###########")
Test.assertEquals(staircase(-6), "######\n_#####\n__####\n___###\n____##\n_____#")



//Console Output
Test Passed: Value == '__#\n_##\n###'
Test Passed: Value == '______#\n_____##\n____###\n___####\n__#####\n_######\n#######'
Test Passed: Value == '_#\n##'
Test Passed: Value == '########\n_#######\n__######\n___#####\n____####\n_____###\n______##\n_______#'
Test Passed: Value == '___#\n__##\n_###\n####'
Test Passed: Value == '############\n' +
  '_###########\n' +
  '__##########\n' +
  '___#########\n' +
  '____########\n' +
  '_____#######\n' +
  '______######\n' +
  '_______#####\n' +
  '________####\n' +
  '_________###\n' +
  '__________##\n' +
  '___________#'
Test Passed: Value == '__________#\n' +
  '_________##\n' +
  '________###\n' +
  '_______####\n' +
  '______#####\n' +
  '_____######\n' +
  '____#######\n' +
  '___########\n' +
  '__#########\n' +
  '_##########\n' +
  '###########'
Test Passed: Value == '######\n_#####\n__####\n___###\n____##\n_____#'


*/