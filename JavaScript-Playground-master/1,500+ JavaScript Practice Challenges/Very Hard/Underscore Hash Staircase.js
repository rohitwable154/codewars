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


const staircase = n => {
        const positive = Math.abs(n);
        const arr = Array.from({ length: positive },
                (_, i) => `${`_`.repeat(positive - i - 1)}${`#`.repeat(i + 1)}`,
    );
  
    return (n < 0 ? arr.reverse() : arr).join('\n');
  };





//#############################################################
//#                        MY SOLUTION    2                   #
//#############################################################


function staircase(n) {
    const num = Math.abs(n);
    const arr = [...Array(num)];
    return n < 0
      ? arr.map((_, i) => `${"_".repeat(i)}${"#".repeat(num - i)}`).join("\n")
      : arr
          .map((_, i) => `${"_".repeat(num - (i + 1))}${"#".repeat(i + 1)}`)
          .join("\n");
  }




//#############################################################
//#                        MY SOLUTION    3                   #
//#############################################################


function staircase(n) {
	if (n == 1 || n == -1) return "#";
	var s = "";
	for (var i = 0; i < Math.abs(n); i++) s += "#";
	var a = "";
	if (n > 0) a = staircase(n-1);
	else a = staircase(n+1);
	var v = a.split("\n");
	var s1 = "_"+v[0];
	for(var i = 1; i < v.length; i++) s1 += "\n" + "_"+v[i];
	if (n > 0) return s1 +"\n" + s;
	else return s + "\n" + s1;
}