Array.prototype.makeAllToUpperCase = function() {
	return this.map(a => a.toUpperCase());
};

let arr = ['a', 'b', 'c'];

// arr = arr.map(a => a.toUpperCase());

let barr = ['d', 'e', 'f'];

// barr = barr.map(b => b.toUpperCase());

console.log(arr.makeAllToUpperCase(), barr.makeAllToUpperCase());