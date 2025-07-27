function add(a, b, c) {
  return a + b + c;
}

const nums = [10, 20, 30];
console.log(add(...nums)); // 60

//ব্যাখ্যা: function-এর multiple parameter-এ একসাথে array থেকে মান পাঠানো হয়েছে।

