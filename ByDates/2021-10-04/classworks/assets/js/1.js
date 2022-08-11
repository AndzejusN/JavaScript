// Sukurkite du kintamuosius x ir y ir priskirkite jam reikšmes 50 ir 10.
let x = 50,
	y = 10;

// Atlikite šiuos veiksmus, naudodami Sudėtinius paskyrimų operatorius, su  sukurtais kintamaisiais:
// Sukuriamas naujas kintamasis “suma”, kuris yra lygus x kintamojo vertei sudėtai su y kintamuoju; 
let sum = x + y;

// Sukuriamas naujas kintamasis “skirtumas”, kuris yra lygus x kintamojo vertei skirtumui su y kintamuoju; 
let difference = x - y;

// Sukuriamas naujas kintamasis “daugyba”, kuris yra lygus x kintamojo vertei padaugintai iš y kintamuoju; 
let multiplication = x * y;

// Sukuriamas naujas kintamasis “dalyba”, kuris yra lygus x kintamojo vertei padalintai iš y kintamuojo. 
let division = x / y;

let result = {
	sum: sum,
	difference: difference,
	
	multiplication,
	division
};

console.log(result);