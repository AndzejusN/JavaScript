let categories = Book.getCategories();

let book = new Book('Pride and Prejudice', 'Jane Austen', 1813, categories[3]);

console.log(book.getNameAndAuthor());
console.log(Book.getCategories());
console.log(book);
console.log(Book.getCategoriesJSON());