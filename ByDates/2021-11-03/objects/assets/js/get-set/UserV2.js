class UserV2 {
	// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/Private_class_fields
	#name;

	getName() {
		return this.#name;
	}

	setName(otherName) {
		this.#name = otherName.toUpperCase();
	}
}