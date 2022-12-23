// Create a class named User and create a way to check the number of users (number of instances) that were created, so that the value can be accessed as a class attribute.

/* SOLUTION ONE */
// class User {
//   static userCount = 0;
//   constructor(uname) {
//     this.username = uname;
//     User.userCount += 1;
//   }
// }

/* SOLUTION TWO */
class User {
  constructor(uname) {
    this.username = uname;
    User.userCount += 1;
  }
}
User.userCount = 0

u1 = new User("johnsmith10");
console.log(User.userCount);
//  ➞ 1

u2 = new User("marysue1989");
console.log(User.userCount);
//  ➞ 2

u3 = new User("milan_rodrick");
console.log(User.userCount);
//  ➞ 3
