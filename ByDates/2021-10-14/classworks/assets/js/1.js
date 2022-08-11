// Sukurkite masyvą (Array) styles su elementais „Jazz“ ir „Blues“.

let arr = ['Jazz', 'Blues'];

console.log(arr);

// Masyvo (Array) pabaigoje pridėkite „Rock-n-Roll“.
arr.push('Rock-n-Roll');

console.log(arr);

// Viduryje esančią reikšmę pakeiskite „Classics“.
arr[1] = 'Classics';
// arr.splice(1, 1, 'Classics');

console.log(arr);

// Panaikinkite pirmą masyvo (Array) elementą ir parodykite jį.
arr.shift();

console.log(arr);

// Pridėkite į masyvo pradžią „Rap“ ir „Reggae“ į masyvą.
arr.unshift('Rap', 'Reggae');

console.log(arr);