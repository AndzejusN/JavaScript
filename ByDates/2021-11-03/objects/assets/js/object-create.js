// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/create

let orgObject = {
	company: 'ABC Corp',

	getCompanyName: function() {
		return this.company;
	}
};

let employee = Object.create(orgObject, {
	name: {
		value: 'EmployeeOne'
	},

	position: {
		value: 'web-dev'
	}
});

console.log(employee.name, employee.position, employee.company, employee, orgObject);

orgObject.company = 'test';

console.log(orgObject.getCompanyName());
console.log(employee.getCompanyName());