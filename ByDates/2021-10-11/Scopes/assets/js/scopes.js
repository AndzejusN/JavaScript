// {
// 	let xGlobal = 'xGlobal';
// }

let xGlobal = 'xGlobal';

function customFunctionName() {
	let xLocal = 'xLocal';

	console.log('customFunctionName ==>', xGlobal);
	console.log('customFunctionName ==>', xLocal);

	function customChildFunctionName() {
		let xLocalV2 = 'xLocalV2';

		console.log('customChildFunctionName ==>', xGlobal);
		console.log('customChildFunctionName ==>', xLocal);
		console.log('customChildFunctionName ==>', xLocalV2);
	}

	customChildFunctionName();

	// console.log('customFunctionName ==>', xLocalV2);
}

customFunctionName();

console.log(xGlobal);
// console.log(xLocal);
// console.log(xLocalV2);