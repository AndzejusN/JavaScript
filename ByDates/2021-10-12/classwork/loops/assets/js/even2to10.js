// Naudodami for, while, doWhile ciklus parašykite visus lyginius skaičiuos nuo 2 iki 10;

for (let i = 2; i <= 10; i += 2) {
    console.log('for', i);
}

let i = 2;

while (i <= 10) {
    console.log('while', i);
    i += 2;
}

let j = 2;

do {
    console.log('doWhile', j);
    j += 2;
} while (j <= 10);
