let server = require('./src/web.js');
// let server = require('/Users/kiril/Works/code-academy/JS/2021-11-10/nodejs/web.js');
// let server = require('../../2021-11-10/nodejs/web.js');

console.log('hello world');

// server.listen(3000);

let misc = require('./src/misc.js');

console.log(misc);
console.log(misc.calculate());

let Square = require('./src/classes/Square');

const SQUARE_AREA_WIDTH = 1000;

let square = new Square(100);

// let square = new (require('./src/classes/Square'))(1000);


console.log(square.area());