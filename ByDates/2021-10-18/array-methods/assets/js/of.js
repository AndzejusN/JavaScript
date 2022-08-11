let text = 'Lorem ipsum dolor sit amet consectetur adipisicing elit';

console.log([1, 2, 3, 'a', 'b', 'c']);
console.log(Array.of(1, 2, 3, 'a', 'b', 'c'));
console.log(Array.of(...Array.from(text, t => t.toUpperCase())));