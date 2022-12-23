/* store methods in the prototype - this is the way before class keyword comes in */
function User(username, email) {
  this.username = username;
  this.email = email;
  this.score = 0;
}

User.prototype.login = function () {
  console.log(`${this.username} just logged in.`);
  return this;
};
User.prototype.logout = function () {
  console.log(`${this.username} just logged out.`);
  return this;
};

User.prototype.incScore = function () {
  this.score += 1;
  console.log(`${this.username} has a score of ${this.score}`);
  return this;
};

function Admin(username, email, title) {
  /* 
  the call() allows for a function/method belonging to one object to be assigned and called for a different object. 
  with call(), you can write a method once and then inherit it in another object, without having to rewrite the method for the new object.
  */
  User.call(this, username, email);
  this.title = title;
}

// inherit from the prototype of the User object
Admin.prototype = Object.create(User.prototype);

// the deleteUser method stored directly in the Admin prototype
Admin.prototype.deleteUser = function (user) {
  users = users.filter((u) => u.username !== user.username);
};

const userOne = new User("evelyn", "evelyn@email.com");
const userTwo = new User("frank", "frank@email.com");
const userThree = new Admin("gougou", "gougou@email.com", "ssb");

let users = [userOne, userTwo, userThree];
userThree.deleteUser(userOne);
console.log(users);
