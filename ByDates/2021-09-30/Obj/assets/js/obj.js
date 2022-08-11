// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object
let objSimple = {};

let objFromClass = new Object,
let objFromClassWithConstructor = new Object();

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes
class Person {
	constructor(name, surname) {
	    this.name = name;
	    this.surname = surname;
	}
}

let person = new Person('kiril', 'clk');

console.log(objSimple, objFromClass, person);

let user = {     // objektas
	name: 'John',  // key 'name' value 'John'
	age: 30,       // key 'age' value 30
	'likes birds': true,  // kelių žodžių property pavadinimas turi būti kabutėse
	likesBirds: true,  // kelių žodžių property pavadinimas turi būti kabutėse
};

console.log(user);