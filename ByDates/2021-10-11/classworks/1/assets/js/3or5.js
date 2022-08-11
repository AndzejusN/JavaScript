// Patikrins skaičius nuo 1 iki (begalybės - 1)
// 	Jei skaičius dalijamas iš 3, pamatysime "Skaičius dalijasi iš 3"
// 	Jei skaičius dalijamas iš 5, pamatysime "Skaičius dalijasi iš 5"
// 	Jei skaičius dalijamas iš 3 ir 5, pamatysime "Skaičius dalijasi iš 3 ir iš 5"
// 	Jei skaičius nesidalija iš 3 arba 5, pamatysime Skaičius "Skaičius nesidalija nei iš 3 nei iš 5"

function fizzbuzz(){
	if (i % 3 === 0 && i % 5 === 0) {
		return 'Skaičius dalijasi iš 3 ir iš 5';
	} else if (i % 3 === 0) {
		return 'Skaičius dalijasi iš 3';
	} else if (i % 5 === 0) {
		return 'Skaičius dalijasi iš 5';
	} else {
		return 'Skaičius nesidalija nei iš 3 nei iš 5';
	}
}

console.log(checkNumber(15));