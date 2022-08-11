class Car {
	constructor(make, model, year) {
		this.make  = make;
		this.model = model;
		this.year  = year;
	}

	getIntroduction() {
		return `"${this.make} ${this.model}"`;
	}

	getAge() {
		return (new Date).getFullYear() -  this.year;
	}

	getAgeText() {
		if (this.getAge() <= 10) {
			return '10 metų arba naujesnis';
		} else {
			return '11 metų arba senesnis';
		}
	}
}