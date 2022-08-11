let matrix = [
	[1, 2, 3], 
	[4, 5, 6],
	[7, 8, 9]
];

console.log(matrix[1][1]);
console.log(matrix[2][2]);
console.log(matrix);

let deeper = [
	[1, 2, 3], 
	[4, [5], 6],
	[7, [[8]], 9]
];

console.log(deeper[2][1][0][0]);
console.log(deeper[1][1][0]);