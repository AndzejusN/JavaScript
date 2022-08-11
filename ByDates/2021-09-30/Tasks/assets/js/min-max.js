function getRandomInt(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	
	return Math.floor(Math.random() * (max - min) + min);
}

let a = getRandomInt(-5, 10),
	b = getRandomInt(-5, 10),
	c = getRandomInt(-5, 10),
	d = getRandomInt(-5, 10),
	e = getRandomInt(-5, 10);

console.log(a,b,c,d,e);

console.log('Min: ' + Math.min(a,b,c,d,e));
console.log(`Max: ${Math.max(a,b,c,d,e)}`);

console.log("\tsdfasdf\tasdfasf\nsdfasdf\nasfasf");