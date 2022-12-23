// JavaScript doesn't really have classes like other languages. They are actually functions behind the scenes. There are several ways to create classes.

// Challenge
// Create a Book class using a JavaScript function - instantiable.
// It should have an author and published property.

function Book(author, published) {
  this.author = author;
  this.published = published;
}

// Create an Author class using a literal object - singleton.
// It should have a name and books property.

const Author = {
  name: this.name,
  books: this.books,
};

// Create a Publisher class by using the new constructor and an anonymous function - singleton.
// It should have an authors and books property.

const Publisher = new (function (authors, books) {
  this.authors = authors;
  this.books = books;
})();

// Create a Review class using a class declaration - instantiable.
// It should have a rating and user property.

class Review {
  constructor(rating, user) {
    this.rating = rating;
    this.user = user;
  }
}

// Bonus (optional)
// Create a Bookstore class using an IIFE - singleton. It should have a books and prices property.
const Bookstore = (function () {
  return {
    books: "books",
    prices: "prices",
  };
})();
