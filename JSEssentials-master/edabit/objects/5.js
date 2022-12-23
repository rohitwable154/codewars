// Create a method in the Person class which returns how another person's age compares. Given the instances p1, p2 and p3, which will be initialised with the attributes name and age, return a sentence in the following format:

// {other person name} is {older than / younger than / the same age as} me.

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  /* SOLUTION ONE */
  //   compareAge(other) {
  //     if (this.age < other.age) {
  //       return `${other.name} is older than me.`;
  //     } else if (this.age > other.age) {
  //       return `${other.name} is younger than me.`;
  //     } else {
  //       return `${other.name} is the same age as me.`;
  //     }
  //   }

  /* SOLUTION TWO */
  compareAge(other) {
    let i = Math.sign(other.age - this.age);
    let output = ["the same age as", "older than"][i] || "younder than";
    return `${this.name} is ${output} me.`;
  }
}

p1 = new Person("Samuel", 24);
p2 = new Person("Joel", 36);
p3 = new Person("Lily", 24);

console.log(p1.compareAge(p2));
//  ➞ "Joel is older than me."

console.log(p2.compareAge(p1));
// ➞ "Samuel is younger than me."

console.log(p1.compareAge(p3));
// ➞ "Lily is the same age as me."
