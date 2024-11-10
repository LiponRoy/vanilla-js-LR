const str = 'Bangladeshi';

const result = str
	.split('')
	.sort((a, b) => a.localeCompare(b))
	.join('');
console.log(result);

// Sort() method only for array, if string then use split("") for converting array
