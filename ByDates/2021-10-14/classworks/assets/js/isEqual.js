// Parašykite funkciją "isEqualArray", kuri paligina 2 masyvus.

function isEqualArray(firstArray, secondArray) {
	if (!Array.isArray(firstArray) || !Array.isArray(secondArray)) {
		return false;
	}

	if (firstArray == secondArray) {
		return true;
	}

	if (firstArray.length !== secondArray.length) {
		return false;
	}

	let compared = firstArray.map((el, id) => secondArray[id] === el);

	// console.log(compared);

	return !compared.includes(false);
}

let arr1 = [1, 2, 3, 4];
let arr2 = [1, 2, 3, 4];
let arr3 = [1, 2, 3, 5];
let arr4 = [1, 2, 3, 4, 5];
let arr5 = arr4;

console.log(isEqualArray(arr1, arr2)); 
console.assert(isEqualArray(arr1, arr2));

console.log(isEqualArray(arr1, arr3)); 
console.assert(isEqualArray(arr1, arr3) == false);

console.log(isEqualArray(arr1, arr4)); 
console.assert(isEqualArray(arr1, arr4) == false);

console.log(isEqualArray(arr3, arr4)); 
console.assert(isEqualArray(arr3, arr4) == false);

console.log(isEqualArray(arr4, arr4)); 
console.assert(isEqualArray(arr4, arr4));

console.log(isEqualArray(arr4, arr5)); 
console.assert(isEqualArray(arr4, arr5)); 