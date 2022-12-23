/*

Valid Name
For this exercise, keep in mind the following definitions:

A term is either an initials or word.
initials = 1 character
words = 2+ characters (no dots allowed)
A valid name is a name written in one of the following ways:

H. Wells
H. G. Wells
Herbert G. Wells
Herbert George Wells
The following names are invalid:

Herbert or Wells (single names not allowed)
H Wells or H. G Wells (initials must end with dot)
h. Wells or H. wells or h. g. Wells (incorrect capitalization)
H. George Wells (middle name expanded, while first still left as initial)
H. G. W. (last name is not a word)
Herb. G. Wells (dot only allowed after initial, not word)
Rules
Both initials and words must be capitalized.
Initials must end with a dot.
A name must be either 2 or 3 terms long.
If the name is 3 words long, you can expand the first and middle name or expand the first name only. You cannot keep the first name as an initial and expand the middle name only.
The last name must be a word (not an initial).
Your task is to write a function that determines whether a name is valid or not. Return true if the name is valid, false otherwise.

Examples
validName("H. Wells") ➞ true

validName("H. G. Wells") ➞ true

validName("Herbert G. Wells") ➞ true

validName("Herbert") ➞ false
// Must be 2 or 3 words

validName("h. Wells") ➞ false
// Incorrect capitalization

validName("H Wells") ➞ false
// Missing dot after initial

validName("H. George Wells") ➞ false
// Cannot have: initial first name + word middle name

validName("H. George W.") ➞ false
// Last name cannot be initial

validName("Herb. George Wells") ➞ false
// Words cannot end with a dot (only initials can)


Notes
A term is either an initial or word.
Initials and words are disjoint sets.

*/


//#############################################################
//#    My SOLUTION 
//#############################################################


const incorrectCapitalization = names =>
    names.some(name => name[0] !== name[0].toUpperCase());

const notTwoOrThreeNames = names => ![2, 3].includes(names.length);

const someInitialsDontEndWithDot = names =>
    names
    .filter(name => name.length <= 2)
    .some(initial => !initial.endsWith('.'));

const someWordsEndWithDot = names =>
    names.filter(name => name.length > 2).some(word => word.endsWith('.'));

const lastNameIsInitial = lastName => lastName.length <= 2;

const incorrectExpansion = names =>
    names.length >= 3 && names[0].length <= 2 && names[1].length > 2;

const validName = name => {
    const names = name.split(' ');
    const isInvalid =
        incorrectCapitalization(names) ||
        notTwoOrThreeNames(names) ||
        someInitialsDontEndWithDot(names) ||
        someWordsEndWithDot(names) ||
        lastNameIsInitial(names[names.length - 1]) ||
        incorrectExpansion(names);

    return !isInvalid;
};





//#############################################################
//#  Alternative possible SOLUTION 
//#############################################################


const validName = (str) => {
    //split the string into its different parts, eg. ["H.", "G.", "Wells"]
    const strings = str.split(" ");
    //destrucutre out the length of strings so I run checks on the length, eg. 3
    const { length } = strings
    //create a dummy middle initial which will be used if there is no middle
    let m = "D.";
    //check if length is greater than 3 or less than 2, then we know it will fail
    if (length > 3 || length < 2) { return false }
    //name each part of the array, f m or l, meaning first, middle, or last, if the string has a length of 2 then we just want first and last and will use our dummy middle
    length === 3 ? ([f, m, l] = strings) : length > 1 ? ([f, l] = strings) : false;
    //create a function to test capitals, since every word must be capitalized we will take and test them all using every
    const testCap = (f, m, l) => [f, m, l].every(d => /[A-Z]/.test(d[0]))
        //create a function to test the dot at the end of te first two, checking its length ensures it isn't a full name and should have a dot
    let testDot = (s) => s.length < 3 ? /[.]$/.test(s) : /[^.]$/.test(s)
        //create a function to test if it should be expaneded, we only want to run this on first and middle
    const testExpand = (f, m) => m.length > 2 ? f.length > 2 : true
        //run all our functions, us && to ensure that they all pass, if so it will return true
    return testCap(f, m, l) && testDot(f) && testDot(m) && testExpand(f, m) && l.length > 2
};



/*


Test.assertEquals(validName("H. Wells"), true)
Test.assertEquals(validName("H. G. Wells"), true)
Test.assertEquals(validName("Herbert G. Wells"), true)
Test.assertEquals(validName("Herbert George Wells"), true)
Test.assertEquals(validName("Herbert"), false, "Name must be 2 or 3 words.")
Test.assertEquals(validName("Herbert W. G. Wells"), false, "Name must be 2 or 3 words.")
Test.assertEquals(validName("h. Wells"), false, "Incorrect capitalization.")
Test.assertEquals(validName("herbert G. Wells"), false, "Incorrect capitalization.")
Test.assertEquals(validName("H Wells"), false, "Initials must end with a dot.")
Test.assertEquals(validName("Herb. Wells"), false, "Words cannot end with a dot.")
Test.assertEquals(validName("H. George Wells"), false, "First name is initial but middle name is word.")
Test.assertEquals(validName("Herbert George W."), false, "Last name cannot be an initial.")


Test Passed: Value == true
Test Passed: Value == true
Test Passed: Value == true
Test Passed: Value == true
Test Passed: Value == false
Test Passed: Value == false
Test Passed: Value == false
Test Passed: Value == false
Test Passed: Value == false
Test Passed: Value == false
Test Passed: Value == false
Test Passed: Value == false

*/