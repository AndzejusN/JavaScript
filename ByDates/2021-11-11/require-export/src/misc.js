let a = 5;
let b = 5;

module.exports.one = a;
module.exports.two = b;
module.exports.three = 5;

module.exports.calculate = function() {
	return module.exports.one + b + module.exports.three;
}