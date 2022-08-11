let book = new Book('Pride and Prejudice', 'Jane Austen', 1813);

let books = [
	book,
	new Book('To Kill a Mockingbird', 'Harper Lee', 1960),
	new Book('The Great Gatsby', 'F. Scott Fitzgerald', 1925),
];

books.push(new Book('One Hundred Years of Solitude', 'Gabriel García Márquez', 1967));

for (let b of books) {
	console.log(`${b.getNameAndAuthor()} - ${b.getAge()}`);
}