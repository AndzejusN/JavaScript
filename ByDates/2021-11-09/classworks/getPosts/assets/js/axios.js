let scriptAxios = document.createElement('script');

scriptAxios.setAttribute('src', 'https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js');

document.body.append(scriptAxios);

function getPostsAxios() {
	return new Promise(function(resolve, reject) {
		axios.get('https://jsonplaceholder.typicode.com/posts').then(function (response) {
			resolve(response.data);
		}).catch(function (error) {
			reject(error);
		});
	});
}

function getPostsAxiosOriginal() {
	return axios.get('https://jsonplaceholder.typicode.com/posts');
}