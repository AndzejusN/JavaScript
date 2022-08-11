// Parašykite funkciją (arrow function), pavadintą getHighestNumber, kurios tikslas yra leisti vartotojui, kaip argumentus nurodyti bet kokius skaičius ir grąžinama bus didžiausias skaičius iš visų nurodytų.

// Surasti didžiausia skaičių butina panadojus ciklą

const getHighestNumber = (...args) => {
	let highestNumber = args[0] || null;
	
	for (let i = 0; i < args.length; i++) {
		// if (args[i] > highestNumber) {
		// 	highestNumber = args[i];
		// }
		
		highestNumber = Math.max(highestNumber, args[i]);
	}

	return highestNumber;
}

console.log(getHighestNumber());
console.assert(getHighestNumber(34,7,8,55,6,56,7,9,52) == 56);