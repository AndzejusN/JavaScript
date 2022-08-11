const networkRequest = ({name, surname, email}, resolveFromPromise, rejectFromPromise) => {
	console.log('"networkRequest" reqeust');

	setTimeout((resolveFromPromise) => {
		console.log('"networkRequest" respose');

		const user = {name, surname, email};

		// resolveFromPromise(user);
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

(async function() {
	let data = [
		['A', 'C', 'ac@nonamez.mame'],
		['B', 'V', 'bv@nonamez.mame'],
		['C', 'D', 'cd@nonamez.mame'],
	];

	for (let d of data) {
		let u = null;

		try {
			u = await createUser(...d);
		} catch(err) {
			console.error(err.message);
		}

		console.log('afterAwait', u);
	}
})();