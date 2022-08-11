let movies = [
    new Movie('Film one', '2016', 'Trump Junior', '100 mln USD', '10 mln USD'),
    new Movie('Film two', '2001', 'Merkel Last', '200 mln Euro', '50 mln Euro')
]

for (let m of movies){
    console.log(`${m.getIntroduction()} AND ${m.getProfit()}`);
}