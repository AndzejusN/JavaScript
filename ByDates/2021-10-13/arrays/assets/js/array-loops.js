let fruits = [
	{
		type: 'citrus',
		fruits: ['oranges', 'grapefruits', 'mandarins', 'limes']
	},

	{
		type: 'berries',
		
		fruits: [
			'strawberries',
			'raspberries',
			'blueberries'
		]
	},

	{
		type: 'tropical',
		fruits: [
			'bananas',
			'mangoes'
		]
	},

	{
		type: 'Stone fruits',
		fruits: [
			'nectarines',
			'apricots',
			'peaches',
			'plums',
		]
	},

	{
		type: 'Stone fruits',
	},

	// {
	// 	type: 'Stone fruits',
	// 	fruits: [
	// 		'nectarines v2',
	// 		'apricots v2',
	// 		'peaches v2',
	// 		'plums v2',
	// 	]
	// }
];

let i = 0;

while (i < fruits.length) {
	// console.log(`Type: ${fruits[i].type}, fruit: ${fruits[i].fruits}`);
	
	if (fruits[i].fruits) {
		console.log(`Type: ${fruits[i].type}, fruit: ${fruits[i].fruits.toString()}`);
	}

	i++;
}

for (let i = 0; i < fruits.length; i++) {
	if (fruits[i].type == 'citrus' && fruits[i].fruits) {
		fruits[i].fruits = fruits[i].fruits.sort();
	}
}

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in
for (let key in fruits) {
	console.log(key, fruits[key]);

	if (fruits[key].fruits) {
		console.log(`Type: ${fruits[key].type}, fruit: ${fruits[key].fruits.toString()}`);
	}
}

console.log('type' in fruits[1], 'fruits' in fruits[1], 'apple' in fruits[1]);
console.log(fruits, 0 in fruits, '3' in fruits, 'apple' in fruits);

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of
for (let value of fruits) {
	console.log(value);

	if (value.fruits) {
		console.log(`Type: ${value.type}, fruit: ${value.fruits.toString()}`);
	}
}

console.log(fruits[1].fruits.includes('oranges'), fruits[1].fruits.includes('strawberries'));

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
const test = {type: 'Stone fruits'};
console.log(fruits[4], test, fruits[4] == test, fruits[4].type == test.type);