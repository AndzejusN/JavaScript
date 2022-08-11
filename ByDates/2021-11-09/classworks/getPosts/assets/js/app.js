function createAppend(name, element) {
	let thead = document.createElement(name);

	element.appendChild(thead);

	return thead;
}

function fillTable(data) {
	let table = document.querySelector('table');

	table.innerHTML = '';

	setTimeout(() => {
		if (data.length > 0) {
			let thead = createAppend('thead', table);

			let tr = createAppend('tr', thead);

			let titles = Object.keys(data[0]);

			for (let t of titles) {
				let th = createAppend('th', tr);

				th.innerText = t;
			}

			let tbody = createAppend('tbody', table);

			for (let d of data) {
				let tr = createAppend('tr', tbody);

				let values = Object.values(d);

				for (v of values) {
					let td = createAppend('td', tr);

					td.innerText = v;
				}
			}
		}
	}, 3000);
}

document.addEventListener('DOMContentLoaded', function() {
	for (let button of document.querySelectorAll('#methods > button')) {
		button.addEventListener('click', function() {
			let name = this.getAttribute('data-function-name');

			console.log(name, window[name])

			if (window[name] && typeof window[name] == 'function') {
				if (name == 'getPostsFetchOiriginal') {
					window[name]().then(response => response.json()).then(data => fillTable(data));
				} else if (name == 'getPostsAxiosOriginal') {
					window[name]().then(function (response) {
						fillTable(response.data);
					}).catch(function (error) {
						alert(error.message);
					});
				} else {
					window[name]().then(posts => {
						fillTable(posts.filter(p => p.userId ==2 ));
					});
				}
			}
		});
	}
});