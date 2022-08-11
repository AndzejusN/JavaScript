document.addEventListener('DOMContentLoaded', function() {
	document.querySelector('button').addEventListener('click', function() {
		fetch('https://jsonplaceholder.typicode.com/posts')
			.then(response => response.json())
			.then(data => console.log(data));
	});
});