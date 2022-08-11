function customName(x = prompt('test'), y = -2, c = 'c', d) {
	function customNameV2(x = 'x', y = 'y', c = 'cV2', d = 'd') {
		console.log('customNameV2', x, y, c, d);
	}

	console.log('customName', x, y, c, d);

	customNameV2(x, y, c, d);
	customNameV2(...arguments);
	customNameV2();

	return 'lol';
}

customName(4, 5);
customName(4);
customName();

let customArrowName = (x = customName(), y = -2, c = 'c', d) => {
	let customArrowV2Name = (x = 'x', y = 'y', c = 'cV2', d = 'd') => {
		console.log('customArrowV2Name', x, y, c, d);
	}

	((x = 'x', y = 'y', c = 'cV2', d = 'd') => {
		console.log('customSelfArrowName', x, y, c, d);
	})(x, y, c, d)

	console.log('customArrowName', x, y, c, d);

	customArrowV2Name(x, y, c, d);
	customArrowV2Name();
}


customArrowName(4, 5);
customArrowName(4);
customArrowName(null, null, null, 'd');
customArrowName(null, undefined, undefined, 'd');
customArrowName('d');
customArrowName();