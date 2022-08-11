let num = 0;

switch (num) {
	case 1:
		console.log('solo');
		break;
	case 2:
		console.log('duetas');
		break;
	case 3:
		console.log('trio');
		break;
	case 4:
		console.log('kvartetas');
		break;

	default:
		console.log('ne grupė');
}

const PAYMENT_STATUS = '4';

switch (PAYMENT_STATUS) {
	case 'COMPLETED':
		console.log('next');
		break;
	case 'CANCELED': 
		console.log('stop');
		break;
	default:
		console.log('in progress');
}

if (PAYMENT_STATUS == 'COMPLETED') {
	console.log('next');
} else if (PAYMENT_STATUS == 'CANCELED') {
	console.log('stop');
} else {
	console.log('in progress');
}