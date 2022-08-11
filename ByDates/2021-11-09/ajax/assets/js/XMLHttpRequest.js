XMLHttpRequest.prototype.setUrl = function(type, url) {
	return this.open(type, url);
}

function loadPosts() {
	const request = new XMLHttpRequest();

	request.addEventListener('load', function() {
		if (this.status == 200) {
			let data = JSON.parse(this.responseText);

			console.log(data);
		}
	});

	request.setUrl('GET', 'https://jsonplaceholder.typicode.com/posts');

	request.send();
}

document.addEventListener('DOMContentLoaded', function() {
	document.querySelector('button').addEventListener('click', loadPosts);
})