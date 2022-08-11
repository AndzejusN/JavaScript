let person = new Object,
	person2 = new Object(1, 2, 3);

let somePersonKey = 'lastName';

person.firstName = 'testFirstName';
person[somePersonKey] = 'testLastName';
person['age'] = 34;

person.getFullName = function() {
	let str = `${this.firstName} ${this.lastName}`;

	return str;
}

person.shout = function() {
	alert(this.getFullName());

	return true;
}

console.log(person);
console.log(person.getFullName());
console.log(person.shout());
