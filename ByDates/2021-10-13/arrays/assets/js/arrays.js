let arr = [1, 2, 3];
let arrObj = new Array(1, 2, 3);
let fruits = ['Apple', 'Orange', 'Plum', 'Banana', 'Cherry'];

console.log(arr, typeof arr);
console.log(arrObj, typeof arrObj)
console.log(fruits, typeof fruits);
console.log(Array.isArray(arr), Array.isArray(arrObj), Array.isArray(fruits));
console.log(Array.isArray(arr), Array.isArray({}), Array.isArray(1), Array.isArray('abc'));

// ================================= //

console.log(fruits, typeof fruits);

console.log(fruits[0], typeof fruits[0]);
console.log(fruits[1], typeof fruits[1]);
console.log(fruits[2], typeof fruits[2]);

let randomArr = [
	1,
	'abc',
	[],
	{}, 
	function() {
		return 'hello world';
	},
	9
];

randomArr[6] = 'six';

console.log(randomArr);

console.log(randomArr[4](), typeof randomArr[4], typeof randomArr[4]());
console.log(randomArr[0], typeof randomArr[0]);
console.log(randomArr[2], typeof(randomArr[2]), Array.isArray(randomArr[2]));
console.log(randomArr[3], typeof randomArr[3], Array.isArray(randomArr[3]));

console.log(randomArr[0] + randomArr[5]);

console.log(randomArr);

randomArr[0] = '1.1';

console.log(randomArr);

randomArr[5] = 15; // overwrite
randomArr[7] = 15; // new
randomArr[8] = 'last'; // new
randomArr[9] = { name: 'John' }; // new

console.log(randomArr);
console.log(randomArr.length);

console.log(randomArr[0]);
console.log(randomArr[randomArr.length - 1]);
console.log(randomArr[9].name);

randomArr[9].subname = 'Johnkovic';

console.log(randomArr[9].subname);
console.log(randomArr[9]);

randomArr[11] = function(x) {
	alert(x);
};

function customAlert(x) {
	return alert(x);
}

randomArr[12] = customAlert;

// randomArr[11]('text');
// randomArr[12]('text');

console.log(randomArr);

delete randomArr[6];

console.log(randomArr, randomArr.length);

reindexedRandomArr = randomArr.filter(() => true);
// reindexedRandomArr = randomArr.filter(() => 1);
// reindexedRandomArr = randomArr.filter(function(val) {
// 	return typeof val == 'string';
// });

console.log(reindexedRandomArr, reindexedRandomArr.length);

// let obj = {
// 	one: 1,
// 	two: 2
// };

// console.log(obj);