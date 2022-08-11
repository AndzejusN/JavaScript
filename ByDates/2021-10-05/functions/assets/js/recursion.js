function plusplus(num, max) {
	console.log('plusplus ' + num);

	// num++;
	num = num + 1;

	if (num === max) {
		return num;
	}

	console.log('plusplus end ' + num);

	num = plusplus(num, max);

	return num;

	// return plusplus(num, max)
}

console.log(plusplus(1, 10));

function sumOfDigits(num) {
    if (num == 0) {
        return 0;
    }

    console.log('sumOfDigits', num, num % 10, Math.floor(num / 10));

    return num % 10 + sumOfDigits(Math.floor(num / 10));
}

console.log(sumOfDigits(4321));

function sumOfDigitsAsString(num) {
    num = num.toString();
    
    console.log('sumOfDigitsAsString', num, +num[0], num.slice(1));

    return num.length === 0 ? 0 : +num[0] + sumOfDigitsAsString(num.slice(1));
}

console.log(sumOfDigitsAsString(4321));
