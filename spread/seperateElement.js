const person = {
	name: 'Lipon',
	age: 12,
	thana: 'kalkini',
};

const { age, ...other } = person;

console.log(age);
console.log(other);
