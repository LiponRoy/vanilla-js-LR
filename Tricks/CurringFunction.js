
// Currying function : 
// In JavaScript, currying is a technique in functional programming where a function, instead of taking all arguments at once, 
// takes the first argument and returns a new function that takes the next argument, and so on, until all arguments are received. 
// Once all arguments are provided, the original function logic is executed. 

// Example
// in normal function
// const sum=(a,b,c)=>{
// return a+b+c
// }

// console.log(sum(10,20,30));

// convert to curring function (how its work : not accept all arguments at once, but accept 
// one by one argument and every arguments return a nested function , then most inner return final calculation)

const sum = (a) => {
  return (b) => {
    return (c) => {
        return a+b+c
    };
  };
};

const result = sum(10)(20)(30);

console.log(result);