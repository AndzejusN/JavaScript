
let movies = [
    new Movie('Film one', '2016', 'Trump Junior', '100', '150'),
    new Movie('Film two', '2001', 'Merkel Last', '200', '250')
]

for (let m of movies){
    console.log(`${m.getIntroduction()} AND ${m.getProfit()}`);
}
