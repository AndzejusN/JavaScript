// Parašykite „JavaScript“ funkciją, kuri priima eilutę kaip parametrą ir grąžina ilgiausią eilutės žodį.

function findLongestWord(str) {
	let strSplited = str.split(' ');
	
	let longestWord = strSplited.sort(function(a, b) { 
		return b.length - a.length;
	});

	return longestWord[0];
}
	  
let result = findLongestWord('Lorem ipsum, dolor sit amet consectetur');

console.log(result);
console.assert(result == 'consectetur');

// Parašykite „JavaScript“ funkciją, kuri priima eilutę kaip parametrą ir grąžina ilgiausią arba trumpiausią eilutės žodį.
function findSpecificWord(str, type) {
	let strSplited = str.split(' ');

	let words = strSplited.sort(function(a, b) {
		return b.length - a.length;
	});

	let result = null;

	switch (type) {
		case 'min':
			result = words[words.length - 1];
			break;
		case 'max':
			result = words[0];
			break;
	}

	return result;
}

let max = findSpecificWord('Lorem ipsum, dolor sit amet consectetur', 'max');
let min = findSpecificWord('Lorem ipsum, dolor sit amet consectetur', 'min');

console.log(max);
console.log(min);

console.assert(max == 'consectetur');
console.assert(min == 'sit');