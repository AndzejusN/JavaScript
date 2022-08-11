class Motorcycle extends Car {
	constructor(make, model, year, wheels) {
		super(make, model, year);

		this.wheels = wheels;
	}

	getWheelsNumber() {
		if (Number(this.wheels) == this.wheels) {
			return `motociklas turi ${this.wheels} ratus`;
		}

		throw new Error('motociklas be ratu');
	}
}