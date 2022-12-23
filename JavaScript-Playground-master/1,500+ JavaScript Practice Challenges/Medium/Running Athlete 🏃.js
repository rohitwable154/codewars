/*
Running Athlete 🏃

No description.
Guess the code from test cases.
Examples
runningAthlete(["run", "jump", "run", "jump", "run"], "_|_|_") ➞ "_|_|_"

runningAthlete(["run", "jump", "run", "run", "run"], "_|_|_") ➞ "_|_/_"

runningAthlete(["jump", "jump", "jump", "jump", "jump"], "_|_|_") ➞ "x|x|x"

runningAthlete(["run", "run", "run", "run", "run"], "_|_|_") ➞ "_/_/_"


*/






//#############################################################
//#  SOLUTION 1 
//#############################################################


function runningAthlete(act, txt) {
    return act.map((crtAct, idx) => {
        switch (crtAct + txt[idx]) {
            case "jump|":
                return "|";
            case "jump_":
                return "x";
            case "run_":
                return "_";
            case "run|":
                return "/";
        }
    }).join('');
}



//#############################################################
Test Passed: Value == '_|_|_'
Test Passed: Value == '_|_/_'
Test Passed: Value == '_/_/_'
Test Passed: Value == 'x|x|x'
Test Passed: Value == 'x/x/x'
Test Passed: Value == '//////////'
Test Passed: Value == 'xxxxxxxxxx'
//#############################################################


