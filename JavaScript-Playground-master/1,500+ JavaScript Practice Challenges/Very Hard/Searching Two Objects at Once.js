/* 

Searching Two Objects at Once

Oh no! Your classmate slept in this morning and totally forgot to write an essay for his homework! He sent you a text asking if the class accepted late work, but he was in such a rush, he only sent the teacher's name.
It's your job to create a function that will search multiple objects to find the class your friend was talking about, and if they accept late work.
With the limited amount of classes your friend is taking, you might find it easier to just create a switch statement for every teacher, or search each object (class) individually. But not only does that take the fun out of the challenge, but your friend is also counting on you to find out this information fast; those overcomplicated methods just won't do. Try to search all class objects at one time to maximize speed!



Example
acceptsLateWork("Mr. Citrano") ➞ false


Notes
The class objects are provided to you in the Code tab- don't change them.
The teacher given will always be valid.
Each class has an "Advanced" and "Standard" curriculum, both with a different teacher. Make sure to consider them!


*/





//#############################################################
//#                        MY SOLUTION    1                   #
//#############################################################


const english = {
    advanced: { teacher: 'Ms. Abrimian', acceptsLateWork: false },
    standard: { teacher: 'Mr. Sheehan', acceptsLateWork: true },
};
const math = {
    advanced: { teacher: 'Mr. Citrano', acceptsLateWork: false },
    standard: { teacher: 'Ms. Marinelli', acceptsLateWork: false },
};

const acceptsLateWork = t => [english, math]
    .reduce((a, v) => a.concat(Object.values(v)), [])
    .find(c => c.teacher === t).acceptsLateWork;





//#############################################################
//#                        MY SOLUTION    2                   #
//#############################################################


/*
problem: given a string and nested objects representing classes,
return the acceptsLateWork value of the class that has a teacher
value matching the input string

input: a valid string
output: boolean

rules:
do not use switch statements
check both standard and advanced curriculums

structure: nested objects

algo:
create a results variable
iterate across each subject
  get the values -> will be an array of objects with teacher and acceptsLateWork props
	iterate across the value array
		check if teacher matches string
			if yes, set results to value of acceptsLateWork

*/

// english class object
const english = {
    advanced: { // advanced curriculum
        teacher: 'Ms. Abrimian',
        acceptsLateWork: false,
    },
    standard: { // standard curriculum
        teacher: 'Mr. Sheehan',
        acceptsLateWork: true,
    },
}

// math class object
const math = {
    advanced: {
        teacher: 'Mr. Citrano',
        acceptsLateWork: false,
    },
    standard: {
        teacher: 'Ms. Marinelli',
        acceptsLateWork: false,
    },
}

function acceptsLateWork(teacher) {
    let results;
    [english, math].forEach(subject => {
        let classes = Object.values(subject);
        classes.forEach(val => {
            if (teacher === val.teacher) results = val.acceptsLateWork;
        });
    });

    return results;
}




/*  


//Tests

const tests = [
	['Ms. Abrimian', false],
	['Mr. Sheehan', true],
	['Mr. Citrano', false],
	['Ms. Marinelli', false],
]

tests.forEach(([actual, expected]) =>
  Test.assertEquals(acceptsLateWork(actual), expected)
)


//Console

Test Passed: Value == false
Test Passed: Value == true
Test Passed: Value == false
Test Passed: Value == false

*/