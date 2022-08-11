function sum(a, b) {
	return a + b;
}

let curry = function(fnctn) {
	return function(a) {
		return function(b) {
			return fnctn(a, b);
		}
	}
}

let currySum = curry(sum);

console.log(sum(1, 2));
console.log(currySum(1)(2));

let x = currySum(1);
let result = x(2);

console.log(result);

// https://javascript.info/currying-partials
function curryFromWeb(func) {
	return function curried(...args) {
		if (args.length >= func.length) {
			return func.apply(this, args);
		} else {
			return function(...args2) {
				return curried.apply(this, args.concat(args2));
			}
		}
	};
}

function longSum(a,b,c,d,e) {
	return a + b + c + d + e;
}

let curryLongSum = curryFromWeb(longSum);

console.log(longSum(1,2,3,4,5));

console.log(curryLongSum(1,2,3,4,5));
console.log(curryLongSum(1,2)(3,4)(5));
console.log(curryLongSum(1)(2)(3)(4)(5));