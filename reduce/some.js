const arr = [2, 3, 4, 5];

const result = arr.reduce((prevValue, currentVelue) => {
	return prevValue + currentVelue;
}, 0);

console.log(result);

// arr.reduce(() => {}, 0);
