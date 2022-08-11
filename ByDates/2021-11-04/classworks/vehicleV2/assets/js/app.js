let vehicles = [
	new Car('Ford', 'Galaxy', 2007),

	new Car('Toyota', 'Auris', 2017),

	new Bmw('X3', 2012),
	
	{
		make: 'Audi',
		model: 'S3',
		year: 2020,
		wheels: 4
	},

	new Motorcycle('Aprilia', 'RS', 2020, 2),

	new Boat('Quicksilver', 'Activ 675', 2020),

	new Motorcycle('Polaris', 'Slingshot', 2020, 3),

	new Bus('Ikarus', 'Yellow', 1991, 4),

	new Plane('Boeing', '737', 2021, 6),
];

let customCar = new Car('Rezvani', 'Hercules', 2019);

// customCar.wheels = 6;

customCar.setWheelsNumber(6);

vehicles.unshift(customCar);

for (let v of vehicles) {
	console.log(v);

	if (v instanceof Vehicle) {
		console.log('getIntroduction ==> ', v.getIntroduction());
		console.log('getAge ==> ', v.getAge());
		console.log('getAgeText ==> ', v.getAgeText());
		console.log('getWheelsNumber ==> ', v.getWheelsNumber());
		console.log('getWheelsNumberText ==> ', v.getWheelsNumberText());

		if (v instanceof Plane) {
			console.log('This vehicle can fly');
		}

		if (v instanceof Boat) {
			console.log('This vehicle can swim');

			console.log(v.getType());
		}
	}

	// console.log(v instanceof Vehicle);

	console.log('');
}