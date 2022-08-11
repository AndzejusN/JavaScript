const networkRequest = ({name, surname, email}, resolveFromPromise, rejectFromPromise) => {
	console.log('"networkRequest" reqeust');

	setTimeout((resolveFromPromise) => {
		console.log('"networkRequest" respose');

		const user = {name, surname, email};

		// rejectFromPromise(new Error('Server temporarily not available'));

		if (Math.random() < 0.5) {
			resolveFromPromise(user);
		} else {
			rejectFromPromise(new Error('Server temporarily not available'));
		}
	}, 2000, resolveFromPromise);
};


function createUser(name, surname, email) {
	return new Promise(function(resolve /* then */, reject /* catch */) {
		console.log(`"Promise" start for "${name}"`);

		setTimeout(function(argument) {
			console.log('validation');

			networkRequest({name, surname, email}, resolve, reject);
		}, 2000);

		console.log(`"Promise" end for "${name}"`);
	});
}

let data = [
	['A', 'C', 'ac@nonamez.mame'],
	['B', 'V', 'bv@nonamez.mame'],
	['C', 'D', 'cd@nonamez.mame'],
];

const div = document.querySelector('div');

setTimeout(function() {
	document.querySelector('div').setAttribute('v-cloak', '');

	for (let d of data) {
		let u = createUser(...d);

		console.log({stte: u});

		setTimeout(function() {
			console.log(d, {stte: u});

			u.then(function(result) {
				console.log({result});


			}).catch(function(err) {
				console.error(err);
			}).then(function() { // finally
				document.querySelector('div').removeAttribute('v-cloak');
			});

			console.log('after then');
			
			// u.then(function(result) {
			// 	console.log({result});
			// }, function(err) {
			// 	console.error(err);
			// });
		}, 6000);

		// createUser(...user).then(function(result) {
		// 	console.log(result);

		// }).catch(function(err) {
		// 	console.error(err);
		// });
	}
}, 3000);