function joinStuff() {
	return ([...arguments].join('')); 
}

let a = joinStuff(1,5,6,7,8),
	b = joinStuff('abc', 'def', 1, 2, 4);

console.log(a);
console.log(b);

console.assert(joinStuff(1,5,6,7,8) == 15678);
console.assert(joinStuff('abc', 'def', 1, 2, 4) == 'abcdef124');
