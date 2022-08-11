const arr = [1, 2, 3, 4, 5, 6];

arr.forEach(item => {
    console.log(item);
});

arr.forEach((item, key) => {
    console.log(item, key);
});

arr.forEach((item, key, arr) => {
    console.log(item, key, arr);

    arr[key] = arr[key] * 2;
});

console.log(arr);