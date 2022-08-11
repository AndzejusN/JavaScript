// Panaudojant ciklus parodykitė tokias reikšmes:
// 111222333444555666777888999
// 11 12 13 21 22 23 31 32 33

let result = '';

for (let i = 1; i <= 9; i++) {
	for (let j = 1; j <= 3; j++) {
		result += i;
	}
}

console.log(result);
console.assert(result == '111222333444555666777888999');

result = '';

for (let i = 1; i <= 3; i++) {
	for (let j = 1; j <= 3; j++) {
		result += `${i}${j} `;
	}
}

result = result.trim();

console.log(result);
console.assert(result == '11 12 13 21 22 23 31 32 33');

let resultDoWhile = '';

let i = 1;

do {
    let j = 1;

    while (j <= 3) {
        resultDoWhile += `${i}${j} `;
        j++
    }

    i++;
} while (i <= 3)

resultDoWhile = resultDoWhile.trim();

console.log(resultDoWhile);
console.assert(resultDoWhile == '11 12 13 21 22 23 31 32 33');