//Law=  Math.random() * (max - min) + min
const min = 1;
const max = 10;

// random number from min to max value
const aa = Math.random() * (max - min) + min;
console.log(aa);

// random number from min to max value with floor
const ab = Math.floor(Math.random() * (max - min) + min);
console.log(ab);
