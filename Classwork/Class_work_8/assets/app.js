class Movie {
    constructor(name, year, director, budget, income){
        this.name = name;
        this.year = year;
        this.director = director;
        this.budget = budget;
        this.income = income;
    }
    getIntroduction(){
        return `${this.name} was published ${this.year} by ${this.director}`;
    }
    getProfit(){
        return `Total income of this film for today is: ${this.income}`;
    }
}