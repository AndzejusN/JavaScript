// Parašykite funkciją, kuri grąžiną švarų masyvą.

const cleanArray = (arr) => array.filter((el) => el);

const data = [0, 1, false, 2, undefined, '', 3, null];

console.log(cleanArray(data));
console.assert(JSON.stringify(cleanArray(data)) == JSON.stringify([1, 2, 3]));
