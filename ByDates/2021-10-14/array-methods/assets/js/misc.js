let arr1 = [1, 2, 3];
let arr2 = ['a', 'b', 'c'];

let arrs = arr1.concat(arr2, [[1]], {});

arrs[6] = arrs[6].concat(arr1);

console.log(arrs);

console.log(arrs.indexOf('a'));
console.log(arrs.includes('a'));

console.log(arrs.indexOf('r'));
console.log(arrs.includes('r'));

console.log(arrs.indexOf(1) === -1);
console.log(arrs.indexOf('r') === -1);