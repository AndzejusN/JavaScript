let arr = ['a', 11, -2, 34, 45, 19, 6];

let reducedResult = arr.reduce((previousValue, currentValue, index, arr) => {
	console.log({previousValue, currentValue, index, arr});

	return currentValue > 0 ? (previousValue + currentValue) : previousValue;
}, 0);

console.log(reducedResult);
