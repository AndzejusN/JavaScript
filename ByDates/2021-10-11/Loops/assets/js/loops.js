function callWhile(i) {
	while (5 > i) {
		console.log(i);

		i++;
	}

	console.log('end of while');
}

// callWhile(0);
// callWhile(3);
callWhile(5);

function callDoWhile(i) {
	do {
		console.log(i);

		i++;
	} while (5 > i)

	console.log('end of doWhile');
}

// callDoWhile(0);
// callDoWhile(3);
callDoWhile(5);

function callFor(x) {
	for (let i = 0; i < x; i++) {
		console.log(i);
	}

	console.log('end of for');
}

function callForReverse(x) {
	for (let i = x - 1; i >= 0; i--) {
		console.log(i);
	}

	console.log('end of callForReverse');
}

callFor(5);
callForReverse(5);