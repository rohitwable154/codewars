/*

The Twins Paradox

Jack and Jill are twins. When they are 10 years of age, Jack leaves earth in his spaceship bound for Altair IV, some 17 light-years distant. Though not equipped with warp drive, Jack's ship is still capable of attaining near light speed. When he returns to earth he finds that Jill has grown to adulthood while he, Jack, remains a young boy.

Albert Einstein had predicted this strange quirk of time in his 1905 paper "On the Electrodynamics of Moving Bodies" aka The Theory of Special Relativity. It has been verified experimentally many times.

Implement a function that has as its arguments: The twins' age at the time of Jack's departure, the distance in light-years to the destination star, and the speed of Jack's ship as a fraction of the speed of light. The function will return Jack's age and Jill's age at the time of Jack's return to earth, rounded to the nearest tenth of a year. The math is simple enough for 10-year-old Jack to understand. See Resources for help.

Examples
twins(20, 10, 0.4) ➞ "Jack's age is 65.8, Jill's age is 70.0"

twins(20, 10, 0.8) ➞ "Jack's age is 35.0, Jill's age is 45.0"

twins(10, 16. 73, 0.999) ➞ "Jack's age is 11.5, Jill's age is 43.5"
// The Altair IV trip.


Notes
We are assuming for the sake of simplicity that Jack's periods of acceleration and deceleration are negligibly brief. That is a huge assumption but, nevertheless, it doesn't invalidate the age calculations.

*/






//#############################################################
//#  SOLUTION 1                                               #
//#############################################################


const twins = (a, d, v) =>
	`Jack's age is ${((Math.sqrt(1- v**2) * (2 * d / v)) + a).toFixed(1)}, Jill's age is ${(a + (2 * d / v)).toFixed(1)}`;






//#############################################################
//#  SOLUTION 2                                               #
//#############################################################


function twins(age, d, v) {
	let t = d / v;
	return [['Jack', age + 2*t * (1 - v**2) ** .5], ['Jill', age + 2*t]]
		.map(([n,a]) => `${n}'s age is ${a.toFixed(1)}`).join(', ');
}






//#############################################################
//#  SOLUTION 3                                               #
//#############################################################



function twins(age, distance, velocity) {

    let restTime=+((distance/velocity)*2).toFixed(1)

    //restTime is the time measured by twin on earth
    //v=d/t1,c=d/t2,the distance is in light years which is same what ever the 
    //velocity is ,so vt1=ct2=>t1=t2/(v/c).This is the time taken for the spaceship
    //to reach destiny +return journey as obsered by the twin on earth
        
    let obsTime=+(restTime*Math.sqrt(1-velocity**2)).toFixed(1)
    
    
    //This is the time measured by the twin in space for the same journey
    
    return `Jack's age is ${Number.isInteger(obsTime)?obsTime+age+".0":obsTime+age}, Jill's age is ${Number.isInteger(restTime)?restTime+age+".0":restTime+age}`															 
    }




    

//#############################################################
//#  SOLUTION 4                                               #
//#############################################################


const twins = (a, d, v) => `Jack's age is ${((1 - v ** 2) ** (1 / 2) * d / v * 2 + a).toFixed(1)}, Jill's age is ${(d * 2 / v + a).toFixed(1)}`;