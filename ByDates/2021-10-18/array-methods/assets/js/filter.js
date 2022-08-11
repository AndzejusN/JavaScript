const arr = [1, 2, 3, 4, 5, 6, '7', 7];

console.log(arr.filter(v => v > 0));
console.log(arr.filter(v => typeof v == 'number'));
console.log(arr.filter(v => v % 2 == 0));
console.log(arr.filter(v => v % 2 != 0));