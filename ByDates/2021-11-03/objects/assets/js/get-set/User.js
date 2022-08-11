class User {
	get name() {
		return this.secretProperty;
	}

	set name(otherName) {
		this.secretProperty = otherName.toUpperCase() + ' after setter';
	}
}