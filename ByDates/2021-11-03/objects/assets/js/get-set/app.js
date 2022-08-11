let k = new User,
	k2 = new UserV2;

k.name = 'kkkkk'; // User => set name()

console.log(k);
console.log(k.name); // User => get name()

k2.setName('kkkkk');

console.log(k2.getName());