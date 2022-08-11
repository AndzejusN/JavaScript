function getPostsXMLHttpRequest() {
	return new Promise(function(resolve, reject) {
		const request = new XMLHttpRequest();

		request.addEventListener('load', function() {
			if (this.status == 200) {
				let data = JSON.parse(this.responseText);

				resolve(data);
			}
		});

		request.open('GET', 'https://jsonplaceholder.typicode.com/posts');

		request.send();
	});
}