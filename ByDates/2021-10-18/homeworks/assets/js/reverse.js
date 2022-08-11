// Parašykite 2 skirtingas funkcijas, kurios apverčia masyvą atvirkštine tvarka.

function reverseArray (arr) {
	let reversed = [];

	for (let i = arr.length - 1; i >= 0; i -= 1) {
		reversed.push(arr[i]);
	}

	return reversed;
}

const reverse2 = (arr) => arr.map((currentValue, index, originalArray) => originalArray[originalArray.length - index - 1]);

const reverse3 = arr => arr.reverse();

let data = [1, 2, 3, 4];

console.log(reverseArray(data));
console.assert(JSON.stringify(reverseArray(data)) == JSON.stringify([4, 3, 2, 1]));

console.log(reverse2(data));
console.assert(JSON.stringify(reverse2(data)) == JSON.stringify([4, 3, 2, 1]));

console.log(reverse3([1, 2, 3, 4]));
console.assert(JSON.stringify(reverse3([1, 2, 3, 4])) == JSON.stringify([4, 3, 2, 1]));
