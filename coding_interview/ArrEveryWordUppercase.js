const ArrEveryWordUppercase = (str) => {
	const makeArray = str.split(' ');
	const result = [];

	for (let i of makeArray) {
		// word er prothom digit ta nilam charAt(0) then uppertcase korlam toUpperCase()
		//erpor oi digit bade baki gulo oitar sathe add korlam slice(1)
		//
		result.push(i.charAt(0).toUpperCase() + i.slice(1));
	}
	// then join the hole array and return
	return result.join(' ');
};

const str = 'kuddus vala acho ni';
console.log(ArrEveryWordUppercase(str));
// output: [ 'Kuddus', 'Vala', 'Acho', 'Ni' ]
