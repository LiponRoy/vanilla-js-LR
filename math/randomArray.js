let arr = [];
const myRandomValue = (min, max) => {
	for (let i = 0; i < 5; i++) {
		const ab = Math.floor(Math.random() * (max - min) + min);
		arr.push(ab);
	}
};

myRandomValue(1, 20);

console.log(arr);
