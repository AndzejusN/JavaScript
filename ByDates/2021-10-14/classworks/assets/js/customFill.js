// Parašykite funkciją (nenaudojant "FOR" ciklo), kuri grąžina masyvą su pateiktu formatu:
// (3, 'a') => ['a', 'a', 'a']
// (4, 'b') => ['b', 'b', 'b', 'b']

let customFill = (size, value) => (new Array(size)).fill(value);

console.log(customFill(3, 'a'));
// console.assert(customFill(3, 'a') == ['a', 'a', 'a']);

console.log(JSON.stringify(customFill(3, 'a')), JSON.stringify(['a', 'a', 'a']));
console.assert(JSON.stringify(customFill(3, 'a')) == JSON.stringify(['a', 'a', 'a']));

console.log(customFill(4, 'b'));
// console.assert(customFill(4, 'b') == ['b', 'b', 'b', 'b']);

console.log(JSON.stringify(customFill(4, 'b')), JSON.stringify(['b', 'b', 'b', 'b']));
console.assert(JSON.stringify(customFill(4, 'b')) == JSON.stringify(['b', 'b', 'b', 'b']));
