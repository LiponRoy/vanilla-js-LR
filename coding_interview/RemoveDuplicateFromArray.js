const RemoveDuplicate = (mainArray) => {
    // new Set method can not support duplicate element, it remove all duplicate element
    // from array so we can use it for remove duplicate element 
    // then we need a new array that is why we use [] and ... sperid operator
    return [...new Set(mainArray)];
	
};

const mainArray = [5,10,10,4,4,10];

console.log(RemoveDuplicate(mainArray));
