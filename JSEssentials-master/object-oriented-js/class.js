/* create class a constructor function inside the class*/
class User {
  constructor(username, email) {
    this.username = username;
    this.email = email;
    this.score = 0;
  }
  login() {
    console.log(`${this.username} just logged in.`);
    return this;
  }
  logout() {
    console.log(`${this.username} just logged out.`);
    return this;
  }
  incScore() {
    this.score += 1;
    console.log(`${this.username} has a score of ${this.score}`);
    return this;
  }
}

/* -------works the same as above User class------- */
/* Note: however the methods are stored directly on the object, because we defined them directly in the constructorÎ */

// function User(username, email) {
//   this.username = username;
//   this.email = email;
//   this.score = 0;
//   this.login = function () {
//     console.log(`${this.username} just logged in.`);
//     return this;
//   };
//   this.logout = function () {
//     console.log(`${this.username} just logged out.`);
//     return this;
//   };
//   this.incScore = function () {
//     this.score += 1;
//     console.log(`${this.username} has a score of ${this.score}`);
//     return this;
//   };
// }

class Admin extends User {
  constructor(username, email, title) {
    super(username, email);
    this.title = title;
  }
  deleteUser(user) {
    users = users.filter((u) => {
      return u.username !== user.username;
    });
  }
}
const userOne = new User("evelyn", "evelyn@email.com");
const userTwo = new User("frank", "frank@email.com");
const userThree = new Admin("gougou", "gougou@email.com", "ssb");

let users = [userOne, userTwo, userThree];

console.log(userThree);

// userOne.logout();
// userOne.login().incScore().incScore().logout();

// userThree.deleteUser(userOne);
// console.log(users);
