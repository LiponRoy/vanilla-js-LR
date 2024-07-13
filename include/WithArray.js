const myArray = ['sornali', 'kabbo', 'valo'];

const myArr = (arr) => {
	if (arr.includes('kabbo')) {
		console.log('kabbo got...');
		return;
	}
	console.log('Not found...');
};

myArr(myArray);
