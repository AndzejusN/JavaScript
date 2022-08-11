const fs = require('fs'),
	url  = require('url'),
	path = require('path'),
	http = require('http');

const MIME_TYPES = {
	'.ico': 'image/x-icon',
	'.html': 'text/html',
	'.js': 'text/javascript',
	'.json': 'application/json',
	'.css': 'text/css',
	'.png': 'image/png',
	'.jpg': 'image/jpeg',
	'.jpeg': 'image/jpeg',
	'.wav': 'audio/wav',
	'.mp3': 'audio/mpeg',
	'.svg': 'image/svg+xml',
	'.pdf': 'application/pdf',
	'.doc': 'application/msword',
	'.eot': 'appliaction/vnd.ms-fontobject',
	'.ttf': 'aplication/font-sfnt'
};

const PUBLIC_PATH = './public';

http.createServer(function(request, response) {
	let filePath = request.url.slice(1);
		filePath = filePath !== '' ? filePath : 'index.html';
		filePath = url.parse(filePath).pathname;
		filePath = path.join(PUBLIC_PATH, path.normalize(filePath));

	fs.lstat(filePath, function(err, stats) {		
		if (err) {
			response.statusCode = 404;

			return response.end(`File "${request.url}" not found!`);
		}

		if (stats.isDirectory()) {
			response.statusCode = 403;

			return response.end(`"${request.url}" is forbiden!`);
		}

		let ext = path.parse(filePath).ext;
		
		response.setHeader('Content-Type', MIME_TYPES[ext] || 'text/plain');

		let stream = fs.createReadStream(filePath);

		return stream.pipe(response);
	});
}).on('listening', function() {
	console.log(`Started at ${this.address().port} port`)
}).listen(80);