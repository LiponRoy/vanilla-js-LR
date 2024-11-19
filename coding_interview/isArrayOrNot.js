const isArrayOrNot = (val) => {
	//return boolean
	return Array.isArray(val);
};

const arr = [];
const obj = {};

console.log(isArrayOrNot(obj));
