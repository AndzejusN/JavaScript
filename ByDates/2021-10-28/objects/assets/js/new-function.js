function Person(firstName = 'testFirstName', lastName = 'testLastName') {
	let somePersonKey = 'lastName';

	this.firstName = firstName;
	this[somePersonKey] = lastName;

	this['age'] = 34;

	this.getFullName = function() {
		let str = `${this.firstName} ${this.lastName}`;

		return str;
	}

	this.shout = function() {
		alert(this.getFullName());

		return true;
	}
}

let person = new Person;

console.log(person);

person['age'] = 38;

console.log(person.age);
console.log(person.getFullName());

let otherPersong = new Person('kiril', 'c');

console.log(otherPersong.getFullName());

let worker = new Person('Tadas', 'Tadenis');

console.log(worker.getFullName());

let driver = new Person('Vaidas');

console.log(driver.shout());