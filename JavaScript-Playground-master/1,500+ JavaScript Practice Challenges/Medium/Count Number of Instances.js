/*

Count Number of Instances

Create a class named User and create a way to check the number of users (number of instances) were created, so that the value can be accessed as a class attribute.

Examples
u1 = new User("johnsmith10")
User.userCount ➞ 1

u2 = new User("marysue1989")
User.userCount ➞ 2

u3 = new User("milan_rodrick")
User.userCount ➞ 3
Make sure that the usernames are accessible via the instance attribute username.

u1.username ➞ "johnsmith10"

u2.username ➞ "marysue1989"

u3.username ➞ "milan_rodrick"


Notes
Feel free to check out the resources provided in the Resources tab for some helpful information on JavaScript classes!

*/





//#############################################################
//#  SOLUTION 1 
//#############################################################



class User {
    static userCount = 0;
    constructor(username) {
        this.username = username;
        User.userCount++;
    }
}


//#############################################################
//#  SOLUTION 2  
//#############################################################



class User {
    static userCount = 0
    constructor(username) {
        this.username = username
        this.userCount = ++User.userCount
    }
}