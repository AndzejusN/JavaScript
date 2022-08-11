let text = 'Lorem ipsum dolor sit amet consectetur adipisicing elit';

console.log(text.split(' ').map(t => t.toUpperCase()));
console.log(Array.from(text, t => t.toUpperCase()));