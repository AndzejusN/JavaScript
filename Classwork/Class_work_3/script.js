// Testuosime šį masyvą
let numbers = [5, 1, 7, 2, -9, 8, 2, 7, 9, 4, -5, 2, -6, -4, 6];
// 1. Parašykite funkciją arrDoubled, kuri sukuria ir grąžina naują masyvą, kurio elementai padauginti iš 2;
arrDoubled = (arr) => arr.map(x => x * 2);
console.log(arrDoubled(numbers));
// 2. Parašykite funkciją arrMultiplied, kuri sukuria ir grąžina naują masyvą, kurio elementai padauginti iš argumentu nurodyto skaičiaus
arrMultiplied = (arr,x) => arr.map(num => num * x);
console.log(arrMultiplied(numbers,5));
// 3. Parašykite funkciją arrCountTwos, kuri suskaičiuoja dvejetus masyve
arrCountTwos = (arr) => arr.filter(num => num === 2).length;
console.log(arrCountTwos(numbers));
// 4. Parašykite funkciją arrIndexOfFirst, kuri grąžintu pirmo surasto, argumentu nurodyto skaičiaus, indeksą masyve. Jei skaičius nerastas funkcija turi grąžinti -1.
function arrIndexOfFirst(arr,x){
  for (let i=0 ;i<arr.length;i++){
    if(arr[i] === x){
      return `Reikšmė: "${arr[i]}" Indeksas: ${i}`
    }
  }
  return '-1';
}
console.log(arrIndexOfFirst(numbers,2));
// 5. Parašykite funkciją arrIndexOfLast, kuri grąžintu paskutinio surasto, argumentu nurodyto skaičiaus, indeksą masyve. Jei skaičius nerastas funkcija turi grąžinti -1.
function arrIndexOfLast(arr,x){
  for (let i=arr.length ;i>0;i--){
    if(arr[i] === x){
      return `Reikšmė: "${arr[i]}" Indeksas: ${i}`
    }
  }
  return '-1';
}
console.log(arrIndexOfLast(numbers,2));
// 6. Parašykite funkciją reverseNumbers, kuri pakeis skaičius vietomis taip, kad pirmas skaičius taps paskutiniu, antras piešpaskutiniu, o buvęs paskutinis taps pirmu, priešpaskutinis bus antru.
// Pvz.: Turime skaičius 32243;
// Iškvietus funkciją rezultata bus: 34223
function reverseNumbers(num){
   let str = num.toString();
   return str.split('').reverse().join('');
}
console.log(reverseNumbers(32243));
// 7. Parašykite  funkciją, kuri kaip argumentą priims skaičių masyvą ir suras atitinkamai mažiausią ir didžiausią skaičių bei juos grąžins.
// Pvz.: Turime masyvą: [8,5,4,2,7,1,9]
// Iškvietus funkciją rezultata bus: "Mažiausas: 1, Didžiausas: 9"
function minMax(arr){
  let smallest = [arr[0]];
  let biggest = [arr[0]];
  for(let i=0; i<arr.length; i++){
    if (arr[i+1]<arr[i]) {
      smallest = arr[i+1];
    }
     else{
      biggest = arr[i];
    }
  }
  return `Mažiausias: ${smallest} Didžiausias: ${biggest}`;
}
console.log(minMax([8,5,4,2,7,1,9]));
// 8. Parašykite  funkciją checkForLetters, kuri priims du argumentus: Pirmas argumentas bus sakinys (arba žodžiai (-is)) ir antras argumentas bus raidė (kaip string). Funkcija turės suskaičiuoti kiek pirmu agrumentu nurodytame sakinyje/žodžiuose(-yje) yra antru argumentu nurodytų raidžių ir gražinti tų raidžių sumą su sakiniu pvz.: “Raidė “v” sakinyje rasta 4 kartus”.
function checkForLetters(str, x){
  let num = str.toString()
               .split('');
  let i = 0;
  let y = num.length;
  let result = 0;
  while (i < y){
    if(num[i] === x){
      result += 1;
      }
    i++;
    }
  return `Raidė: "${x}" Stringe sutinkama kartų: ${result}`;
}
console.log(checkForLetters('Geraaaas', 'a'));


