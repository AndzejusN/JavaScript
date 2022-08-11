// Sukurkite funkciją getMaxSubSum(arr), kuri sugrąžins masyvo (Array) visų įvestų skaičių, kurie yra didesni nei 0 sumą.

function getMaxSubSum(arr) {
	let result = 0;

	for (let num of arr) {
		if (num > 0) {
			result += num;
		}
	}

	return result;
}

let arr = [11, -2, 34, 45, 19, 6];

console.log(getMaxSubSum(arr));
console.assert(getMaxSubSum(arr) == 115);

let reducedResult = arr.reduce((previousValue, currentValue, index, arr) => {
	console.log({previousValue, currentValue, index, arr});

	return currentValue > 0 ? previousValue + currentValue : previousValue;
}, 0);

console.log(reducedResult);

console.log(arr.reduce((p, c) => c > 0 ? p + c : p, 0));