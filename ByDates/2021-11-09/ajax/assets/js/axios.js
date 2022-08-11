let script = document.createElement('script');

script.setAttribute('src', 'https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js');

document.body.append(script);

document.addEventListener('DOMContentLoaded', function() {
	document.querySelector('button').addEventListener('click', function() {
		axios.get('https://jsonplaceholder.typicode.com/posts').then(function (response) {
			// handle success
			console.log(response, response.data);
		}).catch(function (error) {
			// handle error
			console.log(error);
		}).then(function () {
			console.log('always');
		});
	});
});