



// [...Array(10).fill(1)].map((_,i)=>{
// console.log(i)})

// ইনস্টান্স কোনো array বানিয়ে কমন কিছু ধাপ ওতিক্রম করতে চাইলে ... 

 // new Array(10).fill(0).map(...)   এখানে ০-৯ মানে ১০ ইন্ডেক্স এর ফাকা এরে,এখন ফিল মেথড দিয়ে প্রতিটি ইন্ডেক্সে সেইম জিরো করে দেয়া হয়েছে এরপর ম্য়প চালানো হযেছে, 

//  new Array(10).fill(1).map((_, i) => {
//   console.log(i);
// });
//এখানে ০ থেকে ৯ ইন্ডেক্স প্রিন্ট করা হয়েছে , এখানে ১০ ধাপে কিছু করতে পারি, অথবা ০-৯ লাগবে এমন কিছু কাজ করতে পারি

// Version 2
// [...Array(10).fill(0)].map((_, i) => {
//   console.log(i);
// });
// এভাবেও ইউজ করা যায় তবে প্রথম টা রিকমান্ডেড , 

// use case

// 1. Generate a sequence of numbers
const numbers = new Array(5).fill(0).map((_, i) => i + 1);
console.log(numbers); // [1, 2, 3, 4, 5]

// 2. Create an array of random values
const randoms = new Array(5).fill(0).map(() => Math.floor(Math.random() * 100));
console.log(randoms); // e.g., [12, 87, 45, 23, 65]

//  7. Generate star rating (e.g. ★★★☆☆)
const rating = 5;
const stars = new Array(rating).fill('☆').map((_, i) => (i < rating ? '★' : '☆')).join('');
console.log(stars); // ★★★☆☆

// 8. Create alphabetical index
const alphabet = new Array(26).fill(0).map((_, i) =>
  String.fromCharCode(65 + i)
);
console.log(alphabet); // ['A', 'B', ..., 'Z']

