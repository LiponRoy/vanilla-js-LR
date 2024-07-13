const person = {
	name: 'Lipon',
	age: 12,
	thana: 'kalkini',
};

const product = {
	ProductName: 'powder',
	brand: 'ACI',
	Location: 'Dhaka',
};

const result = { ...person, ...product };
console.log(result);
