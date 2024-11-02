const LongestWord = (myString) => {
	const convertToArrayBySpaces = myString.split(' ');

	let result = '';
	for (let word of convertToArrayBySpaces) {
		if (word.length > result.length) {
			result = word;
		}
	}

	return result;
};

const myString = 'I am a kingdom ok';

console.log(LongestWord(myString));
