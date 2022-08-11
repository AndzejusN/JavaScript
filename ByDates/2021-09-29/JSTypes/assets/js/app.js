// Boolean
console.log(true, typeof true, false, typeof false);

console.log(false == 0);
console.log(false == '');
console.log(false == "");
console.log(false === "");

console.log(true == 1);

let a = true,
	b = false;

console.log(a, typeof a, b, typeof b);

// Null
console.log(null, typeof null);
// Undefined
console.log(typeof(variable), typeof variable == 'undefined', typeof variable == undefined);
// Number
console.log(1, typeof 1, '1', typeof '1', 1 == '1', 1 !== '1');
// BigInt
// console.log(9007199254740991n, typeof 9007199254740991n);
// String
console.log('text', typeof 'text');

let str = "Hello",
	str2 = 'Single quotes are ok too';

console.log(str, str2);

const NAME = 'Kiril';

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
let p = `can embed another ${NAME}`;

console.log(phrase);

console.log("can embed another Kiril");

// Symbol
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol