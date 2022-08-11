let scriptJQuery = document.createElement('script');

scriptJQuery.setAttribute('src', 'https://code.jquery.com/jquery-3.6.0.min.js');

document.body.append(scriptJQuery);

function getPostsJQuery() {
	return new Promise(function(resolve, reject) {
		jQuery.ajax({
			url: 'https://jsonplaceholder.typicode.com/posts',
			// dataType: 'json'
		}).done(function(response) {
			resolve(response);
		}).fail(function() {
			reject('error');
		});
	});
}