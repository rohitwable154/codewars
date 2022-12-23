/*

Phone Letter Combinations

Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent. A mapping of digit to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.

Alternative Text

Examples
letter_combinations("23") ➞ ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"]

letter_combinations("532") ➞ ["jda", "jdb", "jdc", "jea", "jeb", "jec", "jfa", "jfb", "jfc", "kda", "kdb", "kdc", "kea", "keb", "kec", "kfa", "kfb", "kfc", "lda", "ldb", "ldc", "lea", "leb", "lec", "lfa", "lfb", "lfc"]

*/





//#############################################################
//#    SOLUTION 1
//#############################################################


const letterCombinations = D => [...D].reduce((R, d) => R.flatMap(e => [
    ...
    ',,abc,def,ghi,jkl,mno,pqrs,tuv,wxyz'.split `,` [d]
].map(a => e + a)), [''])




//#############################################################
//#    SOLUTION 2
//#############################################################


function letterCombinations(digits) {
    let possibleLetters = {
        '2': 'abc',
        '3': 'def',
        '4': 'ghi',
        '5': 'jkl',
        '6': 'mno',
        '7': 'pqrs',
        '8': 'tuv',
        '9': 'wxyz'
    }
    let lettersForCombination = [];
    let result = [];
    digits.split('').map(digit => lettersForCombination.push(possibleLetters[digit]));
    for (let charIndex1 = 0; charIndex1 < lettersForCombination[0].length; charIndex1++) {
        for (let charIndex2 = 0; charIndex2 < lettersForCombination[1].length; charIndex2++) {
            if (digits.length <= 2) {
                result.push(lettersForCombination[0][charIndex1] + lettersForCombination[1][charIndex2]);
            } else {
                for (let charIndex3 = 0; charIndex3 < lettersForCombination[2].length; charIndex3++) {
                    result.push(lettersForCombination[0][charIndex1] + lettersForCombination[1][charIndex2] + lettersForCombination[2][charIndex3]);
                }
            }
        }
    }
    return result;
}




//#############################################################
//#    SOLUTION 3
//#############################################################


const letterCombinations = digits => [
    [...digits].map(Number).map(i => ",,abc,def,ghi,jkl,mno,pqrs,tuv,wxyz".split(",")[i])
].flatMap(g = m => m.length ? [...m[0]].flatMap(x => m.length > 1 ? g(m.slice(1)).map(y => x.concat(y)) : x) : m);




//#############################################################
//#    SOLUTION 4
//#############################################################


function letterCombinations(digits) {

    map = [
        [],
        [],
        ["a", "b", "c"],
        ["d", "e", "f"],
        ["g", "h", "i"],
        ["j", "k", "l"],
        ["m", "n", "o"],
        ["p", "q", "r", "s"],
        ["t", "u", "v"],
        ["w", "x", "y", "z"]
    ]

    if (digits.length == 1) {
        return map[Number(digits)]
    }
    otherCombs = letterCombinations(digits.substring(1))
    totalCombs = []
    for (i = 0; i < map[Number(digits[0])].length; i++) {
        for (j = 0; j < otherCombs.length; j++) {
            totalCombs.push(map[Number(digits[0])][i] + otherCombs[j])
        }
    }
    return totalCombs
}


/*


Test.assertSimilar(letterCombinations("23"), ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"], "")
Test.assertSimilar(letterCombinations("532"), ["jda", "jdb", "jdc", "jea", "jeb", "jec", "jfa", "jfb", "jfc", "kda", "kdb", "kdc", "kea", "keb", "kec", "kfa", "kfb", "kfc", "lda", "ldb", "ldc", "lea", "leb", "lec", "lfa", "lfb", "lfc"], "")
Test.assertSimilar(letterCombinations("943"), ["wgd", "wge", "wgf", "whd", "whe", "whf", "wid", "wie", "wif", "xgd", "xge", "xgf", "xhd", "xhe", "xhf", "xid", "xie", "xif", "ygd", "yge", "ygf", "yhd", "yhe", "yhf", "yid", "yie", "yif", "zgd", "zge", "zgf", "zhd", "zhe", "zhf", "zid", "zie", "zif"], "")
Test.assertSimilar(letterCombinations("372"), ["dpa", "dpb", "dpc", "dqa", "dqb", "dqc", "dra", "drb", "drc", "dsa", "dsb", "dsc", "epa", "epb", "epc", "eqa", "eqb", "eqc", "era", "erb", "erc", "esa", "esb", "esc", "fpa", "fpb", "fpc", "fqa", "fqb", "fqc", "fra", "frb", "frc", "fsa", "fsb", "fsc"], "")


Test Passed: Value == "['ad', 'ae', 'af', 'bd', 'be', 'bf', 'cd', 'ce', 'cf']"
Test Passed: Value == "['jda', 'jdb', 'jdc', 'jea', 'jeb', 'jec', 'jfa', 'jfb', 'jfc', 'kda', 'kdb', 'kdc', 'kea', 'keb', 'kec', 'kfa', 'kfb', 'kfc', 'lda', 'ldb', 'ldc', 'lea', 'leb', 'lec', 'lfa', 'lfb', 'lfc']"
Test Passed: Value == "['wgd', 'wge', 'wgf', 'whd', 'whe', 'whf', 'wid', 'wie', 'wif', 'xgd', 'xge', 'xgf', 'xhd', 'xhe', 'xhf', 'xid', 'xie', 'xif', 'ygd', 'yge', 'ygf', 'yhd', 'yhe', 'yhf', 'yid', 'yie', 'yif', 'zgd', 'zge', 'zgf', 'zhd', 'zhe', 'zhf', 'zid', 'zie', 'zif']"
Test Passed: Value == "['dpa', 'dpb', 'dpc', 'dqa', 'dqb', 'dqc', 'dra', 'drb', 'drc', 'dsa', 'dsb', 'dsc', 'epa', 'epb', 'epc', 'eqa', 'eqb', 'eqc', 'era', 'erb', 'erc', 'esa', 'esb', 'esc', 'fpa', 'fpb', 'fpc', 'fqa', 'fqb', 'fqc', 'fra', 'frb', 'frc', 'fsa', 'fsb', 'fsc']"

*/