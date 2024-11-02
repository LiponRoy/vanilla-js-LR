const reverseString = (myString) => {
	// string with split("") method and only dubble cottetion  for converting every digit with spaces and other to
	// an array ---> then reverse method for reverse every array element from last to fast
	// then join('') for convert array to string
	return myString.split('').reverse().join('');
	// output // dnalrehtom ym si hsedalgnaB

	// but split(" ") with space mean convert array by spaces only
	// and join(' '); with space mean convert array to string by spaces only
	// as a result string will reverse but every word will not reverse
	// return myString.split(' ').reverse().join(' ');
	// out put//  motherland my is Bangladesh
};

const myString = 'Bangladesh is my motherland';

console.log(reverseString(myString));
