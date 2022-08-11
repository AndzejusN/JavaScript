let arr = ['a', 11, -2, 34, 45, 19, 6];

// let result = arr.some(x => {
// 	console.log(x);

// 	// return x == 'n';
// 	return x == 'a';
// });

// console.log(result);

console.log(arr.some(x => x > 0));
console.log(arr.some(x => x == -2));
console.log(arr.some(x => x < 0));
console.log(arr.some(x => x == 'b'));