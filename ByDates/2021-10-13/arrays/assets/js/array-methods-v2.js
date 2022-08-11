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

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find

console.log(fruits[1].fruits);
console.log(fruits.find(x => x.type == 'berries').fruits);
console.log(fruits.find(function (x) {
	return x.type == 'berries';
}).fruits);

// console.log(fruits.find(function (x) {
// 	return x.type == 'Stone fruits';
// }).fruits);

let stoneFruits = fruits.find(function (x) {
	return x.type == 'Stone fruits';
});

if (stoneFruits) {
	console.log(stoneFruits.fruits);
} else {
	console.log('Stone fruits not found');
}

console.log(fruits.find(function (x) {
	return x.type == 'Stone fruits';
})?.fruits[1]);

console.log(fruits.find(function (x) {
	return x.fruits.length > 2;
})?.fruits);

console.log(fruits.find(function (x) {
	return x.fruits.length <= 2;
})?.fruits);

console.log(fruits.findIndex(function (x) {
	return x.fruits.length <= 2;
}));

console.log(fruits.findIndex(function (x) {
	return x.type == 'berries';
}));

// Sort without save
console.log(fruits.find(x => x.type == 'berries')?.fruits.sort());
console.log(fruits.find(function (x) {
	return x.type == 'berries';
})?.fruits.sort());

// Sort V2
let fruitsBerries = fruits.find(function (x) {
	return x.type == 'berries';
});

if (fruitsBerries && fruitsBerries.fruits) {
	let berriesSorted = fruitsBerries.fruits.sort();

	// fruitsBerries.fruits = fruitsBerries.fruits.sort();
	fruitsBerries.fruits = berriesSorted;

	console.log(fruits);
}

// Sort V3
for (let i = 0; i < fruits.length; i++) {
	if (fruits[i].type == 'citrus' && fruits[i].fruits) {
		fruits[i].fruits = fruits[i].fruits.sort();
	}
}

console.log(fruits);