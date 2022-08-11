class Book {
	constructor(name, author, year, category) {
		this.name = name;
		this.author = author;
		this.year = year;
		this.category = category;
	}

	getNameAndAuthor() {
		// console.log(Book.otherMethod());

		return `${this.name} ${this.author}`;
	}

	getYear() {
		return this.year;
	}

	getAge() {
		return (new Date).getFullYear() -  this.year;
	}

	// ============================= //

	static getCategories() {
		return [
			'Action and Adventure',
			'Classics',
			'Comic Book or Graphic Novel',
			'Detective and Mystery',
			'Fantasy',
			'Historical Fiction',
			'Horror'
		];
	}

	static getCategoriesJSON() {
		return JSON.stringify(Book.getCategories());
	}
}