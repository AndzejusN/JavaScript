// Parašykite „JavaScript“ funkciją, kuri grąžina apverstą parametrą.

function reverse(x) {
	return x.toString().split('').reverse().join('');
}

let reverseArrow = x => x.toString().split('').reverse().join('');

console.log(reverse(123));
console.log(reverse('abc'));

console.log(reverseArrow(123));
console.log(reverseArrow('abc'));