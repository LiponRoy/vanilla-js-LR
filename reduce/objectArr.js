const car = [
	{
		make: 'Toyota',
		model: 'Camry',
		year: 2022,
		price: 2000,
	},
	{
		make: 'Honda',
		model: 'Civic',
		year: 2021,
		price: 4000,
	},
	{
		make: 'Ford',
		model: 'Mustang',
		year: 2020,
		color: 'Red',
		price: 3000,
	},
];

const totalPrice = car.reduce((priv, current) => {
	return priv + current.price;
}, 0);

console.log(totalPrice);
