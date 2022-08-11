const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'pug');


const os = require('os');

app.get('/', function (req, res) {
  res.render('index', { title: 'Hey', message: 'Hello there!' })
})

app.get('/cpu', (req, res) => {
	res.send(JSON.stringify(os.cpus()));
});

function getUserFromDB(user_id) {
	return {
		name: 'K',
		surname: 'C',
		age: 30
	}
}

app.get('/users/:user_id', function(request, response) {
	console.log(request.params);

	let user = getUserFromDB(request.params.user_id);

	response.send('users');
});

app.listen(port, () => {
	console.log(`Example app listening at http://localhost:${port}`);
});

