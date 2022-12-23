/*

7kyu - Bus Timer 

It's been a tough week at work and you are stuggling to get out of bed in the morning.

While waiting at the bus stop you realise that if you could time your arrival to the nearest minute you could get valuable extra minutes in bed.

There is a bus that goes to your office every 15 minute, the first bus is at 06:00, and the last bus is at 00:00.

Given that it takes 5 minutes to walk from your front door to the bus stop, implement a function that when given the curent time will tell you much time is left, before you must leave to catch the next bus.

Examples
"05:00"  =>  55
"10:00"  =>  10
"12:10"  =>  0
"12:11"  =>  14
Notes
Return the number of minutes till the next bus
Input will be formatted as HH:MM (24-hour clock)
The input time might be after the buses have stopped running, i.e. after 00:00

*/


//#############################################################
//#                        MY SOLUTIONS                       #
//#############################################################


function busTimer(time) {
    let min = 6 * 60 - 5,
        max = 24 * 60 - 5;
    time = time.split(":")
    time = parseInt(time[0]) * 60 + parseInt(time[1]);
    if (time < min)
        return min - time;
    if (time > max)
        return max - time + 360;
    return (15 - (time + 5) % 15) % 15;
}