const isPalindrome = (myString) => {
	// palindrome mean original string and reverse string are same meaning
	// so we have original string and we will convert reverse string
	const reverseString = myString.split('').reverse().join('');
	// now compare original string and reverse string is smae or not
	// is same then it is palindrome
	if (reverseString === myString) {
		console.log('This is palindrome String');
	} else {
		console.log('This is Not palindrome String');
	}
};

const myString = 'racecar';

isPalindrome(myString);
