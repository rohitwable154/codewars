function User(name, age) {
  this.getName = function () {
    return name;
  };
  this.getAge = function () {
    return age;
  };
  this.updateAge = function (newAge) {
    age = newAge;
  };
  this.canVote = function () {
    if (age >= 18) {
      return true;
    } else {
      return false;
    }
  };
}

const fooUser = new User("foo", 17);
// console.log(fooUser.canVote());
// console.log(fooUser.greetings())
fooUser.updateAge(18)
console.log(fooUser.canVote())

// User should not be able to modify the values directly
fooUser.name = 'foo1'
console.log(fooUser.getName()) // foo
fooUser.age = 20
console.log(fooUser.getAge()) // 18