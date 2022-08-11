let arr = ['a', 11, -2, 34, 45, 19, 6];

let result = arr.every(x => {
	console.log(x);

	return x != 'a';
	// return x != false;
});

console.log(result);

console.log(arr.every(x => x > 0));
console.log(arr.every(x => x == -2));
console.log(arr.every(x => x < 0));
console.log(arr.every(x => x == 'b'));
console.log(arr.every(x => x !== false));