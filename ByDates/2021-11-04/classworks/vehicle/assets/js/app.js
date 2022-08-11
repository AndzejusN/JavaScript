let cars = [
	new Car('Ford', 'Galaxy', 2007),
	new Car('Toyota', 'Auris', 2017),
	new Motorcycle('Aprilia', 'RS', 2020, 2),
	new Motorcycle('Polaris', 'Slingshot', 2020, 3),

];

for (let c of cars) {
	console.log(`${c.getIntroduction()} yra ${c.getAgeText()} (${c.getAge()})`);

	if (c instanceof Motorcycle) {
		console.log(c.getWheelsNumber());
	}
}