// Sort() method only for array, if string then use split("") for converting array
// for number array Assending
const numberArray_ascending = ['10', '1', '12', '5'];
const result1 = numberArray_ascending.sort((a, b) => a - b);
console.log(result1);

// for number array Dsending
const numberArray_dscending = ['10', '1', '12', '5'];
const result2 = numberArray_dscending.sort((a, b) => b - a);
console.log(result2);

// for string array Asending
const stringArray_ascending = ['Orrange', 'Coconut', 'Apple', 'Lemon'];
const result3 = stringArray_ascending.sort((a, b) => a.localeCompare(b));
console.log(result3);

// for string array Dsending
const stringArray_dscending = ['Orrange', 'Coconut', 'Apple', 'Lemon'];
const result4 = stringArray_dscending.sort((a, b) => b.localeCompare(a));
console.log(result4);

// for object
const fruits = [
	{ name: 'Coconut', price: 45 },
	{ name: 'Orrange', price: 9 },
	{ name: 'Apple', price: 100 },
	{ name: 'Lemon', price: 2 },
];
// for number
const object_result1 = fruits.sort((a, b) => a.price - b.price);
console.log(object_result1);
// for string
const object_result2 = fruits.sort((a, b) => a.name.localeCompare(b.name));
console.log(object_result2);
