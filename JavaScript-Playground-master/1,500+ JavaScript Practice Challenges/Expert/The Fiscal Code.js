/*

The Fiscal Code
Each person in Italy has an unique identifying ID code issued by the national tax office after the birth registration: the Fiscal Code (Codice Fiscale). Check the Resources tab for more info on this.

Given an object containing the personal data of a person (name, surname, gender and date of birth) return the 11 code characters as a string following these steps:

Generate 3 capital letters from the surname, if it has:

At least 3 consonants then the first three consonants are used. (Newman -> NWM).
Less than 3 consonants then vowels will replace missing characters in the same order they appear (Fox -> FXO | Hope -> HPO).
Less than three letters then "X" will take the third slot after the consonant and the vowel (Yu -> YUX).
Generate 3 capital letters from the name, if it has:

Exactly 3 consonants then consonants are used in the order they appear (Matt -> MTT).
More than 3 consonants then first, third and fourth consonant are used (Samantha -> SNT | Thomas -> TMS).
Less than 3 consonants then vowels will replace missing characters in the same order they appear (Bob -> BBO | Paula -> PLA).
Less than three letters then "X" will take the the third slot after the consonant and the vowel (Al -> LAX).
Generate 2 numbers, 1 letter and 2 numbers from date of birth and gender:

Take the last two digits of the year of birth (1985 -> 85).
Generate a letter corresponding to the month of birth (January -> A | December -> T) using the table for conversion included in the code.
For males take the day of birth adding one zero at the start if is less than 10 (any 9th day -> 09 | any 20th day -> 20).
For females take the day of birth and sum 40 to it (any 9th day -> 49 | any 20th day -> 60).


Examples
fiscalCode({
  name: "Matt",
  surname: "Edabit",
  gender: "M",
  dob: "1/1/1900"
}) ➞ "DBTMTT00A01"

fiscalCode({
  name: "Helen",
  surname: "Yu",
  gender: "F",
  dob: "1/12/1950"
}) ➞ "YUXHLN50T41"

fiscalCode({
  name: "Mickey",
  surname: "Mouse",
  gender: "M",
  dob: "16/1/1928"
}) ➞ "MSOMKY28A16"


Notes
Code letters must be uppercase.
Date of birth is given in D/M/YYYY format.
The conversion table for months is already in the starting code.
Y is not a vowel.
*/




//#############################################################
//#    SOLUTION 1
//#############################################################


function fiscalCode(person) {
    const months = ' ABCDEHLMPRST';
    const getV = s => s.toUpperCase().replace(/[^AEIOU]/g, '');
    const getC = s => s.toUpperCase().replace(/[AEIOU]/g, '');
    const code = s => (getC(s) + getV(s) + 'XXX').slice(0, 3);
    const [d, m, y] = person.dob.split('/');

    let sCode = code(person.surname);
    let fCon = getC(person.name);
    let fCode = fCon.length > 3 ? fCon[0] + fCon[2] + fCon[3] : code(person.name);
    let nCode = y.slice(-2) + months[m] + (person.gender === 'M' ? ('0' + d).slice(-2) : +d + 40);
    return sCode + fCode + nCode;
}




//#############################################################
//#    SOLUTION 2
//#############################################################


const months = {
    1: "A",
    2: "B",
    3: "C",
    4: "D",
    5: "E",
    6: "H",
    7: "L",
    8: "M",
    9: "P",
    10: "R",
    11: "S",
    12: "T"
};
const vouls = ["a", "e", "i", "o", "u"];

function fiscalCode(person) {
    let finalString = "";

    // Last name
    if (person.surname.length < 3) finalString += person.surname + "x";
    else {
        let con = [];
        let vou = [];

        for (let i = 0; i < person.surname.length; i++) {
            if (vouls.includes(person.surname[i].toLowerCase())) vou.push(person.surname[i]);
            else con.push(person.surname[i]);
        }

        if (con.length > 2) finalString += con.slice(0, 3).join("");
        else finalString += (con.join("") + vou.slice(0, 3 - con.length).join(""));
    }

    // First name
    let con = [];
    let vou = [];

    for (let i = 0; i < person.name.length; i++) {
        if (vouls.includes(person.name[i].toLowerCase())) vou.push(person.name[i]);
        else con.push(person.name[i]);
    }

    if (con.length + vou.length < 3) finalString += con.join("") + vou.join("") + "x";
    else if (con.length == 3) finalString += con.join("");
    else if (con.length > 3) finalString += (con[0] + con[2] + con[3]);
    else finalString += (con.join("") + vou.slice(0, 3 - con.length).join(""));


    // DOB & Gender
    let aMeRiCanDatEfOrMat = person.dob.split("/"); // This is so dumb
    let dob = new Date(`${aMeRiCanDatEfOrMat[1]}/${aMeRiCanDatEfOrMat[0]}/${aMeRiCanDatEfOrMat[2]}`);

    finalString += dob.getFullYear().toString().slice(-2);
    finalString += months[`${dob.getMonth() + 1}`];
    finalString += person.gender == "M" ? `${dob.getDate() < 10 ? `0${dob.getDate()}` : dob.getDate()}` : `${dob.getDate() + 40}`;
	
	return finalString.toUpperCase();
}



/*


Test.assertEquals(fiscalCode({ name: "Brendan", surname: "Eich", gender: "M", dob: "1/12/1961" }), "CHEBND61T01")
Test.assertEquals(fiscalCode({ name: "Helen", surname: "Yu", gender: "F", dob: "1/12/1950" }), "YUXHLN50T41")
Test.assertEquals(fiscalCode({ name: "Al", surname: "Capone", gender: "M", dob: "17/1/1899" }), "CPNLAX99A17")
Test.assertEquals(fiscalCode({ name: "Mickey", surname: "Mouse", gender: "M", dob: "16/1/1928" }), "MSOMKY28A16")
Test.assertEquals(fiscalCode({ name: "Marie", surname: "Curie", gender: "F", dob: "7/11/1867" }), "CRUMRA67S47")


Test Passed: Value == 'CHEBND61T01'
Test Passed: Value == 'YUXHLN50T41'
Test Passed: Value == 'CPNLAX99A17'
Test Passed: Value == 'MSOMKY28A16'
Test Passed: Value == 'CRUMRA67S47'


*/