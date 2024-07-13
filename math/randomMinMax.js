//Law=  Math.random() * (max - min) + min

const myRandomValue = (min, max) => {
	const ab = Math.floor(Math.random() * (max - min) + min);
	return ab;
};

console.log(myRandomValue(50, 100));
