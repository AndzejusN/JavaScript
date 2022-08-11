let cities = ['Vilnius', 'Kaunas', 'Klaipėda', 'Šiauliai', 'Panevėžys', 'Marijampolė'];

let getFavoriteCity = (name, surname, city) => `${name} ${surname} favorite city is ${city}`;

console.log(getFavoriteCity('Ernestas', 'Rutkauskas', cities[5]));