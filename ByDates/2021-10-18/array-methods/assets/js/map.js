const arr = [1, 2, 3, 4, 5, 6];

let arr1 = arr.map(item => {
    return item * 2;
});

console.log(arr1);

// let arr2 = arr.map(item => {
//     return item % 2 == 0;
// });

let arr2 = arr.map(a => a % 2 == 0);

console.log(arr2);

let arr3 = arr.map(item => {
    return 1;
});

console.log(arr3);

