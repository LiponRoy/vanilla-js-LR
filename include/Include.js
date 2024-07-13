const myString = 'I love my country very much';

const myStr = (str) => {
	if (str.includes('love')) {
		console.log('Love got...');
		return;
	}
	console.log('Not found...');
};

myStr(myString);

// another............................................

const fruits = ['apple', 'banana', 'cherry', 'date'];

// Check if either 'banana' or 'cherry' is in the array
const hasBananaOrCherry =
	fruits.includes('banana') || fruits.includes('cherry'); // Returns true
