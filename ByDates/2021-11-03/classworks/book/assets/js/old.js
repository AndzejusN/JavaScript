// Susikurkite objektų konstruktorių naudojant new pavadinimu Book, kuris galės kurti objektus, 
// kurie turės šias savybes (properties): name, author, year 
// ir metodus (naudojant prototype), kurių vienas parašys pavadinima ir autorių, o kitas parodys knygos amžių (senumą).

Date.prototype.calcAge = function(year) {
	return this.getFullYear() - year;
}

function Book(name, author, year) {
	this.name = name;
	this.author = author;
	this.year = year;

	this.getYear = function() {
		return this.year;
	}
}

Book.prototype.getNameAndAuthor = function() {
	return `${this.name} ${this.author}`;
}

// Book.prototype.getYear = function() {
// 	return this.year;
// }

Book.prototype.getAge = function() {
	// return (new Date).getFullYear() -  this.year;
	return (new Date).calcAge(this.year);
}

let books = [
	new Book('Pride and Prejudice', 'Jane Austen', 1813),
	new Book('To Kill a Mockingbird', 'Harper Lee', 1960),
	new Book('The Great Gatsby', 'F. Scott Fitzgerald', 1925),
];

books.push(new Book('One Hundred Years of Solitude', 'Gabriel García Márquez', 1967));

for (let b of books) {
	console.log(`${b.getNameAndAuthor()} - ${b.getAge()}`);
}