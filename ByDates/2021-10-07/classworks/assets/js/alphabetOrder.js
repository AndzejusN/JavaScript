function alphabetOrder(str) {
	str = str.toString();

	return str.split('').sort().join(''); 
}

let result = alphabetOrder('alphabetical');

console.assert(result == 'aaabcehillpt');
console.log(result);

result = alphabetOrder(3583745261);

console.assert(result == 1233455678);
console.log(result);
