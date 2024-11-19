const makeDuplicateArray = (arr) => {
	let newArr = [...arr, ...arr];

	return newArr;
};

console.log(makeDuplicateArray([1, 2, 3, 4]));
