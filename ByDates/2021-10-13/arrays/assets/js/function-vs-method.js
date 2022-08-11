function shout(message) {
	alert(message);
}

let person = {
	name: 'Kiril',
	// shout: shout,
	shout,
	
	sayName: function(name) {
		alert(name);
	}
}

shout('Hello World');

person.shout(person.name);
person.sayName(person.name);

// sayName(person.name);