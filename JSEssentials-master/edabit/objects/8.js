// Create a Book constructor that has two properties :

// Title
// Author
// and two methods:

// A method named getTitle that returns: "Title: " + the instance title.
// A method named getAuthor that returns: "Author: " + the instance author.
// and instantiate this constructor by creating 3 new books:

// Pride and Prejudice - Jane Austen (PP)
// Hamlet - William Shakespeare (H)
// War and Peace - Leo Tolstoy (WP)
// Name the new object instances PP, H, and WP, respectively.

// For instance, if I instantiated the following book using this Book constructor function:

// Harry Potter - J.K. Rowling (HP)
// I would get the following properties and methods:

// HP.title ➞ "Harry Potter"
// HP.author ➞ "J.K. Rowling"
// HP.getTitle() ➞ "Title: Harry Potter"
// HP.getAuthor() ➞ "Author: J.K. Rowling"

function Book(title, author) {
  // Write your properties and methods here
  this.title = title;
  this.author = author;
  this.getTitle = function () {
    return `Title: ${this.title}`;
  };
  this.getAuthor = function () {
    return `Author: ${this.author}`;
  };
}

// Instantiate your Book constructor here
const PP = new Book("Pride and Prejudice", "Jane Austen");
const H = new Book("Hamlet", "William Shakespeare");
const WP = new Book("War and Peace", "Leo Tolstoy");

console.log(PP.title, "Pride and Prejudice");
console.log(PP.author, "Jane Austen");
console.log(PP.getTitle(), "Title: Pride and Prejudice");
console.log(PP.getAuthor(), "Author: Jane Austen");

console.log(H.title, "Hamlet");
console.log(H.author, "William Shakespeare");
console.log(H.getTitle(), "Title: Hamlet");
console.log(H.getAuthor(), "Author: William Shakespeare");

console.log(WP.title, "War and Peace");
console.log(WP.author, "Leo Tolstoy");
console.log(WP.getTitle(), "Title: War and Peace");
console.log(WP.getAuthor(), "Author: Leo Tolstoy");
