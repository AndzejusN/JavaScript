// Parašykite funkciją, pavadintą getLaugh(), kuri turi vieną parametrą, skaičių, kuris žymi sugrįžtančių „ha“ skaičių.

function getLaugh(num) {
    let result = '';

    for (let i = 0; i < num; i++) {
        result += 'ha';
    }

    result += '!';

    return result;
}

console.assert(getLaugh(4) === 'hahahaha!');
console.assert(getLaugh(8) === 'hahahahahahahaha!');

console.log(getLaugh(8));

let getLaughShort = num => 'ha'.repeat(num) + '!';

console.log(getLaughShort(4));

console.assert(getLaughShort(4) === 'hahahaha!');
console.assert(getLaughShort(8) === 'hahahahahahahaha!');

let getLaughShortArray = num => (new Array(num)).fill('ha').join('') + '!';

console.assert(getLaughShortArray(4) === 'hahahaha!');
console.assert(getLaughShortArray(8) === 'hahahahahahahaha!');