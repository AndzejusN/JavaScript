let script = document.createElement('script');

script.setAttribute('src', 'https://code.jquery.com/jquery-3.6.0.min.js');

document.body.append(script);

document.addEventListener('DOMContentLoaded', function() {
	document.querySelector('button').addEventListener('click', function() {
		// jQuery.getJSON('https://jsonplaceholder.typicode.com/posts', function(response) {
		// 	console.log(response);
		// });

		// jQuery.ajax({
		// 	url: 'https://jsonplaceholder.typicode.com/posts',
		// 	dataType: 'json',
		// 	success: function(response) {
		// 		console.log(response);
		// 	}
		// });
		
		jQuery.ajax({
			url: 'https://jsonplaceholder.typicode.com/posts',
			// dataType: 'json'
		}).done(function(response) {
			console.log(response);
		}).fail(function() {
			alert('error');
		}).always(function() {
			alert('complete');
		});
	});
});