// function findMin(a, b) {
// 	return Math.min(a,b);
// }

let findMin = (a, b) => {
	return Math.min(a,b);
}

console.log(findMin(1,5));
console.log(findMin(3,5));
console.log(findMin(7,5));

function formatLogMessage(message) {
	message = `[${(new Date).toISOString()}] => (${message})`;

	return message;
}

let formatLogMessageArrow = message => {
	message = `[${(new Date).toISOString()}] => (${message})`;

	return message;
}

console.log(formatLogMessageArrow('Hello World'));

// let formatLogMessageV2 = message => {
// 	return `[${(new Date).toISOString()}] => (${message})`;
// }

let formatLogMessageArrowV2 = message => `[${(new Date).toISOString()}] => (${message})`;

console.log(formatLogMessageArrowV2('Hello World'));

const sumOfDigits = num => {
    if (num == 0) {
        return 0;
    }

    return num % 10 + sumOfDigits(Math.floor(num / 10));
}

console.log(sumOfDigits(12345));

// let sumOfDigitsV2 = number => {
//     let lastDigit = number % 10;
//     let slicedNumber = Math.floor(number / 10);
  
//     return number === 0 ? 0 : lastDigit + sumOfDigitsV2(slicedNumber);
// }

let sumOfDigitsV2 = number => number === 0 ? 0 : number % 10 + sumOfDigitsV2(Math.floor(number / 10));

console.log(sumOfDigitsV2(12345));


const getData = () => 'test'

console.log(getData());

console.log(((a,b) => a + b)(5,6));

