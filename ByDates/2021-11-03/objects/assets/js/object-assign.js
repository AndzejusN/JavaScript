// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign

let orgObject = { company: 'ABC Corp' };
let carObject = { carName: 'Ford' };

// let otherCarObject = carObject;
let otherCarObject = Object.assign({}, carObject);

let employee = Object.assign({}, orgObject, { carName: 'Ford' });

carObject.carName = 'BMW';

console.log(carObject, otherCarObject);


console.log(employee, JSON.stringify(employee));