function getPostsFetch() {
	return new Promise(function(resolve, reject) {
		fetch('https://jsonplaceholder.typicode.com/posts')
			.then(response => response.json())
			.then(data => resolve(data));
	});
}

function getPostsFetchOiriginal() {
	return fetch('https://jsonplaceholder.typicode.com/posts');
}