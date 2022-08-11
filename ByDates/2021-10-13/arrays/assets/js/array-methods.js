function getArray() {
	return ['Apple', 'Orange', 'Plum', 'Banana', 'Cherry'];
}

console.log('POP');

let fruits = getArray();

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/pop
console.log(fruits);

console.log(fruits, fruits.pop());
console.log(fruits, fruits.pop());
console.log(fruits, fruits.pop());

console.log('PUSH');

fruits = getArray();

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push
console.log(fruits);

console.log(fruits, fruits.push('Apricots'));
console.log(fruits, fruits.push('Blackberries'));
console.log(fruits, fruits.push('Blueberries'));
// console.log(fruits, fruits.push('Apricots', 'Blackberries' , 'Blueberries'));

let cranberriesIndex = fruits.push('Cranberries');

console.log(fruits[cranberriesIndex - 1], cranberriesIndex);

fruits.push('Elderberries');

console.log(fruits);

console.log('SHIFT');

fruits = getArray();

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/shift
console.log(fruits);

console.log(fruits, fruits.shift());
console.log(fruits, fruits.shift());
console.log(fruits, fruits.shift());

console.log('UNSHIFT');

fruits = getArray();

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/unshift
console.log(fruits);

console.log(fruits, fruits.unshift('Apricots'));
console.log(fruits, fruits.unshift('Blackberries'));
console.log(fruits, fruits.unshift('Blueberries'));
// console.log(fruits, fruits.unshift('Apricots', 'Blackberries', 'Blueberries'));
