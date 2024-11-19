const MissingElement = (missingArray) => {
	const count = 10;
	const newArr = [];

	for (let i = 0; i < count; i++) {
		!missingArray.includes(i) && newArr.push(i);
	}

	return newArr;
};

const missingArray = [2, 8, 1, 4];

console.log(MissingElement(missingArray));
