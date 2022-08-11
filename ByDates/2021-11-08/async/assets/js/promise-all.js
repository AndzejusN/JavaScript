const networkRequest = ({name, surname, email}, resolveFromPromise, rejectFromPromise) => {
	console.log('"networkRequest" reqeust');

	setTimeout((resolveFromPromise) => {
		console.log('"networkRequest" respose');

		const user = {name, surname, email};

		// resolveFromPromise(user);

		if (Math.random() < 0.5) {
			resolveFromPromise(user);
		} else {
			rejectFromPromise(new Error('Server temporarily not available'));
		}
	}, 2000, resolveFromPromise);
};


function createUser(name, surname, email, time) {
	return new Promise(function(resolve /* then */, reject /* catch */) {
		setTimeout(function(argument) {
			console.log(`validation => ${time} ${name}`);

			networkRequest({name, surname, email}, resolve, reject);
		}, time);
	});
}

let data = [
	['A', 'C', 'ac@nonamez.mame'],
	['B', 'V', 'bv@nonamez.mame'],
	['C', 'D', 'cd@nonamez.mame'],
];

const div = document.querySelector('div');

// Promise.all([
// 	createUser(...data[0], 3000),
// 	createUser(...data[1], 1000),
// 	createUser(...data[2], 2000)
// ]).then((values) => {
// 	console.log('then', values);
// }).catch(err => {
// 	console.error('catch', err);
// });

Promise.allSettled([
	createUser(...data[0], 3000),
	createUser(...data[1], 1000),
	createUser(...data[2], 2000)
]).then((values) => {
	console.log('then', values);
});