// 9. Parašykite funckiją, kuri ras visus skaičius esančius msyve ir gražins juos kaip atsikrą masyvą. Naujame masyve visi skaičiai bus surikiuoti nuo mažiausio iki didžiausio.
// let arr2 = [8, 'Hello', 'click', 'u', 7, 4, 'a', 'a', 3, 6, "chair", ,10, 1];
// Iškvietus funkciją rezultata bus: [1,3,4,6,7,8,10];
let arr2 = [8, 'Hello', 'click', 'u', 7, 4, 'a', 'a', 3, 6, "chair", ,10, 1];

function nineFunc(arr){
  let arrClean =[];
  let j = 0;
  for (let i=0; arr.length>i; i++){
    if (arr[i] >= 0)
    {
      arrClean[j] = arr[i];
      j++;
    }
  }

  let arrCleanSort = arrClean.sort(function(a,b){return a-b;});
  return arrCleanSort;
}

console.log(nineFunc(arr2));
// 10. Sukurkite funkciję checkIfAllSmaller(arr, max), BE MASYVO METODŲ, kuri patikrintų ar visi skaičiai masyve yra didesni negu perduota reikšmė max;
// Pvz.: Turime masyvą: let arr1 = [2, 7, 6, 9, 5];
// Iškvietus funkciją checkIfAllSmaller(arr1, 5) rezultata bus: False
let arr3 = [2, 7, 6, 9, 5];
function checkIfAllSmaller(arr,x) {
  for (let i = 0; i < arr3.length; i++) {
    if(arr3[i]>=x){
      return false;
    }
  }
  return true;
}
console.log(checkIfAllSmaller(arr3,5));

// 11. Parašykite funkciją filteredByLetter, kuri turi du parametrus: 1. masyvas; 2. raidė. Funkcija sukuria ir grąžina naują masyvą, kuriame yra visi masyvo, nurodyto kaip pirmas parametras elemntai, kuriuose galima rasti antru paramatetru nurodytą raidę.
// Testuosime šį masyvą  //
let citiesOfLithuania = [
  'Vilnius',
  'Kaunas',
  'Klaipėda',
  'Šiauliai',
  'Panevėžys',
  'Alytus',
  'Marijampolė',
  'Mažeikiai',
  'Jonava',
  'Utena',
];

let filteredByLetter = (arr4, x) => arr4.filter(y => y.includes(x));

console.log(filteredByLetter(citiesOfLithuania, 'V'));

// 12. Parašykite penkias funkcijas:
// - calculateValue()
// - addition()
// - subtraction()
// - multiplication()
// - division()

function calculateValue(num1,num2,action){
  num1 = Number(num1);
  num2 = Number(num2);
  if (action == addition){
    return addition(num1,num2);
  }
  if (action == subtraction){
    return subtraction(num1,num2);
  }
  if (action == multiplication){
     return multiplication(num1,num2);
  }
  if (action == division){
    return division(num1,num2);
  }

}
function addition(num1,num2){
  return num1 + num2;
}
function subtraction(num1,num2){
  return num1-num2;
}
function multiplication(num1,num2){
  return num1 * num2;
}
function division(num1,num2){
  return num1 / num2;
}

console.log(calculateValue(5,10,multiplication));


// Pagridinė funkcija bus calculateValue(num1, num2, action), kuri priims tris argumentus: a) num1 - skaičius;b) num2 - skaičius; c) action - (matematinis veiksmas kaip string pvz. “substraction”). Būtina, kad funckija validuotų ar num1 ir num2 yra skaičiai.

// Priklausomai trečio argumento (action), su pirmais dviem (num1 ir num2) bus atliekamas matematinis veiksmas ir kviečiama viena iš keturių funkcijų, kurios priims du argumentus (num1 ir num2) ir grąžins atlikta veiksmą.

// Pastaba: šios funkcijos: addition(), subtraction(), multiplication(), division() turi būti kviečiamas calculateValue() viduje, o aprašomos išorėje.
