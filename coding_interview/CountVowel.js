const CountVowel = (myString) => {
	const vowels = ['a', 'e', 'i', 'o', 'u'];

	let count = 0;
	// in javascript itarate any string using for each loop
	for (let char of myString.toLowerCase()) {
		if (vowels.includes(char)) {
			count++;
		}
	}

	return count;
};

const myString = 'Bangladesh';

console.log(CountVowel(myString));
