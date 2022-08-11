let hello = 'Hello World';

console.log(hello);

let a = 1,
	b = 2;

console.log(a + b);

const os = require('os');

console.log(os.cpus());

const fs = require('fs');
const https = require('https');

https.get('https://jsonplaceholder.typicode.com/posts', response => {
	let result = '';

	response.on('data', function(data) {
		result += data.toString();
	});

	response.on('end', function(data) {
		fs.writeFileSync('./public/files/posts.json', result);
	});
});