import Vehicle from './Vehicle';

export default class Boat extends Vehicle {
	getWheelsNumberText() {
		// console.log('from parent: ', super.getWheelsNumberText());

		return `Are you serious?`;
	}

	getType() {
		return 'Cruiser';
	}

	getFuelType() {
		return [2];
	}
}