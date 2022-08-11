let user = {
	name: 'Kr',
	surname: 'Cl'
};

let info = '<h2>User:</h2>';
	
	info += '<h4>Description</h4>';

	info += '<p>';
	info += `Name: ${user.name}, Surname: ${user.surname}`;
	// info += 'Name: ${user.name}, Surname: ${user.surname}';
	info += '</p>';

	info += '<p>';
	info += 'Address...';
	info += '</p>';


let userInfoOutput = document.getElementById('main');

userInfoOutput.innerHTML = info;