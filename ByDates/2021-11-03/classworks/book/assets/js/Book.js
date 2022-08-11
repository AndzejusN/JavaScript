class Book {
	constructor(name, author, year) {
		this.name = name;
		this.author = author;
		this.year = year;
	}

	getNameAndAuthor() {
		return `${this.name} ${this.author}`;
	}

	getYear() {
		return this.year;
	}

	getAge() {
		return (new Date).getFullYear() -  this.year;
	}
}