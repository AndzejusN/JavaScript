let users = [
	{
		name: 'Antanas'
	},
	{
		name: 'Bronius'
	},
	{
		name: 'Tadas'
	},
	{
		name: 'Mantas'
	}
];

console.log(users);

users.splice(users.findIndex(u => u.name == 'Tadas'), 1);

console.log(users);
