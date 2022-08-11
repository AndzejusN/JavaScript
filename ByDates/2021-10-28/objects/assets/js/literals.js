// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object

// person = new Object;

// Global
Object.prototype.getFullNameGlobal = function() {
	if (this.firstName && this.lastName) {
		return `${this.firstName} ${this.lastName}`;
	}

	throw new Error('Credentionals not set');
};

Object.prototype.test = 123;


// Local
let person = {
	firstName: 'testFirstName',
	lastName: 'testLastName',

	getFullName: function(param = null) {
		// console.log('getFullName', param);

		let str = `${this.firstName} ${this.lastName}`;

		if (param) {
			str += ` with "${param}"`;
		}

		return str;
	},

	// // https://stackoverflow.com/a/31095976
	// getFullNameWithSomething: (param) => {
	// 	return this.getFullName(param);
	// },

	// getFullNameWithSomethingShort: p => this.getFullName(p),

	getFullNameWithMore(...args) {
		return this.getFullName(JSON.stringify(args));
	}
};

console.log(person, person.toString());

person.age = 34;

console.log(person);

console.log(person.firstName, person.lastName, person.age);

let somePersonKey = 'firstName';

console.log(person[somePersonKey], person['lastName']);

// console.log(person.getFullName);
console.log(person.getFullName('a'));
// console.log(person.getFullNameWithSomething('somePersonKey'));
// console.log(person.getFullNameWithSomethingShort(2));
console.log(person.getFullNameWithMore(1,2,3));

person.shout = function() {
	alert(this.getFullName());

	return true;
}

console.log(person.shout());

console.log(person.getFullNameGlobal());

try	{
	console.log({}.getFullNameGlobal());
} catch(e) {
	console.error(e.message);
}

console.log(person.test);
console.log({}.test);

