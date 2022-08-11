const _ = require('lodash'),
	os = require('os'),
	http = require('http');

module.exports = http.createServer(function(request, response) {
	response.end(JSON.stringify(os.cpus()));
}).on('listening', function() {
	console.log(`Started at ${this.address().port} port`)
});