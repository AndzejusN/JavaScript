alert();

function sayHi() {
	console.log('Hello, world!');
}

document.querySelector('button').addEventListener('click', sayHi);

setTimeout(function() {
	console.log('setTimeout before all');
}, 2000);

setTimeout(function() {
	console.log('setTimeout after all');
}, 3000);

let a = 5,
	b = 5;

console.log(a + b);

sayHi();

console.log(a + b + 12);

setTimeout(function() {
	console.log('setTimeout');
}, 1000);