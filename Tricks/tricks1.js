//🚀 1. Remove Duplicates from an Array

const numbers = [1, 2, 2, 3, 4, 4, 5];
const unique = [...new Set(numbers)];

console.log(unique); // [1, 2, 3, 4, 5]
//🧠 Set automatically removes duplicates.

//🚀 2. Short-circuit Object Property Assignment

const isLoggedIn = true;
const user = isLoggedIn && { name: "Lipon", id: 123 };

console.log(user); // { name: 'Lipon', id: 123 }
//🧠 Avoids assigning if false or null.

//🚀 3. Optional Chaining (?.) and Nullish Coalescing (??)

const data = { user: { name: "Lipon" } };
const username = data?.user?.name ?? "Guest";

console.log(username); // Lipon
//🧠 Prevents "Cannot read property" errors from deep objects.

//🚀 4. Convert Object to Query String
const params = { name: "Lipon", age: 30 };
const queryString = new URLSearchParams(params).toString();

console.log(queryString); // name=Lipon&age=30
//🧠 Super helpful for API URLs.

//🚀 5. Flatten Nested Arrays

const nested = [1, [2, [3, [4]]]];
const flat = nested.flat(Infinity);

console.log(flat); // [1, 2, 3, 4]
//🧠 flat() can fully flatten deeply nested arrays.

//🚀 6. Swap Variables Easily

let a = 1, b = 2;
[a, b] = [b, a];

console.log(a, b); // 2 1
//🧠 One-liner variable swap — clean and fast.

